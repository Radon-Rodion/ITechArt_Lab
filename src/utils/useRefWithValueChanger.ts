import { useRef } from "react";

function useRefWithValueChanger<T>(
  firstValue: T
): [value: React.MutableRefObject<T>, valueChanger: (newValue: T) => void] {
  const value = useRef(firstValue);
  const valueChanger = (newValue: T) => {
    value.current = newValue;
  };
  return [value, valueChanger];
}

export default useRefWithValueChanger;
