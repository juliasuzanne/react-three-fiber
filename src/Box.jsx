import { useRef, useEffect, useState, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function Box(props) {
  const ref = useRef();
  // const [hovered, setHover] = useState(false);
  const [rotate, setRotate] = useState(false);
  const geometry = useMemo(() => new THREE.BoxGeometry(), []);

  useFrame((state, delta) => {
    //state is underscore, we put this because we're not using it
    if (rotate) {
      ref.current.rotation.x += rotate * delta;
      ref.current.rotation.y += 0.5 * rotate * delta;
      // ref.current.position.y = Math.sin(state.clock.getElapsedTime());
    }
  });

  useEffect(() => {
    console.log(ref.current.geometry.uuid);
  });
  useEffect(() => {
    console.log(ref);
  });

  return (
    <mesh
      {...props}
      ref={ref}
      // scale={hovered ? [1.1, 1.1, 1.1] : [1, 1, 1]}
      onPointerDown={(e) => setRotate(!rotate)}
      geometry={geometry}
      // onPointerLeave={(e) => setHover(false)}
      // onPointerOver={(e) => setHover(true)}
    >
      {/* <boxGeometry /> */}
      <meshBasicMaterial color={0x00ff00} wireframe />
    </mesh>
  );
}
