// Icons
import BlueStudent from '../img/blue-student.svg'

const IdentifierMap = {
  'student': BlueStudent
}


const InfoLabelOneLine = ({ identifier, label, content }) => {
  return (
    <div className='global-info-label__wrapper'>
      <div className='global-info-label__icon-wrapper'>
        <img className='global-info-label__icon' src={IdentifierMap[identifier]} alt='' />
      </div>
      <span className='global-info-label__label'>{label}</span>
      <div>
        <span className='global-info-label__content--oneline'>{content}</span>
      </div>
    </div>
  )
}

const InfoLabelTwoLine = ({ identifier, label, content1, content2 }) => {
  return (
    <div className='global-info-label__wrapper'>
      <div className='global-info-label__icon-wrapper'>
        <img className='global-info-label__icon' src={IdentifierMap[identifier]} alt='' />
      </div>
      <span className='global-info-label__label'>{label}</span>
      <div>
        <span className='global-info-label__content'>{content1}</span>
        <br/>
        <span className='global-info-label__content'>{content2}</span>
      </div>
    </div>
  )
}

export { InfoLabelOneLine, InfoLabelTwoLine }