import "../clt_announce.css";
import icon from "../img/announcement_icon.png";
import { useState, useContext } from "react";

const announce = [
  {
    title: "[問卷調查] 顧客問卷抽大獎",
    main: "內文內文內文內文內文內文內文內文內文內文內文內文內文……",
    read: true,
    time: "2021/08/17（二）15:34",
  },
  {
    title: "[問卷調查] 推薦朋友來",
    main: "內文內文內文內文內文內文內文內文內文內文內文內文內文……",
    read: false,
    time: "2021/08/17（二）15:34",
  },
  {
    title: "[問卷調查] 推薦朋友來",
    main: "內文內文內文內文內文內文內文內文內文內文內文內文內文……",
    read: false,
    time: "2021/08/17（二）15:34",
  },
  {
    title: "[平台快訊] 維修公告",
    main: "內文內文內文內文內文內文內文內文內文內文內文內文內文……",
    read: false,
    time: "2021/08/17（二）15:34",
  },
];

const announcements = announce.map( (obj, idx)=>{
  return(
    <div className={(obj.read ? "clt_notif-line-wrapper clt_notif-line-wrapper-read" : "clt_notif-line-wrapper")} key={idx}>
      <p className="clt_notif-line-content"><span className={(obj.read ? "clt_notif-line-title-read" : "clt_notif-line-title-unread")}>{obj.title}</span><span className={(obj.read ? "clt_notif-line-main-read" : "clt_notif-line-main-unread")}>&nbsp;&nbsp;&#8212;&nbsp;&nbsp;{obj.main}</span></p>
      <p className="clt_notif-line-time">{obj.time}</p>
    </div>
  );
  
} )
const Announcement = () => {
  return (
    <div className="clt_notif-wrapper">
      <img src={icon} alt="icon"/>
      <span className="clt_notif-head">最新公告</span>
      <div className="clt_notif-display-frame">
        {announcements}
      </div>
    </div>
  );
};

export default Announcement;
