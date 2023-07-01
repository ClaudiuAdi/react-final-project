import React from "react";
import styles from "./SectionTitle.module.css";
import { poppins } from "../utils/fonts";

function SectionTitle(props) {
  return (
    <div className={styles["section-title-container"]}>
      <div className={styles["title-section"] + " " + styles[props.axis]}>
        <span className={styles.bar + " " + styles["first-bar"]}></span>
        <span className={styles["title-bar"] + " " + poppins.className}>
          {props.title}
        </span>
        <span className={styles.bar + " " + styles["last-bar"]}></span>
      </div>
    </div>
  );
}

export default SectionTitle;
