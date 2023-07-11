import React, { useContext } from "react";
import styles from "./BookingConfirmationModal.module.css";
import hotelsJson from "../../data/hotels.json";
import Image from "next/image";
import calculateCheckoutDate from "../../functions/calculateCheckoutDate";
import totalPrice from "../../functions/calculateTotalPrice";
import { poppins, prata } from "../../utils/fonts";
import resetForm from "../../functions/reset";
import { BookingContext } from "../../store/form-context";

function BookingConfirmationModal(props) {
  const { setOpenModal, allowScroll } = useContext(BookingContext);

  const hotel = hotelsJson.find((hotel) => hotel.name === props.info.hotel);

  const checkOut = calculateCheckoutDate(
    props.info.checkInDate,
    parseInt(props.info.numberOfNights)
  );

  const totalBookingPrice = totalPrice(props.info);

  const onClickHandler = () => {
    setOpenModal(false);
    allowScroll(true);
    resetForm(props.info, props.setInputFields);
  };

  return (
    <div
      className={`${styles["booking-confirmation-section"]} ${poppins.className}`}
    >
      {/* <div className={styles["hotel-image-container"]}>
        <Image
          src={hotel.featured_image.src}
          alt="Aici trebuia sa fie imaginea hotelului selectat, dar dintr-un nu stiu ce motiv nu merge"
          width={200}
          height={200}
          className={styles.image}
        />
      </div> */}
      <h2 className={`${styles["fullname"]} ${prata.className}`}>
        {props.info.fullName}&apos;s booking
      </h2>
      <div className={styles["booking-details"]}>
        <p className={styles.hotel}>{props.info.hotel}</p>
        <div className={styles["booking-stay-information"]}>
          <p className={styles["number-of-guests"]}>
            <h3>Guests visiting</h3> {props.info.numberOfGuests}
          </p>
          <div className={styles.dates}>
            <h3>Dates</h3>
            <p className={styles["check-in-date"]}>
              Check-in date: {props.info.checkInDate}
            </p>
            <p className={styles["check-out"]}>Check-out date: {checkOut}</p>
          </div>
        </div>
        <table className={styles["table-details"]}>
          <thead>
            <tr>
              <th>Price per night</th>
              <th>Nights</th>
              <th>Breakfast included</th>
              <th>Breakfast price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{hotel.price_ppn} &#x20AC;</td>
              <td>{props.info.numberOfNights}</td>
              <td>{props.info.breakfast ? "yes" : "no"}</td>
              <td>
                {props.info.breakfast ? (
                  <span>{hotel.breakfast_price} &#x20AC;</span>
                ) : (
                  "-"
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className={`${styles["total-price"]} ${prata.className}`}>
        Total price: {totalBookingPrice}&#x20AC;
      </p>
      <button
        className={`${styles["close-modal-button"]}`}
        onClick={onClickHandler}
      >
        X
      </button>
    </div>
  );
}

export default BookingConfirmationModal;
