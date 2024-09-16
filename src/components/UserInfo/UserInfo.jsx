import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./UserInfo.module.css";

const UserInfo = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    navigate("/login");
  };

  return (
    <div className={styles.userSection}>
      {username && (
        <>
          <span className={styles.username}>{username}</span>
          <div className={styles.separator}></div>
          <button onClick={handleLogout} className={styles.logoutButton}>
            Log out
          </button>
        </>
      )}
    </div>
  );
};

export default UserInfo;
