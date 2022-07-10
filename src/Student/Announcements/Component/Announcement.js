import "../std_announce.css";
import icon from "../img/announcement_icon.png";
import { useContext } from "react";
import { ParamContext } from "../../../ContextReducer";

const Announcement = () => {
  const context = useContext(ParamContext)
  const displayAnnouncements = (list) => {
    
    list.map((obj, idx) => {
      let time = new Date(obj.timestamp).toLocaleString()
      return (
        <div className={(obj.read ? "std_notif-line-wrapper std_notif-line-wrapper-read" : "std_notif-line-wrapper")} key={idx}>
          <p className="std_notif-line-content"><span className={(obj.read ? "std_notif-line-title-read" : "std_notif-line-title-unread")}>{obj.title}</span><span className={(obj.read ? "std_notif-line-main-read" : "std_notif-line-main-unread")}>&nbsp;&nbsp;&#8212;&nbsp;&nbsp;{obj.main}</span></p>
          <p className="std_notif-line-time">{time}</p>
        </div>
      )
    })
  }
  return (
    <div className="std_notif-wrapper">
      <div className="std_notif-head-wrapper">
        <img className="std_notif-head-icon"src={icon} alt="icon"/>
        <span className="std_notif-head">最新公告</span>
      </div>
      <div className="std_notif-display-frame">
        {context.Info.announcements.list.length>0? displayAnnouncements(context.Info.announcements.list):
          <p className="std_notif_empty">目前尚無任何公告!</p>
        }
      </div>
    </div>
  );
};

export default Announcement;
