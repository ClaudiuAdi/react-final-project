import React from "react";
import logo_image from "../resources/logo-svg.svg";
import styles from "./Logo.module.css";
import { prata } from "../utils/fonts";

function Logo() {
  return (
    <div className={`${styles.logo} ${prata.className} `}>
      <img src={logo_image.src} alt="Horse Chess Piece" />
      <div>
        <span>Chess</span>
        <span>TRVL</span>
      </div>
    </div>
  );
}

export default Logo;
