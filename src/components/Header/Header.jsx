import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import Logo from "../../images/Logo/Logo.png";
import Sidebar from "../Sidebar/Sidebar";
import UserInfo from "../UserInfo/UserInfo";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUsername = localStorage.getItem("username");

    if (token && storedUsername) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [isLoggedIn]);

  return (
    <header className={styles.header}>
      <NavLink to="/" className={styles.logo}>
        <img className={styles.logoImg} src={Logo} alt="Logo" />
        <span className={styles.slimWord}>Slim</span>
        <span className={styles.momWord}>Mom</span>
      </NavLink>

      <nav className={styles.nav}>
        {isLoggedIn ? (
          <>
            <NavLink
              to="/diary"
              className={({ isActive }) =>
                isActive ? styles.activeLink : styles.inactiveLink
              }
            >
              Diary
            </NavLink>
            <NavLink
              to="/calculator"
              className={({ isActive }) =>
                isActive ? styles.activeLink : styles.inactiveLink
              }
            >
              Calculator
            </NavLink>
            <UserInfo />
            <Sidebar />
          </>
        ) : (
          <>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? styles.activeLink : styles.inactiveLink
              }
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              className={({ isActive }) =>
                isActive ? styles.activeLink : styles.inactiveLink
              }
            >
              Register
            </NavLink>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
