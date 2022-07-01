// Sub-components
import { TwoLineInfoLabel } from './InfoLabel'
import CalendarComponent from './CalendarComponent'
import SelectComponent from './SelectComponent'

// Icons
import WhiteX from '../img/white-x.svg'



const SelectionCard = ({ data, slot, setSlot, consultant, student }) => {
  return (
    <div className='std-booking-selection-card__background'>
      <div className='std-booking-selection-card__wrapper'>
        <div className='std-booking-selection-card__people-row'>
          <div className='std-booking-selection-card__people-label'>
            <TwoLineInfoLabel identifier='student' label='學生' content1={`${student.surname+student.name} 同學`} content2={`${student.school} ${student.grade}`} />
          </div>
          <div className='std-booking-selection-card__people-label'>
            <TwoLineInfoLabel identifier='consultant' label='顧問' content1={`${consultant.surname+consultant.name} 同學`} content2={`${consultant.school} ${consultant.major}`} /> 
          </div>
        </div>
        <div className='std-booking-selection-card__time-label'>
          <TwoLineInfoLabel identifier='time' label='選擇時間'/>
        </div>
        <div className='std-booking-selection-card__time-panel-wrapper'>
          <div className='std-booking-selection-card__time-component'>
            <CalendarComponent data={data} setSlot={setSlot} />
          </div>
          <div className='std-booking-selection-card__time-component std-booking-selection-card__time-component-right'>
            <div>
              <SelectComponent slot={slot} price={consultant.price} />
            </div>
            <div className='std-booking-selection-card__button-wrapper'>
              <button className='std-booking-selection-card__button'>
                <img src={WhiteX} alt='cancel'/>
                <span className='std-booking-selection-card__button-label-with-icon'>取消</span>
              </button>
              <button className='std-booking-selection-card__button std-booking-selection-card__button--action'>
                <span>前往確認</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SelectionCard