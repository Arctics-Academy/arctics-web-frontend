import './clt_modal.css'

const testarray = ['學習歷程', '面試準備']

const displayContent = (data) => {
    return data.map((e) => (
        <span className='clt_modal-open-meeting-content-item'>{e}</span>
    ))
}

const OpenMeetingModal = ({ meetingInfo }) => {
    return (
        <div className='clt_modal-open-meeting'>
            <div className='clt_modal-open-meeting-info'>
                <div className='clt_modal-open-meeting-time-stat'>
                    <p className='clt_modal-open-meeting-date'>2021-09-21</p>
                    <p className='clt_modal-open-meeting-time'>19:00~22:00</p>
                </div>
                <div className='clt_modal-open-meeting-student-stat'>
                    <p className='clt_modal-open-meeting-student-name'>Hello</p>
                    <p className='clt_modal-open-meeting-student-grade'>Grade2</p>
                </div>
                <div className='clt_modal-open-meeting-content'>
                    {displayContent(testarray)}
                </div>
                <div className='clt_modal-open-meeting-btns'>
                    <button className='clt_modal-open-meeting-cancel-btn'>請假</button>
                    <button className='clt_modal-open-meeting-open-btn'>開啟會議</button>
                </div>
            </div>
        </div>
    )
}

export default OpenMeetingModal