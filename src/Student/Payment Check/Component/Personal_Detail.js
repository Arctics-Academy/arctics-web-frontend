import "../std_payment-check.css";
import React, { useState } from "react";
import Clock from "../img/clock icon.svg";
import Account from "../img/payment, credit card.svg";
import Consultant from "../img/bear student.svg";
import Money from "../img/money.svg";
import Coupon from "../img/coupon.svg";

const dummy = {
  time: "2021/08/20（五）19:00~19:30",
  accountNo: " 700-00-000000-0",
  consultantSurname: "梁",
  consultantFirstname: "曼",
  consultantSchool: "國立台灣大學",
  consultantMajor: "外國語文學系",
  price: "700",
  actualPrice: "350",
};

const personal_detail = () => {
  return (
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
          <div aria-label="arctics account">
            <img
              className="std_personal-detail-icon"
              src={Account}
              alt="credit card"
            ></img>
            <span className="std_personal-detail-title">Arctics帳號</span>
            <span className="std_personal-detail-content">
              {dummy.accountNo}
            </span>
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
          <div aria-label="discount code">
            <img
              className="std_personal-detail-icon"
              src={Coupon}
              alt="coupon"
            ></img>
            <span className="std_personal-detail-title">優惠代碼</span>
            <input className="std_personal-detail-content"></input>
          </div>
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
              {dummy.actualPrice}/0.5hr
            </span>
          </div>
        </div>
      </div>
      <p className="std_personal-detail-bottom-line "></p>
      <div className="std_personal-details-bottom-container">
        <p className="std_personal-detail-bottom-content">
          總金額<span>{dummy.actualPrice}</span>元
        </p>

        <button className="std_personal-detail-buttom">
          <span className="std_personal-detail-buttom-content">確認預約</span>
        </button>
      </div>
    </div>
  );
};

export default personal_detail;
