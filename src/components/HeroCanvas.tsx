import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, MeshDistortMaterial, Sparkles } from "@react-three/drei";
import { useRef, Suspense } from "react";
import type { Mesh, Group } from "three";

function CameraLens() {
  const ref = useRef<Group>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.2;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.4) * 0.1;
  });
  return (
    <group ref={ref}>
      {/* lens body */}
      <mesh castShadow>
        <cylinderGeometry args={[1.1, 1.1, 1.6, 64]} />
        <meshStandardMaterial color="#0a0a0a" metalness={0.95} roughness={0.25} />
      </mesh>
      {/* grip rings */}
      {[-0.5, -0.15, 0.2, 0.55].map((y, i) => (
        <mesh key={i} position={[0, y, 0]}>
          <torusGeometry args={[1.12, 0.04, 16, 80]} />
          <meshStandardMaterial color="#1a1a1a" metalness={1} roughness={0.4} />
        </mesh>
      ))}
      {/* front glass */}
      <mesh position={[0, 0.81, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.55, 1.0, 64]} />
        <meshStandardMaterial color="#0d0d0d" metalness={1} roughness={0.3} />
      </mesh>
      <mesh position={[0, 0.82, 0]}>
        <sphereGeometry args={[0.6, 64, 64, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <MeshDistortMaterial
          color="#e89a3c"
          emissive="#c46a1a"
          emissiveIntensity={0.45}
          metalness={0.9}
          roughness={0.15}
          distort={0.15}
          speed={1.5}
        />
      </mesh>
      {/* back mount */}
      <mesh position={[0, -0.85, 0]}>
        <cylinderGeometry args={[0.9, 0.9, 0.1, 64]} />
        <meshStandardMaterial color="#161616" metalness={1} roughness={0.5} />
      </mesh>
    </group>
  );
}

function Aperture() {
  const ref = useRef<Mesh>(null);
  useFrame((s) => {
    if (ref.current) ref.current.rotation.z = s.clock.elapsedTime * 0.1;
  });
  return (
    <mesh ref={ref} position={[0, 0, -3]}>
      <ringGeometry args={[2.4, 2.6, 8]} />
      <meshBasicMaterial color="#e89a3c" transparent opacity={0.15} />
    </mesh>
  );
}

export function HeroCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 4.5], fov: 45 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.15} />
        <spotLight position={[5, 5, 5]} angle={0.3} penumbra={1} intensity={2} color="#ffb56b" castShadow />
        <pointLight position={[-3, -2, -2]} intensity={1} color="#ff7a2e" />
        <pointLight position={[0, 0, 3]} intensity={0.8} color="#ffd9a8" />
        <Float speed={1.4} rotationIntensity={0.4} floatIntensity={0.6}>
          <CameraLens />
        </Float>
        <Aperture />
        <Sparkles count={60} scale={8} size={2} speed={0.3} color="#e89a3c" opacity={0.6} />
        <Environment preset="warehouse" />
      </Suspense>
    </Canvas>
  );
}
