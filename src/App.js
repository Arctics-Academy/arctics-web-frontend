import Nav from "../src/GlobalComponents/Nav";
import NavMobile from "../src/GlobalComponents/NavMobile";
import Foot from "../src/GlobalComponents/Foot";
import LandingPage from "./LandingPage/Containers/LandingPage";
import ConsulHome from "./Consultant/Home/Container/ConsulHome";
import ConsulAnnounce from "./Consultant/Announcements/Container/ConsulAnnounce";
import { Switch, Route, Redirect } from "react-router-dom";
import "./style.css";
//import './responsive.css';
import ContextReducer from "./ContextReducer";
//TODO: tidy structure -> move navbar to here and add switch routers
//TODO: static.json !
const App = () => {
  return (
    <div className="App">
      <ContextReducer>
        <NavMobile />
        <Nav />
        <Switch>
          {/* <Route exact path="/" component={LandingPage} /> */}
          <Route
            exact
            path="/consultant-announcement"
            component={ConsulAnnounce}
          />
        </Switch>
        <Foot />
      </ContextReducer>
    </div>
  );
};

export default App;

// temporary removed => <Route exact path="/consultant-home" component={ConsulHome} />
// temporary removed => Landing page
