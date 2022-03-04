import "../clt_announce.css";
import icon from '../img/announcement_icon.png';

const notifs = [
  {
    title: "[付款通知]",
    main: "xxx同學已於2021/08/12付款，詳細資料可至帳戶明細確認",
    read: true,
    time: "2021/08/17（二）15:34"
  },
  {
    title: "[問卷]",
    main: "xxx同學問卷送達，確認有助於諮詢的進行喔！",
    read: false,
    time: "2021/08/17（二）15:34"
  },
  {
    title: "[新預約！]",
    main: "xxx同學已預約2021/08/25（三）19:00~19:30，x天內未確認將自動取消xxx同學已預約2021/08/25（三）19:00~19:30，x天內未確認將自動取消xxx同學已預約2021/08/25（三）19:00~19:30，x天內未確認將自動取消",
    read: true,
    time: "2021/08/17（二）15:34"
  }
];

const notifItems = notifs.map( (obj, idx)=>{
  return(
    <div className={(obj.read ? "clt_notif-line-wrapper clt_notif-line-wrapper-read" : "clt_notif-line-wrapper")} key={idx}>
      <p className="clt_notif-line-content"><span className={(obj.read ? "clt_notif-line-title-read" : "clt_notif-line-title-unread")}>{obj.title}</span><span className={(obj.read ? "clt_notif-line-main-read" : "clt_notif-line-main-unread")}>&nbsp;&nbsp;&#8212;&nbsp;&nbsp;{obj.main}</span></p>
      <p className="clt_notif-line-time">{obj.time}</p>
    </div>
  );
})

const Notification = () => {
  return (
    <div className="clt_notif-wrapper">
      <img src={icon} alt="icon"/>
      <span className="clt_notif-head">個人通知</span>
      <div className="clt_notif-display-frame">
        {notifItems}
      </div>
    </div>
  );
};

export default Notification;
