import React from "react";
import styles from "./Hotels.module.css";
import hotelsJson from "../../data/hotels.json";
import { prata, haviland } from "../../utils/fonts";
import SectionTitle from "../SectionTitle";
import HotelCard from "./HotelCard";

function Hotels() {
  // const hotelsArray = JSON.parse(JSON.stringify(hotelsJson));

  return (
    <>
      <SectionTitle title={"OUR HOTELS"} axis={"horizontal"} />
      <section className={styles["hotel-section"]}>
        <p className={styles["hotel-section-title"] + " " + prata.className}>
          Your paradise Retreat
        </p>
        <div className={styles["hotels"]}>
          {hotelsJson.map((hotel) => (
            <HotelCard key={hotel.name} hotel={hotel} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Hotels;
