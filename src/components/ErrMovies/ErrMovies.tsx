interface ErrMoviesProps {
  text: string;
}

function ErrMovies({ text }: ErrMoviesProps) {
  return <div className="err-movies">{text}</div>;
}

export default ErrMovies;
