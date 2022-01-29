import bellIcon from '../img/bell.png'
import darkarrow from '../img/darkArrow-right.png'
import palearrow from '../img/paleArrow-left.png'
import gotoarrow from '../img/gotoArrow.png'
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
                {leftArrow()}
                <div className='clt_home-myapnt-blocks'>
                    {showBlocks(tempTest)}
                </div>
                {rightArrow()}
                <a className='clt_home-myapnt-show-all-link' >
                    <span className='clt_home-myapnt-link-text'>查看全部諮詢</span>
                    <img className='clt_home-myapnt-link-arrow1' src={gotoarrow} />
                    <img className='clt_home-myapnt-link-arrow2' src={gotoarrow}/>
                </a>
            </div>
        </div>
    )
}

export default MyAppointment