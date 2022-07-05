// Import ...
import { useContext } from 'react'
import { ParamContext } from '../../../ContextReducer'

// Icons
import { ReactComponent as BellIcon } from '../img/bellicon.svg'
import { ReactComponent as ShowMore } from '../img/doublearrow.svg'

// Stylesheets
import '../std_home.css'

// Sub-components
const Meetings = (appointments) => {
  return (
    appointments.map((e) => {
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
              <span className='std-card-feature'>-</span>)}
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

// FIXME: add empty stuff
const AppointmentContent = (appointments) => {
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
            <span className='std_home-myapnt-link-text'>查看全部諮詢</span>
            <ShowMore className='std_home-myapnt-link-arrow' />
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