import styles from './Header.module.css';
import logo from '../../assets/logo.svg';


export function Header () {
  return (
    <header className={styles.header}>
      <img src={logo} alt='Logotipo Ignite'></img>
      <strong>Ignite Feed</strong>
    </header>
  );
}