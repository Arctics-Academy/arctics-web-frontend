import "./Announcement/clt_announce.css";
import { useState, useContext } from "react";

const Announcement = () => {
  return (
    <div className="clt_announce-backgound">
      <span className="clt_announce-icon-small-rect" />
      <span className="clt_announce-icon-big-rect" />
      <span className="clt_announce-head">最新公告 </span>
      {/* line 1 */}
      <div className="clt_announce-display-frame">
        <p className="clt_announce-line-title-1">【問卷調查】</p>
        <p className="clt_announce-line-main-1">顧客問卷大獎</p>
        <p className="clt_announce-line-content-1">
          內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文……
        </p>
        <p className="clt_announce-line-time-1">2022/02/22 20:22</p>
        {/* line 2 */}
        <p className="clt_announce-line-title-2">【優惠訊息】</p>
        <p className="clt_announce-line-main-2">推薦朋友來</p>
        <p className="clt_announce-line-content-2">
          內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內……
        </p>
        <p className="clt_announce-line-time-2">2022/02/23 20:23</p>
        {/* line 3 */}
        <p className="clt_announce-line-title-3">【問卷調查】</p>
        <p className="clt_announce-line-main-3">顧客問卷大獎</p>
        <p className="clt_announce-line-content-3">
          內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文……
        </p>
        <p className="clt_announce-line-time-3">2022/02/24 20:24</p>
        {/* line 4 */}
        <p className="clt_announce-line-title-4">【平台快訊】</p>
        <p className="clt_announce-line-main-4">維修公告</p>
        <p className="clt_announce-line-content-4"></p>
        <p className="clt_announce-line-time-4">2022/02/30 25:61</p>
      </div>
    </div>
  );
};

export default Announcement;
