import { useState } from 'react';
import { MyMoviesLogo } from 'components/Icons';
import HamburgerButton from 'components/HamburgerButton/HamburgerButton';

import styles from './Header.module.css';

const Header = (): JSX.Element => {
  const [isActive, setIsActive] = useState(false);
  return (
    <header className={styles.header}>
      <MyMoviesLogo className={styles.headerIcon} />
      <HamburgerButton
        isActive={isActive}
        onClick={() => {
          setIsActive((isActive) => !isActive);
        }}
      />
    </header>
  );
};

export default Header;
