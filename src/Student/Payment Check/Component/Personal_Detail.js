import "../std_payment-check.css";
import React, { useState } from "react";

const dummy = 
{
  "time": "some time",
  "accountNo": "700-...",
  "consultant": "some consultant",
  "price": "700",
  "actualPrice": "350"
}

const personal_detail = () => {
  return ( 
    <div className="std_personal-details-container">
      <div className="std_personal-details" aria-label="details">
        <div className="std_personal-details-line" aria-label="first line">
          <div className="std_personal-details-left" aria-label="time component">
            <img alt="clock"></img>
            <span>時間</span>
            <span>{dummy.time}</span>
          </div>
          <div aria-label="arctics account">
            <img alt="credit card"></img>
            <span>Arctics帳號</span>
            <span>{dummy.accountNo}</span>
          </div>
        </div>
        <div className="std_personal-details-line" aria-label="second line">
          <div className="std_personal-details-left" aria-label="consultant">
            <img alt="clock"></img>
            <span>顧問</span>
            <span>{dummy.consultantName}</span>
          </div>
          <div aria-label="discount code">
            <img alt="coupon"></img>
            <span>優惠代碼</span>
            <input></input>
          </div>
        </div>
        <div className="std_personal-details-line" aria-label="third line">
          <div className="std_personal-details-left" aria-label="consultant">
            <img alt="money"></img>
            <span>計價</span>
            <span>{dummy.price}</span>
          </div>
        </div>
      </div>
      <div className="std_personal-details-bottom-container">
        <p><img alt="money" />總金額<span>{dummy.actualPrice}</span>元</p>
        <button>確認預約</button>
      </div>
    </div>
  );
};

export default personal_detail;
