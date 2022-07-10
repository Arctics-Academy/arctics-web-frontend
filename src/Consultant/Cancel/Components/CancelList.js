import '../clt_cancel.css'

const wrapContent = (contents) => {
    return (
        contents.map((e) => (<span className='clt_schedule-list-content-item'>{e}</span>))
    )
}

const CancelList = ({meetingInfo}) => {
    return (
        <div className='clt_cancel-list-cancel-component'>
            <div className='clt_cancel-list-cancel-row1'>
                <div className='clt_cancel-list-time'>
                    <img className='clt_cancel-list-time-icon' src={clockIcon} />
                    <span className='clt_cancel-list-time-title'>時間</span>
                    <span className='clt_cancel-list-time-text'>{meetingInfo.time}</span>
                </div>
                <div className='clt_cancel-list-exp'>
                    <img className='clt_cancel-list-exp-icon' src={expIcon} />
                    <span className='clt_cancel-list-exp-title'>諮詢次數</span>
                    <span className='clt_cancel-list-exp-text'>{meetingInfo.exp}</span>
                </div>
                {/*<span className='clt_cancel-list-payment-status'>{meetingInfo.lastPaymentStatus}</span>*/}
            </div>
            <div className='clt_cancel-list-cancel-row2'>
                <div className='clt_cancel-list-student'>
                    <img className='clt_cancel-list-student-icon' src={bearStudentIcon} />
                    <span className='clt_cancel-list-student-title'>對象</span>
                    <span className='clt_cacel-list-student-text'>{meetingInfo.student}</span>
                </div>
                <div className='clt_cancel-list-remark'>
                    <img className='clt_cancel-list-remark-icon' src={memoIcon} />
                    <span className='clt_cancel-list-remark-title'>備註</span>
                    <span className='clt_cancel-list-remark-text'>{meetingInfo.remark}</span>
                </div>
            </div>
            <div className='clt_cancel-list-cancel-row3'>
                <div className='clt_cancel-list-content'>
                    <img className='clt_cancel-list-content-icon' src={bookIcon} />
                    <span className='clt_cancel-list-content-title'>諮詢項目</span>
                    <div className='clt_cancel-list-content-text'>
                        {wrapContent(meetingInfo.content)}
                    </div>
                </div>
            </div>
        </div>
    )
}