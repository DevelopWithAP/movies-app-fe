import { useEffect, useState } from 'react';
import { MyMoviesLogo } from 'components/Icons';
import HamburgerButton from 'components/HamburgerButton/HamburgerButton';
import Sidebar from 'components/Sidebar/Sidebar';
import useMediaQuery from 'hooks/useMediaQuery';

import styles from './Header.module.css';

export const Header = (): JSX.Element => {
  const [sidebarActive, setSidebarActive] = useState(false);
  const { matches } = useMediaQuery({ query: '(max-width:768px)' });

  const toggleActive = (): void => {
    setSidebarActive((prevState) => !prevState);
  };

  const closeSidebar = (): void => {
    setSidebarActive(false);
  };

  useEffect(() => {
    if (matches) {
      setSidebarActive(false);
    }
  }, [matches]);

  return (
    <header className={styles.header}>
      <MyMoviesLogo className={styles.headerIcon} />
      <>
        {matches && <HamburgerButton isActive={sidebarActive} onClick={toggleActive} />}

        {sidebarActive && (
          <Sidebar onBackDropClick={closeSidebar}>
            <div>Hello</div>
          </Sidebar>
        )}
      </>
    </header>
  );
};

export default Header;
