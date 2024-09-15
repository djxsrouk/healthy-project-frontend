import React, { useState } from "react";
import Header from "../../components/Header/Header";
import API from "../../API/api"; // Import the configured axios instance
import styles from "./DiaryPage.module.css";
import { useNavigate } from "react-router-dom";

const DiaryPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <h2>Welcome {user}</h2>
    </div>
  );
};

export default DiaryPage;
