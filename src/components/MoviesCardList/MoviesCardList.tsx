import { useMemo } from "react";
import MoviesBtn from "../MoviesBtn/MoviesBtn";
import MoviesCard from "../MoviesCard/MoviesCard";

//Types:
import { Movie } from "../../types/index";

interface MoviesCardListProps {
  positionSavedMovies?: boolean;
  movies: Movie[];
  savedMovies?: Movie[];
  isBtnMoreVisible?: boolean;
  btnMoreClick?: () => void;
  saveMovie?: (movie: Movie) => void;
  deleteMovie: (movie: Movie) => void;
}

function MoviesCardList({
  positionSavedMovies,
  movies,
  savedMovies,
  isBtnMoreVisible,
  btnMoreClick,
  saveMovie,
  deleteMovie,
}: MoviesCardListProps) {
  const moviesElements = useMemo(() => {
    return movies.map((movie: Movie) => {
      let isSavedMovie = false;

      if (savedMovies !== undefined && savedMovies.find((item) => item.movieId === movie.id) !== undefined) {
        isSavedMovie = true;
      }

      return (
        <li key={movie.id || movie._id}>
          <MoviesCard
            movie={movie}
            positionSavedMovies={positionSavedMovies}
            isSavedMovie={isSavedMovie}
            saveMovie={saveMovie}
            deleteMovie={deleteMovie}
          />
        </li>
      );
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movies, savedMovies]);

  return (
    <section className="movies-card-list" aria-label="Секция с фильмами">
      <ul className="movies-card-list__movies">{moviesElements}</ul>
      {isBtnMoreVisible ? !positionSavedMovies && <MoviesBtn text="Ещё" btnMoreClick={btnMoreClick} /> : null}
    </section>
  );
}

export default MoviesCardList;
