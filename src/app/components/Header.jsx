import React from "react";
import styles from "./Header.module.css";
import { poppins } from "../utils/fonts";

function Header() {
  return (
    <header className={styles.container}>
      <span className={styles["logo"]}>logo</span>
      <div className={styles.menu}>
        <a className={styles["link"] + " " + poppins.className} href="">
          Our Hotels
        </a>
        <a className={styles["link"] + " " + poppins.className} href="">
          Why book with us
        </a>
        <a className={styles["link"] + " " + poppins.className} href="">
          Testimonials
        </a>
      </div>
      {/* <a href="">Book now</a> */}
    </header>
  );
}

export default Header;
