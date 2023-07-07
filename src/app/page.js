"use client";

import Header from "./components/Header";
import styles from "./page.module.css";
import Welcome from "./components/Welcome";
import { prata } from "./utils/fonts";
import Engage from "./components/Engage";
import Hotels from "./components/Hotels/Hotels";
import Advantages from "./components/Advantages/Advantages";
import Booking from "./components/Booking/Booking";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import WelcomeImage from "./components/WelcomeImage";

export default function Home() {
  return (
    <>
      <div className={styles.container + " " + prata.className}>
        <Header className={styles.header} />
        <WelcomeImage className={styles["welcoming-image"]} />
        <Welcome className={styles["welcoming-text"]} />
      </div>
      <Engage />
      <Hotels />
      <Advantages />
      <Testimonials />
      <Booking />
      <Footer />
    </>
  );
}
