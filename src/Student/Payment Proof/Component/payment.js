import "../std_payment-proof.css";
import React, { useState } from "react";
import Clock from "../img/clock icon.svg";
import Account from "../img/payment, credit card.svg";
import Consultant from "../img/bear student.svg";
import Money from "../img/money.svg";
import Coupon from "../img/coupon.svg";

const dummy = {
  time: "2021/08/20（五）19:00~19:30",
  accountNo: "700-00-000000-0",
  consultantSurname: "梁",
  consultantFirstname: "曼",
  consultantSchool: "國立台灣大學",
  consultantMajor: "外國語文學系",
  price: "250",
  actualPrice: "500",
};

const payment = () => {
  return (
    <div>
      <div className="std_payment-proof-wrapper">
        <p className="std_payment-proof-head">提交付款證明</p>
        <p className="std_payment-proof-line"></p>
      </div>
      <div className="std_personal-details-container">
        <div className="std_personal-details" aria-label="details">
          <div className="std_personal-details-line" aria-label="first line">
            <div
              className="std_personal-details-left"
              aria-label="time component"
            >
              <img
                className="std_personal-detail-icon"
                src={Clock}
                alt="clock"
              ></img>
              <span className="std_personal-detail-title">時間</span>
              <span className="std_personal-detail-content">{dummy.time}</span>
            </div>
          </div>
          <div className="std_personal-details-line" aria-label="second line">
            <div className="std_personal-details-left" aria-label="consultant">
              <img
                className="std_personal-detail-icon"
                src={Consultant}
                alt="consultant"
              ></img>
              <span className="std_personal-detail-title">顧問</span>
              <span className="std_personal-detail-content">
                {dummy.consultantSurname}
                {dummy.consultantFirstname}同學
                <br />
              </span>
              <span className="std_personal-detail-content-2ndrow">
                {dummy.consultantSchool} {dummy.consultantMajor}
              </span>
            </div>
            {/* <div aria-label="discount code">
              <img
                className="std_personal-detail-icon"
                src={Coupon}
                alt="coupon"
              ></img>
              <span className="std_personal-detail-title">優惠代碼</span>
              <input className="std_personal-detail-content"></input>
            </div> */}
          </div>
          <div className="std_personal-details-line" aria-label="third line">
            <div className="std_personal-details-left" aria-label="consultant">
              <img
                className="std_personal-detail-icon"
                src={Money}
                alt="money"
              ></img>
              <span className="std_personal-detail-title">計價</span>
              <span className="std_personal-detail-content">
                {dummy.price}/0.5hr
              </span>
            </div>
          </div>
          <div className="std_personal-details-line" aria-label="fourth line">
            <p className="std_personal-detail-bottom-line "></p>
          </div>
          <div className="std_personal-details-bottom-container">
            <p className="std_personal-detail-bottom-content">
              總金額<span>{dummy.actualPrice}</span>元
            </p>
          </div>
          <div className="std_personal-details-line" aria-label="fourth line">
            <span className="std_personal-detail-title">匯款人姓名</span>
            <input className="std_transfer-detail-row1"></input>
          </div>
          <div className="std_personal-details-line" aria-label="fourth line">
            <span className="std_personal-detail-title">匯款日期</span>
            <input className="std_transfer-detail-row2"></input>
          </div>
          <div className="std_personal-details-line" aria-label="fourth line">
            <span className="std_personal-detail-title">匯款帳戶末五碼</span>
            <input className="std_transfer-detail-row3"></input>
          </div>
          <div className="std_personal-details-line" aria-label="fifth line">
            <span className="std_personal-detail-title">匯款收據上傳</span>
            <button className="std_transfer-detail-button">
              <span className="std_transfer-detail-button-content">
                上傳付款證明
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default payment;
