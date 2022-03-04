import { useState } from "react";
import "./calendar.css";
import { useFormContext } from "react-hook-form";
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

const getTimeArray = () => {
  var timeArray = [];
  for (var i = 9; i <= 23; i++) {
    for (var j = 0; j <= 59; j++) {
      if (j % 30 === 0) {
        j = j === 0 ? "00" : j;
        timeArray.push(i + ":" + j);
      }
    }
  }
  return timeArray;
};

const Calendar = ({ editing, timeslot }) => {
  const { register } = useFormContext();
  console.log(timeslot);
  let defaultChecked = timeslot.reduce((m, v) => ((m[v] = true), m), {})
  const [checkedItems, setCheckedItems] = useState(defaultChecked);

  const handleChange = (event) => {
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked,
    });
    console.log("checkedItems: ", checkedItems);
  };

  const displayCheckbox = (day, time) => {
    if (editing) {
      return (
        <input
          type="checkbox"
          value={day.key + time}
          name={day.key + time}
          defaultChecked={defaultChecked[day.key+time]? true:false}
          onChange={handleChange}
          {...register('selected')}
        />
      )
    } else {
      return (
        <input
          type="checkbox"
          value={day.key + time}
          name={day.key + time}
          disabled={true}
          checked={checkedItems[day.key + time]}
        />
      )
    }
  }

  return (
    <table>
      <tr class="calendar-week">
        <th></th>
        {weekDays.map((day) => (
          <td class="calendar-weekday">{day.name}</td>
        ))}
      </tr>

      {getTimeArray().map((time) => (
        <tr>
          <td class="calendar-block">
            <span class="calendar-time">{time}</span>
          </td>
          {weekDays.map((day) => (
            <td>
              <label class="calendar-switch ">
                {displayCheckbox(day, time)}
                <span class="calendar-block calendar-toggleButton">
                  {/* {day.key}-{time} */}
                </span>
              </label>
            </td>
          ))}
        </tr>
      ))}
      <tr>
        <td class="calendar-time calendar-time-last">24:00</td>
      </tr>
    </table>
  );
};

export default Calendar;
