import Head from "next/head";
import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

import styles from "../styles/Home.module.css";

export default function ThreeJS() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Three JS</title>
        <meta name="description" content="Three JS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Testing <a href="https://nextjs.org">Three JS</a>
        </h1>
      </main>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
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
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}