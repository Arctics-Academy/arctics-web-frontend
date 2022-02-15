import bellIcon from '../img/bell.png'
import darkarrow from '../img/darkArrow-right.png'
import palearrow from '../img/paleArrow-left.png'
import gotoarrow from '../img/gotoArrow.png'
import doubleArrowSvg from '../img/angles-right-solid.svg'
import '../clt_home.css'

/* Appointment Format
date: String => parsed date string (time.toLoacaleString)
time: String => preferred time span => parse into string
name: String => who makes the appointment
grade: String => grade of the appointment maker => parse into string
features: [String] =>list of features
*/

const tempTest = [{
    date: '2022/01/30 (日)',
    time: '18:00~19:00',
    name: 'PolarBear',
    grade: '高二',
    features: ['面試', '學習歷程']
}, {
    date: '2022/01/30 (日)',
    time: '18:00~19:00',
    name: 'PolarBear',
    grade: '高二',
    features: ['面試', '學習歷程']
}, {
    date: '2022/01/30 (日)',
    time: '18:00~19:00',
    name: 'PolarBear',
    grade: '高二',
    features: ['面試', '學習歷程']
}, {
    date: '2022/01/30 (日)',
    time: '18:00~19:00',
    name: 'PolarBear',
    grade: '高二',
    features: ['面試', '學習歷程']
}]

const leftArrow  = () => {
    return(
        <img className='clt_home-myapnt-left-arrow' src={palearrow} />
    )
}

const rightArrow = () => {
    return (
        <img className='clt_home-myapnt-right-arrow' src={darkarrow} />
    )
}

const showBlocks = (appointments) => {
    return (
        appointments.map((e) => {
            console.log(e)
            return (
                <div className='clt_home-myapnt-card'>
                    <div className='card-date-time'>
                        <p className='card-date'>{e.date}</p>
                        <p className='card-time'>{e.time}</p>
                    </div>
                    <div className='card-maker-info'>
                        <p className='card-name'>{e.name}</p>
                        <p className='card-grade'>{e.grade}</p>
                    </div>
                    <div className='card-specified-features'>
                        {e.features.map((f) => (<span className='card-feature'>{f}</span>))}
                    </div>
                    <button className='card-unavailable-button' >請假</button>
                    <button className='card-open-meeting'>開啟會議</button>
                </div>
            )
        }
    ))
}

console.log(showBlocks(tempTest))

const MyAppointment = () => {
    return(
        <div className='clt_home-myapnt'>
            <div className='clt_home-myapnt-title'>
                <img className='clt_home-myapnt-title-icon' src={bellIcon} />
                <span className='clt_home-myapnt-title-text'>我的諮詢</span>
            </div>
            <div className='clt_home-myapnt-show-apnt'>
                <div className='clt_home-myapnt-blocks'>
                    {showBlocks(tempTest)}
                </div>
                <div className='clt_home-myapnt-show-all-link-block' >
                    <div className='clt_home-myapnt-show-all-link'>
                        <span className='clt_home-myapnt-link-text'>查看全部諮詢</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='clt_home-myapnt-link-arrow' >
                            <path d="M246.6 233.4l-160-160c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25L178.8 256l-137.4 137.4c-12.5 12.5-12.5 32.75 0 45.25C47.63 444.9 55.81 448 64 448s16.38-3.125 22.62-9.375l160-160C259.1 266.1 259.1 245.9 246.6 233.4zM438.6 233.4l-160-160c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25L370.8 256l-137.4 137.4c-12.5 12.5-12.5 32.75 0 45.25C239.6 444.9 247.8 448 256 448s16.38-3.125 22.62-9.375l160-160C451.1 266.1 451.1 245.9 438.6 233.4z"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyAppointment