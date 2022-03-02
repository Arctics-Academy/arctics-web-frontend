import '../clt_schedule.css'
import clockIcon from '../img/clock.png'
import bearStudentIcon from '../img/studentbear.png'
import expIcon from '../img/EXP.png'
import memoIcon from '../img/memo.png'
import bookIcon from '../img/book.png'
import commentIcon from '../img/comment.png'

const wrapContent = (contents) => {
    return (
        contents.map((e) => (<span className='clt_schedule-list-content-item'>{e}</span>))
    )
}

const FutureMeeting = ({meetingInfo}) => {
    return (
        <div className='clt_schedule-list-future-component'>
            <div className='clt_schedule-list-future-row1'>
                <div className='clt_schedule-list-time'>
                    <img className='clt_schedule-list-time-icon' src={clockIcon} />
                    <span className='clt_schedule-list-time-title'>時間</span>
                    <span className='clt_schedule-list-time-text'>{meetingInfo.date+meetingInfo.time}</span>
                </div>
                <div className='clt_schedule-list-exp'>
                    <img className='clt_schedule-list-exp-icon' src={expIcon} />
                    <span className='clt_schedule-list-exp-title'>諮詢次數</span>
                    <span className='clt_schedule-list-exp-text'>{meetingInfo.exp}</span>
                </div>
                {/*<span className='clt_schedule-list-payment-status'>{meetingInfo.lastPaymentStatus}</span>*/}
            </div>
            <div className='clt_schedule-list-future-row2'>
                <div className='clt_schedule-list-student'>
                    <img className='clt_schedule-list-student-icon' src={bearStudentIcon} />
                    <span className='clt_schedule-list-student-title'>對象</span>
                    <span className='clt_schedule-list-student-text'>{meetingInfo.student}</span>
                </div>
                <div className='clt_schedule-list-remark'>
                    <img className='clt_schedule-list-remark-icon' src={memoIcon} />
                    <span className='clt_schedule-list-remark-title'>備註</span>
                    <span className='clt_schedule-list-remark-text'>{meetingInfo.remark}</span>
                </div>
            </div>
            <div className='clt_schedule-list-future-row3'>
                <div className='clt_schedule-list-content'>
                    <img className='clt_schedule-list-content-icon' src={bookIcon} />
                    <span className='clt_schedule-list-content-title'>諮詢項目</span>
                    <div className='clt_schedule-list-content-text'>
                        {wrapContent(meetingInfo.content)}
                    </div>
                </div>
            </div>
            <div className='clt_schedule-list-future-action-btn'>
                <button className='clt_schedule-list-future-check'>查看問卷</button>
                <button className='clt_schedule-list-future-cancel'>請假</button>
                <button className='clt_schedule-list-future-open'>開啟會議</button>
            </div>
        </div>
    )
}

const PastMeeting = ({meetingInfo}) => {
    return (
        <div className='clt_schedule-list-past-component'>
            <div className='clt_schedule-list-past-row1'>
                <div className='clt_schedule-list-time'>
                    <img className='clt_schedule-list-time-icon' src={clockIcon} />
                    <span className='clt_schedule-list-time-title'>時間</span>
                    <span className='clt_schedule-list-time-text'>{meetingInfo.date+meetingInfo.time}</span>
                </div>
                <div className='clt_schedule-list-exp'>
                    <img className='clt_schedule-list-exp-icon' src={expIcon} />
                    <span className='clt_schedule-list-exp-title'>諮詢次數</span>
                    <span className='clt_schedule-list-exp-text'>{meetingInfo.exp}</span>
                </div>
                {/*<span className='clt_schedule-list-payment-status'>{meetingInfo.lastPaymentStatus}</span>*/}
            </div>
            <div className='clt_schedule-list-past-row2'>
                <div className='clt_schedule-list-student'>
                    <img className='clt_schedule-list-student-icon' src={bearStudentIcon} />
                    <span className='clt_schedule-list-student-title'>對象</span>
                    <span className='clt_schedule-list-student-text'>{meetingInfo.student}</span>
                </div>
                <div className='clt_schedule-list-remark'>
                    <img className='clt_schedule-list-remark-icon' src={memoIcon} />
                    <span className='clt_schedule-list-remark-title'>備註</span>
                    <span className='clt_schedule-list-remark-text'>{meetingInfo.remark}</span>
                </div>
            </div>
            <div className='clt_schedule-list-past-row3'>
                <div className='clt_schedule-list-content'>
                    <img className='clt_schedule-list-content-icon' src={bookIcon} />
                    <span className='clt_schedule-list-content-title'>諮詢項目</span>
                    <div className='clt_schedule-list-content-text'>
                        {wrapContent(meetingInfo.content)}
                    </div>
                </div>
                <div className='clt_schedule-list-feedback'>
                    <img className='clt_schedule-list-feedback-icon' src={commentIcon} />
                    <span className='clt_schedule-list-feedback-title'>留言/回饋</span>
                    <span className='clt_schedule-list-feedback-text'>{meetingInfo.feedback}</span>
                </div>
            </div>
        </div>
    )
}

const CanceledMeeting = ({meetingInfo}) => {
    return (
        <div className='clt_schedule-list-cancel-component'>
            <div className='clt_schedule-list-cancel-row1'>
                <div className='clt_schedule-list-time'>
                    <img className='clt_schedule-list-time-icon' src={clockIcon} />
                    <span className='clt_schedule-list-time-title'>時間</span>
                    <span className='clt_schedule-list-time-text'>{meetingInfo.date+meetingInfo.time}</span>
                </div>
                <div className='clt_schedule-list-exp'>
                    <img className='clt_schedule-list-exp-icon' src={expIcon} />
                    <span className='clt_schedule-list-exp-title'>諮詢次數</span>
                    <span className='clt_schedule-list-exp-text'>{meetingInfo.exp}</span>
                </div>
                {/*<span className='clt_schedule-list-payment-status'>{meetingInfo.lastPaymentStatus}</span>*/}
            </div>
            <div className='clt_schedule-list-cancel-row2'>
                <div className='clt_schedule-list-student'>
                    <img className='clt_schedule-list-student-icon' src={bearStudentIcon} />
                    <span className='clt_schedule-list-student-title'>對象</span>
                    <span className='clt_schedule-list-student-text'>{meetingInfo.student}</span>
                </div>
                <div className='clt_schedule-list-remark'>
                    <img className='clt_schedule-list-remark-icon' src={memoIcon} />
                    <span className='clt_schedule-list-remark-title'>備註</span>
                    <span className='clt_schedule-list-remark-text'>{meetingInfo.remark}</span>
                </div>
            </div>
            <div className='clt_schedule-list-cancel-row3'>
                <div className='clt_schedule-list-content'>
                    <img className='clt_schedule-list-content-icon' src={bookIcon} />
                    <span className='clt_schedule-list-content-title'>諮詢項目</span>
                    <div className='clt_schedule-list-content-text'>
                        {wrapContent(meetingInfo.content)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default {FutureMeeting, PastMeeting, CanceledMeeting}