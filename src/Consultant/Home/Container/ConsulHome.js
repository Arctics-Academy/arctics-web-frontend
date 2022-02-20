import Greeting from '../Components/Greeting'
import Announcement from '../Components/Announcement'
import '../clt_home.css'
import MyAppointment from '../Components/MyAppointment'
import MyPurse from '../Components/MyPurse'

const ConsulHome = () => {
    return (
        <div className='clt_home__main'>
            <Greeting />
            <Announcement />
            <MyAppointment />
            <MyPurse />
        </div>
    )
}

export default ConsulHome