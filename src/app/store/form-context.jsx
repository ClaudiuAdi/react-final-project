import { createContext, useState } from "react";
import { useScrollBlock } from "../hooks/useScrollBlock";

//Defining context
export const BookingContext = createContext(undefined);

//Context Wrapper
export function BookingContextProvider({ children }) {
  const [openModal, setOpenModal] = useState(false);
  const [blockScroll, allowScroll] = useScrollBlock();

  return (
    <BookingContext.Provider
      value={{
        openModal,
        setOpenModal,
        blockScroll,
        allowScroll,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}
