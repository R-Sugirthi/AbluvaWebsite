import React, { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MathUtils, Mesh, ShaderMaterial, IcosahedronGeometry } from "three";
import fragmentShader from "./fragmentShader";
import vertexShader from "./vertexShader";

const Blob = () => {
  const mesh = useRef<Mesh>(null);
  const hover = useRef(false);
  const uniforms = useMemo(() => {
    return {
      u_time: { value: 0 },
      u_intensity: { value: 0.3 },
    };
  }, []);

  useFrame((state) => {
    const { clock } = state;
    if (mesh.current) {
      uniforms.u_time.value = 0.4 * clock.getElapsedTime();
      uniforms.u_intensity.value = MathUtils.lerp(
        uniforms.u_intensity.value,
        hover.current ? 0.5 : 0.15,
        0.05
      );
      mesh.current.scale.setScalar(MathUtils.lerp(mesh.current.scale.x, 1, 0.07));
    }
  });

  const geometry = useMemo(() => new IcosahedronGeometry(3, 20), []);
  return (
    <mesh
      ref={mesh}
      geometry={geometry}
      scale={0.05} // Start at a small scale
      position={[0, 0, 0]}
      onPointerOver={() => (hover.current = true)}
      onPointerOut={() => (hover.current = false)}
    >
      <shaderMaterial
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        transparent
        opacity={0.1}
      />
    </mesh>
  );
};

const ThreeComponent = () => {
  return (
    <Canvas camera={{ position: [0.0, 0.0, 8.0] }}>
      <Blob />
    </Canvas>
  );
};

export default ThreeComponent;
