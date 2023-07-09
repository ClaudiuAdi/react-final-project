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
        value={props.value}
        onChange={props.onChange}
      />
    ) : (
      <BookingFormSelect
        id={props.id}
        selectArray={props.selectArray}
        className={styles["select-hide-option"]}
      />
    );

  return (
    <div className={`${props.className} ${styles.field}`}>
      {props.category === "input" ? (
        <BookingFormInput
          inputType={props.inputType}
          id={props.id}
          required
          value={props.value}
          onChange={props.onChange}
        />
      ) : (
        <BookingFormSelect
          id={props.id}
          selectArray={props.selectArray}
          className={styles["select-hide-option"]}
        />
      )}
      {props.isValid && <div className={`${styles["underline"]}`}></div>}
      <label className={styles["input-label"]} htmlFor={props.id}>
        {props.label}
      </label>
    </div>
  );
}

export default BookingFormField;
