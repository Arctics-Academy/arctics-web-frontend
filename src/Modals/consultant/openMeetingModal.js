import './clt_modal.css'

const displayContent = (data) => {
    return data.map((e) => (
        <span className='clt_modal-open-meeting-content-item'>{e}</span>
    ))
}

const openMeetingModal = ({ meetingInfo }) => {
    return (
        <div className='clt_modal-open-meeting'>
            <div className='clt_modal-open-meeting-info'>
                <div className='clt_modal-open-meeting-time-stat'>
                    <p className='clt_modal-open-meeting-date'></p>
                    <p className='clt_modal-open-meeting-time'></p>
                </div>
                <div className='clt_modal-open-meeting-student-stat'>
                    <p className='clt_modal-open-meeting-student-name'></p>
                    <p className='clt_modal-open-meeting-student-grade'></p>
                </div>
                <div className='clt_modal-open-meeeting-content'>
                    {displayContent(meetingInfo.content)}
                </div>
                <div className='clt_modal-open-meeting-btns'>
                    <button className='clt_modal-open-meeting-cancel-btn'>請假</button>
                    <button className='clt_modal-open-meeting-open-btn'>開啟會議</button>
                </div>
            </div>
        </div>
    )
}

export default openMeetingModal