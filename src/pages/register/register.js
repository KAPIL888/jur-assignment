import Button from "../../component/button/button";
import InputField from "../../component/inputField/Input";
import LabelWithForgetPassword from "../../component/labelWithForgetPassword/labelWithForgetPassword";
import SideBar from "../../component/slideBar/sliderBar";
import { HanddleFormState } from "../../utils/formState";
import "./register.css"

const Register = () => {
  const { form, onChange } = HanddleFormState();

  const submitForm = () => {
    console.log(form);
  };
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
            label="Full Name"
            require={true}
            showForget={false}
          />
          <div className="full-name-container">
            <div className="first-name">
              <InputField
                placeHolder="First Name"
                showHide={false}
                name="first-name"
                handdleChange={onChange}
              />
            </div>
            <div className="last-name">
              <InputField
                placeHolder="Last Name"
                showHide={false}
                name="last-name"
                handdleChange={onChange}
              />
            </div>
          </div>

          <LabelWithForgetPassword
            label="Email Address"
            require={true}
            showForget={false}
          />
          <InputField
            placeHolder=""
            showHide={false}
            name="email"
            handdleChange={onChange}
          />
          <LabelWithForgetPassword
            label="Password"
            require={true}
            showForget={false}
          />
          <InputField
            showHide={true}
            placeHolder=""
            name="password"
            handdleChange={onChange}
          />

          <LabelWithForgetPassword
            label="Verify Password"
            require={true}
            showForget={false}
          />
          <InputField
            showHide={true}
            placeHolder=""
            name="verify-password"
            handdleChange={onChange}
          />
          <Button label="Sign In" handdleClick={submitForm} disabled={false} />
        </div>
      </div>
    </div>
  );
};

export default Register;
