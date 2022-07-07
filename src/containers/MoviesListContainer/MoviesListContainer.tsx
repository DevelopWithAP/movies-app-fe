import { useQuery } from 'react-query';
import { getMovies } from 'api/movies/movies';
import Spinner from 'components/Spinner/Spinner';

import styles from './MoviesListContainer.module.css';

const MoviesListContainer = (): JSX.Element => {
  const { data } = useQuery('movies', getMovies);
  const JsonToString: string = JSON.stringify(data);

  return <div className={styles.moviesListContainer}>{!data ? <Spinner /> : JsonToString}</div>;
};

export default MoviesListContainer;
