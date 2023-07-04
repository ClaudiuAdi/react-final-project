import React from "react";

function BookingFormSelect(props) {
  return (
    <select name={props.id} id={props.id} required>
      {props.id === "hotel" && (
        <option className={props.className} disabled selected />
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
