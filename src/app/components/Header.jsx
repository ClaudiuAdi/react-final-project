import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.container}>
      <span>logo</span>
      <div className={styles.menu}>
        <a className={styles["link"]} href="">
          Our Hotels
        </a>
        <a className={styles["link"]} href="">
          Advantages
        </a>
        <a className={styles["link"]} href="">
          Testimonials
        </a>
      </div>
      {/* <a href="">Book now</a> */}
    </div>
  );
}

export default Header;
