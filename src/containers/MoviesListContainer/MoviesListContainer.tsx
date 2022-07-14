import { useQuery } from 'react-query';
import { getMovies } from 'api/movies/movies';
import Spinner from 'components/Spinner/Spinner';

import MovieCard from './MovieCard';
import styles from './MoviesListContainer.module.css';

const MoviesListContainer = (): JSX.Element => {
  const { data, isFetching, isLoading } = useQuery('movies', getMovies);
  const JsonToString: string = JSON.stringify(data);

  return (
    <div className={styles.moviesListContainer}>
      {data?.movies.length && <MovieCard {...data?.movies[0]} />}

      {isFetching || isLoading ? <Spinner /> : JsonToString}
    </div>
  );
};

export default MoviesListContainer;
