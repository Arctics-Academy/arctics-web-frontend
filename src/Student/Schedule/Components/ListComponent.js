
import clockIcon from '../img/clock.png'
import bearStudentIcon from '../img/studentbear.png'
import expIcon from '../img/EXP.png'
import memoIcon from '../img/memo.png'
import bookIcon from '../img/book.png'
import commentIcon from '../img/comment.png'

import { Link } from 'react-router-dom'

const wrapContent = (contents) => {
    return (
        contents.map((e) => (<span className='std_schedule-list-content-item'>{e}</span>))
    )
}

const FutureMeeting = ({meetingInfo}) => {
    return (
        <div className='std_schedule-list-future-component'>
            <div className='std_schedule-list-future-row1'>
                <div className='std_schedule-list-time'>
                    <img className='std_schedule-list-time-icon' src={clockIcon} />
                    <span className='std_schedule-list-time-title'>時間</span>
                    <span className='std_schedule-list-time-text'>{meetingInfo.date+meetingInfo.time}</span>
                </div>
                <div className='std_schedule-list-exp'>
                    <img className='std_schedule-list-exp-icon' src={expIcon} />
                    <span className='std_schedule-list-exp-title'>諮詢次數</span>
                    <span className='std_schedule-list-exp-text'>{meetingInfo.count} 次</span>
                </div>
                {/*<span className='std_schedule-list-payment-status'>{meetingInfo.lastPaymentStatus}</span>*/}
            </div>
            <div className='std_schedule-list-future-row2'>
                <div className='std_schedule-list-student'>
                    <img className='std_schedule-list-student-icon' src={bearStudentIcon} />
                    <span className='std_schedule-list-student-title'>對象</span>
                    <span className='std_schedule-list-student-text'>{meetingInfo.name}</span>
                </div>
                <div className='std_schedule-list-remark'>
                    <img className='std_schedule-list-remark-icon' src={memoIcon} />
                    <span className='std_schedule-list-remark-title'>備註</span>
                    <span className='std_schedule-list-remark-text'>{meetingInfo.remark}</span>
                </div>
            </div>
            <div className='std_schedule-list-future-row3'>
                <div className='std_schedule-list-content'>
                    <img className='std_schedule-list-content-icon' src={bookIcon} />
                    <span className='std_schedule-list-content-title'>校系</span>
                    <div className='std_schedule-list-content-text'>
                        {meetingInfo.school+' '+meetingInfo.major}
                    </div>
                </div>
            </div>
            <div className='std_schedule-list-future-action-btn'>
                <button className='std_schedule-list-future-check'>
                    <span id="link-patch-preview"><Link to={`/student-preview/${meetingInfo.consultantId}`} style={{color: '#f5f5f5'}}>查看簡介</Link></span>
                </button>
                <button className='std_schedule-list-future-cancel' disabled>
                    請假
                </button>
                <button className='std_schedule-list-future-open' disabled>
                    開啟會議
                </button>
            </div>
        </div>
    )
}

const PastMeeting = ({meetingInfo}) => {
    return (
        <div className='std_schedule-list-past-component'>
            <div className='std_schedule-list-past-row1'>
                <div className='std_schedule-list-time'>
                    <img className='std_schedule-list-time-icon' src={clockIcon} />
                    <span className='std_schedule-list-time-title'>時間</span>
                    <span className='std_schedule-list-time-text'>{meetingInfo.date+meetingInfo.time}</span>
                </div>
                <div className='std_schedule-list-feedback'>
                    <img className='std_schedule-list-feedback-icon' src={commentIcon} />
                    <span className='std_schedule-list-feedback-title'>留言/回饋</span>
                    <span className='std_schedule-list-feedback-text'>{meetingInfo.feedback}</span>
                </div>
                {/* <div className='std_schedule-list-exp'>
                    <img className='std_schedule-list-exp-icon' src={expIcon} />
                    <span className='std_schedule-list-exp-title'>諮詢次數</span>
                    <span className='std_schedule-list-exp-text'>{meetingInfo.exp}</span>
                </div> */}
                {/*<span className='std_schedule-list-payment-status'>{meetingInfo.lastPaymentStatus}</span>*/}
            </div>
            <div className='std_schedule-list-past-row2'>
                <div className='std_schedule-list-student'>
                    <img className='std_schedule-list-student-icon' src={bearStudentIcon} />
                    <span className='std_schedule-list-student-title'>對象</span>
                    <span className='std_schedule-list-student-text'>{meetingInfo.student}</span>
                </div>
                <div className='std_schedule-list-remark'>
                    <img className='std_schedule-list-remark-icon' src={memoIcon} />
                    <span className='std_schedule-list-remark-title'>備註</span>
                    <span className='std_schedule-list-remark-text'>{meetingInfo.remark}</span>
                </div>
            </div>
            <div className='std_schedule-list-past-row3'>
                <div className='std_schedule-list-content'>
                    <img className='std_schedule-list-content-icon' src={bookIcon} />
                    <span className='std_schedule-list-content-title'>諮詢項目</span>
                    <div className='std_schedule-list-content-text'>
                        {wrapContent(meetingInfo.content)}
                    </div>
                </div>
                {/* <div className='std_schedule-list-feedback'>
                    <img className='std_schedule-list-feedback-icon' src={commentIcon} />
                    <span className='std_schedule-list-feedback-title'>留言/回饋</span>
                    <span className='std_schedule-list-feedback-text'>{meetingInfo.feedback}</span>
                </div> */}
            </div>
        </div>
    )
}

const CanceledMeeting = ({meetingInfo}) => {
    return (
        <div className='std_schedule-list-cancel-component'>
            <div className='std_schedule-list-cancel-row1'>
                <div className='std_schedule-list-time'>
                    <img className='std_schedule-list-time-icon' src={clockIcon} />
                    <span className='std_schedule-list-time-title'>時間</span>
                    <span className='std_schedule-list-time-text'>{meetingInfo.date+meetingInfo.time}</span>
                </div>
                <div className='std_schedule-list-remark'>
                    <img className='std_schedule-list-remark-icon' src={memoIcon} />
                    <span className='std_schedule-list-remark-title'>備註</span>
                    <span className='std_schedule-list-remark-text'>{meetingInfo.remark}</span>
                </div>
                {/* <div className='std_schedule-list-exp'>
                    <img className='std_schedule-list-exp-icon' src={expIcon} />
                    <span className='std_schedule-list-exp-title'>諮詢次數</span>
                    <span className='std_schedule-list-exp-text'>{meetingInfo.exp}</span>
                </div> */}
                {/*<span className='std_schedule-list-payment-status'>{meetingInfo.lastPaymentStatus}</span>*/}
            </div>
            <div className='std_schedule-list-cancel-row2'>
                <div className='std_schedule-list-student'>
                    <img className='std_schedule-list-student-icon' src={bearStudentIcon} />
                    <span className='std_schedule-list-student-title'>對象</span>
                    <span className='std_schedule-list-student-text'>{meetingInfo.student}</span>
                </div>
                {/* <div className='std_schedule-list-remark'>
                    <img className='std_schedule-list-remark-icon' src={memoIcon} />
                    <span className='std_schedule-list-remark-title'>備註</span>
                    <span className='std_schedule-list-remark-text'>{meetingInfo.remark}</span>
                </div> */}
            </div>
            <div className='std_schedule-list-cancel-row3'>
                <div className='std_schedule-list-content'>
                    <img className='std_schedule-list-content-icon' src={bookIcon} />
                    <span className='std_schedule-list-content-title'>諮詢項目</span>
                    <div className='std_schedule-list-content-text'>
                        {wrapContent(meetingInfo.content)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default {FutureMeeting, PastMeeting, CanceledMeeting}