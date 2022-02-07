import Nav from '../src/GlobalComponents/Nav';
import NavMobile from '../src/GlobalComponents/NavMobile';
import Foot from '../src/GlobalComponents/Foot';
import LandingPage from './LandingPage/Containers/LandingPage'
import ConsulHome from './Consultant/Home/Container/ConsulHome';
<<<<<<< HEAD
import ConsulProfile from './Consultant/Profile/Container/ConsulProfile';
=======
import ConsulAccount from './Consultant/PersonalInfo/Container/ConsulAccount';
import ConsulProfile from './Consultant/PersonalInfo/Container/ConsulProfile';
import ConsulSchedule from './Consultant/Schedule/Container/ConsulScedule';
>>>>>>> 5d2bd02ce52fd38edbb4fd387bb825bd5aeb9ffc

import { Switch, Route } from 'react-router-dom';
import './style.css';
//import './responsive.css';
import ContextReducer from './ContextReducer';
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
        </Switch>
        <Foot />
      </ContextReducer>
    </div>
  )
}

export default App