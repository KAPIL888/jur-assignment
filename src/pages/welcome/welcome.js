import Button from "component/button/button";
import NavBar from "component/navBar/navbar";
import WelcomeSideBar from "component/welcomeSidebar/welcomeSideBar";
import "./welcome.css";
const Welcome = () => {
  return (
    <div className="authentication-form">
      <NavBar />
      <WelcomeSideBar />

      <div className="right-container">
        <div className="welcome-card">
          <h1 className="welcome-empty-text">
            Some illustration image asset. Will be provided by designer
          </h1>
        </div>
        <Button label="Let's Start"></Button>
      </div>
    </div>
  );
};

export default Welcome;
