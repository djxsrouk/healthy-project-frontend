import React, { useState } from "react";
import Header from "../../components/Header/Header";
import API from "../../API/api";
import styles from "./LoginPage.module.css";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Loader from "../../components/Loader/Loader"; // Import the Loader component

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false); // State for loading
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Show the loader when the form is submitted
    try {
      const response = await API.post("/login", formData);
      const { token, username } = response.data;

      // Store token and username in localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("username", username);

      setSuccess("Login successful!");
      setError("");
      setLoading(false); // Hide the loader after the request is successful

      console.log("Token stored:", localStorage.getItem("token"));
      console.log("Username stored:", localStorage.getItem("username"));

      navigate("/calculator");
    } catch (err) {
      setLoading(false); // Hide the loader in case of error
      setError("Login failed. " + (err.response?.data?.message || err.message));
      setSuccess("");
    }
  };

  // Show the loader if `loading` is true
  if (loading) {
    return <Loader />;
  }

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.loginForm}>
        <h2>Log In</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email *</label>
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
