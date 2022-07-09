import { useQuery } from 'react-query';
import { fetchStatus } from 'api/health';
import { MyMoviesLogo } from 'components/Icons';

import styles from './MoviesListContainer.module.css';

const MoviesListContainer = (): JSX.Element => {
  const { data: healthy } = useQuery('status', fetchStatus);
  return (
    <>
      <MyMoviesLogo className={styles.headerIcon} />
      <h4>My Movies</h4>
      <p>API Status: {healthy ? 'Is Running' : 'Something is wrong'}</p>
    </>
  );
};

export default MoviesListContainer;
