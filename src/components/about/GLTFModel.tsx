import { useRef, useEffect } from 'react'
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
  onLoaded?: () => void
}

export function GLTFModel({
  modelPath,
  position,
  rotation,
  scale,
  wireframe,
  floating,
  onLoaded,
}: GLTFModelProps) {
  const groupRef = useRef<THREE.Group>(null)
  const wireframeGroupRef = useRef<THREE.Group>(null)
  const meshGroupRef = useRef<THREE.Group>(null)
  const loadedRef = useRef(false)

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

          const meshMat = new THREE.MeshBasicMaterial({
            color: wireframe.color,
            transparent: true,
            opacity: wireframe.meshOpacity,
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

  useFrame(({ clock }) => {
    if (floating && groupRef.current) {
      const t = clock.getElapsedTime()
      groupRef.current.rotation.y = rotation[1] + Math.sin(t * 0.3) * 0.15
    }
  })

  return (
    <group ref={groupRef} position={position} rotation={rotation} scale={scale}>
      <group ref={wireframeGroupRef} />
      <group ref={meshGroupRef} />
    </group>
  )
}
