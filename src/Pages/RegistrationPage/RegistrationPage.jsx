import React, { useState } from "react";
import Header from "../../components/Header/Header";
import API from "../../API/api";
import styles from "./RegistrationPage.module.css";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await API.post("/register", formData);
      setSuccess("Registration successful! You can now log in.");
      setError("");

      navigate("/login");
    } catch (err) {
      setError("Registration failed. " + err.response.data.message);
      setSuccess("");
    }
  };

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.registerForm}>
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name*</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email*</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Password*</label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <Button type="submit">Registration</Button>
        </form>
        {error && <p className={styles.error}>{error}</p>}
        {success && <p className={styles.success}>{success}</p>}
      </div>
    </div>
  );
};

export default RegistrationPage;
