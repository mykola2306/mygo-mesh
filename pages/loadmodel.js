import Head from "next/head";
import Link from 'next/link'
import React, { useRef, useState, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

// Loaders
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

import GoBackButton from "../src/components/GoBackButton/GoBackButton";

import styles from "../styles/Home.module.css";

// LOADER
import { Html, useProgress } from '@react-three/drei'
function Loader() {
  const { progress } = useProgress()
  return <Html center>{progress} % loaded</Html>
}
// LOADER

const Model = () => {
  // const gltf = useLoader(GLTFLoader, "./Finished_Scene.glb");
  const gltf = useLoader(GLTFLoader, "./scenes/Finished_Scene.glb");
  return (
    <>
      <primitive object={gltf.scene} scale={0.4} />
    </>
  );
};

export default function LoadModel() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Three JS</title>
        <meta name="description" content="Three JS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <GoBackButton />

      <Canvas camera={{ position: [0, 2, 6] }}>
        <Suspense fallback={<Loader />}>
          <Model />
        </Suspense>
        {/* <Model /> */}
        <OrbitControls />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1.2, -1, 0]} />
        <Box position={[1.2, -1, 0]} />
      </Canvas>
    </div>
  );
}

function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => {
    // console.log(state, delta)
    // console.log(hovered)
    // return hovered ? mesh.current.rotation.y += 0.01 : mesh.current.rotation.x += 0.01;
    return active ? (mesh.current.rotation.x += 0.02, mesh.current.rotation.y += 0.02) : mesh.current.rotation.x += 0.01;
  })
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'green'} />
    </mesh>
  )
}