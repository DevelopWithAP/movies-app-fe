import { StarIcon } from 'components/Icons';

import { Movie } from '../../api/movies/types';
import styles from './MovieCard.module.css';

const MovieCard = ({ posterPath, releaseDate, title, voteAverage }: Movie): JSX.Element => {
  return (
    <div className={styles.card}>
      <img alt={title} src={posterPath} />
      <div className={styles.movieInfoDiv}>
        <span className={styles.voteAverage}>
          <StarIcon className={styles.starIcon} /> {voteAverage}
        </span>
        <h4 className={styles.movieTitle}></h4>
        <p className={styles.releaseDate}>{releaseDate}</p>
      </div>
    </div>
  );
};

export default MovieCard;
