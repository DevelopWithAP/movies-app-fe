import { StarIcon } from 'components/Icons';
import { RoutesKey } from 'navigation/routes';
import { generatePath } from 'react-router';
import { Link } from 'react-router-dom';

import { Movie } from '../../api/movies/types';
import styles from './MovieCard.module.css';

const MovieCard = ({ posterPath, releaseDate, title, voteAverage, movieId }: Movie): JSX.Element => {
  const moviePath: string = generatePath(RoutesKey.Movie, { id: movieId });
  return (
    <div className={styles.card}>
      <Link to={moviePath}>
        <img alt={title} className={styles.movieImage} src={posterPath} />
      </Link>
      <div className={styles.movieInfoDiv}>
        <span className={styles.voteAverage}>
          <StarIcon className={styles.starIcon} /> {voteAverage}
        </span>
        <h4 className={styles.movieTitle}>{title}</h4>
        <p className={styles.releaseDate}>{releaseDate}</p>
      </div>
    </div>
  );
};

export default MovieCard;
