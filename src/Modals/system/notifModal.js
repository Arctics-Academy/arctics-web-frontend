import './system_modal.css'


const NotifModal = ({hidden, setHidden}) => {
    return (
        <div className='sys_modal-open-meeting' style={hidden? {display:'none'}:{}}>
            <div className='sys_modal-open-meeting-info'>
                <div className='sys_modal-notif-icon-area'>
                    <p className='sys_modal-notif-subheading'>title</p>
                    <p className='sys_modal-notif-text'>content</p>
                </div>
                <div className='sys_modal-empty-function-button-area'>
                    <button className='sys_modal-empty-function-button' onClick={()=>setHidden(true)}>了解</button>
                </div>
            </div>
        </div>
    )
}

export default NotifModal