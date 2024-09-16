import React, { useState, useEffect } from "react";
import DiaryDateCalendar from "../../components/DiaryDateCalendar/DiaryDateCalendar";
import DiaryAddProductForm from "../../components/DiaryAddProductForm/DiaryAddProductForm";
import DiaryProductsList from "../../components/DiaryProductsList/DiaryProductsList";

import styles from "./DiaryPage.module.css";
import Header from "../../components/Header/Header";
import Loader from "../../components/Loader/Loader";

const DiaryPage = () => {
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
        <DiaryDateCalendar />
        <DiaryAddProductForm />
        <DiaryProductsList />
      </div>
    </>
  );
};

export default DiaryPage;
