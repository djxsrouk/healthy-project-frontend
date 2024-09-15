import React from "react";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  // If the user is authenticated, redirect to the diary page
  if (token) {
    return <Navigate to="/diary" />;
  }

  // Otherwise, render the child component (i.e., the public route)
  return children;
};

export default PublicRoute;
