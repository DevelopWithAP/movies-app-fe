import { get } from '../shared/methods';
import { MoviesResponse } from './types';

const getMovies = async (): Promise<MoviesResponse> => {
  const { data } = await get<MoviesResponse>('movies');
  return data;
};

export { getMovies };
