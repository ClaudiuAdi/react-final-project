import React from "react";

function BookingFormInput(props) {
  return (
    <input
      required={props.inputType !== "checkbox"}
      type={props.inputType}
      id={props.id}
      value={props.value}
      onChange={props.onChange}
      className={props.className}
    />
  );
}

export default BookingFormInput;
