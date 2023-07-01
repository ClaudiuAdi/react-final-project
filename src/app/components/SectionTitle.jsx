import React from "react";
import styles from "./SectionTitle.module.css";
import { poppins } from "../utils/fonts";

function SectionTitle(props) {
  return (
    <div className={styles["title-section"]}>
      <span className={styles.bar + " " + styles["first-bar"]}></span>
      <span className={styles["title-bar"] + " " + poppins.className}>
        {props.title}
      </span>
      <span className={styles.bar + " " + styles["last-bar"]}></span>
    </div>
  );
}

export default SectionTitle;
