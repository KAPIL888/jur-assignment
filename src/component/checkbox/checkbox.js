import {  useState } from "react";
import "./checkbox.css"


const CheckBox = ({type}) => {
  const [check,setCheck] = useState(true)

  const handdleCheckBox = (e) =>{
       setCheck(e.target.checked)
  }

  return (
    <label className="container">
    {type === 'login' ?
       <span className="checkbox-text"> Remember Me</span>
       :
       <span className="checkbox-text">I agree to the <span className="link">term</span> and <span className="link">condition</span></span>
     }
      <input id="checkbox" type="checkbox" onChange={handdleCheckBox} checked={check}/>
      <span className="checkmark"></span>
    </label>
  );
};
export default CheckBox;
