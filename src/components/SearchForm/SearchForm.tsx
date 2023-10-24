import { useEffect, useState, ChangeEvent, FormEvent } from "react";

import SearchIcon from "../../images/search_icon.svg";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

interface SearchFormProps {
  searchInMovies: (text: string) => void;
  changeMoviesDurationCheckBox: () => void;
  isMoviesDurationCheckBoxEnable: boolean;
  textInSearchInput: string;
}

function SearchForm({
  searchInMovies,
  changeMoviesDurationCheckBox,
  isMoviesDurationCheckBoxEnable,
  textInSearchInput,
}: SearchFormProps) {
  const [inputValue, setInputValue] = useState("");
  const [isInputError, setInputError] = useState(false);

  useEffect(() => {
    setInputValue(textInSearchInput);
  }, [textInSearchInput]);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (inputValue.length) {
      setInputError(false);
      searchInMovies(inputValue);
    } else {
      setInputError(true);
    }
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  return (
    <section className="search-form" aria-label="Секция поиска">
      <form name="search-form__films" onSubmit={handleSubmit}>
        <button type="submit" className="search-form__btn">
          <img className="search-form__btn-icon" src={SearchIcon} alt="Знак поиска" />
        </button>
        <span className="search-form__error">{isInputError ? "Нужно ввести ключевое слово" : ""}</span>
        <input
          className="search-form__input"
          placeholder="Фильм"
          name="films"
          value={inputValue}
          onChange={handleChange}
          onClick={() => setInputError(false)}
        />
      </form>
      <FilterCheckbox
        changeMoviesDurationCheckBox={changeMoviesDurationCheckBox}
        isMoviesDurationCheckBoxEnable={isMoviesDurationCheckBoxEnable}
      />
    </section>
  );
}

export default SearchForm;
