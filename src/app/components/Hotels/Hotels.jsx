import React from "react";
import styles from "./Hotels.module.css";
import hotelsJson from "../../data/hotels.json";
import { prata } from "../../utils/fonts";
import SectionTitle from "../SectionTitle";
import HotelCard from "./HotelCard";

const Hotels = () => {
  return (
    <>
      <SectionTitle title={"OUR HOTELS"} axis={"horizontal"} id="hotels" />
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
};

export default Hotels;
