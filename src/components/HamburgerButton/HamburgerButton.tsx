import styles from './HamburgerButton.module.css';

type HamburgerProps = {
  isActive: boolean;
  onClick?: () => void;
};

const HamburgerButton = ({ isActive, onClick }: HamburgerProps): JSX.Element => {
  return (
    <div className={isActive ? styles.hamburger : styles.hamburger} onClick={onClick}>
      <span className={styles.bar}></span>
      <span className={styles.bar}></span>
      <span className={styles.bar}></span>
    </div>
  );
};

export default HamburgerButton;
