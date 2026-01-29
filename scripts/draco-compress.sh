#!/usr/bin/env bash
set -euo pipefail

if [ $# -eq 0 ]; then
  echo "Usage: $0 <file1.glb> [file2.gltf ...]"
  exit 1
fi

for file in "$@"; do
  before=$(wc -c < "$file")
  npx gltf-transform draco "$file" "$file" \
    --quantize-position 14 \
    --quantize-normal 10 \
    --quantize-texcoord 12 \
    --quantize-color 8
  after=$(wc -c < "$file")
  ratio=$(awk "BEGIN { printf \"%.1f\", (1 - $after/$before) * 100 }")
  echo "$file: ${before}B -> ${after}B (${ratio}% reduction)"
done
