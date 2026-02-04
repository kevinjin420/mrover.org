import { useRef, useMemo, type RefObject } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { getScrollState } from './utils'

interface CommSignalProps {
  from: [number, number, number]
  to: [number, number, number]
  sectionIndex: number
  scrollRef: RefObject<number>
  windowHeightRef: RefObject<number>
}

const RAYS_PER_DIRECTION = 7
const LINE_LENGTH = 40
const TRAVEL_TIME = 1.2
const SCATTER_RADIUS = 8

export function CommSignal({ from, to, sectionIndex, scrollRef, windowHeightRef }: CommSignalProps) {
  const linesRef = useRef<THREE.LineSegments>(null)
  const timeRef = useRef(0)
  const wasActive = useRef(false)
  const mountTimeRef = useRef(0)

  const upRays = useRef(
    Array.from({ length: RAYS_PER_DIRECTION }, () => ({
      spawnTime: -Math.random() * TRAVEL_TIME,
      offset: new THREE.Vector3(
        (Math.random() - 0.5) * SCATTER_RADIUS * 2,
        0,
        (Math.random() - 0.5) * SCATTER_RADIUS * 2
      ),
    }))
  )

  const downRays = useRef(
    Array.from({ length: RAYS_PER_DIRECTION }, () => ({
      spawnTime: -Math.random() * TRAVEL_TIME,
      offset: new THREE.Vector3(
        (Math.random() - 0.5) * SCATTER_RADIUS * 2,
        0,
        (Math.random() - 0.5) * SCATTER_RADIUS * 2
      ),
    }))
  )

  const { geometry, material } = useMemo(() => {
    const points: number[] = []
    for (let i = 0; i < RAYS_PER_DIRECTION * 2; i++) {
      points.push(0, 0, 0, 0, 0, 0)
    }

    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.Float32BufferAttribute(points, 3))

    const mat = new THREE.LineBasicMaterial({
      color: '#00cfff',
      transparent: true,
      opacity: 0.9,
    })

    return { geometry: geo, material: mat }
  }, [])

  useFrame((_, delta) => {
    if (!linesRef.current || !geometry) return

    const posAttr = geometry.attributes.position as THREE.BufferAttribute
    const posArray = posAttr.array as Float32Array

    mountTimeRef.current += delta
    const scroll = scrollRef.current ?? 0
    const windowHeight = windowHeightRef.current ?? 800
    const { sectionIndex: currentSection } = getScrollState(scroll, windowHeight)
    const isActive = mountTimeRef.current < 1 || currentSection === sectionIndex

    if (!isActive) {
      wasActive.current = false
      for (let i = 0; i < RAYS_PER_DIRECTION * 2; i++) {
        posArray[i * 6] = 0
        posArray[i * 6 + 1] = -10000
        posArray[i * 6 + 2] = 0
        posArray[i * 6 + 3] = 0
        posArray[i * 6 + 4] = -10000
        posArray[i * 6 + 5] = 0
      }
      posAttr.needsUpdate = true
      return
    }

    if (!wasActive.current) {
      wasActive.current = true
      timeRef.current = 0
      for (const ray of upRays.current) {
        ray.spawnTime = -Math.random() * TRAVEL_TIME
      }
      for (const ray of downRays.current) {
        ray.spawnTime = -Math.random() * TRAVEL_TIME
      }
    }

    timeRef.current += delta
    const now = timeRef.current

    const towerPos = new THREE.Vector3(...from)
    const roverPos = new THREE.Vector3(...to)

    const totalDist = new THREE.Vector3().subVectors(towerPos, roverPos).length()
    const voidRadius = 40
    const voidStart = totalDist - voidRadius

    const toTower = new THREE.Vector3().subVectors(towerPos, roverPos).normalize()
    const toRover = new THREE.Vector3().subVectors(roverPos, towerPos).normalize()

    for (let i = 0; i < RAYS_PER_DIRECTION; i++) {
      const state = upRays.current[i]
      const elapsed = now - state.spawnTime
      const progress = elapsed / TRAVEL_TIME
      const dist = progress * voidStart

      if (progress > 1) {
        state.spawnTime = now + Math.random() * 0.3
        state.offset.set(
          (Math.random() - 0.5) * SCATTER_RADIUS * 2,
          0,
          (Math.random() - 0.5) * SCATTER_RADIUS * 2
        )
      }

      if (progress < 0 || progress > 1) {
        posArray[i * 6] = 0
        posArray[i * 6 + 1] = -10000
        posArray[i * 6 + 2] = 0
        posArray[i * 6 + 3] = 0
        posArray[i * 6 + 4] = -10000
        posArray[i * 6 + 5] = 0
      } else {
        const p1 = new THREE.Vector3().copy(roverPos).addScaledVector(toTower, dist).add(state.offset)
        const p2 = new THREE.Vector3().copy(roverPos).addScaledVector(toTower, dist + LINE_LENGTH).add(state.offset)
        posArray[i * 6] = p1.x
        posArray[i * 6 + 1] = p1.y
        posArray[i * 6 + 2] = p1.z
        posArray[i * 6 + 3] = p2.x
        posArray[i * 6 + 4] = p2.y
        posArray[i * 6 + 5] = p2.z
      }
    }

    for (let i = 0; i < RAYS_PER_DIRECTION; i++) {
      const state = downRays.current[i]
      const elapsed = now - state.spawnTime
      const progress = elapsed / TRAVEL_TIME
      const dist = progress * voidStart
      const idx = (RAYS_PER_DIRECTION + i) * 6

      if (progress > 1) {
        state.spawnTime = now + Math.random() * 0.3
        state.offset.set(
          (Math.random() - 0.5) * SCATTER_RADIUS * 2,
          0,
          (Math.random() - 0.5) * SCATTER_RADIUS * 2
        )
      }

      if (progress < 0 || progress > 1) {
        posArray[idx] = 0
        posArray[idx + 1] = -10000
        posArray[idx + 2] = 0
        posArray[idx + 3] = 0
        posArray[idx + 4] = -10000
        posArray[idx + 5] = 0
      } else {
        const p1 = new THREE.Vector3().copy(towerPos).addScaledVector(toRover, dist).add(state.offset)
        const p2 = new THREE.Vector3().copy(towerPos).addScaledVector(toRover, dist + LINE_LENGTH).add(state.offset)
        posArray[idx] = p1.x
        posArray[idx + 1] = p1.y
        posArray[idx + 2] = p1.z
        posArray[idx + 3] = p2.x
        posArray[idx + 4] = p2.y
        posArray[idx + 5] = p2.z
      }
    }

    posAttr.needsUpdate = true
  })

  return <lineSegments ref={linesRef} geometry={geometry} material={material} />
}
