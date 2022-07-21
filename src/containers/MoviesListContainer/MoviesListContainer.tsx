import { useQuery } from 'react-query';
import { getMovies } from 'api/movies/movies';
import Spinner from 'components/Spinner/Spinner';

import MovieCard from './MovieCard';
import styles from './MoviesListContainer.module.css';

const MoviesListContainer = (): JSX.Element => {
  const { data, isFetching, isLoading } = useQuery('movies', getMovies);

  const renderAllMovies = () => {
    return data?.movies.map((movie) => <MovieCard key={movie.id} {...movie} />);
  };

  return <div className={styles.moviesListContainer}>{isLoading || isFetching ? <Spinner /> : renderAllMovies()}</div>;
};

export default MoviesListContainer;
