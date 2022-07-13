import { Movie } from '../../api/movies/types';

// import styles from './MovieCard.module.css';

const MovieCard = ({ posterPath, releaseDate, title, voteAverage }: Movie): JSX.Element => {
  return (
    <div>
      <img alt={`Poster Path for ${title}`} src={posterPath} />
      <span>{releaseDate}</span> <span>{voteAverage}</span>
    </div>
  );
};

export default MovieCard;
