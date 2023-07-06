import React from "react";
import styles from "./Welcome.module.css";
import { haviland, poppins } from "../utils/fonts";

function Welcome() {
  return (
    <>
      <section className={styles["welcome-text"]}>
        <h1>
          Hotels for
          <br />
          moments in emotions
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
