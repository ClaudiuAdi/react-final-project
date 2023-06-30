import Image from "next/image";
import React from "react";
import advantagesJson from "../data/advantages.json";
import styles from "./Advantages.module.css";
import { IonIcon } from "@ionic/react";
import {
  flashSharp,
  cashSharp,
  ribbonSharp,
  peopleSharp,
} from "ionicons/icons";
import { prata, poppins } from "../utils/fonts";

function Advantages() {
  const advantagesArray = JSON.parse(JSON.stringify(advantagesJson));
  const icons = [flashSharp, cashSharp, ribbonSharp, peopleSharp];

  return (
    <div className={styles["advantages-section"]}>
      <div className={styles["advantages-image-overlay"]}>
        <h2 className={styles["advantages-title"] + " " + prata.className}>
          Advantages
        </h2>
        <div className={styles.advantages + " " + poppins.className}>
          {advantagesArray.map((advantage, index) => (
            <div key={advantage.title} className={styles.advantage}>
              <IonIcon
                icon={icons.at(index)}
                className={styles["advantage-icon"]}
              />
              <p className={styles["advantage-title"]}>{advantage.title}</p>
              <p className={styles["advantage-description"]}>
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Advantages;
