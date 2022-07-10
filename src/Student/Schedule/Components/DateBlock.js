

/* dateLog format
   {date: Int, meetings:[{time, status}]}
*/
const showMeeting = (meetings) => {
    return (
        meetings.map((element) => {
            switch (element.status) {
                case 'past' :
                    return <p className="std_schedule-calender-meeting-info-finished">{element.time} 已完成</p>
                case 'cancelled' :
                    return <p className="std_schedule-calender-meeting-info-canceled">{element.time} 已取消</p>
                case 'future' :
                    return <p className="std_schedule-calender-meeting-info-todo">{element.time} 已排定</p>
                case 'ready' :
                    return <p className="std_schedule-calender-meeting-info-ready">{element.time} 開始會議</p>
                default: return <></>
            }
        })
    )
}

const DateBlock = (dateLog) => {
    if (dateLog.date !== undefined) { //dateLog != {}
        return (
            <div className="std_schedule-calender-date-block">
                <p className="std_schedule-calender-date-block-date-number">{dateLog.date}</p>
                <div className="std_schedule-calender-date-block-meetings">
                    {showMeeting(dateLog.meetings)}
                </div>
            </div>
        )
    } else {
        return (
            <div className="std_schedule-calender-date-block" />
        )
    }
}

export default DateBlock