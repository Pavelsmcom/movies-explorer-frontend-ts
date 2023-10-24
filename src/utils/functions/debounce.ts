type AnyFunction = (...args: unknown[]) => void;

const debounce = <T extends AnyFunction>(fn: T, ms: number) => {
  let timeout: number;

  return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
    const fnCall = () => {
      fn.apply(this, args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(fnCall, ms);
  };
};

export default debounce;
