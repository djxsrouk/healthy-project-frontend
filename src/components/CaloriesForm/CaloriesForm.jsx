import React, { useState } from "react";
import styles from "./CaloriesForm.module.css";
import Modal from "../Modal/Modal";
import Button from "../Button/Button";

const CaloriesForm = () => {
  const [formData, setFormData] = useState({
    height: "",
    weight: "",
    age: "",
    desiredWeight: "",
    bloodType: "",
  });

  const [isModalOpen, setModalOpen] = useState(false);
  const [calories, setCalories] = useState(0);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRadioChange = (e) => {
    setFormData({
      ...formData,
      bloodType: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const calculatedCalories = 2800;
    setCalories(calculatedCalories);
    setModalOpen(true);
  };

  return (
    <div className={styles.calcContainer}>
      <h2>Calculate your daily calorie intake right now</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="height">Height*</label>
          <input
            type="number"
            name="height"
            id="height"
            value={formData.height}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="weight">Current weight*</label>
          <input
            type="number"
            name="weight"
            id="weight"
            value={formData.weight}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="age">Age*</label>
          <input
            type="number"
            name="age"
            id="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="desiredWeight">Desired weight*</label>
          <input
            type="number"
            name="desiredWeight"
            id="desiredWeight"
            value={formData.desiredWeight}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label>Blood type *</label>
          <div className={styles.bloodTypeContainer}>
            <label className={styles.radioLabel}>
              <input
                type="radio"
                name="bloodType"
                value="1"
                checked={formData.bloodType === "1"}
                onChange={handleRadioChange}
                className={styles.radioInput}
              />
              <span className={styles.customRadio}>1</span>
            </label>
            <label className={styles.radioLabel}>
              <input
                type="radio"
                name="bloodType"
                value="2"
                checked={formData.bloodType === "2"}
                onChange={handleRadioChange}
                className={styles.radioInput}
              />
              <span className={styles.customRadio}>2</span>
            </label>
            <label className={styles.radioLabel}>
              <input
                type="radio"
                name="bloodType"
                value="3"
                checked={formData.bloodType === "3"}
                onChange={handleRadioChange}
                className={styles.radioInput}
              />
              <span className={styles.customRadio}>3</span>
            </label>
            <label className={styles.radioLabel}>
              <input
                type="radio"
                name="bloodType"
                value="4"
                checked={formData.bloodType === "4"}
                onChange={handleRadioChange}
                className={styles.radioInput}
              />
              <span className={styles.customRadio}>4</span>
            </label>
          </div>
        </div>
        <Button type="submit">Start losing weight</Button>
      </form>
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}></Modal>
    </div>
  );
};

export default CaloriesForm;
