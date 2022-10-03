import { get } from '../shared/methods';
import { MovieDetailsResponse, MoviesResponse } from './types';

const getMovies = async (page: number): Promise<MoviesResponse> => {
  const { data } = await get<MoviesResponse>(`movies?page=${page}`);
  return data;
};

const getMovie = async (movieId: string): Promise<MovieDetailsResponse> => {
  const { data } = await get<MovieDetailsResponse>(`movies/${movieId}`);
  return data;
};

export { getMovies, getMovie };
