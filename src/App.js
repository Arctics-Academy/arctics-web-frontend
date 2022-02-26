import Nav from '../src/GlobalComponents/Nav';
import NavMobile from '../src/GlobalComponents/NavMobile';
import Foot from '../src/GlobalComponents/Foot';
import LandingPage from './LandingPage/Containers/LandingPage'
import ConsulHome from './Consultant/Home/Container/ConsulHome';
import ConsulSchedule from './Consultant/Schedule/Container/ConsulSchedule';
import ConsulPurse from './Consultant/Purse/Container/ConsulPurse';
import ConsulCancelSuccess from './Consultant/Cancel/Container/ConsulCancelSuccess';
import ConsulMultiCancel from './Consultant/Cancel/Container/ConsulMultiCancel';
import ConsulProfile from './Consultant/Profile/Container/ConsulProfile'
import RegisterIdentity from './Register/RegisterIdentity';
import Register from './Register/Register';
import RegisterValidation from './Register/RegisterValidation';
import RegisterSuccess from './Register/RegisterSuccess';
import Login from './Login/Login';
import { Switch, Route } from 'react-router-dom';
import './style.css';
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
          <Route exact path="/login" component={Login} />
          <Route exact path="/register-identity" component={RegisterIdentity} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/register-validation" component={RegisterValidation} />
          <Route exact path='/register-success' component={RegisterSuccess} />
          <Route exact path="/consultant-home" component={ConsulHome} />
          <Route exact path="/consultant-profile" component={ConsulProfile} />
          <Route exact path="/consultant-schedule" component={ConsulSchedule} />
          <Route exact path="/consultant-purse/:mode" component={ConsulPurse} />
          <Route exact path="/consultant-success-cancel" component={ConsulCancelSuccess} />
          <Route exact path="/consultant-multi-cancel" component={ConsulMultiCancel} />
        </Switch>
        <Foot />
      </ContextReducer>
    </div>
  );
};

export default App;
