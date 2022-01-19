import Nav from '../src/GlobalComponents/Nav';
import NavMobile from '../src/GlobalComponents/NavMobile';
import Foot from '../src/GlobalComponents/Foot';
import LandingPage from './LandingPage/Containers/LandingPage'
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
          <Route path="/" component={LandingPage} />
        </Switch>
        <Foot />
      </ContextReducer>
    </div>
  )
}

export default App