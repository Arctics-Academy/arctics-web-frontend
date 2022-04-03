import "../std_announce.css";
import icon from '../img/announcement_icon.png';

const notifs = [{title: "【付款通知】",
                main: "xxx同學已於2021/08/12付款，詳細資料可至帳戶明細確認",
                time: "2021/08/17（二）15:34"},
                {title: "【問卷】",
                main: "xxx同學問卷送達，確認有助於諮詢的進行喔！",
                time: "2021/08/17（二）15:34"},
                {title: "【新預約！】",
                main: "xxx同學已預約2021/08/25（三）19:00~19:30，x天內未確認將自動取消",
                time: "2021/08/17（二）15:34"},
                {title: "",
                main: "",
                time: "2021/08/17（二）15:34"}]

const notifItems = notifs.map( (obj, idx)=>{
  if (idx==notifs.length-1)
    return(
      <div className="std_notif-line-wrapper-final" key={idx}>
        <p className="std_notif-line-title">{obj.title}</p>
        <p className="std_notif-line-main">{obj.main}</p>
        <p className="std_notif-line-time">{obj.time}</p>
      </div>
    );
  else return(
    <div className="std_notif-line-wrapper" key={idx}>
      <p className="std_notif-line-title">{obj.title}</p>
      <p className="std_notif-line-main">{obj.main}</p>
      <p className="std_notif-line-time">{obj.time}</p>
    </div>
  );
  
} )

const Notification = () => {
  return (
    <div className="std_notif-wrapper">
      <img src={icon} alt="icon"/>
      <span className="std_announce-head">個人通知</span>
      <div className="std_notif-display-frame">
        {notifItems}
      </div>
    </div>
  );
};

export default Notification;
