const calculateCheckoutDate = (checkInDate, numberOfNights) => {
  const checkoutDate = new Date(checkInDate);
  checkoutDate.setDate(checkoutDate.getDate() + numberOfNights);
  return checkoutDate.toISOString().slice(0, 10);
};

export default calculateCheckoutDate;
