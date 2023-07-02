import React from "react";
import styles from "./Footer.module.css";
import { poppins } from "../utils/fonts";
import { IonIcon } from "@ionic/react";
import {
  logoFacebook,
  logoInstagram,
  logoLinkedin,
  ellipseSharp,
} from "ionicons/icons";

function Footer() {
  const socialIcons = [logoFacebook, logoInstagram, logoLinkedin];

  return (
    <div className={styles["footer-section"]}>
      <div className={styles["footer-image-overlay"] + " " + poppins.className}>
        <div className={styles["footer-contact"]}>
          <div className={styles["footer-logo"]}>Chess travels</div>
          <div className={styles["footer-contact-details"]}>
            <span>office@chesscoders.com</span>
            <span>+(40)742-049-501</span>
          </div>
          <div className={styles["footer-socials"]}>
            <IonIcon icon={logoFacebook} />
            <IonIcon icon={logoInstagram} />
            <IonIcon icon={logoLinkedin} />
          </div>
        </div>
        <div className={styles["footer-menu-container"]}>
          <span className={styles["footer-bar"]}></span>
          <div className={styles["footer-menu"]}>
            <span>About us</span>
            <IonIcon
              icon={ellipseSharp}
              className={styles["footer-menu-container-circle"]}
            />
            <span>Gallery</span>
            <IonIcon
              icon={ellipseSharp}
              className={styles["footer-menu-container-circle"]}
            />
            <span>Support</span>
            <IonIcon
              icon={ellipseSharp}
              className={styles["footer-menu-container-circle"]}
            />
            <span>Terms & Conditions</span>
            <IonIcon
              icon={ellipseSharp}
              className={styles["footer-menu-container-circle"]}
            />
            <span>Privacy Policy</span>
          </div>
          <span className={styles["footer-bar"]}></span>
        </div>
        <div className={styles["footer-copyright"]}>All rights reserved © </div>
      </div>
    </div>
  );
}

export default Footer;
