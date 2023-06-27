import React from "react";
import styles from "./Welcome.module.css";
import { Mr_De_Haviland } from "next/font/google";

const haviland = Mr_De_Haviland({
  subsets: ["latin"],
  weight: ["400"],
});

function Welcome() {
  return (
    <>
      <div className={styles["welcome-text"]}>
        <h1>
          <span className={haviland.className + " " + styles.handwritten}>
            <span className={styles["handwritten-first-letter"]}>M</span>
            emorable
          </span>
          <br />
          Hotels for
          <div>
            moments
            <span className={haviland.className + " " + styles.handwritten}>
              <span className={styles["handwritten-first-letter"]}>R</span>ich
            </span>
          </div>
          in emotions
        </h1>
        <h2 className={styles["encouraging-text"]}>
          Book now and get the best prices
        </h2>
        <div className={styles["welcome-buttons"]}>
          <button className={styles["booking-button"]}>BOOK NOW</button>
          <button className={styles["learn-more-button"]}>LEARN MORE</button>
        </div>
      </div>
    </>
  );
}

export default Welcome;
