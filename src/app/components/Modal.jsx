import React, { useRef, useContext } from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.css";
import { ModalContext } from "../store/modal-context";
import resetForm from "../functions/reset";

function Modal({
  children,
  position,
  overlayModalStyles,
  setInputFields = () => {},
  info = {},
}) {
  const { setOpenModal, allowScroll } = useContext(ModalContext);
  const modalRef = useRef();
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setOpenModal(false);
      allowScroll();
      Object.keys(info).length && resetForm(info, setInputFields);
    }
  };

  const modalStyle = {
    top: position,
    ...overlayModalStyles,
  };

  return createPortal(
    <div
      className={styles.modalBackground}
      style={modalStyle}
      onClick={(e) => closeModal(e)}
      ref={modalRef}
    >
      {children}
    </div>,
    document.body
  );
}

export default Modal;
