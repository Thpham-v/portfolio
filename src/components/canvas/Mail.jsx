import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';


const Mail = () => {
  const mail = useGLTF('./email_logo/scene.gltf')
  return (
    <mesh>
      <hemisphereLight intensity={0.25} groundColor="black" />
      <directionalLight position={[0, 0, 1]} intensity={0.5} />
      <pointLight intensity={1} />
      <primitive object={mail.scene} scale={1} position={[0, -3, 0]} rotation={[0, Math.PI, 0]} />
    </mesh>
  )
}

const MailCanvas = () => {
  return (
    <Canvas frameloop='demand' gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />} >
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={4} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Mail />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default MailCanvas;