import Nav from '../src/GlobalComponents/Nav';
import NavMobile from '../src/GlobalComponents/NavMobile';
import Foot from '../src/GlobalComponents/Foot';
import LandingPage from './LandingPage/Containers/LandingPage';
import ConsulHome from './Consultant/Home/Container/ConsulHome';
import ConsulSchedule from './Consultant/Schedule/Container/ConsulSchedule';
import ConsulPurse from './Consultant/Purse/Container/ConsulPurse';
import ConsulCancelSuccess from './Consultant/Cancel/Container/ConsulCancelSuccess';
import ConsulMultiCancel from './Consultant/Cancel/Container/ConsulMultiCancel';
import ConsulProfile from './Consultant/Profile/Container/ConsulProfile'
import ConsulAnnounce from './Consultant/Announcements/Container/ConsulAnnounce';
import RegisterIdentity from './Register/RegisterIdentity';
import Register from './Register/Register';
import RegisterSuccess from './Register/RegisterSuccess';
import OpenMeetingModal from './Modals/consultant/openMeetingModal';
import ProfilePhotoModal from './Modals/consultant/profilePhotoModal';
import EmptyFunctionModal from './Modals/system/emptyFunctionModal';
import NotifModal from './Modals/system/notifModal';
import NotFoundException from './Exception/NotFoundException';
import InternalServerErrorException from './Exception/InternalServerErrorException'
import Login from './Login/Login';
import StudentHome from './Student/Home/Container/StudentHome';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import './style.css';
//import './responsive.css';
import RegisterMobileOTP from './Register/RegisterMobileOTP';
import RegisterEmailOTP from './Register/RegisterEmailOTP';
import { useEffect, useState, useContext } from 'react';
import { authFetchAllData } from './axios';
import { ParamContext } from './ContextReducer';
import { wrapLoginData } from './DataProcessUtils';

//TODO: tidy structure -> move navbar to here and add switch routers
//TODO: static.json !
const App = () => {
  const [auth, setAuth] = useState(false)
  const context = useContext(ParamContext)
  const history = useHistory()
  const getIdentity = (id) => {
    if (id.subString(0, 2) === 'TR') return 'consultant'
    else return 'student'
  }

  useEffect(async () => {
    console.log('reload')
    const { status, data, message } = await authFetchAllData();
    console.log(status, data, message)
    if (status === 'success') {
      setAuth(true)
      context.setLogin(true)
      context.setInfo('login', wrapLoginData(data, getIdentity(data.id)))
      history.push('/consultant-home')
    } else {
      setAuth(false)
    }
  }, [])

  return (
    <>
      <div className="App">  
        <NavMobile />
        <Nav />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register-identity" component={RegisterIdentity} />
          <Route exact path="/register/:identity" component={Register} />
          <ProtectedRoute exact path="/register-mobile-otp" component={RegisterMobileOTP} />
          <ProtectedRoute exact path="/register-email-otp" component={RegisterEmailOTP} />
          <ProtectedRoute exact path='/register-success' component={RegisterSuccess} />
          <ProtectedRoute exact path="/consultant-home" component={ConsulHome} />
          <ProtectedRoute exact path="/consultant-profile" component={ConsulProfile} />
          <ProtectedRoute exact path="/consultant-schedule/:mode" component={ConsulSchedule} />
          <ProtectedRoute exact path="/consultant-purse/:mode" component={ConsulPurse} />
          <ProtectedRoute exact path="/consultant-success-cancel" component={ConsulCancelSuccess} />
          <ProtectedRoute exact path="/consultant-multi-cancel" component={ConsulMultiCancel} />
          <ProtectedRoute exact path="/consultant-announcement" component={ConsulAnnounce} />
          <ProtectedRoute exact path="/student-home" component={StudentHome} />
          <ProtectedRoute exact path="/modal-test" component={OpenMeetingModal} />
          <ProtectedRoute exact path="/profile-photo-modal" component={ProfilePhotoModal} />
          <ProtectedRoute exact path="/empty-function-modal" component={EmptyFunctionModal} />
          <ProtectedRoute exact path="/notif-modal" component={NotifModal} />
          <Route exact path="/exception/404" component={NotFoundException} />
          <Route exact path="/exception/500" component={InternalServerErrorException} />
          <Redirect from='*' to='/exception/404' />
        </Switch>
      </div>
    </>
  );
};

export default App;
