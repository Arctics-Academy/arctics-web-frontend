// Imports
import { useEffect, useState } from 'react'

const DayArray = [
  { name: '日', key: 'sun', no: 0 },
  { name: '一', key: 'mon', no: 1 },
  { name: '二', key: 'tue', no: 2 },
  { name: '三', key: 'wed', no: 3 },
  { name: '四', key: 'thu', no: 4 },
  { name: '五', key: 'fri', no: 5 },
  { name: '六', key: 'sat', no: 6 }
]

const processTime = (string) => {
  const timeExp = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/
  if (string.match(timeExp)) {
    let [hour, min] = string.split(':')
    // process hour

    // process min
    if (Number(min) >= 30) {
      min = 30;
    }
    else if (Number(min) >= 0) {
      min = 0;
    }
    return [true, Number(hour), Number(min)]
  }
  else {
    return [false];
  }
}

const processTimeString = (hour, min) => {
  let hourstr = (hour >= 10 ? String(hour) : '0'+String(hour))
  let minstr = (min >= 10 ? String(min) : '0'+String(min))
  return hourstr + ':' + minstr
}

const toSlot = (hour, min) => {
  return hour*2 + (min === 30 ? 1 : 0)
}

const toEndString = (slot) => {
  if (slot < 47) {
    if (slot%2 === 1) {
      return `${(Math.floor(slot/2) < 9 ? "0" + (Math.floor(slot/2)+1) : Math.floor(slot/2)+1)}:00`
    }
    else {
      return `${(Math.floor(slot/2) < 10 ? "0" + Math.floor(slot/2) : Math.floor(slot/2))}:30`
    }
  }
  else {
    return `00:00`
  }
}
  

const SelectComponent = ({ selectedDay=-1, selectedSlot=18 }) => {
  const [day, setDay] = useState(selectedDay)
  const [slot, setSlot] = useState(selectedSlot)

  // Handlers
  const handleUncheck = (e) => {
    setDay(-1)
  }

  const handleCheck = (e) => {
    setDay(e.target.value)
  }
  
  const handleTimeInput = (e) => {
    let string = e.target.value
    // if (string.length < 3) return;
    let result = processTime(string)
    if (result[0]) {
      setTimeout(() => {
        e.target.className = 'std-booking-select-component__time-panel-input'
        e.target.value = processTimeString(result[1], result[2])
      }, 800)
      setSlot(toSlot(result[1], result[2]))
    }
    else {
      setTimeout(() => {
        e.target.className = 'std-booking-select-component__time-panel-input std-booking-select-component__time-panel-input--error'
      }, 800)
    }
  }
  
  useEffect(() => {
    if (slot === 18) {
      document.getElementsByClassName('std-booking-select-component__time-panel-input')[0].value = '09:00';
    }
  })


  // Sub-components
  const WeekPanel = (displayDay) => {
    return (
      <>
        {DayArray.map((obj) => (obj.no === Number(displayDay) ?
          <div className='std-booking-select-component__day-button-wrapper' key={obj.key}>
            <div className='std-booking-select-component__day-button std-booking-select-component__day-button--checked'>
              <span>{obj.name}</span>
            </div>
            <input className='std-booking-select-component__day-checkbox' type='checkbox' value={obj.no} checked onChange={handleUncheck}></input>
          </div> :
          <div className='std-booking-select-component__day-button-wrapper' key={obj.key}>
            <div className='std-booking-select-component__day-button'>
              <span>{obj.name}</span>
            </div>
            <input className='std-booking-select-component__day-checkbox' type='checkbox' value={obj.no} onChange={handleCheck}></input>
          </div>))}
      </>
    )
  }

  const TimePanel = (displayTime) => {
    return (
      <div className='std-booking-select-component__time-panel-input-wrapper'>
        <input
          className='std-booking-select-component__time-panel-input'
          type='text'
          onChange={handleTimeInput}
        />
        <span className='std-booking-select-component__time-panel-info'> ~ {toEndString(slot)}</span>
      </div>
    )
  }

  // Main Component
  return (
    <>
      <div className='std-booking-select-component__day-panel-wrapper'>
        <p className='std-booking-select-component__day-label'>星期</p>
        {WeekPanel(day)}
      </div>
      <div className='std-booking-select-component__time-panel-wrapper'>
        <p className='std-booking-select-component__time-label'>時間</p>
        {TimePanel(slot)}
      </div>
      <div className='std-booking-select-component__price-wrapper'>
        <div className='std-booking-select-component__price-line'></div>
        <p className='std-booking-select-component__price-info'><span className='std-booking-select-component__price-price'>200</span>/半小時</p>
      </div>
      <div className='std-booking-select-component__notice-wrapper'>
        <p className='std-booking-select-component__notice-label'>注意事項</p>
        <p className='std-booking-select-component__notice-item'>1. 請選擇自己一定可以的時間</p>
      </div>
    </>
  )
}

export default SelectComponent