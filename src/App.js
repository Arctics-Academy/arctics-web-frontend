// Import ..
import { useEffect, useState, useContext } from 'react';
import { Switch, Route, useHistory, useLocation, Redirect } from 'react-router-dom';

// APIs & Utils
import { authFetchAllData } from './Axios/consulAxios';
import studentApis from './Axios/studentAxios';
import { wrapLoginData } from './DataProcessUtils';
import { ParamContext } from './ContextReducer';

// Global Components
import Nav from '../src/GlobalComponents/Nav';
import NavMobile from '../src/GlobalComponents/NavMobile';
import Foot from '../src/GlobalComponents/Foot';
import LandingPage from './LandingPage/Containers/LandingPage';

// Register & Login Components
import RegisterIdentity from './Register/RegisterIdentity';
import Register from './Register/Register';
import RegisterSuccess from './Register/RegisterSuccess';
import RegisterMobileOTP from './Register/RegisterMobileOTP';
import RegisterEmailOTP from './Register/RegisterEmailOTP';
import Login from './Login/Login';

// Consultant Components
import ConsulHome from './Consultant/Home/Container/ConsulHome';
import ConsulSchedule from './Consultant/Schedule/Container/ConsulSchedule';
import ConsulPurse from './Consultant/Purse/Container/ConsulPurse';
import ConsulCancelSuccess from './Consultant/Cancel/Container/ConsulCancelSuccess';
import ConsulMultiCancel from './Consultant/Cancel/Container/ConsulMultiCancel';
import ConsulProfile from './Consultant/Profile/Container/ConsulProfile'
import ConsulAnnounce from './Consultant/Announcements/Container/ConsulAnnounce';

// Student Components
import StudentHome from './Student/Home/Container/StudentHome';
import StudentCartList from './Student/CartList/Container/CartList'
import BookingFirstStage from './Student/Booking/Container/BookingFirstStage';
import BookingThirdStage from './Student/Booking/Container/BookingThirdStage';
import SubmitPayment from './Student/SubmitPayment/Container/SubmitPayment';
import StudentProfile from './Student/Profile/StudentProfile';
import RecordPage from './Student/Record/Containers/RecordPage';
import StudentResult from './Student/Result/Result';
import Preview from './Student/Preview/Preview';
import StudentAnnouncements from './Student/Announcements/Container/StudentAnnounce';
import StudentSchedule from './Student/Schedule/Container/StudentSchedule';

// Misc Components
import OpenMeetingModal from './Modals/consultant/openMeetingModal';
import ProfilePhotoModal from './Modals/consultant/profilePhotoModal';
import EmptyFunctionModal from './Modals/system/emptyFunctionModal';
import NotifModal from './Modals/system/notifModal';
import NotFoundException from './Exception/NotFoundException';
import InternalServerErrorException from './Exception/InternalServerErrorException'
import ProtectedRoute from './ProtectedRoute';

// Stylesheets
import './style.css';
//import './responsive.css';


// TODO: tidy structure -> move navbar to here and add switch routers
// TODO: static.json !
const App = () => {
  const [auth, setAuth] = useState(false)
  const context = useContext(ParamContext)
  const history = useHistory()
  const location = useLocation()
  const getIdentity = (id) => {
    if (id.substring(0, 2) === 'TR') return 'consultant'
    else return 'student'
  }
  
  useEffect(() => {
    async function reload() {
      console.log('reload')
      const resConsultant = await authFetchAllData();
      const resStudent = await studentApis.studentAuthenticate();
      let status, data, message
      if (resConsultant.status === 'success') {
        status = resConsultant.status
        data = resConsultant.data
        message = resConsultant.msg
      } else if ( resStudent.status === 'success') {
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
        setAuth(false)
        return
      }
    }
    
    reload()
  })
  

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

          <ProtectedRoute auth={auth} exact path="/consultant-home" component={ConsulHome} />
          <ProtectedRoute auth={auth} exact path="/consultant-profile" component={ConsulProfile} />
          <ProtectedRoute auth={auth} exact path="/consultant-announcement" component={ConsulAnnounce} />
          <ProtectedRoute auth={auth} exact path="/consultant-schedule/:mode" component={ConsulSchedule} />
          <ProtectedRoute auth={auth} exact path="/consultant-purse/:mode" component={ConsulPurse} />
          <ProtectedRoute auth={auth} exact path="/exception/404" component={NotFoundException} />
          <ProtectedRoute auth={auth} exact path="/exception/500" component={InternalServerErrorException} />

          <Route exact path="/student-home" component={StudentHome} />
          <Route exact path="/student-announcement" component={StudentAnnouncements} />
          <Route exact path="/student-schedule/:mode" component={StudentSchedule} />
          <Route exact path="/student-submit-payment" component={SubmitPayment} />
          <Route exact path="/student-profile" component={StudentProfile} />
          <Route exact path="/student-search-result" component={StudentResult} />
          <Route exact path="/student-preview/:cltid" component={Preview} />
          <Route exact path="/student-cart" component={StudentCartList} />
          <Route exact path="/student-booking-1" component={BookingFirstStage}/>
          <Route exact path="/student-booking-3" component={BookingThirdStage}/>
          <Route exact path="/student-record" component={RecordPage}/>
          
          <Route exact path="/profile-photo-modal" component={ProfilePhotoModal} />
          <Route exact path="/empty-function-modal" component={EmptyFunctionModal} />
          <Route exact path="/notif-modal" component={NotifModal} />
          <Route exact path="/modal-test" component={OpenMeetingModal} />
          <Redirect from='*' to='/exception/404' />
        </Switch>
      </div>
    </>
  );
};

export default App;

// comment everything except landing page and payment check
// <Foot />
// <Route exact path="/consultant-success-cancel" component={ConsulCancelSuccess} />
// <Route exact path="/consultant-multi-cancel" component={ConsulMultiCancel} />