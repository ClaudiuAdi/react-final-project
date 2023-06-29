"use client";

import Image from "next/image";
import Header from "./components/Header";
import styles from "./page.module.css";
import welcome_image from "./resources/welcome_image4.jpg";
import Welcome from "./components/Welcome";
import { prata, poppins } from "./utils/fonts";
import Engage from "./components/Engage";
import Hotels from "./components/Hotels";

export default function Home() {
  return (
    <>
      <div className={styles.container + " " + prata.className}>
        <Header className={styles.header} />
        <Image
          className={styles.image}
          src={welcome_image}
          alt="Hotel Picture"
        />
        <Welcome />
      </div>
      <Engage />
      <Hotels />
    </>
  );
}
