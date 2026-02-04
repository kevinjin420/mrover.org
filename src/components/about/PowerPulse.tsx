import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface PowerPulseProps {
  origin: [number, number, number]
  count?: number
  radius?: number
  color?: string
}

const PULSE_SPEED = 0.8
const RAY_LENGTH = 15

export function PowerPulse({ origin, count = 12, radius = 25, color = '#f59e0b' }: PowerPulseProps) {
  const linesRef = useRef<THREE.LineSegments>(null)
  const timeRef = useRef(0)

  const { rays, geometry, material } = useMemo(() => {
    const rayData = Array.from({ length: count }, (_, i) => {
      const phi = Math.acos(2 * Math.random() - 1)
      const theta = Math.random() * Math.PI * 2
      const dir = new THREE.Vector3(
        Math.sin(phi) * Math.cos(theta),
        -(Math.abs(Math.sin(phi) * Math.sin(theta)) * 0.6 + 0.2),
        Math.sin(phi) * Math.cos(theta) * Math.sin(theta)
      ).normalize()
      return {
        dir,
        speed: 0.6 + Math.random() * 0.6,
        offset: Math.random(),
      }
    })

    const points: number[] = []
    for (let i = 0; i < count; i++) {
      points.push(0, 0, 0, 0, 0, 0)
    }

    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.Float32BufferAttribute(points, 3))

    const mat = new THREE.LineBasicMaterial({
      color,
      transparent: true,
      opacity: 0.8,
    })

    return { rays: rayData, geometry: geo, material: mat }
  }, [count, color])

  useFrame((_, delta) => {
    if (!linesRef.current || !geometry) return

    timeRef.current += delta

    const posAttr = geometry.attributes.position as THREE.BufferAttribute
    const posArray = posAttr.array as Float32Array
    const t = timeRef.current

    for (let i = 0; i < count; i++) {
      const ray = rays[i]
      const progress = ((t * ray.speed * PULSE_SPEED + ray.offset) % 1)
      const dist = progress * radius

      const fade = progress < 0.1 ? progress / 0.1 : progress > 0.7 ? (1 - progress) / 0.3 : 1

      if (fade < 0.05) {
        posArray[i * 6] = 0
        posArray[i * 6 + 1] = -10000
        posArray[i * 6 + 2] = 0
        posArray[i * 6 + 3] = 0
        posArray[i * 6 + 4] = -10000
        posArray[i * 6 + 5] = 0
      } else {
        const p1x = ray.dir.x * dist
        const p1y = ray.dir.y * dist
        const p1z = ray.dir.z * dist
        const p2x = ray.dir.x * (dist + RAY_LENGTH * fade)
        const p2y = ray.dir.y * (dist + RAY_LENGTH * fade)
        const p2z = ray.dir.z * (dist + RAY_LENGTH * fade)

        posArray[i * 6] = p1x
        posArray[i * 6 + 1] = p1y
        posArray[i * 6 + 2] = p1z
        posArray[i * 6 + 3] = p2x
        posArray[i * 6 + 4] = p2y
        posArray[i * 6 + 5] = p2z
      }
    }

    posAttr.needsUpdate = true
    material.opacity = 0.6 + Math.sin(t * 3) * 0.2
  })

  return (
    <group position={origin}>
      <lineSegments ref={linesRef} geometry={geometry} material={material} />
    </group>
  )
}
