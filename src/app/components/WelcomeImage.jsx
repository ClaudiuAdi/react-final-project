import React from "react";
import styles from "./WelcomeImage.module.css";
import riviera_welcome from "../resources/riviera-cancun-welcome-image2.jpg";
import sentori_welcome from "../resources/tui-sentori-welcome-image.jpeg";
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
