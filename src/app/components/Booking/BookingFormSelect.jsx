import React from "react";
import styles from "./BookingFormSelect.module.css";

function BookingFormSelect(props) {
  return (
    <select
      name={props.name}
      value={props.value}
      onChange={props.onChange}
      className={props.className}
      required
      selected={10}
    >
      {props.name === "hotel" && (
        <option className={styles["select-hide-option"]} disabled selected />
      )}
      {props.selectArray.map((element, index) => (
        <option key={index} value={element}>
          {element}
        </option>
      ))}
    </select>
  );
}

export default BookingFormSelect;
