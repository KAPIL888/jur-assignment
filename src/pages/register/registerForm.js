import Button from "../../component/button/button";
import InputField from "../../component/inputField/Input";
import LabelWithForgetPassword from "../../component/labelWithForgetPassword/labelWithForgetPassword";
import CheckBox from "../../component/checkbox/checkbox";
import { HanddleFormState } from "../../utils/formState";

const RegisterForm = ({ submitForm }) => {
  const { form, onChange } = HanddleFormState();

  const haddleForm = () => {
    submitForm(form);
  };

  return (
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
            name="first_name"
            handdleChange={onChange}
          />
        </div>
        <div className="last-name">
          <InputField
            placeHolder="Last Name"
            showHide={false}
            name="last_name"
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
      <CheckBox type="register" />
      <Button label="Sign In" handdleClick={haddleForm} disabled={false} />
    </div>
  );
};

export default RegisterForm;
