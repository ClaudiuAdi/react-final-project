import { createContext, useState } from "react";
import { useScrollBlock } from "../hooks/useScrollBlock";

//Defining context
export const ModalContext = createContext(undefined);

//Context Wrapper
export function ModalContextProvider({ children }) {
  const [openModal, setOpenModal] = useState(false);
  const [blockScroll, allowScroll] = useScrollBlock();

  return (
    <ModalContext.Provider
      value={{
        openModal,
        setOpenModal,
        blockScroll,
        allowScroll,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}
