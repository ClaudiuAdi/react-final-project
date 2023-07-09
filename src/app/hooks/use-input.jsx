import { useState } from "react";

const useInput = () => {
  const [enteredValue, setEnteredValue] = useState("");
  const [enteredValueIsValid, setEnteredValueIsValid] = useState(false);
  const [enteredValueFieldIsTouched, setEnteredValueFieldIsTouched] =
    useState(false);

  const enteredValueInputIsInvalid =
    !enteredValueIsValid && enteredValueFieldIsTouched;

  const enteredValueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const reset = () => {
    setEnteredValue("");
  };

  return {
    value: enteredValue,
    enteredValueInputIsInvalid,
    setEnteredValueIsValid,
    setEnteredValueFieldIsTouched,
    enteredValueChangeHandler,
    reset,
  };
};

export default useInput;
