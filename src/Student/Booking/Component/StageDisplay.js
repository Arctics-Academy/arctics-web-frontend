// Icons
import DarkCircle from '../img/dark-circle.svg'
import DarkLine from '../img/dark-line.svg'
import BlueCircle from '../img/blue-circle.svg'
import BlueLine from '../img/blue-line.svg'

// Component
const StageDisplay = ({ stage }) => {
  // eslint-disable-next-line default-case
  switch (stage) {
    case 1:
      return (
        <div className='std_booking-display-wrapper'>
          <div className='std_booking-display-top-img'>
            <div>
              <div className='std_booking-display-heading-label-container'>
                <img src={BlueCircle} alt='step 1' />
                <span className='std_booking-display-heading-label'>1</span>
              </div>
              <p className='std_booking-display-heading-label-bottom'>選擇課程</p>
            </div>
            <div className='std_booking-display-heading-bar'>
              <img src={BlueLine} alt='' />
            </div>
            <div >
              <div className='std_booking-display-heading-label-container'>
                <img src={DarkCircle} alt='step 2' />
                <span className='std_booking-display-heading-label'>2</span>
              </div>
              <p className='std_booking-display-heading-label-bottom'>確認付款</p>
            </div>
          </div>
          <div className='std_booking-display-reminder-container'>
            <p className='std_booking-display-reminder-head'>選擇課程</p>
            <p className='std_booking-display-reminder-line'></p>
            <p className='std_booking-display-reminder-content'></p>
          </div>
        </div>
      )
    case 3:
      return (
        <div className='std_booking-display-wrapper'>
          <div className='std_booking-display-top-img'>
            <div>
              <div className='std_booking-display-heading-label-container'>
                <img src={DarkCircle} alt='step 1' />
                <span className='std_booking-display-heading-label'>1</span>
              </div>
              <p className='std_booking-display-heading-label-bottom'>選擇課程</p>
            </div>
            <div className='std_booking-display-heading-bar'>
              <img src={DarkLine} alt='' />
            </div>
            <div >
              <div className='std_booking-display-heading-label-container'>
                <img src={BlueCircle} alt='step 2' />
                <span className='std_booking-display-heading-label'>2</span>
              </div>
              <p className='std_booking-display-heading-label-bottom'>確認付款</p>
            </div>
          </div>
          <div className='std_booking-display-reminder-container'>
            <p className='std_booking-display-reminder-head'>確認付款</p>
            <p className='std_booking-display-reminder-line'></p>
            <p className='std_booking-display-reminder-content'>請於兩個工作天午夜前自行匯款至Arctics帳號並回到Arctics網站提交證明。<br />若為銀行轉帳，請提供匯款帳戶末五碼；若為超商 / 郵局 / 銀行現金付款等其它繳費方式，請上傳匯款收據照片。<br />若兩日內未完成，系統將自動取消訂單。</p>
          </div>
        </div>
      )
  }
}

export default StageDisplay
