import { useRef, useEffect, type RefObject } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import type { WireframeConfig } from './SceneConfig'

interface GLTFModelProps {
  modelPath: string
  position: [number, number, number]
  rotation: [number, number, number]
  scale: number
  wireframe?: WireframeConfig
  floating?: boolean
  highlightColorRef?: RefObject<string | null>
  currentSectionRef?: RefObject<string>
  visibleInSection?: string
  onLoaded?: () => void
}

export function GLTFModel({
  modelPath,
  position,
  rotation,
  scale,
  wireframe,
  floating,
  highlightColorRef,
  currentSectionRef,
  visibleInSection,
  onLoaded,
}: GLTFModelProps) {
  const groupRef = useRef<THREE.Group>(null)
  const wireframeGroupRef = useRef<THREE.Group>(null)
  const meshGroupRef = useRef<THREE.Group>(null)
  const loadedRef = useRef(false)
  const baseColorRef = useRef(wireframe?.color ?? '#0a7acc')
  const visibilityProgress = useRef(0)
  const fadeOffset = 30

  const gltf = useLoader(GLTFLoader, modelPath, (loader) => {
    const dracoLoader = new DRACOLoader()
    dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.7/')
    loader.setDRACOLoader(dracoLoader)
  })

  useEffect(() => {
    if (!wireframeGroupRef.current || !meshGroupRef.current) return

    const wireframeGroup = wireframeGroupRef.current
    const meshGroup = meshGroupRef.current

    while (wireframeGroup.children.length > 0) {
      wireframeGroup.remove(wireframeGroup.children[0])
    }
    while (meshGroup.children.length > 0) {
      meshGroup.remove(meshGroup.children[0])
    }

    gltf.scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.updateWorldMatrix(true, false)

        if (wireframe) {
          const threshold = wireframe.overrides?.[child.name] ?? wireframe.threshold
          const edgesGeo = new THREE.EdgesGeometry(child.geometry, threshold)
          const edgesMat = new THREE.LineBasicMaterial({
            color: wireframe.color,
            transparent: true,
            opacity: wireframe.lineOpacity,
          })
          const edges = new THREE.LineSegments(edgesGeo, edgesMat)
          edges.applyMatrix4(child.matrixWorld)
          wireframeGroup.add(edges)

          const meshMat = new THREE.MeshStandardMaterial({
            color: '#000814',
            transparent: true,
            opacity: wireframe.meshOpacity,
            metalness: 0.8,
            roughness: 0.2,
            depthWrite: false,
            side: THREE.DoubleSide,
            polygonOffset: true,
            polygonOffsetFactor: 1,
            polygonOffsetUnits: 1,
          })
          const mesh = new THREE.Mesh(child.geometry.clone(), meshMat)
          mesh.applyMatrix4(child.matrixWorld)
          meshGroup.add(mesh)
        } else {
          const clone = child.clone()
          clone.applyMatrix4(child.matrixWorld)
          meshGroup.add(clone)
        }
      }
    })

    if (!loadedRef.current) {
      loadedRef.current = true
      onLoaded?.()
    }
  }, [gltf, wireframe, onLoaded])

  useFrame(({ clock }, delta) => {
    if (floating && groupRef.current) {
      const t = clock.getElapsedTime()
      groupRef.current.rotation.y = rotation[1] + Math.sin(t * 0.3) * 0.15
    }

    if (highlightColorRef && wireframeGroupRef.current) {
      const targetColor = highlightColorRef.current ?? baseColorRef.current
      wireframeGroupRef.current.traverse((child) => {
        if (child instanceof THREE.LineSegments) {
          const mat = child.material as THREE.LineBasicMaterial
          mat.color.set(targetColor)
        }
      })
    }

    if (visibleInSection && currentSectionRef && groupRef.current) {
      const isVisible = currentSectionRef.current === visibleInSection
      const target = isVisible ? 1 : 0
      const lerpFactor = 1 - Math.exp(-12 * delta)
      visibilityProgress.current += (target - visibilityProgress.current) * lerpFactor

      const yOffset = (1 - visibilityProgress.current) * fadeOffset
      groupRef.current.position.y = position[1] - yOffset

      const opacity = visibilityProgress.current
      wireframeGroupRef.current?.traverse((child) => {
        if (child instanceof THREE.LineSegments) {
          const mat = child.material as THREE.LineBasicMaterial
          mat.opacity = (wireframe?.lineOpacity ?? 0.6) * opacity
        }
      })
      meshGroupRef.current?.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          const mat = child.material as THREE.MeshStandardMaterial
          mat.opacity = (wireframe?.meshOpacity ?? 0.1) * opacity
        }
      })
    }
  })

  return (
    <group ref={groupRef} position={position} rotation={rotation} scale={scale}>
      <group ref={wireframeGroupRef} />
      <group ref={meshGroupRef} />
    </group>
  )
}
