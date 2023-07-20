import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/flower.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={1} groundColor='black' />
      <spotLight
        color={'#915eff'}
        // position={[2.5, 16, 2.5]}
        distance={10}
        angle={Math.PI / 6}
        penumbra={1}
        intensity={100}
        castShadow
        shadow-mapSize={1024}
      />
      
      <pointLight 
        intensity={10}
        color={'#915eff'}
        position={[0, 10, 0]}
      />
      
      <pointLight 
        intensity={10}
        color={'#915eff'}
        position={[0, -10, 0]}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? .6 : 1}
        position={isMobile ? [0, -2, 0] : [0, -3, 0]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;