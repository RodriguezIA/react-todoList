import React, { useRef } from "react";
import { createPortal } from "react-dom";
import "./Modal.css";

export function Modal({ children, onClose }) {
  const modalRoot = document.getElementById("modal-root");
  const modalRef = useRef(null);

  const handleCloseModal = () => {
    onClose && onClose();
  };

  const handleOverlayClick = (event) => {
    if (event.target === modalRef.current) {
        console.log('hola')
      onClose && onClose();
    }
  };

  return createPortal(
    <div className="modal" ref={modalRef}>
      <div className="modal-overlay" onClick={handleOverlayClick}></div>
      <div className="modal-content">
        <span className="modal-close" onClick={handleCloseModal}>
          &times;
        </span>
        {children}
      </div>
    </div>,
    modalRoot
  );
}
