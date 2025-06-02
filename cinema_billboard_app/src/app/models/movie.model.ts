export enum MovieGenre {
  ACTION = 'ACTION',
  COMEDY = 'COMEDY',
  DRAMA = 'DRAMA',
  HORROR = 'HORROR',
  ROMANCE = 'ROMANCE',
  THRILLER = 'THRILLER',
  SCIENCE_FICTION = 'SCIENCE_FICTION',
  FANTASY = 'FANTASY',
  ADVENTURE = 'ADVENTURE',
  DOCUMENTARY = 'DOCUMENTARY'
}

export enum MovieRating {
  G = 'G',
  PG = 'PG',
  PG13 = 'PG13',
  R = 'R',
  NC17 = 'NC17'
}

export interface Movie {
  id?: number;
  title: string;
  original_title?: string;
  minute_duration: number;
  release_date: string;
  end_date: string;
  description: string;
  genre: MovieGenre;
  rating: MovieRating;
  poster_url?: string;
  trailer_url?: string;
  is_active: boolean;
  created_at?: string;
  updated_at?: string;
}
