export interface ResponseData {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface Movie {
  id: number;
  title?: string;
  poster_path: string;
  media_type: string;
  vote_average: number;
  name?: string;
}
