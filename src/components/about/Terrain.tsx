import { useRef, useMemo, type RefObject } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface TerrainProps {
  position: [number, number, number]
  radius?: number
  gridSize?: number
  scrollSpeed?: number
  currentSectionRef?: RefObject<string>
  color?: string
}

export function Terrain({
  position,
  radius = 150,
  gridSize = 20,
  scrollSpeed = 60,
  currentSectionRef,
  color = '#0a7acc',
}: TerrainProps) {
  const linesRef = useRef<THREE.LineSegments>(null)
  const scrollOffset = useRef(0)
  const currentSpeed = useRef(0)

  const { geometry, material } = useMemo(() => {
    const points: number[] = []
    const alphas: number[] = []
    const step = gridSize
    const extent = radius * 1.2

    for (let x = -extent; x <= extent; x += step) {
      for (let z = -extent; z <= extent; z += step) {
        const dist = Math.sqrt(x * x + z * z)
        const alpha = Math.max(0, 1 - dist / radius)

        const nextZ = z + step
        const nextDist = Math.sqrt(x * x + nextZ * nextZ)
        const nextAlpha = Math.max(0, 1 - nextDist / radius)
        points.push(x, 0, z, x, 0, nextZ)
        alphas.push(alpha, nextAlpha)

        const nextX = x + step
        const nextDistX = Math.sqrt(nextX * nextX + z * z)
        const nextAlphaX = Math.max(0, 1 - nextDistX / radius)
        points.push(x, 0, z, nextX, 0, z)
        alphas.push(alpha, nextAlphaX)
      }
    }

    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.Float32BufferAttribute(points, 3))
    geo.setAttribute('alpha', new THREE.Float32BufferAttribute(alphas, 1))

    const mat = new THREE.ShaderMaterial({
      transparent: true,
      uniforms: {
        uColor: { value: new THREE.Color(color) },
        uScrollZ: { value: 0 },
        uRadius: { value: radius },
      },
      vertexShader: `
        attribute float alpha;
        varying float vAlpha;
        varying vec3 vWorldPos;
        uniform float uScrollZ;
        void main() {
          vec3 pos = position;
          pos.z = mod(pos.z + uScrollZ + ${extent.toFixed(1)}, ${(extent * 2).toFixed(1)}) - ${extent.toFixed(1)};
          vWorldPos = pos;
          float dist = length(pos.xz);
          vAlpha = max(0.0, 1.0 - dist / ${radius.toFixed(1)});
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 uColor;
        varying float vAlpha;
        void main() {
          if (vAlpha <= 0.0) discard;
          gl_FragColor = vec4(uColor, vAlpha * 0.6);
        }
      `,
    })

    return { geometry: geo, material: mat }
  }, [radius, gridSize, color])

  useFrame((_, delta) => {
    if (linesRef.current) {
      const isStatic = currentSectionRef?.current === 'perception'
      const targetSpeed = isStatic ? 0 : scrollSpeed
      const lerpFactor = 1 - Math.exp(-3 * delta)
      currentSpeed.current += (targetSpeed - currentSpeed.current) * lerpFactor
      scrollOffset.current += delta * currentSpeed.current
      ;(material as THREE.ShaderMaterial).uniforms.uScrollZ.value = scrollOffset.current
    }
  })

  return (
    <group position={[position[0], position[1], position[2]]}>
      <lineSegments ref={linesRef} geometry={geometry} material={material} />
    </group>
  )
}
