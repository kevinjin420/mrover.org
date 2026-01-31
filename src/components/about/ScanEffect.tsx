import { useRef, useEffect, useMemo, type RefObject } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { Html } from '@react-three/drei'

interface ScanEffectProps {
  currentSectionRef: RefObject<string>
  position: [number, number, number]
  targetSize: [number, number, number]
  wireframeColorRef: RefObject<string | null>
}

export function ScanEffect({
  currentSectionRef,
  position,
  targetSize,
  wireframeColorRef,
}: ScanEffectProps) {
  const groupRef = useRef<THREE.Group>(null)
  const pointsRef = useRef<THREE.Points>(null)
  const boxRef = useRef<HTMLDivElement>(null)
  const labelRef = useRef<HTMLDivElement>(null)
  const scanProgress = useRef(0)

  const pointsGeometry = useMemo(() => {
    const count = 120
    const positions = new Float32Array(count * 3)
    const [w, h] = targetSize
    const length = h * 0.7
    const radius = w * 0.12

    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2
      const x = (Math.random() - 0.5) * length
      const r = radius * (0.6 + Math.random() * 0.4)
      positions[i * 3] = x
      positions[i * 3 + 1] = Math.sin(theta) * r
      positions[i * 3 + 2] = Math.cos(theta) * r
    }

    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    return geo
  }, [targetSize])

  useEffect(() => {
    if (boxRef.current) {
      boxRef.current.style.opacity = '0'
      boxRef.current.style.borderColor = 'rgba(0, 255, 0, 0)'
    }
    if (labelRef.current) {
      labelRef.current.style.opacity = '0'
    }
  }, [])

  useFrame((_, delta) => {
    if (!groupRef.current) return
    const isVisible = currentSectionRef.current === 'perception'
    groupRef.current.visible = isVisible || scanProgress.current > 0.01

    if (!isVisible) {
      scanProgress.current = Math.max(0, scanProgress.current - delta * 2)
    } else {
      scanProgress.current = Math.min(1, scanProgress.current + delta * 0.5)
    }

    const progress = scanProgress.current
    const detected = progress > 0.7
    const boxOpacity = detected ? Math.min((progress - 0.7) / 0.3, 1) : 0

    if (pointsRef.current) {
      const mat = pointsRef.current.material as THREE.PointsMaterial
      mat.opacity = progress * 0.8
      const positions = pointsRef.current.geometry.attributes.position.array as Float32Array
      const count = positions.length / 3
      const visibleCount = Math.floor(count * progress)
      pointsRef.current.geometry.setDrawRange(0, visibleCount)
    }

    if (boxRef.current) {
      boxRef.current.style.opacity = String(boxOpacity)
      boxRef.current.style.borderColor = `rgba(0, 255, 0, ${boxOpacity})`
    }
    if (labelRef.current) {
      labelRef.current.style.opacity = String(boxOpacity)
    }

    if (detected && wireframeColorRef.current !== '#00ff00') {
      ;(wireframeColorRef as { current: string | null }).current = '#00ff00'
    } else if (!detected && wireframeColorRef.current !== null) {
      ;(wireframeColorRef as { current: string | null }).current = null
    }
  })

  return (
    <group ref={groupRef} position={position}>
      <points ref={pointsRef} geometry={pointsGeometry}>
        <pointsMaterial
          color="#00ff00"
          size={2}
          transparent
          opacity={0}
          sizeAttenuation
          depthWrite={false}
        />
      </points>

      <Html center style={{ pointerEvents: 'none' }}>
        <div
          ref={boxRef}
          style={{
            width: '90px',
            height: '90px',
            border: '2px solid rgba(0, 255, 0, 0)',
            position: 'relative',
            transition: 'border-color 0.2s',
          }}
        >
          <div
            ref={labelRef}
            style={{
              position: 'absolute',
              top: '-22px',
              left: '50%',
              transform: 'translateX(-50%)',
              background: 'rgba(0, 0, 0, 0.8)',
              border: '1px solid #00ff00',
              padding: '2px 8px',
              fontFamily: 'monospace',
              fontSize: '11px',
              color: '#00ff00',
              whiteSpace: 'nowrap',
            }}
          >
            BOTTLE 98.2%
          </div>
        </div>
      </Html>
    </group>
  )
}
