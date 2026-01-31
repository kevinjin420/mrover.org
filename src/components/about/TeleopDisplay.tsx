import { useEffect, useRef, useCallback } from 'react'
import { GamepadDisplay } from 'gamepad-display'

const PHASE_DURATION = 2.4
const ANIMATION_DURATION = PHASE_DURATION * 3

export interface ArmJointValues {
  joint_a: number
  joint_b: number
  joint_c: number
  joint_de_pitch: number
  joint_de_roll: number
  gripper: number
}

interface TeleopDisplayProps {
  visible: boolean
  animationActive?: boolean
  position?: 'center' | 'left'
  onJointValuesChange?: (values: ArmJointValues) => void
}

const JOINT_SPEEDS = {
  joint_a: 20,
  joint_b: 0.5,
  joint_c: 0.6,
}

// Limits for animation range (symmetric for smooth back-and-forth)
const JOINT_LIMITS = {
  joint_a: { min: -16, max: 16 },
  joint_b: { min: -0.6, max: 0.6 },
  joint_c: { min: -0.9, max: 0.9 },
}

function clampJoint(value: number, joint: keyof typeof JOINT_LIMITS): number {
  const { min, max } = JOINT_LIMITS[joint]
  return Math.max(min, Math.min(max, value))
}

function smoothstep(t: number): number {
  return t * t * (3 - 2 * t)
}

function getPhaseAxis(t: number): number {
  if (t < 0.2) {
    return smoothstep(t / 0.2) * 0.9
  } else if (t < 1.0) {
    return 0.9
  } else if (t < 1.2) {
    return 0.9 - smoothstep((t - 1.0) / 0.2) * 0.9
  } else if (t < 1.4) {
    return -smoothstep((t - 1.2) / 0.2) * 0.9
  } else if (t < 2.2) {
    return -0.9
  } else {
    return -0.9 + smoothstep((t - 2.2) / 0.2) * 0.9
  }
}

function getAxisTarget(time: number): { axis0: number; axis1: number; axis3: number } {
  const t = time % ANIMATION_DURATION

  let axis0 = 0
  let axis1 = 0
  let axis3 = 0

  if (t < PHASE_DURATION) {
    axis1 = getPhaseAxis(t)
  } else if (t < PHASE_DURATION * 2) {
    axis0 = getPhaseAxis(t - PHASE_DURATION)
  } else {
    axis3 = getPhaseAxis(t - PHASE_DURATION * 2)
  }

  return { axis0, axis1, axis3 }
}

const RETURN_SPEED = 2.0

export function TeleopDisplay({ visible, animationActive, position = 'center', onJointValuesChange }: TeleopDisplayProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const displayRef = useRef<GamepadDisplay | null>(null)
  const animationRef = useRef<number>(0)
  const startTimeRef = useRef<number>(0)
  const lastTimeRef = useRef<number>(0)
  const jointValuesRef = useRef<ArmJointValues>({
    joint_a: 0,
    joint_b: 0,
    joint_c: 0,
    joint_de_pitch: 0,
    joint_de_roll: 0,
    gripper: 0,
  })
  const activeRef = useRef(animationActive ?? visible)
  const returningRef = useRef(false)

  const isActive = animationActive ?? visible

  useEffect(() => {
    activeRef.current = isActive
    if (!isActive && !returningRef.current) {
      returningRef.current = true
    }
  }, [isActive])

  const animate = useCallback(() => {
    if (!displayRef.current) return

    const now = performance.now() / 1000
    const elapsed = now - startTimeRef.current
    const delta = now - lastTimeRef.current
    lastTimeRef.current = now

    const jv = jointValuesRef.current

    if (activeRef.current) {
      const { axis0, axis1, axis3 } = getAxisTarget(elapsed)
      const axes = [axis0, axis1, 0, axis3, -1, -1]
      const buttons = new Array(17).fill(0)

      if (displayRef.current) {
        displayRef.current.update(axes, buttons)
      }

      jv.joint_a = clampJoint(jv.joint_a + axis0 * JOINT_SPEEDS.joint_a * delta, 'joint_a')
      jv.joint_b = clampJoint(jv.joint_b + axis1 * JOINT_SPEEDS.joint_b * delta, 'joint_b')
      jv.joint_c = clampJoint(jv.joint_c + axis3 * JOINT_SPEEDS.joint_c * delta, 'joint_c')
    } else {
      if (displayRef.current) {
        displayRef.current.update([0, 0, 0, 0, -1, -1], new Array(17).fill(0))
      }

      const lerpFactor = 1 - Math.exp(-RETURN_SPEED * delta)
      jv.joint_a *= 1 - lerpFactor
      jv.joint_b *= 1 - lerpFactor
      jv.joint_c *= 1 - lerpFactor

      const isAtRest =
        Math.abs(jv.joint_a) < 0.01 &&
        Math.abs(jv.joint_b) < 0.01 &&
        Math.abs(jv.joint_c) < 0.01

      if (isAtRest) {
        jv.joint_a = 0
        jv.joint_b = 0
        jv.joint_c = 0
        returningRef.current = false
        if (onJointValuesChange) {
          onJointValuesChange({ ...jv })
        }
        return
      }
    }

    if (onJointValuesChange) {
      onJointValuesChange({ ...jv })
    }

    animationRef.current = requestAnimationFrame(animate)
  }, [onJointValuesChange])

  useEffect(() => {
    if (!containerRef.current) return

    displayRef.current = new GamepadDisplay(containerRef.current, {
      layout: 'horizontal',
      primaryColor: '#0a7acc',
      colors: {
        buttonOutline: '#0a7acc',
        stickBase: '#1a3a5c',
      },
    })

    return () => {
      if (displayRef.current) {
        displayRef.current.destroy()
        displayRef.current = null
      }
    }
  }, [])

  useEffect(() => {
    if (isActive) {
      const now = performance.now() / 1000
      const jv = jointValuesRef.current

      // Calculate phase offset based on current joint positions to ensure smooth animation
      // If a joint is near its limit, start at a phase that reverses direction
      let phaseOffset = 0
      const aRatio = jv.joint_a / JOINT_LIMITS.joint_a.max
      const bRatio = jv.joint_b / JOINT_LIMITS.joint_b.max
      const cRatio = jv.joint_c / JOINT_LIMITS.joint_c.max

      // Start at reversal point if any joint is near its limit
      if (Math.abs(bRatio) > 0.7) {
        phaseOffset = bRatio > 0 ? 1.0 : 1.4
      } else if (Math.abs(aRatio) > 0.7) {
        phaseOffset = PHASE_DURATION + (aRatio > 0 ? 1.0 : 1.4)
      } else if (Math.abs(cRatio) > 0.7) {
        phaseOffset = PHASE_DURATION * 2 + (cRatio > 0 ? 1.0 : 1.4)
      }

      startTimeRef.current = now - phaseOffset
      lastTimeRef.current = now
      if (!animationRef.current) {
        animationRef.current = requestAnimationFrame(animate)
      }
    } else if (returningRef.current && !animationRef.current) {
      lastTimeRef.current = performance.now() / 1000
      animationRef.current = requestAnimationFrame(animate)
    }

    return () => {
      if (animationRef.current && !activeRef.current && !returningRef.current) {
        cancelAnimationFrame(animationRef.current)
        animationRef.current = 0
      }
    }
  }, [isActive, animate])

  return (
    <div
      style={{
        position: 'fixed',
        bottom: position === 'left' ? '290px' : '40px',
        left: '40px',
        zIndex: 100,
        opacity: visible ? 1 : 0,
        pointerEvents: 'none',
        transition: 'opacity 0.5s ease, bottom 0.5s ease',
        background: 'rgba(10, 20, 40, 0.7)',
        borderRadius: '12px',
        padding: '16px 24px',
        backdropFilter: 'blur(8px)',
        border: '1px solid rgba(10, 122, 204, 0.3)',
      }}
    >
      <div
        ref={containerRef}
        style={{
          width: '333px',
          height: '60px',
        }}
      />
    </div>
  )
}

export function useTeleopAnimation() {
  const jointValuesRef = useRef<ArmJointValues>({
    joint_a: 0,
    joint_b: 0,
    joint_c: 0,
    joint_de_pitch: 0,
    joint_de_roll: 0,
    gripper: 0,
  })

  const handleJointValuesChange = useCallback((values: ArmJointValues) => {
    jointValuesRef.current = values
  }, [])

  return {
    jointValuesRef,
    handleJointValuesChange,
  }
}
