import React, { useContext, useState } from "react";
import styles from "./BookingForm.module.css";
import BookingFormField from "./BookingFormField";
import { poppins } from "../../utils/fonts";
import hotelsJson from "../../data/hotels.json";
import BookingFormInput from "./BookingFormInput";
import validateForm from "../../functions/validate";
import { BookingContext } from "../../store/form-context";
import Modal from "../Modal";
import BookingConfirmationModal from "./BookingConfirmationModal";
import BookingErrorModal from "./BookingErrorModal";

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
  const { openModal, setOpenModal, blockScroll } = useContext(BookingContext);

  const handleChange = (e) => {
    setInputFields({ ...inputFields, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    setInputFields({ ...inputFields, breakfast: e.target.checked });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    validateForm(inputFields, setErrors);

    setOpenModal(true);
    blockScroll();
  };

  const overlayModalStyles = {
    justifyContent: "center",
  };

  return (
    <>
      <form
        noValidate
        className={`${styles.form} ${poppins.className}`}
        onSubmit={handleSubmit}
      >
        <div className={styles["titles"]}>
          <h2 className={styles["form-title"]}>Booking Form</h2>
          <p className={styles["form-subtitle"]}>
            Fields marked with <span className={styles.required}>*</span> are
            mandatory
          </p>
        </div>
        <div className={styles["form-inputs"]}>
          <BookingFormField
            inputType="text"
            name="fullName"
            label="Full Name"
            onChange={handleChange}
            value={inputFields.fullName}
            className={`${styles.field} ${errors.fullName && styles.invalid}`}
            isInvalid={errors.fullName}
          />
          <BookingFormField
            name="hotel"
            label="Preferred hotel"
            selectArray={hotelsArray}
            onChange={handleChange}
            value={inputFields.hotel}
            className={`${styles.field} ${errors.hotel && styles.invalid}`}
            isInvalid={errors.hotel}
          />
          <div className={styles["form-grouped-inputs"]}>
            <BookingFormField
              inputType="date"
              label="Check-in date"
              name="checkInDate"
              onChange={handleChange}
              value={inputFields.checkInDate}
              className={`${styles["form-input-booking-date"]} ${
                styles.field
              } ${errors.checkInDate && styles.invalid}`}
              isInvalid={errors.checkInDate}
            />
            <BookingFormField
              name="numberOfNights"
              label="Number of nights"
              selectArray={hotelNights}
              onChange={handleChange}
              value={inputFields.numberOfNights}
              className={
                styles["form-input-nights-number"] + " " + styles.field
              }
              isInvalid={false}
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
            isInvalid={errors.numberOfGuests}
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
        <button className={styles["button-submit"]}>SUBMIT</button>
      </form>
      {/* verificam daca s-a apasat pe submit(sa se deschida modala) si daca nu avem erori */}
      {openModal && !Object.keys(errors).length && (
        <Modal
          position={document.documentElement.scrollTop}
          overlayModalStyles={overlayModalStyles}
          info={inputFields}
          setInputFields={setInputFields}
        >
          <BookingConfirmationModal
            info={inputFields}
            setInputFields={setInputFields}
          />
        </Modal>
      )}
      {/* verificam daca s-a apasat pe submit si daca avem erori */}
      {openModal && Object.keys(errors).length && (
        <Modal
          position={document.documentElement.scrollTop}
          overlayModalStyles={overlayModalStyles}
        >
          <BookingErrorModal />
        </Modal>
      )}
    </>
  );
}

export default BookingForm;
