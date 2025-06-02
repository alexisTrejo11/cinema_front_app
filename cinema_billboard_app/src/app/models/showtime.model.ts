import { Movie } from "./movie.model";
import { Theater } from "./theather.model";

export interface Showtime {
  id?: number;
  movie_id: number;
  theater_id: number;
  start_time: string;
  end_time?: string;
  price: number;
  movie?: Movie;
  theater?: Theater;
}