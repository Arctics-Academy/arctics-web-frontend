import "../clt_announce.css";
import icon from "../img/announcement_icon.png";
import { useState, useContext } from "react";
import { ParamContext } from "../../../ContextReducer";

const Announcement = () => {
  const context = useContext(ParamContext)
  const displayAnnouncements = (list) => {
    
    list.map((obj, idx) => {
      let time = new Date(obj.timestamp).toLocaleString()
      return (
        <div className={(obj.read ? "clt_notif-line-wrapper clt_notif-line-wrapper-read" : "clt_notif-line-wrapper")} key={idx}>
          <p className="clt_notif-line-content"><span className={(obj.read ? "clt_notif-line-title-read" : "clt_notif-line-title-unread")}>{obj.title}</span><span className={(obj.read ? "clt_notif-line-main-read" : "clt_notif-line-main-unread")}>&nbsp;&nbsp;&#8212;&nbsp;&nbsp;{obj.main}</span></p>
          <p className="clt_notif-line-time">{time}</p>
        </div>
      )
    })
  }
  return (
    <div className="clt_notif-wrapper">
      <img src={icon} alt="icon"/>
      <span className="clt_notif-head">最新公告</span>
      <div className="clt_notif-display-frame">
        {context.Info.announcements.list.length>0? displayAnnouncements(context.Info.announcements.list):
          <p className="clt_notif_empty">目前尚無任何公告!</p>
        }
      </div>
    </div>
  );
};

export default Announcement;
