import Head from "next/head";
import Link from 'next/link'
import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

import GoBackButton from "../src/components/GoBackButton/GoBackButton";

import styles from "../styles/Home.module.css";

export default function LoadModel() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Image Test</title>
        <meta name="description" content="Image Test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <GoBackButton />

      <div className="images">
        <img src="livingroom-min.png" alt="" />
        <img src="kitchen-min.png" alt="" />
      </div>
    </div>
  );
}