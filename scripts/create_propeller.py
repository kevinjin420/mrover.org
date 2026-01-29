import struct
import numpy as np
import json

output_glb = "public/models/drone_propeller.glb"

# Simple 2-blade propeller: two elongated boxes
blade_length = 8
blade_width = 1.5
blade_height = 0.3
hub_radius = 1.5

vertices = []
indices = []

def add_box(cx, cy, cz, sx, sy, sz, idx_offset):
    hx, hy, hz = sx/2, sy/2, sz/2
    v = [
        [cx-hx, cy-hy, cz-hz], [cx+hx, cy-hy, cz-hz],
        [cx+hx, cy+hy, cz-hz], [cx-hx, cy+hy, cz-hz],
        [cx-hx, cy-hy, cz+hz], [cx+hx, cy-hy, cz+hz],
        [cx+hx, cy+hy, cz+hz], [cx-hx, cy+hy, cz+hz],
    ]
    box_indices = [
        0,1,2, 0,2,3,  # bottom
        4,6,5, 4,7,6,  # top
        0,4,5, 0,5,1,  # front
        2,6,7, 2,7,3,  # back
        0,3,7, 0,7,4,  # left
        1,5,6, 1,6,2,  # right
    ]
    return v, [i + idx_offset for i in box_indices]

# Blade 1 (along X)
v1, i1 = add_box(blade_length/2 + hub_radius/2, 0, 0, blade_length, blade_height, blade_width, 0)
# Blade 2 (opposite)
v2, i2 = add_box(-blade_length/2 - hub_radius/2, 0, 0, blade_length, blade_height, blade_width, 8)
# Hub (small box at center)
v3, i3 = add_box(0, 0, 0, hub_radius, blade_height*2, hub_radius, 16)

vertices = np.array(v1 + v2 + v3, dtype=np.float32)
indices = np.array(i1 + i2 + i3, dtype=np.uint32)

# Compute normals
face_indices = indices.reshape(-1, 3)
v0 = vertices[face_indices[:, 0]]
v1 = vertices[face_indices[:, 1]]
v2 = vertices[face_indices[:, 2]]
face_normals = np.cross(v1 - v0, v2 - v0)
norms = np.linalg.norm(face_normals, axis=1, keepdims=True)
norms[norms == 0] = 1
face_normals = face_normals / norms

vertex_normals = np.zeros_like(vertices)
for i in range(3):
    np.add.at(vertex_normals, face_indices[:, i], face_normals)
norms = np.linalg.norm(vertex_normals, axis=1, keepdims=True)
norms[norms == 0] = 1
vertex_normals = (vertex_normals / norms).astype(np.float32)

# Build GLB
pos_data = vertices.tobytes()
norm_data = vertex_normals.tobytes()
idx_data = indices.tobytes()
buf_data = pos_data + norm_data + idx_data

pos_min = vertices.min(axis=0).tolist()
pos_max = vertices.max(axis=0).tolist()

gltf = {
    "asset": {"version": "2.0", "generator": "propeller-gen"},
    "scene": 0,
    "scenes": [{"nodes": [0]}],
    "nodes": [{"mesh": 0}],
    "meshes": [{"primitives": [{"attributes": {"POSITION": 0, "NORMAL": 1}, "indices": 2}]}],
    "accessors": [
        {"bufferView": 0, "componentType": 5126, "count": len(vertices), "type": "VEC3", "min": pos_min, "max": pos_max},
        {"bufferView": 1, "componentType": 5126, "count": len(vertices), "type": "VEC3"},
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

print(f"Written: {output_glb} ({total_length} bytes)")
