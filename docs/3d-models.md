# 3D Models and Scene Configuration

## Processing Models

Scripts in `scripts/` handle model conversion and optimization.

### Full pipeline (recommended)

Strips textures/materials, optimizes geometry, and applies Draco compression:

```bash
./scripts/process-model.sh input.glb public/models/output.glb
```

Use `--keep-materials` to preserve textures and normals (for non-wireframe models):

```bash
./scripts/process-model.sh input.glb public/models/output.glb --keep-materials
```

### Individual scripts

| Script | Usage |
|--------|-------|
| `scripts/strip-model.mjs` | `node scripts/strip-model.mjs in.glb out.glb` -- strips textures/materials for wireframe |
| `scripts/draco-compress.sh` | `./scripts/draco-compress.sh file.glb` -- Draco compression only |
| `scripts/stl_to_glb.py` | `python scripts/stl_to_glb.py input.stl output.glb` -- STL to GLB conversion |
| `scripts/create_propeller.py` | `python scripts/create_propeller.py` -- generates the drone propeller model |

## Scene Configuration

All 3D scene config lives in `src/components/about/SceneConfig.ts`.

### Adding a GLTF model to a section

Add a `gltfModel` field to any section in `BRANCH_DEFINITIONS`:

```ts
{
  name: 'section-name',
  subteam: { name: 'Name', desc: 'Description.' },
  camera: { x: 0, y: 50, z: 200 },
  lookAt: { x: 0, y: 20, z: 0 },
  gltfModel: {
    modelPath: '/models/your-model.glb',
    position: [0, 40, 0],
    rotation: [0, 0, 0],
    scale: 1,
    wireframe: WIREFRAME_PRESETS.mechanical,
    floating: true,
  },
}
```

### Adding a URDF model

Use the `model` field instead of `gltfModel`:

```ts
model: {
  urdfPath: '/urdf/rover/rover.urdf',
  position: [0, -35, 0],
  rotation: [0, -Math.PI / 3, 0],
  wireframe: WIREFRAME_PRESETS.mechanical,
  wheelSpeed: 3,
}
```

### Wireframe presets

Defined in `WIREFRAME_PRESETS`. Each preset controls edge detection threshold and colors:

| Preset | Threshold | Color | Use case |
|--------|-----------|-------|----------|
| `mechanical` | 20 | Blue | Rover parts |
| `science` | 15 | Blue | Science payload |
| `dna` | 10 | Green | DNA helix |
| `battery` | 12 | Amber | Battery |
| `pcb` | 5 | Blue | Circuit board |
| `drone` | 20 | Blue | Drone |

### Visual effects

Effects are declared directly on the `gltfModel` config. No code changes needed to add effects to a model.

| Field | What it does | Example |
|-------|-------------|---------|
| `scanEffect` | Green scanning box over the model | `{ targetSize: [40, 25, 40] }` |
| `mirror` | Creates a mirrored copy | `{ axis: 'x' }` |
| `particles` | Floating particles around the model | `{ type: 'dna', count: 80 }` |
| `powerPulse` | Radiating energy rays | `{ count: 12, radius: 25, color: '#f59e0b' }` |
| `commSignal` | Animated signal between two points | `{ heightOffset: 100, target: { section: 'perception', yOffset: 150 } }` |
| `visibleInSection` | Only show model when scrolled to a section | `'perception'` |
| `showAxes` | Display XYZ axes helper | `true` |

### Section overlays

HTML overlays (teleop display, ESW terminal) are configured on the section itself:

```ts
{
  name: 'teleop',
  overlay: 'teleop',
  // ...
}
```

Valid values: `'teleop'`, `'esw'`.
