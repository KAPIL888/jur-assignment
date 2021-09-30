import Logo from "../../image/Logo.svg";
import "./navBar.css";

const NavBar = () => {
  return (
    <div className="nav-bar-container">
      <div className="nav-right">
        <img className="nav-logo" alt="logo not found" src={Logo} />
      </div>
      <div className="nav-left">
           <p>DashBoard</p>
           <p><span className="user">JD</span>Logout</p>
      </div>
    </div>
  );
};

export default NavBar;
