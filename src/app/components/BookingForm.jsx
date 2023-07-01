import React from "react";
import styles from "./BookingForm.module.css";
import hotelsJson from "../data/hotels.json";
import reception_image from "../resources/reception2.jpg";
import Image from "next/image";
import { poppins, prata } from "../utils/fonts";
import SectionTitle from "./SectionTitle";

function BookingForm() {
  const hotelsArray = JSON.parse(JSON.stringify(hotelsJson));

  return (
    <div>
      {/* <SectionTitle title={"BOOKING"} /> */}
      <div className={styles["booking-form-section"]}>
        <span className={styles["section-title-tag"] + " " + poppins.className}>
          BOOK NOW
        </span>
        <h2
          className={
            styles["section-engaging-subtitle"] + " " + prata.className
          }
        >
          Take Action and Make
          <br />
          Your Aspirations Come True
        </h2>
        <div className={styles["form-card"]}>
          <img
            src={reception_image.src}
            alt="reception image"
            className={styles["form-image"]}
          />
          <form action="" className={styles.form + " " + poppins.className}>
            <div className={styles["form-inputs"]}>
              <div className={styles["form-input-name"] + " " + styles.field}>
                <input type="text" id="name" required />
                <div className={styles["underline"]}></div>
                <label className={styles["input-label"]} htmlFor="name">
                  Full name
                </label>
              </div>
              <div className={styles["form-input-hotel"] + " " + styles.field}>
                <select name="hotel" id="hotel" required>
                  <option
                    className={styles["select-hide-option"]}
                    disabled
                    selected
                  />
                  {hotelsArray.map((hotel) => (
                    <option key={hotel.name} value={hotel.name}>
                      {hotel.name}
                    </option>
                  ))}
                </select>
                <div className={styles["underline"]}></div>
                <label className={styles["input-label"]} htmlFor="hotel">
                  Hotel
                </label>
              </div>
              <div className={styles["form-grouped-inputs"]}>
                <div
                  className={
                    styles["form-input-booking-date"] + " " + styles.field
                  }
                >
                  <input type="date" id="booking-date" required />
                  <div className={styles["underline"]}></div>
                  <label
                    className={styles["input-label"]}
                    htmlFor="booking-date"
                  >
                    Check-in date
                  </label>
                </div>
                <div
                  className={
                    styles["form-input-nights-number"] + " " + styles.field
                  }
                >
                  <select name="nights-number" id="nights-number" required>
                    <option value="10">10</option>
                    <option value="5">5</option>
                    <option value="3">3</option>
                    <option value="2">2</option>
                  </select>
                  <div className={styles["underline"]}></div>
                  <label
                    className={styles["input-label"]}
                    htmlFor="nights-number"
                  >
                    Number of nights
                  </label>
                </div>
              </div>
              <div
                className={
                  styles["form-input-guests-number"] + " " + styles.field
                }
              >
                <input type="number" id="guests-number" required />
                <div className={styles["underline"]}></div>
                <label
                  className={styles["input-label"]}
                  htmlFor="guests-number"
                >
                  Number of guests
                </label>
              </div>

              <span className={styles["breakfast-input"] + " " + styles.field}>
                <label htmlFor="breakfast">Breakfast</label>
                <input type="checkbox" id="breakfast" />
              </span>
            </div>
            <button className={styles["button-submit"]}>SUBMIT</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BookingForm;
