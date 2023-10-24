interface InputProps {
  text: string;
  textError: string;
  positionProfile?: boolean;
  disabled?: boolean;
  value?: string;
  type?: string;
  name?: string;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  minLength?: number;
  maxLength?: number;
  pattern?: string;
}
function Input({ text, textError, positionProfile = false, ...props }: InputProps) {
  return (
    <>
      <div className="input">
        <label className={positionProfile ? "input__text input__text_profile" : "input__text"}>{text}</label>
        <input className={positionProfile ? "input__input input__input_profile" : "input__input"} {...props} />
        <span className={positionProfile ? "input__error input__error_profile" : "input__error"}>{textError}</span>
      </div>
    </>
  );
}

export default Input;
