import Select from 'react-select';

import styles from './SelectFieldStateless.module.css';

const SelectFieldStateless = (): JSX.Element => {
  return (
    <div>
      <Select className={styles.select} />
    </div>
  );
};

export default SelectFieldStateless;
