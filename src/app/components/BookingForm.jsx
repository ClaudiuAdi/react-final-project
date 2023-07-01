import React from "react";
import styles from "./BookingForm.module.css";
import hotelsJson from "../data/hotels.json";
import reception_image from "../resources/reception2.jpg";
import Image from "next/image";
import { poppins } from "../utils/fonts";
import SectionTitle from "./SectionTitle";

function BookingForm() {
  const hotelsArray = JSON.parse(JSON.stringify(hotelsJson));

  return (
    <>
      <SectionTitle title={"BOOKING"} />
      <div className={styles["booking-form-section"]}>
        <div className={styles["form-card"]}>
          <img
            src={reception_image.src}
            alt="reception image"
            className={styles["form-image"]}
          />
          <form action="" className={styles.form + " " + poppins.className}>
            <div className={styles["form-inputs"]}>
              <div className={styles["form-input-name"] + " " + styles.field}>
                <label htmlFor="name">Full name</label>
                <input type="text" id="name"></input>
              </div>
              <div className={styles["form-input-hotel"] + " " + styles.field}>
                <label htmlFor="hotel">Hotel</label>
                <select name="hotel" id="hotel">
                  {hotelsArray.map((hotel) => (
                    <option key={hotel.name} value={hotel.name}>
                      {hotel.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className={styles["form-grouped-inputs"]}>
                <div className={styles["form-input-booking-date"]}>
                  <label htmlFor="booking-date">Check in date</label>
                  <input type="date" id="booking-date" />
                </div>
                <div className={styles["form-input-nights-number"]}>
                  <label htmlFor="nights-number">Number of nights</label>
                  <select name="nights-number" id="nights-number">
                    <option value="10">10</option>
                    <option value="5">5</option>
                    <option value="3">3</option>
                    <option value="2">2</option>
                  </select>
                </div>
              </div>
              <div
                className={
                  styles["form-input-guests-number"] + " " + styles.field
                }
              >
                <label htmlFor="guests-number">Number of guests</label>
                <input type="number" id="guests-number" />
              </div>
              <span className={styles["breakfast-input"] + " " + styles.field}>
                <label htmlFor="breakfast">Breakfast</label>
                <input
                  type="checkbox"
                  id="breakfast"
                  className={styles.checkboxInput}
                />
              </span>
            </div>
            <button className={styles["button-submit"]}>SUBMIT</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default BookingForm;
