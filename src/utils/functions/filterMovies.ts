import { maxMovieDuration } from "../constants.js";

//Types:
import { Movie } from "../../types/index";

export default function filterMovies(movies: Movie[], isShort: boolean, textInSearchInput: string): Movie[] {
  return movies.filter((movie: Movie) => {
    if (!isShort) {
      return movie.nameRU.toLowerCase().includes(textInSearchInput.toLowerCase());
    }
    return movie.nameRU.toLowerCase().includes(textInSearchInput.toLowerCase()) && movie.duration > maxMovieDuration;
  });
}

// filterMovies(allMovies, isShort, textInSearchInput)
