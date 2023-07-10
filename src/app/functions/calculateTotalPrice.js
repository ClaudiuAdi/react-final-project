import hotelsJson from "../data/hotels.json";

const totalPrice = (inputsFields) => {
  const hotelObject = hotelsJson.find(
    (hotel) => hotel.name === inputsFields.hotel
  );

  return (
    hotelObject.price_ppn *
      inputsFields.numberOfGuests *
      inputsFields.numberOfNights +
    (inputsFields.breakfast
      ? hotelObject.breakfast_price *
        inputsFields.numberOfGuests *
        inputsFields.numberOfNights
      : 0)
  );
};

export default totalPrice;
