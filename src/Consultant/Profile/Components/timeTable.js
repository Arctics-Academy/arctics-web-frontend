import Calendar from "./calendar";
import Bear from "../img/timetable-bear.png";
import "./timeTable.css";

const TimeTable = ({ profile }) => {
  return (
    <div class="timeTable">
      <div class="timeTable-section">
        <div class="timeTable-title">可預約時間表</div>
        <Calendar editing={true} timeslot={profile.timeslot} />
      </div>
      <div class="timeTable-section">
        <button>確認變更</button>
        <div class="timeTable-caution">
          <p>注意事項</p>
          <ol>
            <li>請選擇自己一定可以的時間</li>
            <li>時間表變更不會影響已預約時段</li>
          </ol>
          <img alt="bear" src={Bear} />
        </div>
      </div>
    </div>
  );
};
export default TimeTable;
