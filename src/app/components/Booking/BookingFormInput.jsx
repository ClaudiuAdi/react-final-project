import React from "react";

function BookingFormInput(props) {
  return (
    <input
      required={props.inputType !== "checkbox"}
      type={props.inputType}
      value={props.value}
      onChange={props.onChange}
      className={props.className}
      name={props.name}
      id={props.id}
      checked={props.checked}
    />
  );
}

export default BookingFormInput;
