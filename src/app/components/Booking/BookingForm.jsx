import React, { useEffect, useState } from "react";
import styles from "./BookingForm.module.css";
import BookingFormField from "./BookingFormField";
import { poppins } from "../../utils/fonts";
import hotelsJson from "../../data/hotels.json";
import BookingFormInput from "./BookingFormInput";
import useInput from "../../hooks/use-input";

const hotelsArray = JSON.parse(JSON.stringify(hotelsJson)).map(
  (hotel) => hotel.name
);
const hotelNights = [3, 7, 10, 14, 30];

// const today = new Date().toISOString().split("T")[0];
const today = new Date().toLocaleDateString("ro-RO");

function BookingForm() {
  const {
    value: enteredFullName,
    enteredValueInputIsInvalid: fullNameInputIsInvalid,
    setEnteredValueIsValid: setEnteredFullNameIsValid,
    setEnteredValueFieldIsTouched: setEnteredFullNameIsTouched,
    enteredValueChangeHandler: fullNameInputChangeHandler,
    reset: resetEnteredFullName,
  } = useInput();

  const {
    value: enteredDate,
    enteredValueInputIsInvalid: dateInputIsInvalid,
    setEnteredValueIsValid: setEnteredDateIsValid,
    setEnteredValueFieldIsTouched: setEnteredDateIsTouched,
    enteredValueChangeHandler: dateInputChangeHandler,
    reset: resetEnteredDate,
  } = useInput();

  const {
    value: enteredNumberOfGuests,
    enteredValueInputIsInvalid: numberOfGuestsIsInvalid,
    setEnteredValueIsValid: setEnteredNumberOfGuestsIsValid,
    setEnteredValueFieldIsTouched: setEnteredNumberOfGuestsIsTouched,
    enteredValueChangeHandler: numberOfGuestsInputChangeHandler,
    reset: resetEnteredNumberOfGuests,
  } = useInput();

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredFullNameIsTouched(true);
    setEnteredDateIsTouched(true);

    if (enteredFullName.trim() === "") {
      setEnteredFullNameIsValid(false);
      return;
    }

    if (enteredDate < today) {
      setEnteredDateIsValid(false);
      return;
    }

    setEnteredFullNameIsValid(true);
    setEnteredDateIsValid(true);

    resetEnteredFullName();
    resetEnteredDate();
  };

  return (
    <form
      noValidate
      className={styles.form + " " + poppins.className}
      onSubmit={formSubmissionHandler}
    >
      <div className={styles["form-inputs"]}>
        <BookingFormField
          category="input"
          id="name"
          inputType="text"
          label="Full Name"
          onChange={fullNameInputChangeHandler}
          value={enteredFullName}
          className={`${styles.field} ${
            fullNameInputIsInvalid && styles.invalid
          }`}
          isValid={!fullNameInputIsInvalid}
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
            className={`${styles["form-input-booking-date"]} ${styles.field} ${
              dateInputIsInvalid && styles.invalid
            }`}
            isValid={!dateInputIsInvalid}
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
      {fullNameInputIsInvalid && (
        <p className={styles["error-text"]}>FullName must not be empty.</p>
      )}
      <button className={styles["button-submit"]}>SUBMIT</button>
    </form>
  );
}

export default BookingForm;
