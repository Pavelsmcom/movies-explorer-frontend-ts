import Checkbox from "../Checkbox/Checkbox";

interface FilterCheckboxProps {
  changeMoviesDurationCheckBox: () => void;
  isMoviesDurationCheckBoxEnable: boolean;
}

function FilterCheckbox({ changeMoviesDurationCheckBox, isMoviesDurationCheckBoxEnable }: FilterCheckboxProps) {
  return (
    <div className="filter-checkbox">
      <Checkbox
        changeMoviesDurationCheckBox={changeMoviesDurationCheckBox}
        isMoviesDurationCheckBoxEnable={isMoviesDurationCheckBoxEnable}
      />
      <p className="filter-checkbox__text">Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;
