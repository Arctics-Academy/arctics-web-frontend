import "../clt_announce.css";
import icon from '../img/announcement_icon.png';
import { useState, useContext } from "react";

const Announcement = () => {
  return (
    <div className="clt_announce-wrapper">
      <img src={icon} alt="icon"/>
      <span className="clt_announce-head">最新公告 </span>
      {/* line 1 */}
      <div className="clt_announce-display-frame">
        <div className="clt_announce-line-wrapper">
          <p className="clt_announce-line-title">【問卷調查】</p>
          <p className="clt_announce-line-main">顧客問卷大獎</p>
          <p className="clt_announce-line-content">
            內文內文內文內文內文內文內文內文內文內文內文內文內文……
          </p>
          <p className="clt_announce-line-time">2022/02/22 (二) 20:22</p>
        </div>
        <div className="clt_announce-line-border"></div>
        {/* line 2 */}
        <div className="clt_announce-line-wrapper">
          <p className="clt_announce-line-title">【優惠訊息】</p>
          <p className="clt_announce-line-main">推薦朋友來</p>
          <p className="clt_announce-line-content">
            內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內……
          </p>
          <p className="clt_announce-line-time">2022/02/23 20:23</p>
        </div>
        <div className="clt_announce-line-border"></div>
        {/* line 3 */}
        <div className="clt_announce-line-wrapper">
          <p className="clt_announce-line-title">【問卷調查】</p>
          <p className="clt_announce-line-main">顧客問卷大獎</p>
          <p className="clt_announce-line-content">
            內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文……
          </p>
          <p className="clt_announce-line-time">2022/02/24 20:24</p>
        </div>
        <div className="clt_announce-line-border"></div>
        {/* line 4 */}
        <div className="clt_announce-line-wrapper">
          <p className="clt_announce-line-title">【平台快訊】</p>
          <p className="clt_announce-line-main">維修公告</p>
          <p className="clt_announce-line-content"></p>
          <p className="clt_announce-line-time">2022/02/30 23:56</p>
        </div>
      </div>
    </div>
  );
};

export default Announcement;
