import { useEffect, useState } from "react";
import Bear from "../img/timetable-bear.png";
import "./timeTable.css";
const weekDays = [
  {
    name: "日",
    key: "sun",
  },
  {
    name: "一",
    key: "mon",
  },
  {
    name: "二",
    key: "tue",
  },
  {
    name: "三",
    key: "wed",
  },
  {
    name: "四",
    key: "thu",
  },
  {
    name: "五",
    key: "fri",
  },
  {
    name: "六",
    key: "sat",
  },
];

const myTimeTable = (timeArray) => {
  return (
    <>
      <tr class="timeTable-week">
        <th></th>
        {weekDays.map((day) => (
          <td class="timeTable-weekday">{day.name}</td>
        ))}
      </tr>

      {timeArray.map((time) => (
        <tr>
          <td class="timeTable-block">
            <span class="timeTable-time">{time}</span>
          </td>
          {weekDays.map((day) => (
            <td>
              <label class="timeTable-switch ">
                <input type="checkbox" value={day.key + time} />
                <span class="timeTable-block timeTable-toggleButton">
                  {/* {day.key}-{time} */}
                </span>
              </label>
            </td>
          ))}
        </tr>
      ))}
      <tr>
        <td class="timeTable-time timetable-time-last">24:00</td>
      </tr>
    </>
  );
};

const Time = ({ profile }) => {
  const genTimeArray = () => {
    var timeArray = [];
    for (var i = 9; i <= 23; i++) {
      for (var j = 0; j <= 59; j++) {
        if (j % 30 === 0) {
          j = j === 0 ? "00" : j;
          timeArray.push(i + ":" + j);
        }
      }
    }

    setTimeArr(timeArray);
  };
  const [timeArr, setTimeArr] = useState([]);
  useEffect(genTimeArray, [timeArr]);
  return (
    <div class="timeTable">
      <div class="timeTable-section">
        <div class="timeTable-title">可預約時間表</div>
        <table>{myTimeTable(timeArr)}</table>
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
export default Time;
