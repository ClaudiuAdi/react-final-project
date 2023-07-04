import React from "react";
import styles from "./Footer.module.css";
import { poppins } from "../utils/fonts";
import {
  Lightning,
  Money,
  Medal,
  Users,
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  Circle,
} from "@phosphor-icons/react";
import Icon from "./Icon";

function Footer() {
  const socialIcons = [FacebookLogo, InstagramLogo, LinkedinLogo];

  return (
    <footer className={styles["footer-section"]}>
      <div className={styles["footer-image-overlay"] + " " + poppins.className}>
        <div className={styles["footer-contact"]}>
          <div className={styles["footer-logo"]}>Chess travels</div>
          <div className={styles["footer-contact-details"]}>
            <span>office@chesscoders.com</span>
            <span>+(40)742-049-501</span>
          </div>
          <div className={styles["footer-socials"]}>
            <Icon icon={FacebookLogo} weight="regular" />
            <Icon icon={InstagramLogo} weight="regular" />
            <Icon icon={LinkedinLogo} weight="regular" />
          </div>
        </div>
        <div className={styles["footer-menu-container"]}>
          <span className={styles["footer-bar"]}></span>
          <div className={styles["footer-menu"]}>
            <span>About us</span>
            <Icon
              icon={Circle}
              weight="fill"
              className={styles["footer-menu-container-circle"]}
            />
            <span>Gallery</span>
            <Icon
              icon={Circle}
              weight="fill"
              className={styles["footer-menu-container-circle"]}
            />
            <span>Support</span>
            <Icon
              icon={Circle}
              weight="fill"
              className={styles["footer-menu-container-circle"]}
            />
            <span>Terms & Conditions</span>
            <Icon
              icon={Circle}
              weight="fill"
              className={styles["footer-menu-container-circle"]}
            />
            <span>Privacy Policy</span>
          </div>
          <span className={styles["footer-bar"]}></span>
        </div>
        <div className={styles["footer-copyright"]}>All rights reserved © </div>
      </div>
    </footer>
  );
}

export default Footer;
