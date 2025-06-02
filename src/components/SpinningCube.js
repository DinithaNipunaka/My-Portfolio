import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const Cube = () => {
  const ref = useRef();
  useFrame(() => (ref.current.rotation.y += 0.01));

  return (
    <mesh ref={ref} rotation={[0.4, 0.2, 0.1]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#39ff14" />
    </mesh>
  );
};

const SpinningCube = () => {
  return (
    <div style={{ width: "150px", height: "150px" }}>
      <Canvas>
        <ambientLight />
        <pointLight position={[5, 5, 5]} />
        <Cube />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate />
      </Canvas>
    </div>
  );
};

export default SpinningCube;
