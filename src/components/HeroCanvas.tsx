import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles } from "@react-three/drei";
import { useRef, Suspense } from "react";
import type { Group } from "three";

function CameraLens() {
  const ref = useRef<Group>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.25;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.4) * 0.12;
  });
  return (
    <group ref={ref}>
      <mesh>
        <cylinderGeometry args={[1.1, 1.1, 1.6, 64]} />
        <meshStandardMaterial color="#0a0a0a" metalness={0.95} roughness={0.3} />
      </mesh>
      {[-0.5, -0.15, 0.2, 0.55].map((y, i) => (
        <mesh key={i} position={[0, y, 0]}>
          <torusGeometry args={[1.12, 0.04, 16, 80]} />
          <meshStandardMaterial color="#222" metalness={1} roughness={0.4} />
        </mesh>
      ))}
      <mesh position={[0, 0.82, 0]}>
        <sphereGeometry args={[0.6, 64, 64, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color="#111" metalness={1} roughness={0.1} emissive="#ffffff" emissiveIntensity={0.06} />
      </mesh>
      <mesh position={[0, -0.85, 0]}>
        <cylinderGeometry args={[0.9, 0.9, 0.1, 64]} />
        <meshStandardMaterial color="#161616" metalness={1} roughness={0.5} />
      </mesh>
    </group>
  );
}

export function HeroCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 4.5], fov: 45 }} dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.2} />
        <spotLight position={[5, 5, 5]} angle={0.3} penumbra={1} intensity={1.4} color="#ffffff" />
        <pointLight position={[-3, -2, -2]} intensity={0.6} color="#ffffff" />
        <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.6}>
          <CameraLens />
        </Float>
        <Sparkles count={50} scale={9} size={1.5} speed={0.3} color="#ffffff" opacity={0.4} />
      </Suspense>
    </Canvas>
  );
}
