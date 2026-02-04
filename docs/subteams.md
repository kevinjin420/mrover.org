# Subteams (About Page)

Subteams are configured in `src/components/about/SceneConfig.ts` inside the `BRANCH_DEFINITIONS` array.

Each branch (Mechanical, Science, Electrical, Software) contains sections, and each section represents a subteam.

## Adding a Subteam

Add a new entry to the `sections` array of the appropriate branch:

```ts
{
  name: 'unique-id',
  subteam: {
    name: 'Display Name',
    desc: 'Description shown on the about page.',
  },
  camera: { x: 0, y: 100, z: 300 },
  lookAt: { x: 0, y: 20, z: 0 },
}
```

- `name` -- URL-safe identifier, must be unique across all branches
- `camera` -- 3D camera position when this section is in view
- `lookAt` -- where the camera points

## Editing a Subteam

Find the entry by its `name` field and update `subteam.name` or `subteam.desc`.

## Branch Colors

| Branch     | color     | accent    |
|------------|-----------|-----------|
| Mechanical | `#00274C` | `#FFCB05` |
| Science    | `#4CAF50` | `#C8E6C9` |
| Electrical | `#9C27B0` | `#E1BEE7` |
| Software   | `#2196F3` | `#BBDEFB` |

## 3D Models and Effects

Sections can optionally include URDF models, GLTF models, satellites, and visual effects. See [3d-models.md](3d-models.md) for details on configuring these.
