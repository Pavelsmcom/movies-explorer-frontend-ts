interface MoviesBtnProps {
  text: string;
  btnMoreClick: () => void;
}

function MoviesBtn({ text, btnMoreClick }: MoviesBtnProps) {
  return (
    <button
      className="movies-btn"
      type="button"
      aria-label="Кнопка загрузки дополнительных фильмов"
      onClick={btnMoreClick}
    >
      {text}
    </button>
  );
}

export default MoviesBtn;
