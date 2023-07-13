import React, { forwardRef } from "react";
import advantagesJson from "../../data/advantages.json";
import styles from "./Advantages.module.css";
import { Lightning, Money, Medal, Users } from "@phosphor-icons/react";
import { prata, poppins } from "../../utils/fonts";
import AdvantageCard from "./AdvantageCard";

const Advantages = forwardRef(function (props, ref) {
  const advantagesArray = JSON.parse(JSON.stringify(advantagesJson));
  const icons = [Lightning, Money, Medal, Users];

  return (
    <section className={styles["advantages-section"]} id="advantages">
      <div className={styles["advantages-container"]}>
        <div className={styles["advantages-image-overlay"]} ref={ref}>
          <h2
            className={
              styles["advantages-title"] +
              " " +
              prata.className +
              " " +
              props.className
            }
          >
            Why book with us
          </h2>
          <div
            className={
              styles.advantages +
              " " +
              poppins.className +
              " " +
              props.className
            }
          >
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
});

export default Advantages;
