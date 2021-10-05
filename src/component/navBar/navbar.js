import Logo from "../../image/Logo.svg";
import "./navBar.css";
import { useHistory } from "react-router-dom";
import { getUser } from "../../utils/helpers";
import { useCallback } from "react";

const NavBar = () => {
  const user = getUser();
  const history = useHistory();
  const logout = () => {
    localStorage.clear();
    history.push("/");
  };

  const getName = useCallback(() => {
    return `${user.first_name[0]}${user.last_name[0]}`;
  }, [user]);


  return (
    <div className="nav-bar-container">
      <div className="nav-right">
        <img className="nav-logo" alt="logo not found" src={Logo} />
      </div>
      <div className="nav-left">
        <p>DashBoard</p>
        <p>
          <span className="user" onClick={logout}>
            {getName()}
          </span>
          Logout
        </p>
      </div>
    </div>
  );
};

export default NavBar;
