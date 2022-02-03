import { Button } from 'antd'
import { useState } from 'react'
import "../clt_schedule.css"
import DateRow from "./DateRow"
import rightArrow from "../img/rightArrow.png"
import leftArrow from "../img/leftArrow.png"

/* calender should be a 7 * 6 array 
   format:
   [[{date: Int, meetings: [{time:..., status:...}...]...]..]
   {}(empty object) in calneder means empty date on calender => month view
*/
const testCalender = {
    2022: {
    1:[[{}, {date: 1, meetings: []}, {date: 2, meetings: []}, {date: 3, meetings: []}, {date: 4, meetings: []}, {date: 5, meetings: []}, {date: 6, meetings: []}], 
    [{date: 7, meetings: []}, {date: 8, meetings: []}, {date: 9, meetings: []}, {date: 10, meetings: []}, {date: 11, meetings: []}, {date: 12, meetings: []}, {date: 13, meetings: []}], 
    [{date: 14, meetings: []}, {date: 15, meetings: []}, {date: 16, meetings: []}, {date: 17, meetings: []}, {date: 18, meetings: []}, {date: 19, meetings: []}, {date: 20, meetings: []}], 
    [{date: 21, meetings: []}, {date: 22, meetings: []}, {date: 23, meetings: []}, {date: 24, meetings: []}, {date: 25, meetings: []}, {date: 26, meetings: []}, {date: 27, meetings: []}], 
    [{date: 28, meetings: []}, {date: 29, meetings: []}, {date: 30, meetings: []}, {date: 31, meetings: []}, {}, {}, {}]], 
    2: [[{}, {date: 1, meetings: []}, {date: 2, meetings: []}, {date: 3, meetings: []}, {date: 4, meetings: []}, {date: 5, meetings: []}, {date: 6, meetings: []}], 
    [{date: 7, meetings: [{time: '16:00', status: 'todo'}]}, {date: 8, meetings: []}, {date: 9, meetings: []}, {date: 10, meetings: []}, {date: 11, meetings: []}, {date: 12, meetings: []}, {date: 13, meetings: []}], 
    [{date: 14, meetings: [{time: '16:00', status: 'finished'}]}, {date: 15, meetings: []}, {date: 16, meetings: []}, {date: 17, meetings: []}, {date: 18, meetings: []}, {date: 19, meetings: []}, {date: 20, meetings: []}], 
    [{date: 21, meetings: [{time: '16:00', status: 'canceled'}]}, {date: 22, meetings: []}, {date: 23, meetings: []}, {date: 24, meetings: []}, {date: 25, meetings: []}, {date: 26, meetings: []}, {date: 27, meetings: []}], 
    [{date: 28, meetings: [{time: '16:00', status: 'ready'}]}, {}, {}, {}, {}, {}, {}]]
    }
}
/* above => test data */
const monthMap = {
    1: '1月', 2: '2月', 3: '3月', 4: '4月', 5: '5月', 6: '6月', 7: '7月', 8: '8月', 9: '9月', 10: '10月', 11: '11月', 12: '12月'
}

const showTitle = (year, month) => {
    return `${year} ${monthMap[month]}`
}

const showHeader = () => {
    const weekday = ['日', '一', '二', '三', '四', '五', '六']
    return (
        weekday.map((e) => (
            <div className='clt_schedule-calender-header-text'>
                <span>{e}</span>
            </div>
        ))
    )
}

const Calender = () => {
    let curDate = new Date()
    const [year, setYear] = useState(2022)
    const [month, setMonth] = useState(curDate.getMonth()+1)
    const handleAddMonth = () => {
        if (month == 12) {
            setMonth(1)
            setYear(year+1)
        } else {
            setMonth(month+1)
        }
    }
    const handleMinusMonth = () => {
        if (month == 1) {
            setMonth(12)
            setYear(year-1)
        } else {
            setMonth(month-1)
        }
    }
    return (
        <>
            <div className="clt_schedule-calender">
                <div className='clt_schedule-calender-title'>
                    <button className='clt_schedule-calender-btn-left' onClick={handleMinusMonth}>
                        <img className='clt_schedule-calender-title-left-arrow' src={leftArrow}/>
                    </button>
                    <span className='clt_schedule-calender-title-text'>{showTitle(year, month)}</span>
                    <button className='clt_schedule-calender-btn-left' onClick={handleAddMonth}>
                        <img className='clt_schedule-calender-title-right-arrow' src={rightArrow}/>
                    </button>
                </div>
                <div className='clt_schedule-calender-header'>
                    {showHeader()}
                </div>
                <div className='"clt_schedule-calnder-content'>
                    {testCalender[year][month].map((r) => (<DateRow row={r} />))}
                </div>
            </div>
        </>
    )
}

export default Calender