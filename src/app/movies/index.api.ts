import request from '../../utils/request';
import { FullMovie, Movie } from './index.interface';

const _isNull = (arg: any): boolean => {
  return arg === null;
} 

export interface FetchMoviesArgs {
  page: number
  q: string | null
}

export const fetchMovies = async (args: FetchMoviesArgs) => {
  const { page, q } = args
  try {
    const response: any = await request.get('/', {
      params: {
        s: _isNull(q) ? 'Batman' : q,
        type: 'movie',
        page: page
      }
    });

    type Results = { total: number, movies: Movie[] };
    let results : Results = {
      total: Number(response?.data?.totalResults ?? 0),
      movies: response?.data?.Search ?? []
    };

    return results;
  } catch (error) {
    console.log('error', error);
  }
}

export const fetchMovieById = async (id: string) => {
  try {
    const response: any = await request.get('/', {
      params: {
        i: id
      }
    });

    const results : FullMovie = response?.data ?? null;
    return results;
  } catch (error) {
    console.log('error', error);
  }
}