// Stylesheet
import "../std_booking.css";

// Icons
import Clock from "../img/blue-clock.svg";
import Account from "../img/blue-credit-card.svg";
import Consultant from "../img/blue-bear.svg";
import Money from "../img/blue-money.svg";
import Coupon from "../img/blue-coupon.svg";

import { ParamContext } from "../../../ContextReducer";
import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";

// Placeholder Variable
const dummy = {
  time: "2021/08/20（五）19:00~19:30",
  accountNo: "700-00-000000-0",
  consultantSurname: "梁",
  consultantFirstname: "曼",
  consultantSchool: "國立台灣大學",
  consultantMajor: "外國語文學系",
  price: "700",
  actualPrice: "350",
};


// Component
const MeetingDetailsCard = () => {
  const context = useContext(ParamContext)
  const history = useHistory()
  const [code, setCode] = useState('')
  const handleUseCoupon = (code) => {
    context.setInfo({
      type: 'setCoupon',
      payload: {
        coupon: code
      }
    })
    console.log('Coupon Code:', code)
  }
  const handleNextStep = () => {
    history.push('/student-submit-payment')
  }
  return (
    <div className="std_meeting-details-container">
      <div className="std_meeting-details-card-container">
        <div className="std_meeting-details">
          <div className="std_meeting-details-line">
            <div className="std_meeting-details-left">
              <img className="std_meeting-details-icon" src={Clock} alt="" />
              <p className="std_meeting-details-title">時間</p>
              <p className="std_meeting-details-content">{dummy.time}</p>
            </div>
            <div className="std_meeting-details-right">
              <img className="std_meeting-details-icon" src={Account} alt="" />
              <p className="std_meeting-details-title">Arctics帳號</p>
              <p className="std_meeting-details-content">{dummy.accountNo}</p>
            </div>
          </div>
          <div className="std_meeting-details-line">
            <div className="std_meeting-details-left">
              <img className="std_meeting-details-icon" src={Consultant} alt="" />
              <p className="std_meeting-details-title">顧問</p>
              <p className="std_meeting-details-content">{context.Info.toBook.name}同學<br />{context.Info.toBook.school} {context.Info.toBook.major}
              </p>
            </div>
            <div className="std_meeting-details-right">
              <img className="std_meeting-details-icon" src={Coupon} alt="" />
              <p className="std_meeting-details-title std_meeting-details-title-discount">優惠代碼</p>
              <input type="text" className="std_meeting-details-input" value={code} onChange={(e)=>{setCode(e.target.value)}} />
              <button className="std_meeting-details-button" onClick={()=>{handleUseCoupon(code)}}>使用優惠碼</button>
            </div>
          </div>
          <div className="std_meeting-details-line">
            <div className="std_meeting-details-left">
              <img className="std_meeting-details-icon" src={Money} alt="" />
              <p className="std_meeting-details-title">計價</p>
              <p className="std_meeting-details-content">{context.Info.toBook.price}/半小時</p>
            </div>
          </div>
        </div>

        <p className="std_meeting-details-bottom-line "></p>

        <div className="std_meeting-details-bottom-container">
          <p className="std_meeting-details-bottom-content">總金額<span className="std_meeting-details-bottom-content-span">{dummy.actualPrice}</span>元</p>
        </div>
        <div className="std_meeting-details-bottom-container">
          <button className="std_meeting-details-buttom-button" onClick={handleNextStep}>確認預約</button>
        </div>
      </div>
    </div>
  );
};

export default MeetingDetailsCard;
