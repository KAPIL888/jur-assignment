import SideBar from "../../component/slideBar/sliderBar";
import { Link ,useHistory} from "react-router-dom";
import { auth } from "../../utils/api";
import "./register.css";
import {
  ErrorNotify,
  SuccessNotify,
} from "../../component/toastMessage/toastMessage";
import RegisterForm from "./registerForm";
import { setUser } from "../../utils/helpers";

const Register = () => {
  const history = useHistory()

  const submitForm = async (form) => {
    if (form.first_name && form.last_name && form.password === form["verify-password"]) {
      let registerResponse = await auth.register(form);
      if (registerResponse.isSuccess) {
        setUser(registerResponse.profile)
        SuccessNotify("Successfully Login");
        history.push('/welcome')

      } else {
        ErrorNotify(registerResponse.error);
      }
    } else {
      if (!form.first_name) {
        ErrorNotify("Please Fill First Name");
        return;
      }
      if (!form.last_name) {
        ErrorNotify("Please Fill Last Name");
        return;
      }
      if (!form.password) {
        ErrorNotify("Please Fill Password");
        return;
      }
      if (!form["verify-password"]) {
        ErrorNotify("Please Verify Password");
        return;
      }
      if (form["verify-password"] !== form.password) {
        ErrorNotify("Password not matching");
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
            <span className="new-jur">Already a member?</span>
            <Link to="/">
              <span className="sign-up-text">Sign In</span>
            </Link>
          </div>
        </div>
        <RegisterForm submitForm={submitForm} />
      </div>
    </div>
  );
};

export default Register;
