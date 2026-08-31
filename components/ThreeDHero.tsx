"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

function LandingPageCard() {
  const meshRef = useRef<THREE.Mesh>(null);
  const [active, setActive] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

useEffect(() => {
  const mediaQuery = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  );

  const updateMotionPreference = () => {
    setReducedMotion(mediaQuery.matches);
  };

  updateMotionPreference();
  mediaQuery.addEventListener("change", updateMotionPreference);

  return () => {
    mediaQuery.removeEventListener("change", updateMotionPreference);
  };
}, []);

  useFrame((_, delta) => {
  if (meshRef.current && !reducedMotion) {
    meshRef.current.rotation.y += delta * 0.4;
    meshRef.current.rotation.x =
      Math.sin(Date.now() * 0.001) * 0.08;
  }
});

  return (
    <mesh
      ref={meshRef}
      scale={active ? 1.15 : 1}
      onClick={() => setActive((current) => !current)}
    >
      <boxGeometry args={[2.8, 1.8, 0.25]} />

      <meshStandardMaterial
        color={active ? "#a78bfa" : "#7c3aed"}
        metalness={0.35}
        roughness={0.3}
      />
    </mesh>
  );
}

export default function ThreeDHero() {
  return (
    <div className="h-[360px] w-full overflow-hidden rounded-2xl border border-gray-800 bg-gray-950">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={1.5} />

        <directionalLight
          position={[3, 4, 5]}
          intensity={2}
        />

        <LandingPageCard />

        <OrbitControls
          enablePan={false}
          minDistance={3}
          maxDistance={7}
        />
      </Canvas>

      <p className="-mt-12 relative z-10 text-center text-sm text-gray-400">
        Click the 3D card to change its material color
      </p>
    </div>
  );
}