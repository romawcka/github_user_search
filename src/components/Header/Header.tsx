import { ThemeSwitcher } from 'components/ThemeSwitcher';
import styles from './Header.module.scss';


export const Header = () => (
  <div className={styles.header}>
    <div className={styles.logo}>
      devfinder
    </div>
    <ThemeSwitcher />
  </div>
);
