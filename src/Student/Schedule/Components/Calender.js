import { useState, useContext } from 'react'
import DateRow from "./DateRow"
import rightArrow from "../img/rightArrow.png"
import leftArrow from "../img/leftArrow.png"
import { ParamContext } from '../../../ContextReducer'
import { buildMonthArr } from '../../../DataProcessUtils'

/* calender should be a 7 * 6 array 
   format:
   [[{date: Int, meetings: [{time:..., status:...}...]...]..]
   {}(empty object) in calneder means empty date on calender => month view
*/

/* above => test data */
const monthMap = {
    1: '01', 2: '02', 3: '03', 4: '14', 5: '05', 6: '06', 7: '07', 8: '08', 9: '09', 10: '10', 11: '11', 12: '12'
}

const showTitle = (year, month) => {
    return `${year}年${monthMap[month]}月`
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
    const context = useContext(ParamContext)
    const handleAddMonth = () => {
        let m = month, y = year
        if (month === 12) {
            m = 1
            y++
        } else {
            m++
        }
        if (context.Info.meetingsByTime[y] === undefined || context.Info.meetingsByTime[y][m] === undefined) {
            let temp = context.Info.meetingsByTime
            if (context.Info.meetingsByTime[y] === undefined) temp[y] = {}
            temp[y][m] = buildMonthArr(y, m)
            context.setLogin(true)
            context.setInfo({
                type: 'addMonthForView',
                payload: temp
            })
        }
        setMonth(m)
        setYear(y)
    }
    const handleMinusMonth = () => {
        let m = month, y = year
        if (month === 1) {
            m = 12
            y--
        } else {
            m--
        }
        if (context.Info.meetingsByTime[y] === undefined || context.Info.meetingsByTime[y][m] === undefined) {
            let temp = context.Info.meetingsByTime
            if (context.Info.meetingsByTime[y] === undefined) temp[y] = {}
            temp[y][m] = buildMonthArr(y, m)
            context.setInfo({
                type: 'addMonthForView',
                payload: temp
            })
            context.setLogin(true)
        }
        setMonth(m)
        setYear(y)
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
                    {(context.Info.meetingsByTime[year]===undefined)? []:context.Info.meetingsByTime[year][month].map((r) => (<DateRow row={r} />))}
                </div>
            </div>
        </>
    )
}

export default Calender