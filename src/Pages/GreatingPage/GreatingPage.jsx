import React from "react";
import { useNavigate } from "react-router-dom";

const GreetingPage = () => {
  const username = localStorage.getItem("username"); // Get the logged-in username
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user session and redirect to login
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    navigate("/login");
  };

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Welcome, {username}!</h1>
      <p>We're glad to have you back.</p>
      <p>Are you ready for some changes in your life?</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default GreetingPage;
