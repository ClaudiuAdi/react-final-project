import React from "react";
import styles from "./WelcomeImage.module.css";
import riviera_welcome from "../resources/riviera-cancun.jpg";
import { poppins } from "../utils/fonts";

function WelcomeImage() {
  return (
    <div className={styles["image-container"]}>
      <button className={styles["book-now-button"] + " " + poppins.className}>
        BOOK NOW
      </button>
      <img
        className={styles.image}
        src={riviera_welcome.src}
        alt="Hotel Picture"
      />
    </div>
  );
}

export default WelcomeImage;
