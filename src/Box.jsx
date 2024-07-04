import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";

export function Box(props) {
  const ref = useRef();

  useFrame((state, delta) => {
    //state is underscore, we put this because we're not using it
    ref.current.rotation.x += 1 * delta;
    ref.current.rotation.y += 1 * delta;
    ref.current.position.y = Math.sin(state.clock.getElapsedTime());
  });

  useEffect(() => {
    console.log(ref);
  });

  return (
    <mesh {...props} ref={ref}>
      <boxGeometry />
      <meshBasicMaterial color={0x00ff00} wireframe />
    </mesh>
  );
}
