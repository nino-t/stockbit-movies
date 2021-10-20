export interface Movie {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

export interface FullMovie {
  Title: string
  Year: string
  Rated: string
  Released: string
  Runtime: string
  Genre: string
  Director: string
  Writer: string
  Actors: string
  Plot: string
  Country: string
  Awards: string
  Poster: string
  Ratings: MovieRating[]
  Metascore: string
  imdbRating: string
  imdbVotes: string
  imdbID: string
  Type: string
  DVD: string
  BoxOffice: string
  Production: string
  Website: string
  Response: string
}

interface MovieRating {
  Source: string
  Value: string
}

interface FullmovieById {
  status: 'idle' | 'loading' | 'failed'
  fullmovie: FullMovie | null
}

export interface MoviesState {
  status: 'idle' | 'loading' | 'failed'
  page: number
  total: number
  fullmovieById: FullmovieById
}