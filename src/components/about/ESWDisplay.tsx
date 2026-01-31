import { useEffect, useRef, useState, type RefObject } from 'react'
import type { ArmJointValues } from './TeleopDisplay'

interface MotorData {
  name: string
  state: string
  error: string
  position: number
  velocity: number
  current: number
}

const MOTOR_NAMES = ['Joint A', 'Joint B', 'Joint C']

interface ESWDisplayProps {
  visible: boolean
  jointValuesRef: RefObject<ArmJointValues>
}

export function ESWDisplay({ visible, jointValuesRef }: ESWDisplayProps) {
  const [motorData, setMotorData] = useState<MotorData[]>(() =>
    MOTOR_NAMES.map((name) => ({
      name,
      state: 'Armed',
      error: 'None',
      position: 0,
      velocity: 0,
      current: 0,
    }))
  )
  const animationRef = useRef<number>(0)
  const lastTimeRef = useRef<number>(0)
  const prevJointsRef = useRef({ joint_a: 0, joint_b: 0, joint_c: 0 })

  useEffect(() => {
    if (!visible) {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
        animationRef.current = 0
      }
      return
    }

    lastTimeRef.current = performance.now()

    const animate = () => {
      const now = performance.now()
      const delta = (now - lastTimeRef.current) / 1000
      lastTimeRef.current = now

      const jv = jointValuesRef.current
      if (!jv) {
        animationRef.current = requestAnimationFrame(animate)
        return
      }

      const velocityA = (jv.joint_a - prevJointsRef.current.joint_a) / delta
      const velocityB = (jv.joint_b - prevJointsRef.current.joint_b) / delta
      const velocityC = (jv.joint_c - prevJointsRef.current.joint_c) / delta

      prevJointsRef.current = { joint_a: jv.joint_a, joint_b: jv.joint_b, joint_c: jv.joint_c }

      setMotorData([
        {
          name: 'Joint A',
          state: 'Armed',
          error: 'None',
          position: jv.joint_a * 10,
          velocity: velocityA,
          current: Math.abs(velocityA) * 0.5 + Math.random() * 0.1,
        },
        {
          name: 'Joint B',
          state: 'Armed',
          error: 'None',
          position: (jv.joint_b * 180) / Math.PI,
          velocity: velocityB,
          current: Math.abs(velocityB) * 2 + Math.random() * 0.1,
        },
        {
          name: 'Joint C',
          state: 'Armed',
          error: 'None',
          position: (jv.joint_c * 180) / Math.PI,
          velocity: velocityC,
          current: Math.abs(velocityC) * 2 + Math.random() * 0.1,
        },
      ])

      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [visible, jointValuesRef])

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '40px',
        left: '40px',
        zIndex: 100,
        opacity: visible ? 1 : 0,
        pointerEvents: 'none',
        transition: 'opacity 0.5s ease',
        background: 'rgba(10, 20, 40, 0.85)',
        borderRadius: '12px',
        padding: '16px',
        backdropFilter: 'blur(8px)',
        border: '1px solid rgba(10, 122, 204, 0.3)',
        fontFamily: 'monospace',
        fontSize: '12px',
        color: '#e0e0e0',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '12px',
          borderBottom: '1px solid rgba(10, 122, 204, 0.3)',
          paddingBottom: '8px',
        }}
      >
        <span style={{ color: '#0a7acc', fontWeight: 'bold', fontSize: '14px' }}>
          Arm Controller State
        </span>
      </div>
      <div style={{ overflowX: 'auto' }}>
        <table
          style={{
            borderCollapse: 'collapse',
            width: '100%',
          }}
        >
          <tbody>
            <tr>
              <th style={thStyle}>Motor</th>
              {motorData.map((m, i) => (
                <td key={i} style={tdStyle}>
                  {m.name}
                </td>
              ))}
            </tr>
            <tr>
              <th style={thStyle}>State</th>
              {motorData.map((m, i) => (
                <td key={i} style={{ ...tdStyle, color: '#4ade80' }}>
                  {m.state}
                </td>
              ))}
            </tr>
            <tr>
              <th style={thStyle}>Error</th>
              {motorData.map((m, i) => (
                <td key={i} style={{ ...tdStyle, color: m.error === 'None' ? '#888' : '#f87171' }}>
                  {m.error}
                </td>
              ))}
            </tr>
            <tr>
              <th style={thStyle}>Position</th>
              {motorData.map((m, i) => (
                <td key={i} style={tdStyle}>
                  {m.position.toFixed(2)}
                </td>
              ))}
            </tr>
            <tr>
              <th style={thStyle}>Velocity</th>
              {motorData.map((m, i) => (
                <td key={i} style={{ ...tdStyle, color: getVelocityColor(m.velocity) }}>
                  {m.velocity.toFixed(2)}
                </td>
              ))}
            </tr>
            <tr>
              <th style={thStyle}>Current</th>
              {motorData.map((m, i) => (
                <td key={i} style={{ ...tdStyle, color: getCurrentColor(m.current) }}>
                  {m.current.toFixed(2)}A
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

const thStyle: React.CSSProperties = {
  textAlign: 'left',
  padding: '4px 12px 4px 0',
  color: '#0a7acc',
  fontWeight: 'bold',
  whiteSpace: 'nowrap',
}

const tdStyle: React.CSSProperties = {
  textAlign: 'center',
  padding: '4px 8px',
  whiteSpace: 'nowrap',
}

function getVelocityColor(v: number): string {
  const abs = Math.abs(v)
  if (abs < 0.3) return '#888'
  if (abs < 0.7) return '#facc15'
  return '#0a7acc'
}

function getCurrentColor(c: number): string {
  if (c < 1) return '#4ade80'
  if (c < 2.5) return '#facc15'
  return '#f87171'
}
