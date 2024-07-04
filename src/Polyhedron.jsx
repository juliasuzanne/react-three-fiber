import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

export default function Polyhedron({ position, polyhedron }) {
  const ref = useRef();
  const [count, setCount] = useState(0);

  useFrame((_, delta) => {
    ref.current.rotation.x += delta;
    ref.current.rotation.y += 0.5 * delta;
  });

  return (
    <mesh
      position={position}
      ref={ref}
      onPointerDown={() => {
        setCount((count + 1) % 3);
      }}
      geometry={polyhedron[count]}
    >
      {/* <axesHelper args={[5, 5, 5]} /> */}
      <meshBasicMaterial color={"lime"} wireframe />
    </mesh>
  );
}
