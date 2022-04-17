import '../std_home.css'
import { ReactComponent as BellIcon } from '../img/bellicon.svg'
import { ReactComponent as ShowMore } from '../img/doublearrow.svg'
import { ParamContext } from '../../../ContextReducer'
import { useContext } from 'react'
const showMeetings = (appointments) => {
    return (
        appointments.map((e) => {
            return (
                <div className='std_home-myapnt-card'>
                    <div className='std-card-date-time'>
                        <p className='std-card-date'>{e.date}</p>
                        <p className='std-card-time'>{e.time}</p>
                    </div>
                    <div className='std-card-consul-info'>
                        <p className='std-card-name'>{e.consultant}</p>
                        <p className='std-card-institution'>{e.institution}</p>
                        <p className='std-card-major'>{e.major}</p>
                    </div>
                    <div className='std-card-specified-features'>
                        {e.content.map((f) => (<span className='std-card-feature'>{f}</span>))}
                    </div>
                    <div className='std-card-btns'>
                        <button className='std-card-unavailable-button' >請假</button>
                        <button className='std-card-open-meeting'>開啟會議</button>
                    </div>
                </div>
            )
        }
    ))
}

const test = [{
    date: '2020-09-21 (Fri)', time: '20:00~21:00',
    consultant: 'Giny', institution: 'NTHU', major: 'Computer Science and Information Technology',
    content: ['學習歷程', '面試準備']
}, {
    date: '2020-09-21 (Fri)', time: '20:00~21:00',
    consultant: 'Giny', institution: 'NTHU', major: 'Computer Science and Information Technology',
    content: ['學習歷程', '面試準備']
}, {
    date: '2020-09-21 (Fri)', time: '20:00~21:00',
    consultant: 'Giny', institution: 'NTHU', major: 'Computer Science and Information Technology',
    content: ['學習歷程', '面試準備']
}]

const Appointment = () => {
    const context = useContext(ParamContext)
    return(
        <div className='std_home-myapnt'>
            <div className='std_home-myapnt-title'>
                <BellIcon className='std_home-myapnt-title-icon' />
                <span className='std_home-myapnt-title-text'>我的諮詢</span>
            </div>
            <div className='std_home-myapnt-show-apnt'>
                <div className='std_home-myapnt-blocks'>
                    {showMeetings(context.Info.meetingsByStatus.future)}
                    {/*showMeetings(test)*/}
                </div>
                <div className='std_home-myapnt-show-all-link-block' >
                    <div className='std_home-myapnt-show-all-link'>
                        <span className='std_home-myapnt-link-text'>查看全部諮詢</span>
                        <ShowMore className='std_home-myapnt-link-arrow' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Appointment