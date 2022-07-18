import { useQuery } from 'react-query';
import { getMovies } from 'api/movies/movies';
import Spinner from 'components/Spinner/Spinner';

import MovieCard from './MovieCard';
import styles from './MoviesListContainer.module.css';

const MoviesListContainer = (): JSX.Element => {
  const { data, isFetching, isLoading } = useQuery('movies', getMovies);

  return <div className={styles.moviesListContainer}>{isLoading || isFetching ? <Spinner /> : data?.movies && <MovieCard {...data?.movies[2]} />}</div>;
};

export default MoviesListContainer;
