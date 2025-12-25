import { Canvas, useThree, useFrame } from '@react-three/fiber'
import { useGLTF, OrbitControls, Stars, useProgress, Environment } from '@react-three/drei'
import { EffectComposer, Vignette, Bloom } from '@react-three/postprocessing'
import { useScroll } from '../../hooks/use-scroll'
import { useStore } from '../../lib/store'
import { useRef, Suspense, useCallback, useEffect, useState } from 'react'
import * as THREE from 'three'
import URDFLoader from 'urdf-loader'
import GUI from 'lil-gui'
import { lerp } from '../../lib/maths'

let urdfLoaded = false

interface SectionTarget {
  name: string
  camera: { x: number; y: number; z: number }
  lookAt: { x: number; y: number; z: number }
  roverRotation: number
  joints?: Record<string, number>
}

const SECTION_TARGETS: SectionTarget[] = [
  // The Mission - opening hero shot
  { name: 'mission', camera: { x: 0, y: 80, z: 350 }, lookAt: { x: 0, y: 20, z: 0 }, roverRotation: 0 },
  // Mechanical - Robotic Arm
  { name: 'robotic-arm', camera: { x: 150, y: 80, z: 200 }, lookAt: { x: 50, y: 40, z: 0 }, roverRotation: -0.5, joints: { arm_a_to_arm_b: -0.4, arm_b_to_arm_c: 1.2, arm_c_to_arm_d: -0.8 } },
  // Mechanical - Mobility
  { name: 'mobility', camera: { x: -100, y: 30, z: 250 }, lookAt: { x: 0, y: -20, z: 0 }, roverRotation: 0.3 },
  // Mechanical - Chassis
  { name: 'chassis', camera: { x: 0, y: 150, z: 300 }, lookAt: { x: 0, y: 0, z: 0 }, roverRotation: 0 },
  // Science-Mechanical - SPI
  { name: 'spi', camera: { x: 80, y: 60, z: 180 }, lookAt: { x: 20, y: 20, z: 0 }, roverRotation: -0.8 },
  // Science-Mechanical - SPA
  { name: 'spa', camera: { x: 100, y: 40, z: 200 }, lookAt: { x: 30, y: 10, z: 0 }, roverRotation: -0.6 },
  // Science - Astrobiology
  { name: 'astrobiology', camera: { x: 60, y: 80, z: 220 }, lookAt: { x: 0, y: 30, z: 0 }, roverRotation: -0.4 },
  // Software - Autonomy
  { name: 'autonomy', camera: { x: 0, y: 120, z: 350 }, lookAt: { x: 0, y: 0, z: 0 }, roverRotation: 0 },
  // Software - ESW
  { name: 'esw', camera: { x: -80, y: 60, z: 200 }, lookAt: { x: 0, y: 20, z: 0 }, roverRotation: 0.5 },
  // Software - Teleop
  { name: 'teleop', camera: { x: 50, y: 100, z: 280 }, lookAt: { x: 0, y: 20, z: 0 }, roverRotation: -0.2 },
  // Software - Drone
  { name: 'drone', camera: { x: 0, y: 180, z: 400 }, lookAt: { x: 0, y: 50, z: 0 }, roverRotation: 0 },
  // Electrical - Power
  { name: 'power', camera: { x: -60, y: 80, z: 220 }, lookAt: { x: 0, y: 30, z: 0 }, roverRotation: 0.6 },
  // Electrical - EHW
  { name: 'ehw', camera: { x: 100, y: 50, z: 180 }, lookAt: { x: 20, y: 20, z: 0 }, roverRotation: -0.7 },
  // Electrical - Comms
  { name: 'comms', camera: { x: 0, y: 100, z: 300 }, lookAt: { x: 0, y: 40, z: 0 }, roverRotation: 0 },
]

const TOTAL_SECTIONS = SECTION_TARGETS.length

const debugConfig = {
  orbitControls: false,
  currentSection: 0,
  landscape: {
    x: -770,
    y: -60,
    z: 300,
    rotationY: -0.87,
    scale: 125,
  },
  rover: {
    scale: 1,
    rotationY: -Math.PI/3,
  },
  joints: {} as Record<string, number>,
}

let robotRef: any = null
let guiJointsFolder: GUI | null = null

function CameraController({ orbitEnabled }: { orbitEnabled: boolean }) {
  const { camera } = useThree()
  const scrollRef = useRef(0)
  const headerHeight = useStore((state) => state.headerHeight)
  const [windowHeight, setWindowHeight] = useState(0)
  const lookAtTarget = useRef(new THREE.Vector3())

  useEffect(() => {
    const updateSize = () => setWindowHeight(window.innerHeight)
    updateSize()
    window.addEventListener('resize', updateSize)
    return () => window.removeEventListener('resize', updateSize)
  }, [])

  const scrollCallback = useCallback(({ scroll }: { scroll: number }) => {
    scrollRef.current = scroll
  }, [])

  useScroll(scrollCallback)

  useFrame(() => {
    if (orbitEnabled || !windowHeight) return

    const scroll = scrollRef.current
    const totalHeight = windowHeight * TOTAL_SECTIONS
    const progress = Math.max(0, (scroll - headerHeight) / (totalHeight - windowHeight))

    const sectionFloat = progress * (TOTAL_SECTIONS - 1)
    const sectionIndex = Math.floor(sectionFloat)
    const sectionProgress = sectionFloat - sectionIndex

    const currentTarget = SECTION_TARGETS[Math.min(sectionIndex, TOTAL_SECTIONS - 1)]
    const nextTarget = SECTION_TARGETS[Math.min(sectionIndex + 1, TOTAL_SECTIONS - 1)]

    debugConfig.currentSection = sectionIndex

    const camX = lerp(currentTarget.camera.x, nextTarget.camera.x, sectionProgress)
    const camY = lerp(currentTarget.camera.y, nextTarget.camera.y, sectionProgress)
    const camZ = lerp(currentTarget.camera.z, nextTarget.camera.z, sectionProgress)

    camera.position.set(camX, camY, camZ)

    lookAtTarget.current.set(
      lerp(currentTarget.lookAt.x, nextTarget.lookAt.x, sectionProgress),
      lerp(currentTarget.lookAt.y, nextTarget.lookAt.y, sectionProgress),
      lerp(currentTarget.lookAt.z, nextTarget.lookAt.z, sectionProgress)
    )
    camera.lookAt(lookAtTarget.current)
  })

  return null
}

function Rover({ onLoaded }: { onLoaded?: () => void }) {
  const groupRef = useRef<THREE.Group>(null)
  const scrollRef = useRef(0)
  const headerHeight = useStore((state) => state.headerHeight)
  const [windowHeight, setWindowHeight] = useState(0)
  const [robot, setRobot] = useState<THREE.Object3D | null>(null)

  useEffect(() => {
    const updateSize = () => setWindowHeight(window.innerHeight)
    updateSize()
    window.addEventListener('resize', updateSize)
    return () => window.removeEventListener('resize', updateSize)
  }, [])

  useEffect(() => {
    const loader = new URDFLoader()
    loader.packages = { mrover: '/urdf' }
    loader.load('/urdf/rover/rover.urdf', (loadedRobot) => {
      loadedRobot.rotation.x = -Math.PI / 2
      loadedRobot.traverse((child: THREE.Object3D) => {
        if (child instanceof THREE.Mesh) {
          child.castShadow = true
          child.receiveShadow = true
          if (child.material instanceof THREE.MeshStandardMaterial) {
            child.material.roughness = Math.min(child.material.roughness, 0.7)
          }
        }
      })
      robotRef = loadedRobot

      const robot = loadedRobot as any
      if (guiJointsFolder && robot.joints) {
        Object.entries(robot.joints).forEach(([name, joint]: [string, any]) => {
          if (joint.jointType === 'revolute' || joint.jointType === 'continuous' || joint.jointType === 'prismatic') {
            const min = joint.limit?.lower ?? -Math.PI
            const max = joint.limit?.upper ?? Math.PI
            const initial = Array.isArray(joint.jointValue) ? joint.jointValue[0] : (joint.jointValue ?? 0)
            debugConfig.joints[name] = initial
            guiJointsFolder!.add(debugConfig.joints, name, min, max).onChange((v: number) => {
              joint.setJointValue(v)
            })
          }
        })
      }

      setRobot(loadedRobot)
      urdfLoaded = true
      onLoaded?.()
    })
  }, [])

  const scrollCallback = useCallback(({ scroll }: { scroll: number }) => {
    scrollRef.current = scroll
  }, [])

  useScroll(scrollCallback)

  useFrame(() => {
    if (!groupRef.current || !windowHeight || !robotRef) return

    const scroll = scrollRef.current
    const totalHeight = windowHeight * TOTAL_SECTIONS
    const progress = Math.max(0, (scroll - headerHeight) / (totalHeight - windowHeight))

    const sectionFloat = progress * (TOTAL_SECTIONS - 1)
    const sectionIndex = Math.floor(sectionFloat)
    const sectionProgress = sectionFloat - sectionIndex

    const currentTarget = SECTION_TARGETS[Math.min(sectionIndex, TOTAL_SECTIONS - 1)]
    const nextTarget = SECTION_TARGETS[Math.min(sectionIndex + 1, TOTAL_SECTIONS - 1)]

    groupRef.current.rotation.y = debugConfig.rover.rotationY
    groupRef.current.scale.setScalar(debugConfig.rover.scale)

    // Animate joints if defined
    if (robotRef.joints) {
      const currentJoints = currentTarget.joints || {}
      const nextJoints = nextTarget.joints || {}
      const allJointNames = new Set([...Object.keys(currentJoints), ...Object.keys(nextJoints)])

      allJointNames.forEach((jointName) => {
        const joint = robotRef.joints[jointName]
        if (joint) {
          const currentVal = currentJoints[jointName] ?? 0
          const nextVal = nextJoints[jointName] ?? 0
          const val = lerp(currentVal, nextVal, sectionProgress)
          joint.setJointValue(val)
        }
      })
    }
  })

  if (!robot) return null

  return (
    <group ref={groupRef}>
      <primitive object={robot} />
    </group>
  )
}

function MarsLandscape() {
  const { scene } = useGLTF('/models/mars_landscape_m.glb')
  const groupRef = useRef<THREE.Group>(null)

  useEffect(() => {
    scene.traverse((child: THREE.Object3D) => {
      if (child instanceof THREE.Mesh) {
        child.receiveShadow = true
        child.castShadow = true
        if (child.material instanceof THREE.MeshStandardMaterial) {
          child.material.roughness = 0.85
          child.material.metalness = 0.05
        }
      }
    })
  }, [scene])

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.position.set(
        debugConfig.landscape.x,
        debugConfig.landscape.y,
        debugConfig.landscape.z
      )
      groupRef.current.rotation.y = debugConfig.landscape.rotationY
      groupRef.current.scale.setScalar(debugConfig.landscape.scale)
    }
  })

  return (
    <group ref={groupRef}>
      <primitive object={scene} />
    </group>
  )
}

function DebugControls({ enabled }: { enabled: boolean }) {
  if (!enabled) return null
  return <OrbitControls makeDefault />
}

function Atmosphere() {
  const { scene } = useThree()

  useEffect(() => {
    scene.background = new THREE.Color(0x0a0808)
    scene.fog = new THREE.FogExp2(0x1a1410, 0.00025)
    return () => {
      scene.background = null
      scene.fog = null
    }
  }, [scene])

  return null
}

function Scene({ orbitEnabled, onRoverLoaded }: { orbitEnabled: boolean; onRoverLoaded?: () => void }) {
  return (
    <>
      <Atmosphere />
      <Stars radius={800} depth={150} count={5000} factor={6} fade speed={0.3} />
      
      {/* Environment provides realistic fill light and reflections */}
      <Environment preset="sunset" environmentIntensity={0.7} />
      
      {/* Main Sun Light */}
      <directionalLight
        position={[200, 300, 150]}
        intensity={2.0}
        color={0xffeedd}
        castShadow
        shadow-bias={-0.0005}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={800}
        shadow-camera-left={-200}
        shadow-camera-right={200}
        shadow-camera-top={200}
        shadow-camera-bottom={-200}
      />
      
      {/* Subtle rim light for definition */}
      <directionalLight position={[-150, 50, -100]} intensity={0.5} color={0x445566} />

      <CameraController orbitEnabled={orbitEnabled} />
      <DebugControls enabled={orbitEnabled} />
      
      <Suspense fallback={null}>
        <MarsLandscape />
      </Suspense>
      <Suspense fallback={null}>
        <Rover onLoaded={onRoverLoaded} />
      </Suspense>
      
      {/* Post-processing */}
      <EffectComposer disableNormalPass>
        <Bloom luminanceThreshold={1} mipmapBlur intensity={0.5} radius={0.6} />
        <Vignette darkness={0.4} offset={0.3} />
      </EffectComposer>
    </>
  )
}

function LoadingTracker({ onProgress, roverLoaded }: { onProgress: (p: number) => void; roverLoaded: boolean }) {
  const { progress } = useProgress()

  useEffect(() => {
    const adjustedProgress = roverLoaded ? progress : Math.min(progress * 0.8, 80)
    onProgress(adjustedProgress)
  }, [progress, roverLoaded, onProgress])

  return null
}

function LoadingOverlay({ progress, visible, onSkip }: { progress: number; visible: boolean; onSkip: () => void }) {
  if (!visible) return null

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#0a0808',
      zIndex: 100,
    }}>
      <div style={{
        width: 48,
        height: 48,
        border: '3px solid rgba(255, 140, 0, 0.2)',
        borderTop: '3px solid #FF8C00',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite',
        marginBottom: 24,
      }} />
      <div style={{
        color: '#FF8C00',
        fontSize: 14,
        fontFamily: 'monospace',
        marginBottom: 16,
      }}>
        Loading 3D Scene...
      </div>
      <div style={{
        width: 200,
        height: 4,
        background: 'rgba(255, 140, 0, 0.2)',
        borderRadius: 2,
        overflow: 'hidden',
      }}>
        <div style={{
          width: `${progress}%`,
          height: '100%',
          background: '#FF8C00',
          transition: 'width 0.3s ease',
        }} />
      </div>
      <div style={{
        color: 'rgba(255, 255, 255, 0.5)',
        fontSize: 12,
        fontFamily: 'monospace',
        marginTop: 8,
      }}>
        {Math.round(progress)}%
      </div>
      <button
        onClick={onSkip}
        style={{
          marginTop: 32,
          padding: '10px 20px',
          background: 'transparent',
          border: '1px solid rgba(255, 140, 0, 0.5)',
          borderRadius: 6,
          color: 'rgba(255, 255, 255, 0.7)',
          fontSize: 13,
          cursor: 'pointer',
          transition: 'all 0.2s ease',
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.borderColor = '#FF8C00'
          e.currentTarget.style.color = '#FF8C00'
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.borderColor = 'rgba(255, 140, 0, 0.5)'
          e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)'
        }}
      >
        Disable WebGL
      </button>
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}

export function WebGL() {
  const [orbitEnabled, setOrbitEnabled] = useState(false)
  const [loading, setLoading] = useState(true)
  const [roverLoaded, setRoverLoaded] = useState(false)
  const [progress, setProgress] = useState(0)
  const [staticMode, setStaticMode] = useState(false)

  const handleRoverLoaded = useCallback(() => {
    setRoverLoaded(true)
    urdfLoaded = true
  }, [])

  const handleProgress = useCallback((p: number) => {
    setProgress(p)
    if (p >= 100 && roverLoaded) {
      setTimeout(() => setLoading(false), 300)
    }
  }, [roverLoaded])

  const handleSkipToStatic = useCallback(() => {
    setStaticMode(true)
    setLoading(false)
  }, [])

  useEffect(() => {
    if (progress >= 100 && roverLoaded) {
      setTimeout(() => setLoading(false), 300)
    }
  }, [progress, roverLoaded])

  useEffect(() => {
    const gui = new GUI()
    gui.add(debugConfig, 'orbitControls').name('Orbit Controls').onChange((v: boolean) => {
      setOrbitEnabled(v)
    })
    gui.add(debugConfig, 'currentSection').name('Current Section').listen().disable()
    // gui.hide()

    const landscape = gui.addFolder('Landscape')
    landscape.add(debugConfig.landscape, 'x', -1000, 1000)
    landscape.add(debugConfig.landscape, 'y', -500, 500)
    landscape.add(debugConfig.landscape, 'z', -1000, 1000)
    landscape.add(debugConfig.landscape, 'rotationY', -Math.PI, Math.PI).name('rotation Y')
    landscape.add(debugConfig.landscape, 'scale', 1, 300)

    const rover = gui.addFolder('Rover')
    rover.add(debugConfig.rover, 'scale', 0.1, 5)
    rover.add(debugConfig.rover, 'rotationY', -Math.PI, Math.PI).name('rotation Y')

    guiJointsFolder = gui.addFolder('Joints')
    guiJointsFolder.close()

    if (robotRef?.joints) {
      Object.entries(robotRef.joints).forEach(([name, joint]: [string, any]) => {
        if (joint.jointType === 'revolute' || joint.jointType === 'continuous' || joint.jointType === 'prismatic') {
          const min = joint.limit?.lower ?? -Math.PI
          const max = joint.limit?.upper ?? Math.PI
          const initial = Array.isArray(joint.jointValue) ? joint.jointValue[0] : (joint.jointValue ?? 0)
          debugConfig.joints[name] = initial
          guiJointsFolder!.add(debugConfig.joints, name, min, max).onChange((v: number) => {
            joint.setJointValue(v)
          })
        }
      })
    }

    return () => {
      gui.destroy()
      guiJointsFolder = null
    }
  }, [])

  if (staticMode) {
    return (
      <div style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        background: 'linear-gradient(135deg, #0a0808 0%, #1a1410 50%, #0a0808 100%)',
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/images/KIWI_Landscape_URC.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.15,
        }} />
      </div>
    )
  }

  return (
    <>
      <LoadingOverlay progress={progress} visible={loading} onSkip={handleSkipToStatic} />
      <div style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: orbitEnabled ? 'auto' : 'none',
        zIndex: 0,
        opacity: loading ? 0 : 1,
        transition: 'opacity 0.5s ease',
      }}>
        <Canvas
          gl={{ antialias: true, alpha: false, toneMapping: THREE.ACESFilmicToneMapping, toneMappingExposure: 1.5 }}
          camera={{ fov: 50, near: 0.1, far: 10000, position: [0, 100, 400] }}
          shadows
          dpr={[1, 2]}
        >
          <LoadingTracker onProgress={handleProgress} roverLoaded={roverLoaded} />
          <Suspense fallback={null}>
            <Scene orbitEnabled={orbitEnabled} onRoverLoaded={handleRoverLoaded} />
          </Suspense>
        </Canvas>
      </div>
    </>
  )
}
