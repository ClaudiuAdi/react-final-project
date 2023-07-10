const validateForm = (inputValues, setErrors) => {
  let errors = {};
  if (!inputValues.fullName.trim()) {
    errors.fullName = "Please enter a valid full name";
  }

  if (!inputValues.hotel.trim()) {
    errors.hotel = "Please select a hotel";
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const selectedDate = new Date(inputValues.checkInDate);
  selectedDate.setHours(0, 0, 0, 0);

  if (selectedDate < today) {
    errors.checkInDate = "The check-in date can not be in the past.";
  }

  if (!inputValues.checkInDate) {
    errors.checkInDate = "Please select the check-in date";
  }

  if (inputValues.numberOfGuests < 1 || inputValues.numberOfGuests > 3) {
    errors.numberOfGuests = "Please select a valid number of guests [1-3]";
  }

  if (!inputValues.numberOfGuests) {
    errors.numberOfGuests = "Please select the number of guests";
  }
  setErrors(errors);

  return Object.keys(errors).length === 0;
};

export default validateForm;
