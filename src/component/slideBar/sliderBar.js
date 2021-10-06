import Logo from "../../image/Logo.svg";
import Illustration from "../../image/Illustration.svg";

const SideBar = () => {
  return (
    <div className="side-bar-container">
      <img alt="n" src={Logo} />
      <p className="heading">Became a modern arbiture, Now</p>
      <div className="bottom-logo">
        <img alt="n" src={Illustration} />
      </div>
    </div>
  );
};

export default SideBar;
