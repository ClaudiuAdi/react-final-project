import React, { useEffect, useState } from "react";
import styles from "./Hotels.module.css";
import hotelsJson from "../data/hotels.json";
import Image from "next/image";
import { prata, poppins, haviland } from "../utils/fonts";
import StarIcon from "./StarIcon";

function Hotels() {
  const dataArray = JSON.parse(JSON.stringify(hotelsJson));

  return (
    <div className={styles["hotel-section"]}>
      <p className={styles["hotel-section-title"] + " " + haviland.className}>
        <span>O</span>ur hotels
      </p>
      <div className={styles["hotels"]}>
        {dataArray.map((hotel) => (
          <div key={hotel.name} className={styles["hotel"]}>
            <img
              src={hotel.featured_image}
              alt=""
              className={styles["hotel-image"]}
            />
            <div
              className={styles["hotel-information"] + " " + poppins.className}
            >
              <p className={styles["hotel-title"] + " " + prata.className}>
                {hotel.name}
              </p>
              <p className={styles["hotel-price"]}>
                {hotel.price_ppn}&#x20AC;<span>/night</span>
              </p>
              <p className={styles["hotel-breakfast-price"]}>
                {hotel.breakfast_price}&#x20AC;/breakfast
              </p>
              <div className={styles["hotel-extra-info-rating"]}>
                <StarIcon count={hotel.star_rating} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hotels;
