import request from '../../utils/request';
import { FullMovie, Movie } from './index.interface';

const _isNull = (arg: any): boolean => {
  return arg === null;
} 

export const fetchMovies = async (q: string | null = null) => {
  try {
    const response: any = await request.get('/', {
      params: {
        s: _isNull(q) ? 'Batman' : q,
        type: 'movie',
        page: 1
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