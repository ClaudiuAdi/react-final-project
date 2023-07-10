import React, { useState } from "react";
import styles from "./BookingForm.module.css";
import BookingFormField from "./BookingFormField";
import { poppins } from "../../utils/fonts";
import hotelsJson from "../../data/hotels.json";
import BookingFormInput from "./BookingFormInput";
import validateForm from "../../functions/validate";

export const hotelsArray = hotelsJson.map((hotel) => hotel.name);
const hotelNights = [3, 7, 10, 14, 30];

function BookingForm() {
  const [inputFields, setInputFields] = useState({
    fullName: "",
    hotel: "",
    checkInDate: "",
    numberOfNights: 10,
    numberOfGuests: 2,
    breakfast: false,
  });
  const [errors, setErrors] = useState({});

  let formIsValid = false;

  const handleChange = (e) => {
    setInputFields({ ...inputFields, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    setInputFields({ ...inputFields, breakfast: e.target.checked });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    formIsValid = validateForm(inputFields, setErrors);

    if (formIsValid) {
      alert(
        inputFields.fullName +
          " " +
          inputFields.checkInDate +
          " " +
          inputFields.numberOfGuests +
          " " +
          inputFields.hotel +
          " " +
          inputFields.numberOfNights +
          " " +
          inputFields.breakfast
      );
    }
  };

  // const finishSubmit = () => {
  //   alert(
  //     inputFields.fullName +
  //       " " +
  //       inputFields.checkInDate +
  //       " " +
  //       inputFields.numberOfGuests +
  //       " " +
  //       inputFields.hotel +
  //       " " +
  //       inputFields.numberOfNights +
  //       " " +
  //       inputFields.breakfast
  //   );
  // };

  // useEffect(() => {
  //   if (Object.keys(errors).length === 0 && submitting) {
  //     finishSubmit();
  //   }
  // }, [errors]);

  return (
    <form
      noValidate
      className={`${styles.form} ${poppins.className}`}
      onSubmit={handleSubmit}
    >
      <div className={styles["form-inputs"]}>
        <BookingFormField
          inputType="text"
          name="fullName"
          label="Full Name"
          onChange={handleChange}
          value={inputFields.fullName}
          className={`${styles.field} ${errors.fullName && styles.invalid}`}
          isValid={!errors.fullName}
        />
        <BookingFormField
          name="hotel"
          label="Hotel"
          selectArray={hotelsArray}
          onChange={handleChange}
          value={inputFields.hotel}
          className={`${styles.field} ${errors.hotel && styles.invalid}`}
          isValid={!errors.hotel}
        />
        <div className={styles["form-grouped-inputs"]}>
          <BookingFormField
            inputType="date"
            label="Check-in date"
            name="checkInDate"
            onChange={handleChange}
            value={inputFields.checkInDate}
            className={`${styles["form-input-booking-date"]} ${styles.field} ${
              errors.checkInDate && styles.invalid
            }`}
            isValid={!errors.checkInDate}
          />
          <BookingFormField
            name="numberOfNights"
            label="Number of nights"
            selectArray={hotelNights}
            onChange={handleChange}
            value={inputFields.numberOfNights}
            className={styles["form-input-nights-number"] + " " + styles.field}
            isValid
          />
        </div>
        <BookingFormField
          inputType="number"
          name="numberOfGuests"
          label="Number of guests"
          value={inputFields.numberOfGuests}
          onChange={handleChange}
          className={`${styles.field} ${
            errors.numberOfGuests && styles.invalid
          }`}
          isValid={!errors.numberOfGuests}
        />

        <span className={styles["breakfast-input"]}>
          <label htmlFor="breakfast">Breakfast</label>
          <BookingFormInput
            inputType="checkbox"
            id="breakfast"
            onChange={handleCheckboxChange}
            checked={inputFields.breakfast}
          />
        </span>
      </div>

      {Object.keys(errors).map((key) => (
        <p key={key} className={styles["error-text"]}>
          {errors[key]}
        </p>
      ))}

      <button className={styles["button-submit"]}>SUBMIT</button>
    </form>
  );
}

export default BookingForm;
