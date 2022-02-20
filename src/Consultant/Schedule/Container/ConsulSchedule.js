import { useState } from "react";
import MeetingList from "../Components/MeetingList";
import Calender from "../Components/Calender";
import calenderIcon from "../img/calender.png";
import listIcon from "../img/list.png";

const ConsulSchedule = () => {
  const [displayMode, setDisplayMode] = useState("calender");

  const handleCalenderBtnOnclick = () => {
    if (displayMode === "calender") return;
    setDisplayMode("calender");
  };

  const handleListBtnOnclick = () => {
    if (displayMode === "list") return;
    setDisplayMode("list");
  };

  const modeBtn = () => {
    if (true /*displayMode === "calender"*/) {
      return (
        <div className="clt_schedule-mode-btn">
          <button
            className="clt_schedule-mode-btn-calender"
            onClick={handleCalenderBtnOnclick}
          >
            <img
              className="clt_schedule-mode-calender-icon"
              src={calenderIcon}
            />
            <span className="clt_schedule-mode-calender-text">行事曆</span>
          </button>
          <button
            className="clt_schedule-mode-btn-list"
            onClick={handleListBtnOnclick}
          >
            <img className="clt_schedule-mode-list-icon" src={listIcon} />
            <span className="clt_schedule-mode-list-text">條列式</span>
          </button>
        </div>
      );
    } else {
      return (
        <div className="clt_schedule_mode_btn" style={{ display: "flex" }}>
          <button onClick={handleCalenderBtnOnclick} style={{ color: "cyan" }}>
            Calender
          </button>
          <button onClick={handleListBtnOnclick} style={{ color: "blue" }}>
            List
          </button>
        </div>
      );
    }
  };

  const showSchedule = () => {
    if (displayMode === "calender") {
      return <Calender />;
    } else {
      return <MeetingList />;
    }
  };

  return (
    <div className="clt_schedule-main">
      <div className="clt_schedule-title">
        <span className="clt_schedule-title-text">我的諮詢</span>
        <div className="clt_schedule-title-underline" />
      </div>
      {modeBtn()}
      <div className="clt_schedule-display">{showSchedule()}</div>
    </div>
  );
};

export default ConsulSchedule;
