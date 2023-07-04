import React from "react";
import advantagesJson from "../../data/advantages.json";
import styles from "./Advantages.module.css";
import { Lightning, Money, Medal, Users } from "@phosphor-icons/react";
import { prata, poppins } from "../../utils/fonts";
import AdvantageCard from "./AdvantageCard";

function Advantages() {
  const advantagesArray = JSON.parse(JSON.stringify(advantagesJson));
  const icons = [Lightning, Money, Medal, Users];

  return (
    <section className={styles["advantages-section"]}>
      <div className={styles["advantages-container"]}>
        <div className={styles["advantages-image-overlay"]}>
          <h2 className={styles["advantages-title"] + " " + prata.className}>
            Why book with us
          </h2>
          <div className={styles.advantages + " " + poppins.className}>
            {advantagesArray.map((advantage, index) => (
              <AdvantageCard
                key={index}
                advantage={advantage}
                icon={icons.at(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Advantages;
