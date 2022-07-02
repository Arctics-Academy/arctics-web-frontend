import "../std-record.css"

const DefaultData = {
  meetingNumber: "-",
  name: "-",
  price: "-",
  paymentTime: "-",
  meetingTime: "-"
}

const RecordRow = ({ data=DefaultData }) => {
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
        <div className="std-record-record-row__row-slot--small">{data.meetingNumber}</div>
        <div className="std-record-record-row__row-slot--small">{data.name}</div>
        <div className="std-record-record-row__row-slot--small">{data.price}</div>
        <div className="std-record-record-row__row-slot--big">
          {
            (data.paymentTime===null ? 
            <a>立即付款</a> : // FIXME
            data.paymentTime) 
          }
        </div>
        <div className="std-record-record-row__row-slot--big">{data.meetingTime}</div>
      </div>
    )
  }
}

export default RecordRow