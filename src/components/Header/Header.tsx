import { MyMoviesLogo } from 'components/Icons';

import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <MyMoviesLogo className={styles.headerIcon} />
    </header>
  );
};

export default Header;
