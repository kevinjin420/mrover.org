import { useRef, useMemo, type RefObject } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface DNAParticlesProps {
  position: [number, number, number]
  count?: number
  colorRef?: RefObject<string | null>
}

export function DNAParticles({ position, count = 80, colorRef }: DNAParticlesProps) {
  const particlesRef = useRef<THREE.Points>(null)
  const smokeRef = useRef<THREE.Points>(null)

  const particleData = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const velocities = new Float32Array(count * 3)
    const sizes = new Float32Array(count)
    const opacities = new Float32Array(count)

    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2
      const radius = 3 + Math.random() * 6
      positions[i * 3] = Math.cos(theta) * radius
      positions[i * 3 + 1] = (Math.random() - 0.5) * 15
      positions[i * 3 + 2] = Math.sin(theta) * radius

      velocities[i * 3] = (Math.random() - 0.5) * 0.01
      velocities[i * 3 + 1] = Math.random() * 0.015 + 0.005
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.01

      sizes[i] = Math.random() * 1.5 + 0.5
      opacities[i] = Math.random()
    }

    return { positions, velocities, sizes, opacities }
  }, [count])

  const smokeData = useMemo(() => {
    const smokeCount = 15
    const positions = new Float32Array(smokeCount * 3)
    const sizes = new Float32Array(smokeCount)

    for (let i = 0; i < smokeCount; i++) {
      const theta = Math.random() * Math.PI * 2
      const radius = 2 + Math.random() * 5
      positions[i * 3] = Math.cos(theta) * radius
      positions[i * 3 + 1] = (Math.random() - 0.5) * 12
      positions[i * 3 + 2] = Math.sin(theta) * radius
      sizes[i] = Math.random() * 3 + 2
    }

    return { positions, sizes, count: smokeCount }
  }, [])

  useFrame(({ clock }) => {
    if (!particlesRef.current) return

    const positions = particlesRef.current.geometry.attributes.position.array as Float32Array
    const t = clock.getElapsedTime()

    for (let i = 0; i < count; i++) {
      positions[i * 3] += particleData.velocities[i * 3]
      positions[i * 3 + 1] += particleData.velocities[i * 3 + 1]
      positions[i * 3 + 2] += particleData.velocities[i * 3 + 2]

      if (positions[i * 3 + 1] > 10) {
        positions[i * 3 + 1] = -8
        const theta = Math.random() * Math.PI * 2
        const radius = 3 + Math.random() * 6
        positions[i * 3] = Math.cos(theta) * radius
        positions[i * 3 + 2] = Math.sin(theta) * radius
      }

      const swirl = Math.sin(t * 0.5 + i * 0.1) * 0.03
      positions[i * 3] += swirl
      positions[i * 3 + 2] += Math.cos(t * 0.5 + i * 0.1) * 0.03
    }

    particlesRef.current.geometry.attributes.position.needsUpdate = true

    if (colorRef?.current) {
      const particleMat = particlesRef.current.material as THREE.PointsMaterial
      particleMat.color.set(colorRef.current)

      if (smokeRef.current) {
        const smokeMat = smokeRef.current.material as THREE.PointsMaterial
        const color = new THREE.Color(colorRef.current)
        color.multiplyScalar(0.5)
        smokeMat.color.copy(color)
      }
    }

    if (smokeRef.current) {
      const smokePositions = smokeRef.current.geometry.attributes.position.array as Float32Array
      for (let i = 0; i < smokeData.count; i++) {
        smokePositions[i * 3 + 1] += 0.01
        if (smokePositions[i * 3 + 1] > 8) {
          smokePositions[i * 3 + 1] = -6
        }
        smokePositions[i * 3] += Math.sin(t + i) * 0.01
        smokePositions[i * 3 + 2] += Math.cos(t + i) * 0.01
      }
      smokeRef.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <group position={[position[0], position[1] - 10, position[2]]}>
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={count}
            array={particleData.positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-size"
            count={count}
            array={particleData.sizes}
            itemSize={1}
          />
        </bufferGeometry>
        <pointsMaterial
          size={2}
          color="#0a7acc"
          transparent
          opacity={0.6}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>

      <points ref={smokeRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={smokeData.count}
            array={smokeData.positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={12}
          color="#053d66"
          transparent
          opacity={0.15}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>
    </group>
  )
}
