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
        <p>Dashboard</p>
        <div className="user-container">
          <span className="user">{getName()}</span>
          <span className="logout-button" onClick={logout}>
            Logout
          </span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
