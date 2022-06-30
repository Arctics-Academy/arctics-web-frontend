import TwoLineInfoLabel from './InfoLabel'
import BookingCalendar from './BookingCalendar'
import BookingPanel from './BookingPanel'

import WhiteX from '../img/white-x.svg'

import './BookingCard.css'

const BookingCard = () => {
  return (
    <div className='booking-card-wrapper'>
      <div className='booking-card-people-row'>
        <div className='booking-card-people-label'>
          <TwoLineInfoLabel identifier='student' label='學生' content1='x' content2='y'/>
        </div>
        <div className='booking-card-people-label'>
          <TwoLineInfoLabel identifier='consultant' label='顧問' content1='x' content2='y'/> 
        </div>
      </div>
      <div className='booking-card-time-label'>
        <TwoLineInfoLabel identifier='time' label='選擇時間'/>
      </div>
      <div className='booking-card-time-panel-wrapper'>
        <div className='booking-card-time-component'>
          <BookingCalendar />
        </div>
        <div className='booking-card-time-component booking-card-time-component-right'>
          <div>
            <BookingPanel />
          </div>
          <div className='booking-card-button-wrapper'>
            <button className='booking-card-button'>
              <img src={WhiteX} alt='cancel'/>
              <span className='booking-card-button-label-with-icon'>取消</span>
            </button>
            <button className='booking-card-button booking-card-button--action'>
              <span>前往確認</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookingCard