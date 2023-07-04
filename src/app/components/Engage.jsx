import React from "react";
import styles from "./Engage.module.css";
import { prata, poppins } from "../utils/fonts";
import Image from "next/image";
import sandals_royal from "../resources/royal-engage-image.jpg";

function Engage() {
  return (
    <section className={styles["engage-section"]}>
      <h2 className={prata.className + " " + styles["engage-title"]}>
        <span>Here, our hotels become </span>
        your paradise.
      </h2>
      <div className={poppins.className + " " + styles["engage-description"]}>
        We draw inspiration from the splendors of luxury travel and curating
        extraordinary experiences. Our mission is to redefine your lavish
        journey with utmost precision and moments of grandeur.
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
    </section>
  );
}

export default Engage;
