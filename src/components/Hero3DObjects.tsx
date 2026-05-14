'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, ContactShadows } from '@react-three/drei';
import { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

function CoffeeCup() {
  const cupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (cupRef.current) {
      // Gentle floating and sloshing
      cupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 1.5) * 0.05 + 0.2;
      cupRef.current.rotation.z = Math.cos(state.clock.elapsedTime * 1.2) * 0.05;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.4} position={[3, 1, -1]}>
      <group ref={cupRef} scale={0.7}>
        {/* Cup body */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.8, 0.6, 1.5, 32]} />
          <meshStandardMaterial color="#faf8f5" roughness={0.2} />
        </mesh>
        {/* Coffee liquid inside */}
        <mesh position={[0, 0.72, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.76, 0.76, 0.02, 32]} />
          <meshStandardMaterial color="#3b2415" roughness={0.9} />
        </mesh>
        {/* Handle */}
        <mesh position={[0.8, 0, 0]} rotation={[0, 0, -Math.PI / 2]}>
          <torusGeometry args={[0.4, 0.12, 16, 32]} />
          <meshStandardMaterial color="#faf8f5" roughness={0.2} />
        </mesh>
      </group>
    </Float>
  );
}

function Pencil() {
  const pencilRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (pencilRef.current) {
      // Rolling effect tracking mouse X loosely
      const targetRotationZ = (state.pointer.x * Math.PI) * 0.5;
      pencilRef.current.rotation.z += (targetRotationZ - pencilRef.current.rotation.z) * 0.05;
      pencilRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.1 - 1.5;
    }
  });

  return (
    <Float speed={3} rotationIntensity={0.4} floatIntensity={0.5} position={[-3.5, -1.5, 1]}>
      <group ref={pencilRef} rotation={[Math.PI / 2 - 0.2, 0, 0.5]} scale={0.4}>
        {/* Yellow body */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.2, 0.2, 3, 6]} />
          <meshStandardMaterial color="#f5c842" roughness={0.5} />
        </mesh>
        {/* Metal part */}
        <mesh position={[0, 1.6, 0]}>
          <cylinderGeometry args={[0.2, 0.2, 0.4, 32]} />
          <meshStandardMaterial color="#aaaaaa" metalness={0.8} roughness={0.2} />
        </mesh>
        {/* Eraser */}
        <mesh position={[0, 1.9, 0]}>
          <cylinderGeometry args={[0.2, 0.2, 0.3, 32]} />
          <meshStandardMaterial color="#e884a8" roughness={0.9} />
        </mesh>
        {/* Wood cone */}
        <mesh position={[0, -1.8, 0]}>
          <cylinderGeometry args={[0.2, 0.02, 0.6, 32]} />
          <meshStandardMaterial color="#e8cd9c" roughness={0.8} />
        </mesh>
        {/* Graphite tip */}
        <mesh position={[0, -2.15, 0]}>
          <cylinderGeometry args={[0.02, 0.0, 0.1, 32]} />
          <meshStandardMaterial color="#333333" roughness={0.5} />
        </mesh>
      </group>
    </Float>
  );
}

function Eraser() {
  return (
    <Float speed={2.5} rotationIntensity={0.3} floatIntensity={0.6} position={[2.5, -2, 2]}>
      <mesh rotation={[0.2, -0.4, 0]} scale={0.5}>
        <boxGeometry args={[2, 0.8, 1]} />
        <meshStandardMaterial color="#ffffff" roughness={0.9} />
        {/* The cardboard sleeve around the eraser */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[1.2, 0.82, 1.02]} />
          <meshStandardMaterial color="#4a8fe7" roughness={0.6} />
        </mesh>
      </mesh>
    </Float>
  );
}

export default function Hero3DObjects() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 10 }}>
      {/* eventSource tracking document body allows mouse tracking even with pointerEvents: none */}
      <Canvas eventSource={document.body} camera={{ position: [0, 0, 8], fov: 45 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 8, 5]} intensity={0.5} />
        <directionalLight position={[-5, 5, -5]} intensity={0.2} />
        
        <CoffeeCup />
        <Pencil />
        <Eraser />
      </Canvas>
    </div>
  );
}
