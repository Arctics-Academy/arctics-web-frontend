import "../std_payment-check.css";
import React, { useState } from "react";

text =
  "請於兩個工作天午夜前自行匯款至Arctics帳號並回到Arctics網站提交證明。\n若為銀行轉帳，請提供匯款帳戶末五碼；若為超商／郵局／銀行現金付款等其它繳費方式，請上傳匯款收據照片。\n若兩日內未完成，系統將自動取消訂單。";

const standard_display = () => {
  return (
    <div className="std_payment-check-wrapper">
      <p className="std_payment-check-head">付款</p>
      <p className=".std_payment-check-content">text</p>
    </div>
  );
};

export default standard_display;
