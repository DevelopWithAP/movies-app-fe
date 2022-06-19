/**
 * Objective: Create responsive layout component which will display header, footer and main content.
 * ACs:
 * Layout component is created.
 * Layout component has its own style module file.
 * Layout component is used in the App.
 * Header in the layout should display ‘Header’ text alongside the logo Icon
 * Footer in the layout should display ‘Footer’ text.
 * Main area on the layout should display API status.
 */

import React from 'react';

import styles from './Layout.module.css';

type Props = {
  header: React.ReactNode;
  footer: React.ReactNode;
  children?: React.ReactNode;
};

const Layout = ({ header, footer, children }: Props) => {
  return (
    <>
      {header}
      <main className={styles.xMargin}>{children}</main>
      {/* <footer className={styles.xMargin}>{footer}</footer>
       */}
      {footer}
    </>
  );
};

export default Layout;
