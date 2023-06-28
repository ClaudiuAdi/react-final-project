import React from "react";
import styles from "./Header.module.css";
import { poppins } from "../utils/fonts";

function Header() {
  return (
    <div className={styles.container}>
      <span>logo</span>
      <div className={styles.menu}>
        <a className={styles["link"] + " " + poppins.className} href="">
          Our Hotels
        </a>
        <a className={styles["link"] + " " + poppins.className} href="">
          Why book with us
        </a>
        <a className={styles["link"] + " " + poppins.className} href="">
          Book now
        </a>
      </div>
      {/* <a href="">Book now</a> */}
    </div>
  );
}

export default Header;
