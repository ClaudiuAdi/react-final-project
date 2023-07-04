import React from "react";
import styles from "./AdvantageCard.module.css";
import Icon from "../Icon";

function AdvantageCard(props) {
  return (
    <div className={styles.advantage}>
      <Icon icon={props.icon} className={styles["advantage-icon"]} />
      <p className={styles["advantage-title"]}>{props.advantage.title}</p>
      <p className={styles["advantage-description"]}>
        {props.advantage.description}
      </p>
    </div>
  );
}

export default AdvantageCard;
