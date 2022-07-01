// Icons
import BlueBear from '../img/blue-bear.svg'
import BlueStudent from '../img/blue-student.svg'
import BlueCalendar from '../img/blue-calendar.svg'
const IdentifierMap = {
  'consultant': BlueBear,
  'student': BlueStudent,
  'time': BlueCalendar 
}


const OneLineInfoLabel = ({ identifier, label, content }) => {
  return (
    <div className='std-booking-label__wrapper'>
      <div className='std-booking-label__icon-wrapper'>
        <img className='std-booking-label__icon' src={IdentifierMap[identifier]} alt='' />
      </div>
      <span className='std-booking-label__label'>{label}</span>
      <div>
        <span className='std-booking-label__content'>{content}</span>
      </div>
    </div>
  )
}

const TwoLineInfoLabel = ({ identifier, label, content1, content2 }) => {
  return (
    <div className='std-booking-label__wrapper'>
      <div className='std-booking-label__icon-wrapper'>
        <img className='std-booking-label__icon' src={IdentifierMap[identifier]} alt='' />
      </div>
      <span className='std-booking-label__label'>{label}</span>
      <div>
        <span className='std-booking-label__content'>{content1}</span>
        <br/>
        <span className='std-booking-label__content'>{content2}</span>
      </div>
    </div>
  )
}

export { TwoLineInfoLabel, OneLineInfoLabel }