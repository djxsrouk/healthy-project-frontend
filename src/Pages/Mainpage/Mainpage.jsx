import React from "react";
import Header from "../../components/Header/Header";
import CaloriesForm from "../../components/CaloriesForm/CaloriesForm";
import styles from "./MainPage.module.css";

const MainPage = () => {
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
