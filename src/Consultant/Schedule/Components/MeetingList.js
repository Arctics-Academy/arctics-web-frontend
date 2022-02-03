import { useState } from 'react'
import meeting from './ListComponent'
import "../clt_schedule.css"

/*temp test list*/
const testlist = {
    future: [{time: '2022/02/20 18:00', exp: 2, student: 'Alexa', remark: 'Speek slower plz...', content: ['學習歷程'], lastPaymentStatus: '2022/02/02 未付款'}],
    past: [{time: '2022/01/20 18:00', exp: 2, student: 'Alexy', remark: 'Speek slower plz...', content: ['學習歷程'], feedback: 'Like it!', lastPaymentStatus: '2022/01/15 已付款'}],
    canceled: [{time: '2022/01/05 18:00', exp: 2, student: 'Alexon', remark: 'Speek slower plz...', content: ['學習歷程'], lastPaymentStatus: '2022/01/06 已取消'}]
}
const { FutureMeeting, PastMeeting, CanceledMeeting } = meeting

const showListItem = (status, lists) => {
    if (status === 'future') {
        return (
            lists[status].map((e) => (<FutureMeeting meetingInfo={e} />))
        )
    } else if (status === 'past') {
        return (
            lists[status].map((e) => (<PastMeeting meetingInfo={e} />))
        )
    } else {
        return (
            lists[status].map((e) => (<CanceledMeeting meetingInfo={e} />))
        )
    }
}

const unclickStyle = {
    color: '#4bb3cc',
    backgroundColor: '#f5f5f5'
}
const clickedStyle = {
    color: '#f5f5f5',
    backgroundColor: '#4bb3cc'
}

const MeetingList = () => {
    const [mode, setmode] = useState('future')
    const [futureStyle, setFutureStyle] = useState(clickedStyle)
    const [pastStyle, setPastStyle] = useState(unclickStyle)
    const [cancelStyle, setCancelStyle] = useState(unclickStyle)
    const handleModeToFuture = () => {
        if (mode === 'future') return
        else if (mode === 'past') {
            setPastStyle(unclickStyle)
        } else {
            setCancelStyle(unclickStyle)
        }
        setFutureStyle(clickedStyle)
        setmode('future')
    }
    const handleModeToPast = () => {
        if (mode === 'past') return
        else if (mode === 'future') {
            setFutureStyle(unclickStyle)
        } else {
            setCancelStyle(unclickStyle)
        }
        setPastStyle(clickedStyle)
        setmode('past')
    }
    const handleModeToCancel = () => {
        if (mode === 'canceled') return
        else if (mode === 'past') {
            setPastStyle(unclickStyle)
        } else {
            setFutureStyle(unclickStyle)
        }
        setCancelStyle(clickedStyle)
        setmode('canceled')
    }
    return (
        <div className="clt_schedule-list">
            <div className="clt_schedule-list-mode">
                <span className="clt_schedule-list-mode" onClick={handleModeToFuture} style={futureStyle}>未來排程</span>
                <span className="clt_schedule-list-mode" onClick={handleModeToPast} style={pastStyle}>諮詢紀錄</span>
                <span className="clt_schedule-list-mode" onClick={handleModeToCancel} style={cancelStyle}>取消紀錄</span>
            </div>
            <div className="clt_schedule-list-content">
                {showListItem(mode, testlist)}
            </div>
        </div>
    )
}

export default MeetingList