import Button from "../../component/button/button";
import InputField from "../../component/inputField/Input";
import LabelWithForgetPassword from "../../component/labelWithForgetPassword/labelWithForgetPassword";
import SideBar from "../../component/slideBar/sliderBar";
import { HanddleFormState } from "../../utils/formState";


const Login = () => {


const {form,onChange} = HanddleFormState()


const submitForm = () =>{
    console.log(form)

}
  return (
    <div className="authentication-form">
      <SideBar />
      <div className="right-container">
        <div className="form-filed">
          <div className="header">
            <span className="new-jur">New to Jur?</span>
            <span className="sign-up-text">Sign Up</span>
          </div>
        </div>

        <div className="form-container">
          <p className="signin-tex">Sign In</p>
          <p className="started-with-jur">Let's gets started with jur</p>
          <LabelWithForgetPassword
            label="Email"
            require={true}
            showForget={false}
          />
          <InputField placeHolder="" showHide={false}  name="email" handdleChange={onChange}/>
          <LabelWithForgetPassword
            label="Password"
            require={true}
            showForget={true}
          />
          <InputField showHide={true} placeHolder="" name="password" handdleChange={onChange}/>
          <Button label="Sign In" handdleClick={submitForm} disabled={false}/>
        </div>
      </div>
    </div>
  );
};

export default Login;
