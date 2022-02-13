import Nav from '../src/GlobalComponents/Nav';
import NavMobile from '../src/GlobalComponents/NavMobile';
import Foot from '../src/GlobalComponents/Foot';
import LandingPage from './LandingPage/Containers/LandingPage'
import ConsulHome from './Consultant/Home/Container/ConsulHome';

import ConsulSchedule from './Consultant/Schedule/Container/ConsulSchedule';
import ConsulPurse from './Consultant/Purse/Container/ConsulPurse';
import ConsulMonoCancel from './Consultant/Cancel/Container/ConsulMonoCancel';
import ConsulMultiCancel from './Consultant/Cancel/Container/ConsulMultiCancel';
// import ConsulAccount from './Consultant/PersonalInfo/Container/ConsulAccount';
import ConsulProfile from './Consultant/Profile/Container/ConsulProfile';

import { Switch, Route } from "react-router-dom";
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
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/consultant-home" component={ConsulHome} />
          <Route exact path="/consultant-profile" component={ConsulProfile} />
          <Route exact path="/consultant-schedule" component={ConsulSchedule} />
          <Route exact path="/consultant-purse/:mode" component={ConsulPurse} />
          <Route exact path="/consultant-mono-cancel/:cancelId" component={ConsulMonoCancel} />
          <Route exact path="/consultant-multi-cancel" component={ConsulMultiCancel} />
        </Switch>
        <Foot />
      </ContextReducer>
    </div>
  );
};

export default App;
