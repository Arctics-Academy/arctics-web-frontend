import { useState, useContext } from 'react'
import meeting from './ListComponent'
import "../clt_schedule.css"
import { ParamContext } from '../../../ContextReducer'

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
    const context = useContext(ParamContext)
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
        if (mode === 'cancelled') return
        else if (mode === 'past') {
            setPastStyle(unclickStyle)
        } else {
            setFutureStyle(unclickStyle)
        }
        setCancelStyle(clickedStyle)
        setmode('cancelled')
    }
    return (
        <div className="clt_schedule-list">
            <div className="clt_schedule-list-modes">
                <span className="clt_schedule-list-mode" onClick={handleModeToFuture} style={futureStyle}>未來排程</span>
                <span className="clt_schedule-list-mode" onClick={handleModeToPast} style={pastStyle}>諮詢紀錄</span>
                <span className="clt_schedule-list-mode" onClick={handleModeToCancel} style={cancelStyle}>取消紀錄</span>
            </div>
            <div className="clt_schedule-list-items">
                {showListItem(mode, context.Info.meetingsByStatus)}
            </div>
        </div>
    )
}

export default MeetingList