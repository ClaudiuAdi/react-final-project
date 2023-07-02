"use client";

import Image from "next/image";
import Header from "./components/Header";
import styles from "./page.module.css";
import Welcome from "./components/Welcome";
import { prata, poppins } from "./utils/fonts";
import Engage from "./components/Engage";
import Hotels from "./components/Hotels";
import Advantages from "./components/Advantages";
import BookingForm from "./components/BookingForm";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
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
      <BookingForm />
      <Footer />
    </>
  );
}
