import Greeting from '../Components/Greeting'
import Announcement from '../Components/Announcement'
import '../clt_home.css'
import MyAppointment from '../Components/MyAppointment'
import MyPurse from '../Components/MyPurse'

import { MetaTags } from 'react-meta-tags'

const ConsulHome = () => {
    return (
        <div className='clt_home__main'>
            <MetaTags>
                <title>顧問首頁 | Arctics</title>
            </MetaTags>
            <Greeting />
            <Announcement />
            <MyAppointment />
            <MyPurse />
        </div>
    )
}

export default ConsulHome