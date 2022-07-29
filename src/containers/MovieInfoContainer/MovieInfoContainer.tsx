import { useQuery } from 'react-query';
import { getMovie } from 'api/movies/movies';
import Spinner from 'components/Spinner/Spinner';
import Tag from 'components/Tag/Tag';
import { useParams } from 'react-router';

import styles from './MovieInfoContainer.module.css';

const MovieInfoContainer = (): JSX.Element => {
  /**
   * Need to:
   * receive <movieId> from MovieCard component - react router
   * fetch movie with <movieId> - useQuery
   * add styling
   */
  const params = useParams<'id'>();

  const { isFetching, isLoading, data } = useQuery('movie', () => getMovie(params.id as string));

  if (isFetching || isLoading) {
    return <Spinner />;
  }

  return (
    <div className={styles.backdropImage} style={{ backgroundImage: `url(${data?.backdropPath})` }}>
      <div className={styles.backdropCover}>
        <div className={styles.movieInfoWrapper}>
          <section className={styles.movieSection}>
            <div className={styles.moviePosterWrapper}>
              <img className={styles.moviePoster} src={data?.posterPath} />
            </div>

            <div className={styles.movieDataWrapper}>
              <div className={styles.movieDataHeader}>
                <h2>
                  {data?.title} <span className={styles.movieDataHeaderDate}>{`(${data?.releaseDate})`}</span>
                </h2>
                <h3>{data?.tagline}</h3>

                <div className={styles.tagList}>
                  {data?.genres.map(({ id, name }) => (
                    <Tag key={id}>
                      <span>{name}</span>
                    </Tag>
                  ))}
                </div>

                <dl className={styles.dataList}>
                  <span>
                    <dt>Duration:</dt>
                    <dd>
                      <strong>{data?.runtime} min</strong>
                    </dd>
                  </span>
                  <span>
                    <dt>Vote average:</dt>
                    <dd>
                      <strong>{data?.voteAverage} </strong>
                    </dd>
                  </span>
                  <span>
                    <dt>Vote count:</dt>
                    <dd>
                      <strong>{data?.voteCount}</strong>
                    </dd>
                  </span>
                  <span>
                    <dt>Budget:</dt>
                    <dd>
                      <strong>&#36;{data?.budget}</strong>
                    </dd>
                  </span>
                  <span>
                    <dt>Revenue:</dt>
                    <dd>
                      <strong>&#36;{data?.revenue}</strong>
                    </dd>
                  </span>
                </dl>

                <div className={styles.descriptionContainer}>
                  <h3>Overview</h3>
                  <span>{data?.overview}</span>
                </div>

                <div className={styles.descriptionContainer}>
                  <h3>Production Companies</h3>
                  <span>{data?.productionCompanies.map((prodComp) => prodComp.name)}</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default MovieInfoContainer;
