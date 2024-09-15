import React from "react";
import { NavLink } from "react-router-dom"; // Import Link from react-router-dom
import styles from "./Header.module.css";
import Logo from "../../images/Logo/Logo.png";

const Header = () => {
  return (
    <header className={styles.header}>
      <NavLink to="/" className={styles.logo}>
        <img className={styles.logoImg} src={Logo} alt="Logo" />
        <span className={styles.slimWord}>Slim</span>
        <span className={styles.momWord}>Mom</span>
      </NavLink>
      <nav className={styles.nav}>
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
      </nav>
    </header>
  );
};

export default Header;
