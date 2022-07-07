import "../std-record.css"
import { Link } from 'react-router-dom'

const DefaultData = {
  meetingId: "-",
  consultantName: "-",
  meetingPrice: "-",
  meetingPaymentTime: "-",
  meetingDuration: "-",
  meetingStatus: "future"
}

const RecordRow = ({ data=DefaultData }) => {
  const PaymentTime = (data) => {
    switch(data.meetingStatus) {
      case "cancelled":
        return "已取消"
      case "past": 
        return data.meetingPaymentTime
      default:
        if (data.meetingPaymentTime === "-") {
          return (<span className="std-record-record-row__link"><Link to={`/student-submit-payment/${data.meetingId.substr(1,5)}`} style={{color: 'var(--primary)'}}>立即付款</Link></span>)
        }
        else {
          return data.meetingPaymentTime
        }
    }
  }

  if (data === -1) { // title row
    return (
      <div className="std-record-record-row__title-row-wrapper">
        <div className="std-record-record-row__title-row-slot--small">訂單編號</div>
        <div className="std-record-record-row__title-row-slot--small">顧問姓名</div>
        <div className="std-record-record-row__title-row-slot--small">金額</div>
        <div className="std-record-record-row__title-row-slot--big">付款時間</div>
        <div className="std-record-record-row__title-row-slot--big">諮詢時間</div>
      </div>
    )
  }
  else if (data === 0) {
    return (
      <div className="std-record-record-row__empty-row-wrapper">
        <div className="std-record-record-row__empty-row-slot">目前沒有任何付款資料</div>
      </div>
    )
  }
  else {
    return (
      <div className="std-record-record-row__row-wrapper">
        <div className="std-record-record-row__row-slot--small">{data.meetingId}</div>
        <div className="std-record-record-row__row-slot--small">{data.consultantName}</div>
        <div className="std-record-record-row__row-slot--small">{data.meetingPrice}</div>
        <div className="std-record-record-row__row-slot--big">{PaymentTime(data)}</div>
        <div className="std-record-record-row__row-slot--big">{data.meetingDuration}</div>
      </div>
    )
  }
}

export default RecordRow