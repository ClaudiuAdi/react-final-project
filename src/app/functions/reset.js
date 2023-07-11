const resetForm = (inputFields, setInputFields) => {
  setInputFields({
    fullName: "",
    hotel: "",
    checkInDate: "",
    numberOfNights: 10,
    numberOfGuests: 2,
    breakfast: false,
  });
};

export default resetForm;
