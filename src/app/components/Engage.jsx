import React from "react";
import styles from "./Engage.module.css";
import { prata, poppins } from "../utils/fonts";
import Image from "next/image";
import welcoming_beach from "../resources/welcoming_beach.jpg";
import sandals_royal from "../resources/royal-engage-image.jpg";

function Engage() {
  return (
    <div className={styles["engage-section"]}>
      <h2 className={prata.className + " " + styles["engage-title"]}>
        <span>Here, our hotels become </span>
        your paradise.
      </h2>
      <div className={poppins.className + " " + styles["engage-description"]}>
        We're inspired by travel's wonders and crafting unforgettable
        experiences. Our mission is to <strong>redefine</strong> your journey
        with
        <br />
        meticulous attention and exceptional moments.
      </div>
      <div className={styles["engage-more"]}>
        <Image className={styles.image} src={sandals_royal} alt="" />
        <div className={styles["engage-more-text-container"]}>
          <p className={prata.className + " " + styles["engage-more-text"]}>
            With Chess Travels you embark on a transformative journey of refined
            opulence. Immerse yourself in unrivaled luxury and experience
            unparalleled hospitality for an unforgettable stay.
          </p>

          <button className={poppins.className + " " + styles["engage-button"]}>
            LEARN MORE
          </button>
        </div>
      </div>
    </div>
  );
}

export default Engage;
