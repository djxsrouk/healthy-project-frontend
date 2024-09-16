import React from "react";
import { useSelector } from "react-redux";
import styles from "./Sidebar.module.css";
import UserInfo from "../UserInfo/UserInfo"; // Assuming this exists

const Sidebar = () => {
  const selectedDate = useSelector((state) => state.diary.selectedDate); // Access selectedDate from Redux

  return (
    <>
      <div className={styles.sidebar}>
        <div className={styles.summary}>
          <h3 className={styles.title}>
            Summary for {new Date(selectedDate).toLocaleDateString()}
          </h3>
          <div className={styles.details}>
            <div className={styles.detailRow}>
              <span>Left</span>
              <span>000 kcal</span>
            </div>
            <div className={styles.detailRow}>
              <span>Consumed</span>
              <span>000 kcal</span>
            </div>
            <div className={styles.detailRow}>
              <span>Daily rate</span>
              <span>000 kcal</span>
            </div>
            <div className={styles.detailRow}>
              <span>n% of normal</span>
              <span>000 kcal</span>
            </div>
          </div>
        </div>
        <h4 className={styles.subTitle}>Food not recommended</h4>
        <p className={styles.dietText}>Your diet will be displayed here</p>
      </div>
    </>
  );
};

export default Sidebar;
