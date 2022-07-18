import { useQuery } from 'react-query';
import { getMovies } from 'api/movies/movies';
import Spinner from 'components/Spinner/Spinner';

import MovieCard from './MovieCard';
import styles from './MoviesListContainer.module.css';

const MoviesListContainer = (): JSX.Element => {
  const { data, isFetching, isLoading } = useQuery('movies', getMovies);
  const dataToString: string = JSON.stringify(data);

  return (
    <div className={styles.moviesListContainer}>
      {data?.movies && <MovieCard {...data?.movies[2]} />}
      {isFetching || isLoading ? <Spinner /> : dataToString}
    </div>
  );
};

export default MoviesListContainer;
