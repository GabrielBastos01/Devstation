import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.Header}>
      <Link to="/">
        <img src="logo.svg" alt="Logo" className={styles.logo} />
      </Link>
      <ul className={styles.options}>
        <li className={styles.option}>
          <Link to="/Devs" className={styles.link}>Programadores</Link>
        </li>
        <li className={styles.option}>
          <Link to="/agendamento" className={styles.link}>Agendamento</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
