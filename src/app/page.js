"use client";

import Image from "next/image";
import Header from "./components/Header";
import styles from "./page.module.css";
import welcome_image from "./resources/welcome_image4.jpg";
import riviera_welcome from "./resources/riviera-cancun-welcome-image.jpg";

import Welcome from "./components/Welcome";
import { prata, poppins } from "./utils/fonts";
import Engage from "./components/Engage";
import Hotels from "./components/Hotels";
import Advantages from "./components/Advantages";
import BookingForm from "./components/BookingForm";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <div className={styles.container + " " + prata.className}>
        <Header className={styles.header} />
        <Image
          className={styles.image}
          src={riviera_welcome}
          alt="Hotel Picture"
        />
        <Welcome />
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
