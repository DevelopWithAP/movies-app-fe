import { useQuery } from 'react-query';
import { getMovies } from 'api/movies/movies';
import Spinner from 'components/Spinner/Spinner';

import MovieCard from './MovieCard';
import styles from './MoviesListContainer.module.css';

const selectRandomMovie = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min));
};

const MoviesListContainer = (): JSX.Element => {
  const { data, isFetching, isLoading } = useQuery('movies', getMovies);
  const JsonToString: string = JSON.stringify(data);

  const targetMovieIndex: number = selectRandomMovie(0, Number(data?.movies.length));

  return (
    <div className={styles.moviesListContainer}>
      {data?.movies.length && <MovieCard {...data?.movies[targetMovieIndex]} />}
      <hr />
      {isFetching || isLoading ? <Spinner /> : JsonToString}
    </div>
  );
};

export default MoviesListContainer;
