import { useRef, useState } from "react";
import "./input.css";
const InputField = ({ placeHolder, name, handdleChange, showHide }) => {
  const [hide, setHide] = useState(showHide);
  const inputFocus = useRef()

  const handdleHide = () => {
  inputFocus.current.focus()
    setHide(!hide);
  };

  return (
    <div className="input-container mt-8">
      <input
        ref={inputFocus}
        type={hide ? "password" : "text"}
        placeholder={placeHolder}
        onChange={handdleChange}
        name={name}
      />
      {showHide && (
        <span
          className={hide ? "show-hide" : "show-hide active-hide"}
          onClick={handdleHide}
        >
          {hide ? "Show" : "Hide"}
        </span>
      )}
    </div>
  );
};

export default InputField;
