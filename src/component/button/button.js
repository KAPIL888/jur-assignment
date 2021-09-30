import "./button.css"
const Button = ({ label, handdleClick,disabled }) => {
  return <button  className="mt-24 button" disabled={disabled} onClick={handdleClick}>{label}</button>;
};

export default Button;
