import { useGLTF } from "@react-three/drei";
import birdScene from "../assets/models/bird.glb";

const Bird = () => {
  const { scene, animations } = useGLTF(birdScene);

  return (
    <mesh position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Bird;
