// Import ...
import { ParamContext } from '../../../ContextReducer'
import { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'

// Import Modules
import StudentApi from '../../../Axios/studentAxios'
import { wrapLoginData } from '../../../DataProcessUtils'

// Import Components
import { OneLineInfoLabel } from './InfoLabel'
import ActionButton from '../../../GlobalComponents/Components/ActionButton'

// Constants
const DayMap = { 0: "日", 1: "一", 2: "二", 3: "三", 4: "四", 5: "五", 6: "六" }

// Until
const twoDigit = (num) => {
  if (num <=9) return `0${num}`
  else return `${num}`
}
const toDurationString = (year, month, date, slot) => {
  let startHour = Math.floor(slot/2)
  let startMin = (slot%2===0 ? 0 : 30)
  let endHour = (slot%2===0 ? startHour : startHour+1)
  let endMin = (slot%2===0 ? 30 : 0)
  let timestr = `${twoDigit(startHour)}:${twoDigit(startMin)} ~ ${twoDigit(endHour)}:${twoDigit(endMin)}`
  
  let day = new Date()
  day.setFullYear(year)
  day.setMonth(month-1)
  day.setDate(date)
  day = DayMap[day.getDay()]
  
  return `${year}/${twoDigit(month)}/${twoDigit(date)}（${day}） ${timestr}`
}


// Component
const DetailCard = ({ demo }) => {
  const Context = useContext(ParamContext)
  const History = useHistory()
  const [loading, setLoading] = useState(false)

  const Data = {
    time: (demo ? 
      toDurationString(2022, 7, 1, 20) : 
      toDurationString(Context.Info.tmpBookingForStd.year, Context.Info.tmpBookingForStd.month, Context.Info.tmpBookingForStd.date, Context.Info.tmpBookingForStd.slot)),
    accountNo: (demo ? '700-00-000000-0' : '700-00-000000-0'),
    consultantName: (demo ? '梁慢' : Context.Info.toBook.name),
    consultantSchool: (demo ? '國立台灣大學' : Context.Info.toBook.school),
    consultantMajor: (demo ? '外國語文學系' : Context.Info.toBook.major),
    price: (demo ? 200 : Context.Info.toBook.price)
  }

  // const handleUseCoupon = (code) => {
  //   Context.setInfo({
  //     type: 'setCoupon',
  //     payload: {
  //       coupon: code
  //     }
  //   })
  //   console.debug('Coupon Code:', code)
  // }

  const handleNextStep = async () => {
    setLoading(true)
    let payload = {
      consultantId: Context.Info.toBook.id,
      studentId: Context.Info.id,
      year: Context.Info.tmpBookingForStd.year,
      month: Context.Info.tmpBookingForStd.month,
      date: Context.Info.tmpBookingForStd.date,
      slot: Number(Context.Info.tmpBookingForStd.slot),
    }
    let { status, data } = await StudentApi.addMeeting(payload)
    setLoading(false)
    if (status === 'success') {
      // patch: lazy way of updating context
      Context.setInfo({ type: 'login', payload: wrapLoginData(data, 'student')})
      alert("您已完成課程預約！請盡快前往「個人檔案 > 付款紀錄」繳交付款證明！")
      History.push('/student-home')
    }
    else if (status === 'failed') {
      alert("抱歉您所選擇的時段已被他人預約，請選擇另一時段！")
      History.goBack()
      History.goBack()
    }
  }

  return (
    <div className='std_meeting-details-container'>
      <div className='std_meeting-details-card-container'>
        <div className='std_meeting-details'>
          <div className='std_meeting-details-line'>
            <div className='std_meeting-details-content'>
              <OneLineInfoLabel identifier='clock' label='時間' content={Data.time} />
            </div>
            <div className='std_meeting-details-content'>
              <OneLineInfoLabel identifier='account' label='匯款帳戶' content={Data.accountNo} />
            </div>
          </div>
          <div className='std_meeting-details-line'>
            <div className='std_meeting-details-content'>
              <OneLineInfoLabel identifier='consultant' label='顧問' content={`${Data.consultantName}同學 ${Data.consultantSchool} ${Data.consultantMajor}`} />
            </div>
            <div className='std_meeting-details-content'>
              <OneLineInfoLabel identifier='money' label='計價' content={`${Data.price}/半小時`} />
            </div>
          </div>
          {/* <div className='std_meeting-details-line'>
            <div className='std_meeting-details-left'>
              <img className='std_meeting-details-icon' src={Coupon} alt='' />
              <p className='std_meeting-details-title std_meeting-details-title-discount'>優惠代碼</p>
              <input type='text' className='std_meeting-details-input' value={code} onChange={(e)=>{setCode(e.target.value)}} />
              <button className='std_meeting-details-button' onClick={()=>{handleUseCoupon(code)}}>使用優惠碼</button>
            </div>
          </div> */}
        </div>

        <p className='std_meeting-details-bottom-line '></p>

        <div className='std_meeting-details-bottom-container'>
          <p className='std_meeting-details-bottom-content'>總金額<span className='std_meeting-details-bottom-content-span'>{Data.price}</span>元</p>
        </div>
        <div className='std_meeting-details-bottom-container'>
          <ActionButton label="確認預約" callback={handleNextStep} loading={loading} />
        </div>
      </div>
    </div>
  );
};

export default DetailCard
