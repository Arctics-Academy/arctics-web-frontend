import Nav from '../src/GlobalComponents/Nav';
import NavMobile from '../src/GlobalComponents/NavMobile';
import Foot from '../src/GlobalComponents/Foot';
import LandingPage from './LandingPage/Containers/LandingPage'
import ConsulHome from './Consultant/Home/Container/ConsulHome';
import ConsulAccount from './Consultant/Profile/Container/ConsulAccount';
import ConsulInfo from './Consultant/Profile/Container/ConsulInfo';
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
          <Route exact path="/consultant-account" component={ConsulAccount} />
          <Route exact path="/consultant-profile" component={ConsulInfo} />
        
        </Switch>
        <Foot />
      </ContextReducer>
    </div>
  )
}

export default App