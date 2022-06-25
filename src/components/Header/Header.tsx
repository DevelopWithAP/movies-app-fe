import { MyMoviesLogo } from 'components/Icons';
import HamburgerButton from 'components/HamburgerButton/HamburgerButton';

import styles from './Header.module.css';

const Header = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <MyMoviesLogo className={styles.headerIcon} />
      <HamburgerButton isActive={false} />
    </header>
  );
};

export default Header;
