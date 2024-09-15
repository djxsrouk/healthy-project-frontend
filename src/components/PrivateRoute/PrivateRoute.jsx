import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  // If the user is not authenticated, redirect to the login page
  if (!token) {
    return <Navigate to="/" />;
  }

  // Otherwise, render the child component (i.e., the protected route)
  return children;
};

export default PrivateRoute;
