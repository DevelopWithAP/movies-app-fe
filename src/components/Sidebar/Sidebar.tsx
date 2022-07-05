import { ReactChild, MouseEvent } from 'react';

import styles from './Sidebar.module.css';

type SidebarProps = {
  onBackDropClick?: () => void;
  children?: ReactChild;
};

const Sidebar = ({ children, onBackDropClick }: SidebarProps): JSX.Element => {
  const onSidebarClick = (event: MouseEvent): void => {
    event.stopPropagation();
  };

  return (
    <div className={styles.backdrop} onClick={onBackDropClick}>
      <div className={styles.takeOverSidebar} onClick={onSidebarClick}>
        {children}
      </div>
    </div>
  );
};

export default Sidebar;
