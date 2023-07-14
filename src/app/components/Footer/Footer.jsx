import React from "react";
import styles from "./Footer.module.css";
import { poppins } from "../../utils/fonts";
import FooterSocials from "./FooterSocials";
import FooterMenu from "./FooterMenu";
import FooterContactDetails from "./FooterContactDetails";
import Logo from "../Logo";

const year = new Date().getFullYear();
function Footer() {
  return (
    <footer className={styles["footer-section"]}>
      <div className={styles["footer-image-overlay"] + " " + poppins.className}>
        <div className={styles["footer-contact"]}>
          <Logo className={styles["footer-logo"]} />
          <FooterContactDetails className={styles["footer-contact-details"]} />
          <FooterSocials className={styles["footer-socials"]} />
        </div>
        <FooterMenu className={styles["footer-menu-container"]} />
        <div className={styles["footer-copyright"]}>
          All rights reserved © {year}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
