import React, { useCallback } from "react";

interface FormValues {
  password: string;
  email: string;
  name: string;
}
interface FormErrors {
  email: string;
  password: string;
  name?: string;
}

export function useFormWithValidation() {
  const [values, setValues] = React.useState<FormValues>({ password: "", email: "", name: "" });
  const [errors, setErrors] = React.useState<FormErrors>({ email: "", password: "", name: "" });
  const [isValid, setIsValid] = React.useState(false);

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const input = evt.target;
    const value = input.value;
    const name = input.name;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: input.validationMessage });
    setIsValid(input.closest("form")!.checkValidity());
  };

  const resetFrom = useCallback(
    (
      newValues = { password: "", email: "", name: "" },
      newErrors = { email: "", password: "" },
      newIsValid = false
    ) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  const onBlur = useCallback(
    (newErrors = { email: "", password: "" }) => {
      setErrors(newErrors);
    },
    [setErrors]
  );

  return { values, setValues, handleChange, resetFrom, onBlur, errors, isValid };
}
