import { useContext } from 'react'
import bellIcon from '../img/bell.png'
import darkarrow from '../img/darkArrow-right.png'
import palearrow from '../img/paleArrow-left.png'
import '../clt_home.css'
import { ParamContext } from '../../../ContextReducer'
import { Link } from 'react-router-dom'

const showBlocks = (appointments) => {
    return (
        appointments.map((e) => {
            return (
                <div className='clt_home-myapnt-card'>
                    <div className='card-date-time'>
                        <p className='card-date'>{e.date}</p>
                        <p className='card-time'>{e.time}</p>
                    </div>
                    <div className='card-maker-info'>
                        <p className='card-name'>{e.student}</p>
                        <p className='card-grade'>{e.grade}</p>
                    </div>
                    <div className='card-specified-features'>
                        {e.content.map((f) => (<span className='card-feature'>{f}</span>))}
                    </div>
                    {/* <button className='card-unavailable-button' >請假</button> */}
                    <button className='card-open-meeting' disabled>開啟會議</button>
                </div>
            )
        }
    ))
}

const MyAppointment = () => {
    const context = useContext(ParamContext)
    if (context.Info.meetingsByStatus.future[0] === undefined) {
        return (
            <div className='clt_home-myapnt'>
                <div className='clt_home-myapnt-title'>
                    <img className='clt_home-myapnt-title-icon' src={bellIcon} />
                    <span className='clt_home-myapnt-title-text'>我的諮詢</span>
                </div>
                <div className='clt_home-myapnt-show-apnt'>
                    <p className='clt_home-myapnt-empty-msg'>目前尚未有任何諮詢預約!</p>
                </div>
            </div>
        )
    } else {
        return(
            <div className='clt_home-myapnt'>
                <div className='clt_home-myapnt-title'>
                    <img className='clt_home-myapnt-title-icon' src={bellIcon} />
                    <span className='clt_home-myapnt-title-text'>我的諮詢</span>
                </div>
                <div className='clt_home-myapnt-show-apnt'>
                    <div className='clt_home-myapnt-blocks'>
                        {showBlocks(context.Info.meetingsByStatus.future)}
                    </div>
                    <div className='clt_home-myapnt-show-all-link-block' >
                        <div className='clt_home-myapnt-show-all-link'>
                            <Link to="/consultant-schedule/list"><span className='clt_home-myapnt-link-text'>查看全部諮詢 &gt;</span></Link>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MyAppointment


{<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='clt_home-myapnt-link-arrow' >
                                {/*<!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->*/}
                                <path d="M246.6 233.4l-160-160c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25L178.8 256l-137.4 137.4c-12.5 12.5-12.5 32.75 0 45.25C47.63 444.9 55.81 448 64 448s16.38-3.125 22.62-9.375l160-160C259.1 266.1 259.1 245.9 246.6 233.4zM438.6 233.4l-160-160c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25L370.8 256l-137.4 137.4c-12.5 12.5-12.5 32.75 0 45.25C239.6 444.9 247.8 448 256 448s16.38-3.125 22.62-9.375l160-160C451.1 266.1 451.1 245.9 438.6 233.4z"/>
                            </svg>}