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
import { Switch, Route, Redirect, useHistory, useLocation } from 'react-router-dom';
import './style.css';
//import './responsive.css';
import RegisterMobileOTP from './Register/RegisterMobileOTP';
import RegisterEmailOTP from './Register/RegisterEmailOTP';
import BookingSecondStage from './Student/Booking/Container/BookingSecondStage';
import SubmitPayment from './Student/SubmitPayment/Container/SubmitPayment';
import { useEffect, useState, useContext } from 'react';
import { authFetchAllData } from './Axios/consulAxios';
import { ParamContext } from './ContextReducer';
import { wrapLoginData } from './DataProcessUtils';
import ProtectedRoute from './ProtectedRoute';
import studentApis from './Axios/studentAxios';

//TODO: tidy structure -> move navbar to here and add switch routers
//TODO: static.json !
const App = () => {
  const [auth, setAuth] = useState(false)
  const context = useContext(ParamContext)
  const history = useHistory()
  const location = useLocation()
  const getIdentity = (id) => {
    if (id.substring(0, 2) === 'TR') return 'consultant'
    else return 'student'
  }
  
  useEffect(async () => {
    console.log('reload')
    const resConsultant = await authFetchAllData();
    const resStudent = await studentApis.studentAuthenticate();
    let status, data, message
    if (resConsultant.status === 'success') {
      status = resConsultant.status
      data = resConsultant.data
      message = resConsultant.msg
    } else if ( resStudent.status === 'successs') {
      status = resStudent.status
      data = resStudent.data
      message = resStudent.message
    } else {
      status = 'failed'
    }
    console.log(status, data, message)
    console.log(location)
    if (status === 'success') {
      try {
        setAuth(true)
        context.isLogin = true
        //context.setInfo('login', wrapLoginData(data, getIdentity(data.id)))
        //context.setLogin(true)
        context.Info = wrapLoginData(data, getIdentity(data.id))
        history.push(location.pathname)
        console.log("App.js context: ", context)
        return
      }
      catch (e) {
        console.log(e)
        setAuth(false)
        return
      }
    } else {
      console.log("in status else if")
      setAuth(false)
      return
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
          <Route exact path="/register-mobile-otp/:identity" component={RegisterMobileOTP} />
          <Route exact path="/register-email-otp/:identity" component={RegisterEmailOTP} />
          <Route exact path='/register-success' component={RegisterSuccess} />
          <Route exact path="/student-home" component={StudentHome} />
          <Route exact path="/student-booking" component={BookingSecondStage} />
          <Route exact path="/student-submit-payment" component={SubmitPayment} />
          <ProtectedRoute auth={auth} exact path="/consultant-home" component={ConsulHome} />
          <ProtectedRoute auth={auth} exact path="/consultant-profile" component={ConsulProfile} />
          <ProtectedRoute auth={auth} exact path="/consultant-schedule/:mode" component={ConsulSchedule} />
          <ProtectedRoute auth={auth} exact path="/consultant-purse/:mode" component={ConsulPurse} />
          <ProtectedRoute auth={auth} exact path="/exception/404" component={NotFoundException} />
          <ProtectedRoute auth={auth} exact path="/exception/500" component={InternalServerErrorException} />
          <ProtectedRoute auth={auth} exact path="/consultant-announcement" component={ConsulAnnounce} />
          <Redirect from='*' to='/exception/404' />
          <Route exact path="/consultant-success-cancel" component={ConsulCancelSuccess} />
          <Route exact path="/consultant-multi-cancel" component={ConsulMultiCancel} />
          <Route exact path="/modal-test" component={OpenMeetingModal} />
          <Route exact path="/profile-photo-modal" component={ProfilePhotoModal} />
          <Route exact path="/empty-function-modal" component={EmptyFunctionModal} />
          <Route exact path="/notif-modal" component={NotifModal} />
        </Switch>
      </div>
    </>
  );
};

export default App;

// comment everything except landing page and payment check
// <Foot />
