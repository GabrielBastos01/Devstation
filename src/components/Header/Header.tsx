import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.Header}>
      <div className={styles.logoWrapper}>
        <img src="https://gabrielbastos01.github.io/Devstation/logo.svg" alt="Animated Logo" className={styles.glitchGif} />
        <Link to="/Devstation" className={styles.logoText}>DevStation</Link>
      </div>
      <div className={styles.hamburger} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`${styles.options} ${menuOpen ? styles.showMenu : ''}`}>
        <li className={styles.option}>
          <Link to="/Devs" className={styles.link}>Programadores</Link>
        </li>
    
        {/* Aqui é onde estamos colocando a opção "Voltar" */}
        <li className={`${styles.option} ${styles.centerOption}`}>
          <Link to="/Devstation" className={styles.link}>Voltar</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
