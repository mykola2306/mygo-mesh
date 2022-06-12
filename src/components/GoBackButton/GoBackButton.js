import Head from "next/head";
import Link from 'next/link'
import React from 'react'

import styles from "./GoBackButton.module.css";

export default function GoBackButton() {
  return (
    <Link href="/">
      <div className={styles.goBackBtn}>
        <div className={styles.goBackBtn__text}>
          <div>Go</div>
          <div>Back</div>
        </div>
      </div>
    </Link>
  );
}