import Nav from '../src/Components/Nav';
import NavMobile from '../src/Components/NavMobile';
import Foot from '../src/Components/Foot';
import LandingPage from '../src/Containers/LandingPage'
import { Switch, Route } from 'react-router-dom';
import './style.css';
import './responsive.css';
//TODO: tidy structure -> move navbar to here and add switch routers
//TODO: static.json ! 
const App = () => {
  return (
    <div className="App">
      <NavMobile />
      <Nav />
      <Switch>
        <Route path="/" component={LandingPage} />
      </Switch>
      <Foot />
    </div>
  )
}

export default App