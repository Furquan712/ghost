// PageFlipScene.jsx
"use client";
import React, { useRef } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import { TextureLoader } from 'three';

function Page({ textureUrl, duration = 2, onFlipComplete }) {
  const meshRef = useRef();
  // Load the captured image (data URL) as a texture.
  const texture = useLoader(TextureLoader, textureUrl);

  useFrame((state) => {
    if (!meshRef.current) return;
    // Compute progress (0 to 1) based on elapsed time
    const progress = Math.min(state.clock.getElapsedTime() / duration, 1);
    // Rotate from 0° to 180° (flip effect)
    meshRef.current.rotation.y = progress * Math.PI;
    // Apply a slight scale change for a bend effect (narrow in the middle)
    const bendFactor = Math.sin(progress * Math.PI);
    meshRef.current.scale.x = 1 - 0.1 * bendFactor;

    // Trigger the callback when the animation completes.
    if (progress === 1 && onFlipComplete) {
      onFlipComplete();
    }
  });

  return (
    <mesh ref={meshRef}>
      {/* Use a plane with many segments for a smooth bend effect */}
      <planeGeometry args={[4, 6, 32, 32]} />
      <meshStandardMaterial map={texture} side={THREE.DoubleSide} />
    </mesh>
  );
}

export default function PageFlipScene({ textureUrl, duration = 2, onFlipComplete }) {
  return (
    <Canvas camera={{ position: [0, 0, 10] }} style={{ width: "100%", height: "100%" }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <Page textureUrl={textureUrl} duration={duration} onFlipComplete={onFlipComplete} />
    </Canvas>
  );
}
