import "../std_payment-check.css";
import Dark_Circle from "../img/Ellipse 13.svg";
import Light_Circle from "../img/Ellipse 14.svg";
import Dark_Line from "../img/Line 9.svg";
import React, { useState } from "react";

const text1 =
  "請於兩個工作天午夜前自行匯款至Arctics帳號並回到Arctics網站提交證明。";
const text2 =
  "若為銀行轉帳，請提供匯款帳戶末五碼；若為超商 / 郵局 / 銀行現金付款等其它繳費方式，請上傳匯款收據照片。";
const text3 = "若兩日內未完成，系統將自動取消訂單。";

const standard_display = () => {
  return (
    <div className="std_payment-check-wrapper">
      <div className="std_payment-check-headimg">
        <div>
          <div className="std_payment-check-heading-label-container">
            <img src={Dark_Circle} alt="step 1" />
            <span className="std_payment-check-heading-label">1</span>
          </div>
          <p className="std_payment-check-heading-label-bottom">確認課程</p>
        </div>
        <div className="std_payment-check-heading-bar">
          <img src={Dark_Line} alt="" />
        </div>
        <div >
          <div className="std_payment-check-heading-label-container">
            <img src={Light_Circle} alt="step 2" />
            <span className="std_payment-check-heading-label">2</span>
          </div>
          <p className="std_payment-check-heading-label-bottom">確認付款</p>
        </div>
      </div>
      <p className="std_payment-check-head">付款</p>
      <p className="std_payment-check-line"></p>
      <p className="std_payment-check-content">
        {text1}
        <br />
        {text2}
        <br />
        {text3}
      </p>
    </div>
  );
};

export default standard_display;
