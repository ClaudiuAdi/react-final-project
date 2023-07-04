import React from "react";
import styles from "./HotelCard.module.css";
import StarIcon from "../StarIcon";
import { prata, poppins } from "../../utils/fonts";

function HotelCard(props) {
  return (
    <div className={styles["hotel"]}>
      <div className={styles["hotel-image-container"]}>
        <img
          src={props.hotel.featured_image}
          alt=""
          className={styles["hotel-image"]}
        />
      </div>
      <div className={styles["hotel-information"] + " " + poppins.className}>
        <p className={styles["hotel-title"] + " " + prata.className}>
          {props.hotel.name}
        </p>
        <p className={styles["hotel-price"]}>
          {props.hotel.price_ppn}&#x20AC;<span>/night</span>
        </p>
        <p className={styles["hotel-breakfast-price"]}>
          {props.hotel.breakfast_price}&#x20AC;/breakfast
        </p>
        <div className={styles["hotel-extra-info-rating"]}>
          <StarIcon count={props.hotel.star_rating} />
        </div>
      </div>
    </div>
  );
}

export default HotelCard;
