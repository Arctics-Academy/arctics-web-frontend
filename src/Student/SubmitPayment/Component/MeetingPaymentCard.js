// Stylesheet
import "../std_submit-payment.css";

// Icons
import Clock from "../img/blue-clock.svg";
import Account from "../img/blue-credit-card.svg";
import Consultant from "../img/blue-bear.svg";
import Money from "../img/blue-money.svg";
import Coupon from "../img/blue-coupon.svg";
import { ReactComponent as Upload } from "../img/white-upload.svg"

import { ParamContext } from "../../../ContextReducer";
import { useContext, useState } from "react";
import ActionButton from "../../../GlobalComponents/Components/ActionButton";

// Placeholder Variable
const DefaultData = {
  meetingDuration: "XX/XX/XX（X）XX:XX~XX:XX",
  accountNo: "700-00-000000-0",
  consultantName: "OOO",
  consultantSchool: "OOOO大學",
  consultantMajor: "OO系",
  meetingPrice: "200",
};


// Component
const MeetingPaymentCard = ({ demo, data=DefaultData, handleUpload, handleSubmit, loading=false }) => {
  const Context = useContext(ParamContext)

  if (!data) data = DefaultData

  return (
    <div className="std_meeting-payment-container">
      <div className="std_meeting-payment-card-container">
        <div className="std_meeting-payment">
          <div className="std_meeting-payment-line">
            <div className="std_meeting-payment-left">
              <img className="std_meeting-payment-icon" src={Clock} alt="" />
              <p className="std_meeting-payment-title">時間</p>
              <p className="std_meeting-payment-content">{data.meetingDuration}</p>
            </div>
            <div className="std_meeting-payment-right">
              <img className="std_meeting-payment-icon" src={Account} alt="" />
              <p className="std_meeting-payment-title">Arctics帳號</p>
              <p className="std_meeting-payment-content">{DefaultData.accountNo}</p>
            </div>
          </div>
          <div className="std_meeting-payment-line">
            <div className="std_meeting-payment-left">
              <img className="std_meeting-payment-icon" src={Consultant} alt="" />
              <p className="std_meeting-payment-title">顧問</p>
              <p className="std_meeting-payment-content">{data.consultantName}同學<br />{data.consultantSchool+' '+data.consultantMajor}
              </p>
            </div>
            <div className="std_meeting-payment-right">
              <img className="std_meeting-payment-icon" src={Coupon} alt="" />
              <p className="std_meeting-payment-title std_meeting-payment-title-discount">優惠代碼</p>
              <p className="std_meeting-payment-content">無</p>
            </div>
          </div>
          <div className="std_meeting-payment-line">
            <div className="std_meeting-payment-left">
              <img className="std_meeting-payment-icon" src={Money} alt="" />
              <p className="std_meeting-payment-title">計價</p>
              <p className="std_meeting-payment-content">{data.meetingPrice}/半小時</p>
            </div>
          </div>
        </div>

        <p className="std_meeting-payment-bottom-line "></p>

        <div className="std_meeting-payment-bottom-container">
          <p className="std_meeting-payment-bottom-content">總金額<span className="std_meeting-payment-bottom-content-span">{data.meetingPrice}</span>元</p>
        </div>

        <div className="std_meeting-payment-bottom-form-container">
          <div className="std_meeting-payment-bottom-form-line">
            <p className="std_meeting-payment-bottom-form-title">匯款人姓名</p>
            <input className="std_meeting-payment-bottom-form-input" onBlur={handleUpload} type="text" data-form-label="paymentName"></input>
          </div>
          <div className="std_meeting-payment-bottom-form-line">
            <p className="std_meeting-payment-bottom-form-title">匯款日期</p>
            <input className="std_meeting-payment-bottom-form-input" onBlur={handleUpload} type="text" data-form-label="paymentDate"></input>
          </div>
          <div className="std_meeting-payment-bottom-form-line">
            <p className="std_meeting-payment-bottom-form-title">匯款收據上傳</p>
            <label  className="std_meeting-payment-bottom-form-label">
              <Upload /> 
              <span>&nbsp;確認預約</span>
              <input className="std_meeting-payment-bottom-form-file-input" onChange={handleUpload} data-form-label="file" type="file"></input>
            </label>
          </div>
        </div>

        <div className="std_meeting-payment-bottom-container">
          <ActionButton label="確認預約" callback={handleSubmit} loading={loading} />
        </div>
      </div>
    </div>
  );
};

export default MeetingPaymentCard;
