import { useState } from "react";
import "./input.css";
const InputField = ({ placeHolder, name, handdleChange, showHide }) => {
  const [hide, setHide] = useState(showHide);

  const handdleHide = () => {
    setHide(!hide);
  };

  return (
    <div className="input-container mt-8">
      <input
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
