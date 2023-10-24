interface CheckboxProps {
  changeMoviesDurationCheckBox: () => void;
  isMoviesDurationCheckBoxEnable: boolean;
}
function Checkbox({ changeMoviesDurationCheckBox, isMoviesDurationCheckBoxEnable }: CheckboxProps) {
  return (
    <label className="checkbox">
      <input
        className="checkbox-input"
        type="checkbox"
        onChange={changeMoviesDurationCheckBox}
        checked={isMoviesDurationCheckBoxEnable}
      />
      <span className="checkbox-slider"></span>
    </label>
  );
}

export default Checkbox;
