import styles from './Tag.module.css';

type TagProps = {
  children: React.ReactNode;
};

const Tag = ({ children }: TagProps): JSX.Element => {
  return <div className={styles.tagStyle}>{children}</div>;
};

export default Tag;
