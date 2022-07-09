export type Movie = {
  id?: string;
  movieId: string;
  title: string;
  releaseDate: string;
  backdropPath: string;
  posterPath: string;
  voteAverage: number;
};

export type MoviesResponse = {
  page: number;
  totalPages: number;
  movies: Movie[];
};
