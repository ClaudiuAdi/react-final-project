import React from "react";
import styles from "./BookingFormField.module.css";
import BookingFormInput from "./BookingFormInput";
import BookingFormSelect from "./BookingFormSelect";

function BookingFormField(props) {
  const input = props.inputType ? (
    <BookingFormInput
      inputType={props.inputType}
      required
      value={props.value}
      onChange={props.onChange}
      name={props.name}
    />
  ) : (
    <BookingFormSelect
      name={props.name}
      selectArray={props.selectArray}
      onChange={props.onChange}
      value={props.value}
    />
  );

  return (
    <div className={`${props.className} ${styles.field}`}>
      {input}
      {props.isValid && <div className={`${styles["underline"]}`}></div>}
      <label className={styles["input-label"]} htmlFor={props.name}>
        {props.label} <span className={styles.required}>*</span>
      </label>
    </div>
  );
}

export default BookingFormField;
