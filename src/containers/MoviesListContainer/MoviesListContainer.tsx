import { useQuery } from 'react-query';
import { getMovies } from 'api/movies/movies';
import Spinner from 'components/Spinner/Spinner';
import TextInputFieldStateless from 'components/TextInputField/TextInputFieldStateless/TextInputFieldStateless';
import SelectFieldStateless from 'components/SelectField/SelectFieldStateless/SelectFieldStateless';

import MovieCard from './MovieCard';
import styles from './MoviesListContainer.module.css';

const MoviesListContainer = (): JSX.Element => {
  const { data, isFetching, isLoading } = useQuery('movies', getMovies);

  const renderAllMovies = () => {
    return data?.movies.map((movie) => <MovieCard key={movie.id} {...movie} />);
  };

  return (
    <>
      <form className={styles.tempForm}>
        <TextInputFieldStateless />
        <SelectFieldStateless />
        <SelectFieldStateless />
      </form>
      <div className={styles.moviesListContainer}>{isLoading || isFetching ? <Spinner /> : renderAllMovies()}</div>
    </>
  );
};

export default MoviesListContainer;
