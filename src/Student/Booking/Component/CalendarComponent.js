// Known issues
// * Mapping key intentinally not set as a hack for css transitions

// Imports
import { useState } from 'react'

// Components
import LightLeftAngle from '../img/light-left-angle.svg'
import DarkLeftAngle from '../img/dark-left-angle.svg'
import LightRightAngle from '../img/light-right-angle.svg'
import DarkRightAngle from '../img/dark-right-angle.svg'

// Constants
const DayArray = [
  { name: '日', key: 'sun', no: 0 },
  { name: '一', key: 'mon', no: 1 },
  { name: '二', key: 'tue', no: 2 },
  { name: '三', key: 'wed', no: 3 },
  { name: '四', key: 'thu', no: 4 },
  { name: '五', key: 'fri', no: 5 },
  { name: '六', key: 'sat', no: 6 }
]

// Util Functions
const getWeekString = (weekNo) => {
  let sun = new Date()
  sun.setDate(sun.getDate() - sun.getDay() + weekNo * 7)
  let sat = new Date()
  sat.setDate(sat.getDate() - sat.getDay() + 6 + weekNo * 7)
  return `${sun.getFullYear()}/${(sun.getMonth()+1)%12}/${sun.getDate()} ~ ${sat.getFullYear()}/${(sat.getMonth()+1)%12}/${sat.getDate()}`
}

const getDateFromWeekNo = (day, weekNo) => {
  let temp = new Date()
  temp.setDate(temp.getDate() - temp.getDay() + weekNo * 7 + day)
  return temp;
}

const getStartStringFromSlot = (slotNo) => {
  let hour = Math.floor(slotNo/2)
  let hourstring = String(hour)
  if (hourstring.length < 2) {
    hourstring = "0" + hourstring
  }
  let minstr = (slotNo%2 === 0 ? "00" : "30")
  return `${hourstring}:${minstr}`
}

const generateDataArray = (rawData, weekNo) => {
  let displayData = []
  // push basic
  for (let day = 0; day < 7; day++) {
    let dayData = [];
    for (let slot = 0; slot < 48; slot++) {
      if (rawData.available[day].includes(slot)) {
        dayData.push('a')
      }
      else {
        dayData.push('n')
      }
    }
    displayData.push(dayData)
  }
  // push booked
  let sun = new Date()
  sun.setDate(sun.getDate() - sun.getDay() + weekNo * 7)
  let sat = new Date()
  sat.setDate(sat.getDate() - sat.getDay() + 6 + weekNo * 7)

  for (let booking of rawData.studentBooked) {
    let [year, month, date, slot] = booking
    let time = new Date()
    time.setFullYear(year)
    time.setMonth(month-1)
    time.setDate(date)
    if ((sun.getTime() < time.getTime()) && (time.getTime() < sat.getTime())) {
      displayData[time.getDay()][slot] = 'b'
    }
  }
  for (let booking of rawData.teacherBooked) {
    let [year, month, date, slot] = booking
    let time = new Date()
    time.setFullYear(year)
    time.setMonth(month-1)
    time.setDate(date)
    if ((sun.getTime() < time.getTime()) && (time.getTime() < sat.getTime())) {
      displayData[time.getDay()][slot] = 'b'
    }
  }
  // correct out of range
  let today = new Date()
  for (let day in displayData) {
    if (getDateFromWeekNo(Number(day), weekNo).getTime() < today.getTime()) {
      for (let slot in displayData[day]) {
        displayData[Number(day)][slot] = 'o'
      }
    }
    // else {
    //   break;
    // }
  }
  return displayData
}


// Main Component

// prop
// rawData: {
//     available: [[], [], [], [], [], [], []],
//     studentBooked: [[year, month, date, slot], ...],
//     teacherBooked: [[year, month, date, slot], ...]
// }

const RawDataDefault = {
  available: [[], [], [25,26,27], [], [], [], []],
  studentBooked: [[2022, 6, 29, 30]],
  teacherBooked: [[2022, 6, 30, 29]]
}

const CalendarComponent = ({ startTime=19, rawData=RawDataDefault }) => {
  // States
  const [weekNum, setWeekNum] = useState(0)
  const [displayData, setDisplayData] = useState(generateDataArray(rawData, weekNum))
  const [selected, setSelected] = useState(null)
  
  // Handlers
  const handlePrevWeek = () => {
    setWeekNum(weekNum-1)
    setDisplayData(generateDataArray(rawData, weekNum-1))
  }

  const handleNextWeek = () => {
    setWeekNum(weekNum+1)
    setDisplayData(generateDataArray(rawData, weekNum+1))
  }
  
  const handleCheck = (e) => {
    let value = e.target.value
    let [day, slot] = value.split('-');
    
    // clear previous select
    if (selected) {
      displayData[selected[0]][selected[1]] = "a"
    }
    displayData[Number(day)][Number(slot)] = "s"
    setDisplayData([...displayData])
    setSelected([day, slot])
  }

  const handleUncheck = (e) => {
    let value = e.target.value
    let [day, slot] = value.split('-');

    displayData[Number(day)][Number(slot)] = "a"
    setDisplayData([...displayData])
    setSelected(null)
  }

  // Sub-Components
  const Slot = (state, dayNo, slotNo) => {
    switch (state) {
      case 'o': // out-of-range
        return <div className="std-booking-calendar-component__slot std-booking-calendar-component__slot--o"></div>
      case 'n': // not-available
        return <div className="std-booking-calendar-component__slot std-booking-calendar-component__slot--n"></div>
      case 'a': // available
        return (
          <div className="std-booking-calendar-component__slot std-booking-calendar-component__slot--a">
            <input 
              type="checkbox"
              className="std-booking-calendar-component__checkbox"
              value={`${dayNo}-${slotNo}`}
              onChange={handleCheck}
              checked={false}
            />
          </div>
        )
      case 's': // selected
        return (
          <div className="std-booking-calendar-component__slot std-booking-calendar-component__slot--s">
            <input 
              className="std-booking-calendar-component__checkbox"
              type="checkbox" 
              value={`${dayNo}-${slotNo}`}
              onChange={handleUncheck} 
              checked={true}
            />
          </div>
        )
      case 'b': // booked
        return <div className="std-booking-calendar-component__slot std-booking-calendar-component__slot--b"></div>
      default: // error is out-of-range
        return <div className="std-booking-calendar-component__slot std-booking-calendar-component__slot--o"></div>
    }
  }

  const Row = (slotNo) => {
    if (slotNo === -1) {
      return (
        <div className="std-booking-calendar-component__row std-booking-calendar-component__row--day">
          <div className="std-booking-calendar-component__slot std-booking-calendar-component__slot--hide"></div>
          {DayArray.map((day) => (<div className="std-booking-calendar-component__slot std-booking-calendar-component__slot--day">{day.name}</div>))}
        </div>
      )
    }
    else {
      return (
        <div className="std-booking-calendar-component__row">
          <div className="std-booking-calendar-component__slot std-booking-calendar-component__slot--time"><span className='std-booking-calendar-component__time-label'>{getStartStringFromSlot(slotNo)}</span></div>
          {DayArray.map((day) => (<>{Slot(displayData[day.no][slotNo], day.no, slotNo)}</>))}
        </div>
      )
    }
  }

  const Table = () => {
    let rows = []
    for (let ind = -1; ind < 48; ind++) {
      if ((ind < startTime-1) && (ind !== -1)) {
        continue
      }
      rows.push(ind)
    }
    return (<>{rows.map((slotNo) => Row(slotNo))}</>)
  }
  
  // Main Component
  return (
    <>
      <div className='std-booking-calendar-component__header'>
        {(weekNum === 0 ? 
          <div className='std-booking-calendar-component__week-button-div--invalid'>
            <img className='std-booking-calendar-component__week-button' src={LightLeftAngle} alt='invalid previous week button'/>
          </div> : 
          <div className='std-booking-calendar-component__week-button-div' onClick={handlePrevWeek}>
            <img className='std-booking-calendar-component__week-button' src={DarkLeftAngle} alt='previous week button'/>
          </div>)}
        <div className='std-booking-calendar-component__week-string'>{getWeekString(weekNum)}</div>
        {(weekNum === 3 ? 
          <div className='std-booking-calendar-component__week-button-div--invalid'>
            <img className='std-booking-calendar-component__week-button' src={LightRightAngle} alt='invalid next week button'/>
          </div> : 
          <div className='std-booking-calendar-component__week-button-div' onClick={handleNextWeek}>
            <img className='std-booking-calendar-component__week-button' src={DarkRightAngle} alt='next week button'/>
          </div>)}
      </div>
      {Table()}
    </>
  );
};

export default CalendarComponent
