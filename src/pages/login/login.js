import Button from "../../component/button/button";
import CheckBox from "../../component/checkbox/checkbox";
import InputField from "../../component/inputField/Input";
import LabelWithForgetPassword from "../../component/labelWithForgetPassword/labelWithForgetPassword";
import SideBar from "../../component/slideBar/sliderBar";
import { Link,useHistory } from "react-router-dom";
import {
  ErrorNotify,
  SuccessNotify,
} from "../../component/toastMessage/toastMessage";
import { auth } from "../../utils/api";
import { HanddleFormState } from "../../utils/formState";
import { setUser } from "../../utils/helpers";

const Login = () => {
  const history = useHistory()
  const { form, onChange } = HanddleFormState();

  const submitForm = async () => {
    if (form.email && form.password) {
      let loginResponse = await auth.login(form);
      if (loginResponse.isSuccess) {
        setUser(loginResponse.profile)
        SuccessNotify("Successfully Login");
        history.push('/welcome')
      } else {
        ErrorNotify(loginResponse.error);
      }
    } else {
      if (!form.email) {
        ErrorNotify("Please Fill Email");
        return;
      }
      if (!form.password) {
        ErrorNotify("Please Fill Password");
        return;
      }
    }
  };


  return (
    <div className="authentication-form">
      <SideBar />
      <div className="right-container">
        <div className="form-filed">
          <div className="header">
            <span className="new-jur">New to Jur?</span>
            <Link to="/register">
            <span className="sign-up-text">Sign Up</span>
            </Link>
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
          <InputField
            placeHolder=""
            showHide={false}
            name="email"
            handdleChange={onChange}
          />
          <LabelWithForgetPassword
            label="Password"
            require={true}
            showForget={true}
          />
          <InputField
            showHide={true}
            placeHolder=""
            name="password"
            handdleChange={onChange}
          />

          <CheckBox type="login"/>
          <Button label="Sign In" handdleClick={submitForm} disabled={!form.email && !form.password} />
        </div>
      </div>
    </div>
  );
};

export default Login;
