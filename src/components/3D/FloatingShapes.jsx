import { useRef, useState } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { Sphere, Box, Torus, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

export function FloatingShapes() {
  const groupRef = useRef()
  const { pointer } = useThree()
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useFrame((state) => {
    const t = state.clock.getElapsedTime()

    // Smooth mouse following
    setMousePos({
      x: THREE.MathUtils.lerp(mousePos.x, pointer.x * 2, 0.05),
      y: THREE.MathUtils.lerp(mousePos.y, pointer.y * 2, 0.05),
    })

    if (groupRef.current) {
      groupRef.current.rotation.x = t * 0.2 + mousePos.y * 0.3
      groupRef.current.rotation.y = t * 0.3 + mousePos.x * 0.3
      groupRef.current.position.x = mousePos.x * 0.5
      groupRef.current.position.y = mousePos.y * 0.5
    }
  })

  return (
    <group ref={groupRef}>
      {/* Main Distorted Sphere */}
      <Sphere args={[1, 100, 200]} scale={2}>
        <MeshDistortMaterial
          color="#8b5cf6"
          attach="material"
          distort={0.5}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>

      {/* Floating Torus */}
      <Torus args={[1.5, 0.3, 16, 100]} position={[2, 1, -1]} rotation={[1, 0, 0]}>
        <meshStandardMaterial color="#ec4899" wireframe />
      </Torus>

      {/* Floating Box */}
      <Box args={[0.8, 0.8, 0.8]} position={[-2, -1, 0]}>
        <meshStandardMaterial color="#a78bfa" metalness={0.8} roughness={0.2} />
      </Box>

      {/* Small Orbiting Spheres */}
      {[...Array(5)].map((_, i) => (
        <Sphere
          key={i}
          args={[0.2, 32, 32]}
          position={[
            Math.cos((i / 5) * Math.PI * 2) * 3,
            Math.sin((i / 5) * Math.PI * 2) * 3,
            -2,
          ]}
        >
          <meshStandardMaterial
            color="#c084fc"
            emissive="#c084fc"
            emissiveIntensity={0.5}
          />
        </Sphere>
      ))}
    </group>
  )
}

