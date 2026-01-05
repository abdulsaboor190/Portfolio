import { useRef, useMemo, useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

export function InteractiveParticles({ count = 150 }) {
  const points = useRef()
  const { pointer } = useThree()
  const particlesData = useRef([])

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3)
    particlesData.current = []

    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 15
      const y = (Math.random() - 0.5) * 15
      const z = (Math.random() - 0.5) * 15

      positions[i * 3] = x
      positions[i * 3 + 1] = y
      positions[i * 3 + 2] = z

      particlesData.current.push({
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02
        ),
        originalPos: new THREE.Vector3(x, y, z),
      })
    }
    return positions
  }, [count])

  useEffect(() => {
    if (points.current) {
      const geometry = points.current.geometry
      const positionAttribute = new THREE.BufferAttribute(particlesPosition, 3)
      geometry.setAttribute('position', positionAttribute)
    }
  }, [particlesPosition])

  useFrame((state) => {
    const t = state.clock.getElapsedTime()

    if (points.current) {
      points.current.rotation.y = t * 0.03

      const positions = points.current.geometry.attributes.position.array

      for (let i = 0; i < count; i++) {
        const i3 = i * 3
        const data = particlesData.current[i]

        // Apply velocity
        positions[i3] += data.velocity.x
        positions[i3 + 1] += data.velocity.y
        positions[i3 + 2] += data.velocity.z

        // Mouse repulsion effect
        const dx = positions[i3] - pointer.x * 5
        const dy = positions[i3 + 1] - pointer.y * 5
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 2) {
          positions[i3] += dx * 0.05
          positions[i3 + 1] += dy * 0.05
        }

        // Boundary check and reset
        if (Math.abs(positions[i3]) > 10) data.velocity.x *= -1
        if (Math.abs(positions[i3 + 1]) > 10) data.velocity.y *= -1
        if (Math.abs(positions[i3 + 2]) > 10) data.velocity.z *= -1
      }

      points.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <points ref={points}>
      <bufferGeometry />
      <pointsMaterial
        size={0.08}
        color="#a78bfa"
        sizeAttenuation
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

