import { useQuery } from 'react-query';
import { getMovies } from 'api/movies/movies';
import Spinner from 'components/Spinner/Spinner';
import Pagination from 'components/Pagination/Pagination';
import { useSearchParams } from 'react-router-dom';

import MovieCard from './MovieCard';
import styles from './MoviesListContainer.module.css';

const MoviesListContainer = (): JSX.Element => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activePage = parseInt(searchParams.get('page') || '1');

  const { data, isFetching, isLoading } = useQuery(['movies', activePage], () => getMovies(activePage));

  const totalPages = data?.totalPages || 0;

  const renderAllMovies = () => {
    return data?.movies.map((movie) => <MovieCard key={movie.movieId} {...movie} />);
  };

  const handlePageClick = (page: number): void => {
    setSearchParams({ page: `${page}` });
  };

  const handleNextClick = (): void => {
    const nextPage = activePage === totalPages ? activePage : activePage + 1;
    setSearchParams({ page: `${nextPage}` });
  };

  const hanldePreviousClick = (): void => {
    const previousPage = activePage === 1 ? activePage : activePage - 1;
    setSearchParams({ page: `${previousPage}` });
  };

  return (
    <>
      <div className={styles.moviesListContainer}>{isLoading || isFetching ? <Spinner /> : renderAllMovies()}</div>
      <Pagination
        currentPage={activePage}
        totalPages={totalPages}
        onNextClick={handleNextClick}
        onPageClick={handlePageClick}
        onPreviousClick={hanldePreviousClick}
      />
    </>
  );
};

export default MoviesListContainer;
