import Logo from "../../image/Logo.svg";
import Ils from "../../image/ils.svg";

const SideBar = () => {
  return (
    <div className="side-bar-container">
      <img alt="n" src={Logo} />
      <p className="heading">Became a modern arbiture, Now</p>
      <div className="bottom-logo">
        <img alt="n" src={Ils} />
      </div>
    </div>
  );
};

export default SideBar;
