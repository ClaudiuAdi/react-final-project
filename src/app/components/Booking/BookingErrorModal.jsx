import React, { useContext } from "react";
import styles from "./BookingErrorModal.module.css";
import { BookingContext } from "../../store/form-context";
import { poppins } from "../../utils/fonts";

function BookingErrorModal() {
  const { setOpenModal, allowScroll } = useContext(BookingContext);

  const onClickHandler = () => {
    setOpenModal(false);
    allowScroll(true);
  };

  return (
    <div className={`${styles["booking-error-section"]} ${poppins.className}`}>
      <p>Form is not valid. Please correct the errors and try again.</p>
      <button
        className={`${styles["close-modal-button"]}`}
        onClick={onClickHandler}
      >
        X
      </button>
    </div>
  );
}

export default BookingErrorModal;
