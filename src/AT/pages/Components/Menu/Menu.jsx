import styles from "./styles.module.css";
import { useState } from "react";

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLigth, setIsLigth] = useState('.ligthTheme')

  function toggleMenu(){
    setIsMenuOpen(!isMenuOpen);
  };

  function toggleTheme(){
    setIsLigth('.darkTheme');
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <span>Booking.Hotels</span>
      </div>
      <div className={styles.menuToggle} onClick={toggleMenu}>☰</div>
      <nav className={`${styles.menu} ${isMenuOpen ? styles.show : ""}`}>
        <a href="#" className={styles.menuItem}>
          <span className={styles.label}>Home</span>
        </a>
        <a href="#" className={styles.menuItem}>
          <span className={styles.label}>Cadastro</span>
        </a>
        <a href="#" className={styles.menuItem}>
          <span className={styles.label}>Contatos</span>
        </a>
        <a href="#" className={styles.menuItem}>
          <span className={styles.label} onClick={toggleTheme}>Modo Dark</span>
        </a>
      </nav>
    </header>
  )
}