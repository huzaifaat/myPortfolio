"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";
import * as THREE from "three";

function Robot() {
  const groupRef = useRef<THREE.Group>(null);
  const headRef = useRef<THREE.Group>(null);
  const mouse = useRef({ x: 0, y: 0 });

  // Track mouse for head following
  useFrame((state) => {
    if (!groupRef.current || !headRef.current) return;

    // Gentle body sway
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      mouse.current.x * 0.3,
      0.02
    );

    // Head follows mouse more
    headRef.current.rotation.y = THREE.MathUtils.lerp(
      headRef.current.rotation.y,
      mouse.current.x * 0.5,
      0.05
    );
    headRef.current.rotation.x = THREE.MathUtils.lerp(
      headRef.current.rotation.x,
      mouse.current.y * -0.3,
      0.05
    );

    // Breathing animation
    const breathe = Math.sin(state.clock.elapsedTime * 1.5) * 0.02;
    groupRef.current.position.y = breathe;
  });

  // Material colors
  const bodyColor = useMemo(() => new THREE.Color("#7c3aed"), []);
  const darkColor = useMemo(() => new THREE.Color("#1a1a2e"), []);
  const accentColor = useMemo(() => new THREE.Color("#a78bfa"), []);
  const screenColor = useMemo(() => new THREE.Color("#c4b5fd"), []);

  return (
    <group
      ref={groupRef}
      position={[0, -0.5, 0]}
      onPointerMove={(e) => {
        mouse.current.x = (e.point.x / 2);
        mouse.current.y = (e.point.y / 2);
      }}
      onPointerLeave={() => {
        mouse.current.x = 0;
        mouse.current.y = 0;
      }}
    >
      {/* Body - rounded torso */}
      <mesh position={[0, 0, 0]} castShadow>
        <capsuleGeometry args={[0.55, 0.6, 8, 16]} />
        <meshStandardMaterial color={darkColor} roughness={0.3} metalness={0.8} />
      </mesh>

      {/* Chest plate */}
      <mesh position={[0, 0.1, 0.45]} castShadow>
        <boxGeometry args={[0.7, 0.5, 0.15]} />
        <meshStandardMaterial color={bodyColor} roughness={0.2} metalness={0.6} />
      </mesh>

      {/* Chest light (reactor) */}
      <mesh position={[0, 0.1, 0.54]}>
        <circleGeometry args={[0.1, 16]} />
        <meshStandardMaterial color={screenColor} emissive={screenColor} emissiveIntensity={2} />
      </mesh>

      {/* Neck */}
      <mesh position={[0, 0.7, 0]} castShadow>
        <cylinderGeometry args={[0.15, 0.2, 0.2, 12]} />
        <meshStandardMaterial color={darkColor} roughness={0.4} metalness={0.7} />
      </mesh>

      {/* Head */}
      <group ref={headRef} position={[0, 1.1, 0]}>
        {/* Main head */}
        <mesh castShadow>
          <boxGeometry args={[0.75, 0.65, 0.7]} />
          <meshStandardMaterial color={darkColor} roughness={0.2} metalness={0.8} />
        </mesh>

        {/* Face screen */}
        <mesh position={[0, 0, 0.36]}>
          <planeGeometry args={[0.55, 0.4]} />
          <meshStandardMaterial
            color={bodyColor}
            emissive={bodyColor}
            emissiveIntensity={0.5}
            roughness={0.1}
          />
        </mesh>

        {/* Eyes */}
        <mesh position={[-0.12, 0.03, 0.37]}>
          <circleGeometry args={[0.06, 16]} />
          <meshStandardMaterial color={screenColor} emissive={screenColor} emissiveIntensity={3} />
        </mesh>
        <mesh position={[0.12, 0.03, 0.37]}>
          <circleGeometry args={[0.06, 16]} />
          <meshStandardMaterial color={screenColor} emissive={screenColor} emissiveIntensity={3} />
        </mesh>

        {/* Antenna */}
        <mesh position={[0, 0.45, 0]} castShadow>
          <cylinderGeometry args={[0.02, 0.02, 0.25, 8]} />
          <meshStandardMaterial color={accentColor} metalness={0.9} roughness={0.1} />
        </mesh>
        <mesh position={[0, 0.6, 0]}>
          <sphereGeometry args={[0.05, 12, 12]} />
          <meshStandardMaterial color={screenColor} emissive={screenColor} emissiveIntensity={4} />
        </mesh>

        {/* Ears / side panels */}
        <mesh position={[-0.42, 0, 0]} castShadow>
          <boxGeometry args={[0.08, 0.3, 0.3]} />
          <meshStandardMaterial color={bodyColor} roughness={0.3} metalness={0.7} />
        </mesh>
        <mesh position={[0.42, 0, 0]} castShadow>
          <boxGeometry args={[0.08, 0.3, 0.3]} />
          <meshStandardMaterial color={bodyColor} roughness={0.3} metalness={0.7} />
        </mesh>
      </group>

      {/* Left Arm */}
      <group position={[-0.7, 0.1, 0]}>
        <mesh castShadow>
          <capsuleGeometry args={[0.1, 0.5, 6, 12]} />
          <meshStandardMaterial color={darkColor} roughness={0.4} metalness={0.7} />
        </mesh>
        {/* Shoulder joint */}
        <mesh position={[0, 0.35, 0]}>
          <sphereGeometry args={[0.12, 12, 12]} />
          <meshStandardMaterial color={bodyColor} roughness={0.3} metalness={0.6} />
        </mesh>
        {/* Hand */}
        <mesh position={[0, -0.4, 0]}>
          <sphereGeometry args={[0.1, 12, 12]} />
          <meshStandardMaterial color={accentColor} roughness={0.3} metalness={0.6} />
        </mesh>
      </group>

      {/* Right Arm */}
      <group position={[0.7, 0.1, 0]}>
        <mesh castShadow>
          <capsuleGeometry args={[0.1, 0.5, 6, 12]} />
          <meshStandardMaterial color={darkColor} roughness={0.4} metalness={0.7} />
        </mesh>
        <mesh position={[0, 0.35, 0]}>
          <sphereGeometry args={[0.12, 12, 12]} />
          <meshStandardMaterial color={bodyColor} roughness={0.3} metalness={0.6} />
        </mesh>
        <mesh position={[0, -0.4, 0]}>
          <sphereGeometry args={[0.1, 12, 12]} />
          <meshStandardMaterial color={accentColor} roughness={0.3} metalness={0.6} />
        </mesh>
      </group>

      {/* Legs */}
      <mesh position={[-0.2, -0.75, 0]} castShadow>
        <capsuleGeometry args={[0.1, 0.4, 6, 12]} />
        <meshStandardMaterial color={darkColor} roughness={0.4} metalness={0.7} />
      </mesh>
      <mesh position={[0.2, -0.75, 0]} castShadow>
        <capsuleGeometry args={[0.1, 0.4, 6, 12]} />
        <meshStandardMaterial color={darkColor} roughness={0.4} metalness={0.7} />
      </mesh>

      {/* Feet */}
      <mesh position={[-0.2, -1.1, 0.05]} castShadow>
        <boxGeometry args={[0.18, 0.1, 0.28]} />
        <meshStandardMaterial color={bodyColor} roughness={0.3} metalness={0.6} />
      </mesh>
      <mesh position={[0.2, -1.1, 0.05]} castShadow>
        <boxGeometry args={[0.18, 0.1, 0.28]} />
        <meshStandardMaterial color={bodyColor} roughness={0.3} metalness={0.6} />
      </mesh>
    </group>
  );
}

export default function RobotAvatar() {
  return (
    <div className="w-full h-[400px] md:h-[500px]">
      <Canvas
        camera={{ position: [0, 0.5, 4], fov: 35 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
        <pointLight position={[-3, 2, 4]} intensity={0.8} color="#a78bfa" />
        <pointLight position={[3, -1, 2]} intensity={0.3} color="#6366f1" />

        <Float speed={2} rotationIntensity={0.1} floatIntensity={0.3}>
          <Robot />
        </Float>

        <Environment preset="city" environmentIntensity={0.3} />
      </Canvas>
    </div>
  );
}
