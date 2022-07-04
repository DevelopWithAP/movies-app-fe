import styles from './HamburgerButton.module.css';

type HamburgerButtonProps = {
  isActive: boolean;
  onClick?: () => void;
};

const addMultipleClassNames = (classNames: string[]): string => classNames.join(' ');

const HamburgerButton = ({ isActive, onClick }: HamburgerButtonProps): JSX.Element => {
  return (
    <div className={isActive ? addMultipleClassNames([styles.hamburger, styles.active]) : styles.hamburger} onClick={onClick}>
      <div className={styles.bar}></div>
      <div className={styles.bar}></div>
      <div className={styles.bar}></div>
    </div>
  );
};

export default HamburgerButton;
