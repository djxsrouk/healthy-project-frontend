import React, { useEffect } from "react";
import styles from "./Modal.module.css";
import Button from "../Button/Button";

const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (isOpen) {
      const handleEscapeKey = (e) => {
        if (e.key === "Escape") {
          onClose();
        }
      };

      document.addEventListener("keydown", handleEscapeKey);
      return () => {
        document.removeEventListener("keydown", handleEscapeKey);
      };
    }
  }, [isOpen, onClose]);

  const handleClickOutside = (e) => {
    if (e.target.className.includes("modalOverlay")) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={handleClickOutside}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          X
        </button>
        <h2>Your recommended daily calorie intake is</h2>
        <p className={styles.calories}>2800 kcal</p>
        <h3>Foods you should not eat</h3>
        <ol className={styles.foodList}>
          <li>Flour products</li>
          <li>Milk</li>
          <li>Red meat</li>
          <li>Smoked meats</li>
        </ol>
        <Button onClick={() => setModalOpen(false)}>Start losing weight</Button>
      </div>
    </div>
  );
};

export default Modal;
