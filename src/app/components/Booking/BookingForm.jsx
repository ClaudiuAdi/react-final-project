import React from "react";
import styles from "./BookingForm.module.css";
import BookingFormField from "./BookingFormField";
import { poppins } from "../../utils/fonts";
import hotelsJson from "../../data/hotels.json";
import BookingFormInput from "./BookingFormInput";

function BookingForm() {
  const hotelsArray = JSON.parse(JSON.stringify(hotelsJson)).map(
    (hotel) => hotel.name
  );
  const hotelNights = [3, 7, 10, 14, 30];

  return (
    <form className={styles.form + " " + poppins.className}>
      <div className={styles["form-inputs"]}>
        <BookingFormField
          category="input"
          id="name"
          inputType="text"
          label="Full Name"
          className={styles["form-input-name"] + " " + styles.field}
        />
        <BookingFormField
          category="select"
          id="hotel"
          label="Hotel"
          selectArray={hotelsArray}
          className={styles["form-input-hotel"] + " " + styles.field}
        />
        <div className={styles["form-grouped-inputs"]}>
          <BookingFormField
            category="input"
            id="booking-date"
            inputType="date"
            label="Check-in date"
            className={styles["form-input-booking-date"] + " " + styles.field}
          />
          <BookingFormField
            category="select"
            id="nights-number"
            label="Number of nights"
            selectArray={hotelNights}
            className={styles["form-input-nights-number"] + " " + styles.field}
          />
        </div>
        <BookingFormField
          category="input"
          id="guests-number"
          inputType="number"
          label="Number of guests"
          className={styles["form-input-guests-number"] + " " + styles.field}
        />

        <span className={styles["breakfast-input"] + " " + styles.field}>
          <label htmlFor="breakfast">Breakfast</label>
          <BookingFormInput inputType="checkbox" id="breakfast" />
        </span>
      </div>
      <button className={styles["button-submit"]}>SUBMIT</button>
    </form>
  );
}

export default BookingForm;
