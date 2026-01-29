import struct
import sys
import numpy as np
from stl import mesh as stl_mesh
import json

input_stl = sys.argv[1]
output_glb = sys.argv[2]

print("Loading STL...")
m = stl_mesh.Mesh.from_file(input_stl)
print(f"Loaded {len(m.vectors)} triangles")

# Rotate -90 degrees around X to convert Z-up to Y-up
cos_a, sin_a = 0.0, -1.0
vertices = m.vectors.reshape(-1, 3).copy()
y = vertices[:, 1].copy()
z = vertices[:, 2].copy()
vertices[:, 1] = cos_a * y - sin_a * z
vertices[:, 2] = sin_a * y + cos_a * z

# Deduplicate vertices
print("Deduplicating vertices...")
unique_verts, inverse = np.unique(vertices, axis=0, return_inverse=True)
indices = inverse.astype(np.uint32)
print(f"Vertices: {len(vertices)} -> {len(unique_verts)} unique")

# Compute normals per face, then average per vertex
print("Computing normals...")
face_indices = indices.reshape(-1, 3)
v0 = unique_verts[face_indices[:, 0]]
v1 = unique_verts[face_indices[:, 1]]
v2 = unique_verts[face_indices[:, 2]]
face_normals = np.cross(v1 - v0, v2 - v0)
norms = np.linalg.norm(face_normals, axis=1, keepdims=True)
norms[norms == 0] = 1
face_normals = face_normals / norms

vertex_normals = np.zeros_like(unique_verts)
for i in range(3):
    np.add.at(vertex_normals, face_indices[:, i], face_normals)
norms = np.linalg.norm(vertex_normals, axis=1, keepdims=True)
norms[norms == 0] = 1
vertex_normals = vertex_normals / norms

# Build GLB
print("Building GLB...")
pos_data = unique_verts.astype(np.float32).tobytes()
norm_data = vertex_normals.astype(np.float32).tobytes()
idx_data = indices.astype(np.uint32).tobytes()

buf_data = pos_data + norm_data + idx_data

pos_min = unique_verts.min(axis=0).tolist()
pos_max = unique_verts.max(axis=0).tolist()

gltf = {
    "asset": {"version": "2.0", "generator": "stl-to-glb"},
    "scene": 0,
    "scenes": [{"nodes": [0]}],
    "nodes": [{"mesh": 0}],
    "meshes": [{"primitives": [{"attributes": {"POSITION": 0, "NORMAL": 1}, "indices": 2}]}],
    "accessors": [
        {"bufferView": 0, "componentType": 5126, "count": len(unique_verts), "type": "VEC3", "min": pos_min, "max": pos_max},
        {"bufferView": 1, "componentType": 5126, "count": len(unique_verts), "type": "VEC3"},
        {"bufferView": 2, "componentType": 5125, "count": len(indices), "type": "SCALAR"},
    ],
    "bufferViews": [
        {"buffer": 0, "byteOffset": 0, "byteLength": len(pos_data), "target": 34962},
        {"buffer": 0, "byteOffset": len(pos_data), "byteLength": len(norm_data), "target": 34962},
        {"buffer": 0, "byteOffset": len(pos_data) + len(norm_data), "byteLength": len(idx_data), "target": 34963},
    ],
    "buffers": [{"byteLength": len(buf_data)}],
}

json_str = json.dumps(gltf, separators=(",", ":"))
while len(json_str) % 4 != 0:
    json_str += " "
json_bytes = json_str.encode("utf-8")

bin_pad = (4 - len(buf_data) % 4) % 4
buf_data_padded = buf_data + b"\x00" * bin_pad

total_length = 12 + 8 + len(json_bytes) + 8 + len(buf_data_padded)

with open(output_glb, "wb") as f:
    f.write(struct.pack("<III", 0x46546C67, 2, total_length))
    f.write(struct.pack("<II", len(json_bytes), 0x4E4F534A))
    f.write(json_bytes)
    f.write(struct.pack("<II", len(buf_data_padded), 0x004E4942))
    f.write(buf_data_padded)

print(f"Written: {output_glb} ({total_length / 1024 / 1024:.1f} MB)")
