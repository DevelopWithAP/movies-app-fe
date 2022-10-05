import styles from './TextInputFieldStateless.module.css';

const TextInputFieldStateless = (): JSX.Element => {
  return (
    <div>
      <input className={styles.inputField} />
    </div>
  );
};

export default TextInputFieldStateless;
