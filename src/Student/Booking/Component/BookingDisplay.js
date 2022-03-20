// Stylesheet
import "../std_booking.css";

// Icons
import DarkCircle from "../img/dark-circle.svg";
import LightCircle from "../img/light-circle.svg";
import DarkLine from "../img/dark-line.svg";

// Placeholder Variables
const line1 = "請於兩個工作天午夜前自行匯款至Arctics帳號並回到Arctics網站提交證明。";
const line2 = "若為銀行轉帳，請提供匯款帳戶末五碼；若為超商 / 郵局 / 銀行現金付款等其它繳費方式，請上傳匯款收據照片。";
const line3 = "若兩日內未完成，系統將自動取消訂單。";

// Component
const BookingDisplay = () => {
  return (
    <div className="std_booking-display-wrapper">
      <div className="std_booking-display-top-img">
        <div>
          <div className="std_booking-display-heading-label-container">
            <img src={DarkCircle} alt="step 1" />
            <span className="std_booking-display-heading-label">1</span>
          </div>
          <p className="std_booking-display-heading-label-bottom">確認課程</p>
        </div>
        <div className="std_booking-display-heading-bar">
          <img src={DarkLine} alt="" />
        </div>
        <div >
          <div className="std_booking-display-heading-label-container">
            <img src={LightCircle} alt="step 2" />
            <span className="std_booking-display-heading-label">2</span>
          </div>
          <p className="std_booking-display-heading-label-bottom">確認付款</p>
        </div>
      </div>
      <div className="std_booking-display-reminder-container">
        <p className="std_booking-display-reminder-head">付款</p>
        <p className="std_booking-display-reminder-line"></p>
        <p className="std_booking-display-reminder-content">{line1}<br />{line2}<br />{line3}</p>
      </div>
    </div>
  );
};

export default BookingDisplay;
