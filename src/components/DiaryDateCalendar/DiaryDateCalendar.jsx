import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDate } from "../../redux/diarySlice";
import styles from "./DiaryDateCalendar.module.css";

const DiaryDateCalendar = () => {
  const dispatch = useDispatch();
  const selectedDate = useSelector((state) => state.diary.selectedDate);

  const handleDateChange = (event) => {
    dispatch(setDate(event.target.value));
  };

  return (
    <input
      className={StyleSheet.inputCalendar}
      type="date"
      value={new Date(selectedDate).toISOString().split("T")[0]}
      onChange={handleDateChange}
    />
  );
};

export default DiaryDateCalendar;
