import React from 'react'
import {Environment, Float, OrbitControls, useGLTF} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";

function TechIcon({ model }) {
    const scene = useGLTF(model.modelPath);
    return (
      <Canvas>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 10]} intensity={0.5} />
          <Environment preset="city"  />
          <OrbitControls enableZoom={false}  />
          <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
              <group scale={model.scale} rotation={model.rotation} >
                  <primitive object={scene.scene} />
              </group>
          </Float>
      </Canvas>
    )
}

export default TechIcon
