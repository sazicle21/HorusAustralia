"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Lightformer, Float } from "@react-three/drei";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

function CopperMaterial() {
  // Copper-ish metal
  const mat = useMemo(() => {
    const m = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color("#D97706"), // copper base
      metalness: 1,
      roughness: 0.25,
      reflectivity: 1,
      clearcoat: 0.4,
      clearcoatRoughness: 0.3,
      emissive: new THREE.Color("#8a4b00"),
      emissiveIntensity: 0.05,
    });
    return m;
  }, []);
  // Drei needs a JSX element; clone for each mesh
  return <primitive object={mat} attach="material" />;
}

function Scene({ animate = true }: { animate: boolean }) {
  const group = useRef<THREE.Group>(null!);

  // Subtle parallax via pointer
  useFrame((state, delta) => {
    if (!animate) return;
    const p = state.pointer; // -1..1
    const g = group.current;
    // Base idle rotation
    g.rotation.y += delta * 0.15;
    g.rotation.x = THREE.MathUtils.lerp(g.rotation.x, p.y * 0.2, 0.08);
    g.rotation.z = THREE.MathUtils.lerp(g.rotation.z, p.x * 0.2, 0.08);
  });

  return (
    <>
      {/* Background & fog to match charcoal */}
      <color attach="background" args={["#0F1115"]} />
      <fog attach="fog" args={["#0F1115", 10, 30]} />

      {/* Soft fill light */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 6, 3]} intensity={1.4} color={"#ffd49a"} />
      <directionalLight position={[-6, -3, -4]} intensity={0.4} color={"#8a5a1f"} />

      {/* Coppery reflections */}
      <Environment resolution={64}>
        {/* Lightformers give sleek band highlights */}
        <Lightformer intensity={2} position={[0, 3, 5]} scale={[10, 10, 1]} rotation={[0, 0, 0]} />
        <Lightformer intensity={1.5} position={[0, -3, -5]} scale={[10, 10, 1]} rotation={[0, Math.PI, 0]} />
        <Lightformer intensity={2} position={[5, 0, 2]} scale={[5, 2, 1]} rotation={[0, -Math.PI / 4, 0]} />
      </Environment>

      {/* Cluster of shapes */}
      <group ref={group} position={[0, 0, 0]}>
        <Float floatIntensity={animate ? 1.2 : 0} rotationIntensity={animate ? 0.4 : 0}>
          <mesh position={[0, 0, 0]}>
            <icosahedronGeometry args={[1.3, 0]} />
            <CopperMaterial />
          </mesh>
        </Float>

        <Float floatIntensity={animate ? 1 : 0} rotationIntensity={animate ? 0.3 : 0}>
          <mesh position={[2.6, 0.6, -0.5]} rotation={[0.2, 0.8, 0]}>
            <torusKnotGeometry args={[0.55, 0.18, 160, 24]} />
            <CopperMaterial />
          </mesh>
        </Float>

        <Float floatIntensity={animate ? 1 : 0} rotationIntensity={animate ? 0.25 : 0}>
          <mesh position={[-2.2, -0.3, 0.8]} rotation={[0.5, -0.3, 0.2]}>
            <boxGeometry args={[1.0, 1.0, 1.0]} />
            <CopperMaterial />
          </mesh>
        </Float>

        <Float floatIntensity={animate ? 0.8 : 0} rotationIntensity={animate ? 0.2 : 0}>
          <mesh position={[0.2, 1.9, 0.6]}>
            <sphereGeometry args={[0.55, 64, 64]} />
            <CopperMaterial />
          </mesh>
        </Float>

        {/* Thin orbit ring (brand “light beam” callback) */}
        <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, -1.2, 0]}>
          <torusGeometry args={[2.6, 0.01, 32, 256]} />
          <meshBasicMaterial color="#F59E0B" transparent opacity={0.35} />
        </mesh>
      </group>
    </>
  );
}

export default function HeroR3F() {
  const [animate, setAnimate] = useState(true);

  // Respect reduced motion
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setAnimate(!mq.matches);
    apply();
    mq.addEventListener?.("change", apply);
    return () => mq.removeEventListener?.("change", apply);
  }, []);

  return (
    <div className="spline-shell">
      <div className="spline-canvas">
        <Canvas
          camera={{ position: [0, 0, 6.5], fov: 40 }}
          gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping }}
          dpr={[1, 2]}
        >
          <Scene animate={animate} />
        </Canvas>
      </div>
    </div>
  );
}
