// Import ...
import { useContext } from 'react'
import { ParamContext } from '../../../ContextReducer'
import { Link } from 'react-router-dom'

// Icons
import { ReactComponent as BellIcon } from '../img/bellicon.svg'
import { ReactComponent as ShowMore } from '../img/doublearrow.svg'

// Stylesheets
import '../std_home.css'

// Sub-components
const Meetings = (appointments) => {
  return (
    appointments.map((e) => {
      if (e === null) {
        return (
          <div className='std_home-myapnt-card std_home-myapnt-card-empty'>
            <span>---</span>
          </div>
        )
      }
      else {
        return (
          <div className='std_home-myapnt-card'>
            <div className='std-card-date-time'>
              <p className='std-card-date'>{e.date}</p>
              <p className='std-card-time'>{e.time}</p>
            </div>
            <div className='std-card-consul-info'>
              <p className='std-card-name'>{e.name}</p>
              <p className='std-card-institution'>{e.school}</p>
              <p className='std-card-major'>{e.major}</p>
            </div>
            <div className='std-card-specified-features'>
              {(e.content.length !== 0 ?
                e.content.map((f) => (<span className='std-card-feature'>{f}</span>)) :
                <span className='std-card-feature'>一般諮詢</span>)}
            </div>
            <div className='std-card-btns'>
              <button className='std-card-unavailable-button' disabled>請假</button>
              <button className='std-card-open-meeting' disabled>開啟會議</button>
            </div>
          </div>
        )
      }
    }
  ))
}

// FIXME: add empty stuff
const AppointmentContent = (appointments) => {
  console.debug('AppointmentContent', appointments.length)
  while ((appointments.length === 1) || (appointments.length === 2)) {
    appointments.push(null)
    console.debug(appointments.length)
  }
  console.debug('AppointmentContent', appointments.length)

  if (appointments[0] === undefined) {
    return (
        <div className='std_home-myapnt-empty'><span>尚未預約任何諮詢</span></div>
    )
  }
  else {
    return (
      <>
        <div className='std_home-myapnt-blocks'>
          {Meetings(appointments)}
        </div>
        <div className='std_home-myapnt-show-all-link-block' >
          <div className='std_home-myapnt-show-all-link'>
            <Link to="/student-schedule/list" style={{color: 'var(--primary)'}}>
              <span className='std_home-myapnt-link-text'>查看全部諮詢</span>
              <ShowMore className='std_home-myapnt-link-arrow' />
            </Link>
          </div>
        </div>
      </>
    )
  }
}


// Main component
const Appointment = ({ demo=false }) => {
  const Context = useContext(ParamContext)
  const TopMeetingArray = (demo ? [] : Context.Info.meetingsByStatus.future.slice(0, 3))

  return (
    <div className='std_home-myapnt'>
      <div className='std_home-myapnt-title'>
        <BellIcon className='std_home-myapnt-title-icon' />
        <span className='std_home-myapnt-title-text'>我的諮詢</span>
      </div>
      <div className='std_home-myapnt-show-apnt'>
        {AppointmentContent(TopMeetingArray)}
      </div>
    </div>
  )
}

export default Appointment