// Imports
import './InfoLabel.css'

import BlueBear from '../img/blue-bear.svg'
import BlueStudent from '../img/blue-student.svg'
import BlueCalendar from '../img/blue-calendar.svg'


const IdentifierMap = {
  'consultant': BlueBear,
  'student': BlueStudent,
  'time': BlueCalendar 
}

const TwoLineInfoLabel = ({ identifier, label, content1, content2 }) => {
  return (
    <div className='label-wrapper'>
      <div className='label-icon-wrapper'>
        <img className='label-icon' src={IdentifierMap[identifier]} alt='' />
      </div>
      <span className='label-label'>{label}</span>
      <div>
        <span className='label-content'>{content1}</span>
        <br/>
        <span className='label-content'>{content2}</span>
      </div>
    </div>
  )
}

export default TwoLineInfoLabel