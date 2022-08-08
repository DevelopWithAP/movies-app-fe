import { useEffect, useState } from 'react';
import { MyMoviesLogo } from 'components/Icons';
import HamburgerButton from 'components/HamburgerButton/HamburgerButton';
import Sidebar from 'components/Sidebar/Sidebar';
import useMediaQuery from 'hooks/useMediaQuery';
import NavigationLink from 'components/NavigationLink/NavigationLink';
import { Link } from 'react-router-dom';

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
      <Link to="/">
        <MyMoviesLogo className={styles.headerIcon} />
      </Link>
      <>
        {matches ? <HamburgerButton isActive={sidebarActive} onClick={toggleActive} /> : <NavigationLink name="Movies" to="/movies" />}

        {sidebarActive && (
          <Sidebar onBackDropClick={closeSidebar}>
            <NavigationLink name="Movies" to="/movies" />
          </Sidebar>
        )}
      </>
    </header>
  );
};

export default Header;
