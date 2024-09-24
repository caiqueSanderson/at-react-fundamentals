import styles from "./styles.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

import { FaMoon } from "react-icons/fa6";

export default function Menu(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <span>Booking.Hotels</span>
      </div>
      <div className={styles.menuToggle} onClick={props.toggleMenu}>☰</div>
      <nav className={`${styles.menu} ${isMenuOpen ? styles.show : ""} ${props.isLightTheme ? styles.lightTheme : styles.darkTheme}`}>
        <a href="#" className={styles.menuItem}>
          <span className={styles.label}>Home</span>
        </a>
        <Link to={'/register'} className={styles.menuItem}>
          <span className={styles.label}>Cadastro</span>
        </Link>

        <a href="#" className={styles.menuItem}>
          <span className={styles.label}>Contatos</span>
        </a>
        <a href="#" className={styles.menuItem}>
          <span className={styles.label} onClick={props.toggleTheme}>
            <FaMoon />
          </span>
        </a>
      </nav>
    </header>
  )
}