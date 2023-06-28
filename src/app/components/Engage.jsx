import React from "react";
import styles from "./Engage.module.css";
import { prata, poppins } from "../utils/fonts";
import Image from "next/image";
import welcoming_beach from "../resources/welcoming_beach.jpg";

function Engage() {
  return (
    <div className={styles["engage-section"]}>
      <h2 className={prata.className + " " + styles["engage-title"]}>
        <span>Here, our hotels become </span>
        your paradise.
      </h2>
      <div className={poppins.className + " " + styles["engage-description"]}>
        We're inspired by travel's wonders and crafting unforgettable
        experiences. Our mission is to <strong>redefine</strong> your journey
        with meticulous attention and exceptional moments.
      </div>
      <div className={styles["engage-more"]}>
        <Image className={styles.image} src={welcoming_beach} alt="" />
        <p className={prata.className + " " + styles["engage-more-text"]}>
          Immerse yourself in a world of endless possibilities, surrounded by
          breathtaking culture, awe-inspiring nature and pristine beaches.
          Explore a realm where modern delights and natural wonders seamlessly
          blend together to create an unforgettable holiday experience.
        </p>
        <button className={poppins.className + " " + styles["engage-button"]}>
          LEARN MORE
        </button>
      </div>
    </div>
  );
}

export default Engage;
