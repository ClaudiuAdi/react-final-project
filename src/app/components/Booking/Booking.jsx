import React, { useContext } from "react";
import styles from "./Booking.module.css";
import reception_image from "../../resources/reception2.jpg";
import { poppins, prata } from "../../utils/fonts";
import BookingForm from "./BookingForm";

function Booking() {
  return (
    <>
      <section className={styles["booking-form-section"]}>
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
          <BookingForm />
        </div>
      </section>
    </>
  );
}

export default Booking;
