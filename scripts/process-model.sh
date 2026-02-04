#!/usr/bin/env bash
set -euo pipefail

# Full model processing pipeline for wireframe-rendered 3D models.
# Strips textures/materials, optimizes geometry, and applies Draco compression.
#
# Usage:
#   ./scripts/process-model.sh <input.glb> <output.glb>
#   ./scripts/process-model.sh <input.glb> <output.glb> --keep-materials
#
# Options:
#   --keep-materials  Skip the strip step (keep textures, materials, normals)
#
# Pipeline: strip -> weld -> join -> simplify -> flatten -> dedup -> prune -> draco
#
# Requires: @gltf-transform/cli, @gltf-transform/core, draco3dgltf (devDependencies)

if [ $# -lt 2 ]; then
  echo "Usage: $0 <input.glb> <output.glb> [--keep-materials]"
  echo ""
  echo "Processes a GLB/GLTF model for wireframe rendering:"
  echo "  1. Strips textures, materials, and non-position attributes"
  echo "  2. Welds duplicate vertices"
  echo "  3. Joins meshes"
  echo "  4. Simplifies geometry"
  echo "  5. Flattens node hierarchy"
  echo "  6. Deduplicates accessors"
  echo "  7. Prunes unused resources"
  echo "  8. Applies Draco compression with quantization"
  echo ""
  echo "Options:"
  echo "  --keep-materials  Skip step 1 (preserve textures/materials/normals)"
  exit 1
fi

INPUT="$1"
OUTPUT="$2"
KEEP_MATERIALS=false

if [ "${3:-}" = "--keep-materials" ]; then
  KEEP_MATERIALS=true
fi

if [ ! -f "$INPUT" ]; then
  echo "Error: Input file not found: $INPUT"
  exit 1
fi

BEFORE=$(wc -c < "$INPUT")
echo "Input: $INPUT ($(echo "$BEFORE" | awk '{printf "%.1f KB", $1/1024}'))"

TMP=$(mktemp /tmp/model-XXXXXX.glb)
trap 'rm -f "$TMP"' EXIT

cp "$INPUT" "$TMP"

if [ "$KEEP_MATERIALS" = false ]; then
  echo "[1/8] Stripping textures, materials, and non-position attributes..."
  node scripts/strip-model.mjs "$TMP" "$TMP"
else
  echo "[1/8] Skipping strip (--keep-materials)"
fi

echo "[2/8] Welding vertices..."
npx gltf-transform weld "$TMP" "$TMP"

echo "[3/8] Joining meshes..."
npx gltf-transform join "$TMP" "$TMP"

echo "[4/8] Simplifying geometry..."
npx gltf-transform simplify "$TMP" "$TMP" --ratio 0.5 --error 0.01

echo "[5/8] Flattening hierarchy..."
npx gltf-transform flatten "$TMP" "$TMP"

echo "[6/8] Deduplicating..."
npx gltf-transform dedup "$TMP" "$TMP"

echo "[7/8] Pruning unused resources..."
npx gltf-transform prune "$TMP" "$TMP"

echo "[8/8] Applying Draco compression..."
npx gltf-transform draco "$TMP" "$OUTPUT" \
  --quantize-position 14 \
  --quantize-normal 10 \
  --quantize-texcoord 12 \
  --quantize-color 8

AFTER=$(wc -c < "$OUTPUT")
RATIO=$(awk "BEGIN { printf \"%.1f\", (1 - $AFTER/$BEFORE) * 100 }")
echo ""
echo "Output: $OUTPUT ($(echo "$AFTER" | awk '{printf "%.1f KB", $1/1024}'))"
echo "Reduction: ${RATIO}%"
