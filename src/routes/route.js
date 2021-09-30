import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "../pages/login/login";
import Register from "../pages/register/register";
import Welcome from "../pages/welcome/welcome";

const AllRoutes = () => {
  return (
    <Router>
      <Route path="/" exact>
         <Login/>
      </Route>
      <Route path="/register">
         <Register/>
      </Route>
      <Route path="/welcome">
         <Welcome/>
      </Route>
    </Router>
  );
};

export default AllRoutes;
