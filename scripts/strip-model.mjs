#!/usr/bin/env node
// Strips textures, materials, and non-position vertex attributes from a GLB/GLTF file.
// Outputs a geometry-only model suitable for wireframe rendering.
//
// Usage: node scripts/strip-model.mjs <input.glb> <output.glb>
//
// Requires: @gltf-transform/core, @gltf-transform/extensions (devDependencies)

import { NodeIO } from '@gltf-transform/core'
import { ALL_EXTENSIONS } from '@gltf-transform/extensions'

const [input, output] = process.argv.slice(2)

if (!input || !output) {
  console.error('Usage: node scripts/strip-model.mjs <input.glb> <output.glb>')
  process.exit(1)
}

const io = new NodeIO().registerExtensions(ALL_EXTENSIONS)
const doc = await io.read(input)
const root = doc.getRoot()

for (const tex of root.listTextures()) tex.dispose()
for (const mat of root.listMaterials()) mat.dispose()

for (const mesh of root.listMeshes()) {
  for (const prim of mesh.listPrimitives()) {
    for (const sem of prim.listSemantics()) {
      if (sem !== 'POSITION') {
        prim.setAttribute(sem, null)
      }
    }
  }
}

await io.write(output, doc)

const { size } = await import('node:fs').then((fs) => fs.statSync(output))
console.log(`Stripped: ${output} (${(size / 1024).toFixed(1)} KB)`)
