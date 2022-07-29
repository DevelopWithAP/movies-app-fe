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

export type Genre = {
  id: number;
  name: string;
};

export type ProductionCompany = {
  id: number;
  logoPath: string;
  name: string;
  originCountry: string;
};

export type ProductionCountry = {
  iso: string;
  name: string;
};

export type SpokenLanguage = {
  englishName: string;
  iso: string;
  name: string;
};

export type MovieDetailsResponse = Movie & {
  budget: number;
  genres: Genre[];
  homepage: string;
  originalLanguage: string;
  originalTitle: string;
  overview: string;
  productionCompanies: ProductionCompany[];
  productionCountries: ProductionCountry[];
  revenue: number;
  runtime: number;
  spokenLanguages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  voteCount: number;
};
