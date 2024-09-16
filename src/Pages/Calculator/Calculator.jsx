import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CaloriesForm from "../../components/CaloriesForm/CaloriesForm";
import styles from "./Calculator.module.css";
import Header from "../../components/Header/Header";
import Loader from "../../components/Loader/Loader";

const Calculator = () => {
  const [loading, setLoading] = useState(true);
  const username = localStorage.getItem("username");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Header />
      <div className={styles.container}>
        <CaloriesForm />
      </div>
    </>
  );
};

export default Calculator;
