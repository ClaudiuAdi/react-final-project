import React from "react";
import styles from "./BookingFormField.module.css";
import BookingFormInput from "./BookingFormInput";
import BookingFormSelect from "./BookingFormSelect";

function BookingFormField(props) {
  const input =
    props.category === "input" ? (
      <BookingFormInput
        inputType={props.inputType}
        id={props.id}
        required
        className={props.className}
      />
    ) : (
      <BookingFormSelect
        id={props.id}
        selectArray={props.selectArray}
        className={
          styles["select-hide-option"] +
          " " +
          props.className +
          " " +
          styles.asd
        }
      />
    );

  return (
    <div className={`${props.className} ${styles.field}`}>
      {input}
      <div className={`${styles["underline"]}`}></div>
      <label className={styles["input-label"]} htmlFor={props.id}>
        {props.label}
      </label>
    </div>
  );
}

export default BookingFormField;
