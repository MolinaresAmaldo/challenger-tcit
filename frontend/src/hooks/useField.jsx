import { useState } from "react";

const useField = ({ type, rest }) => {
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };
  return {
    type: type,
    id: rest,
    name: rest,
    value,
    onChange,
  };
};

export default useField;
