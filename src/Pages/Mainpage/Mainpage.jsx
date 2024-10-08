import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import CaloriesForm from "../../components/CaloriesForm/CaloriesForm";
import Loader from "../../components/Loader/Loader";
import styles from "./MainPage.module.css";

const MainPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
    t;
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className={styles.container}>
      <Header />

      <main>
        <CaloriesForm />
      </main>
    </div>
  );
};

export default MainPage;
