import "./checkbox.css"
const CheckBox = ({type}) => {
  return (
    <label class="container">
    {type === 'login' ?
       <span className="checkbox-text"> Remember Me</span>
       :
       <span className="checkbox-text">I agree to the <span className="link">term</span> and <span className="link">condition</span></span>
  }
      <input id="checkbox" type="checkbox"  checked/>
      <span class="checkmark"></span>
    </label>
  );
};
export default CheckBox;
