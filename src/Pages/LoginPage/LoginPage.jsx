import React, { useState } from "react";
import Header from "../../components/Header/Header";
import API from "../../API/api"; // Import the configured axios instance
import styles from "./LoginPage.module.css";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button"; // Import the custom Button component

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make POST request to the backend login API
      const response = await API.post("/login", formData);
      const { token } = response.data;

      // Store the token in localStorage
      localStorage.setItem("token", token);
      setSuccess("Login successful!");
      setError("");

      // Redirect to the main page after successful login
      navigate("/diary");
    } catch (err) {
      setError("Login failed. " + err.response.data.message);
      setSuccess("");
    }
  };

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.loginForm}>
        <h2>Log In</h2>
        <form onSubmit={handleSubmit}>
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
          <Button type="submit">Log in</Button>
        </form>
        {error && <p className={styles.error}>{error}</p>}
        {success && <p className={styles.success}>{success}</p>}
      </div>
    </div>
  );
};

export default LoginPage;
