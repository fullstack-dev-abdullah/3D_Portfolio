import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { Room } from "./Room.jsx";
import HeroLights from "./HeroLights.jsx";
import { Desktop } from "./Desktop.jsx";

function HeroExperience() {
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <Canvas camera={{ position: [10, 0, 15], fov: 45 }}   style={{
    pointerEvents: isMobile ? "none" : "auto",
    touchAction: isMobile ? "auto" : "none", // Allow scroll
  }}>
      <HeroLights />
      <OrbitControls
        enablePan={false}
        enableZoom={!isTablet}
        maxDistance={20}
        minDistance={5}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />
      <group
        scale={isMobile ? 0.7 : 1}
        position={[0, -3.5, 0]}
        rotation={[0, -Math.PI / 2, 0]} // Rotate 180 degrees around Y-axis
      >
        {/*<Room />*/}
        <Desktop />
      </group>
    </Canvas>
  );
}

export default HeroExperience;
