import styles from './Spinner.module.css';

const Spinner = (): JSX.Element => {
  return (
    <div className={styles.backdrop}>
      <div className={styles.spinnerRing}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Spinner;
