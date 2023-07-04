import React from "react";
import styles from "./Welcome.module.css";
import { haviland, poppins } from "../utils/fonts";

function Welcome() {
  return (
    <>
      <section className={styles["welcome-text"]}>
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
              {/* <span className={styles["handwritten-first-letter"]}>R</span>ich */}
              {/* <span className={styles["handwritten-first-letter"]}>O</span>verflowing */}
              {/* <span className={styles["handwritten-first-letter"]}>L</span>uxuriant */}
              {/* <span className={styles["handwritten-first-letter"]}>L</span>avish */}
              {/* <span className={styles["handwritten-first-letter"]}>G</span>rand */}
              {/* <span className={styles["handwritten-first-letter"]}>P</span>lentiful */}
              {/* <span className={styles["handwritten-first-letter"]}>O</span>pulent */}
              <span className={styles["handwritten-first-letter"]}>A</span>
              bundant
            </span>
          </div>
          in emotions
        </h1>
        <h2 className={styles["encouraging-text"]}>
          Book now and get the best prices
        </h2>
        <div className={styles["welcome-buttons"]}>
          <button
            className={styles["booking-button"] + " " + poppins.className}
          >
            BOOK NOW
          </button>
          <button
            className={styles["learn-more-button"] + " " + poppins.className}
          >
            LEARN MORE
          </button>
        </div>
      </section>
    </>
  );
}

export default Welcome;
