export type Movie = {
  id: number;
  _id: number;
  description: string;
  duration: number;
  trailerLink: string;
  image: { url: string };
  url?: string;
  nameRU: string;
  nameEN: string;
  country: string;
  director: string;
  year: number;
  thumbnail: string;
  movieId?: number;
};
