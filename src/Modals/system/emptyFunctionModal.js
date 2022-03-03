import './system_modal.css'
import { ReactComponent as RedExclamationPoint } from '../img/red-exclamation-point.svg'


const ProfilePhotoModal = () => {
    return (
        <div className='sys_modal-open-meeting'>
            <div className='sys_modal-open-meeting-info'>
                <div className='sys_modal-empty-function-icon-area'>
                    <RedExclamationPoint className='sys_modal-empty-function-icon' />
                    <p className='sys_modal-empty-function-subheading'>這邊還沒有功能</p>
                    <p className='sys_modal-empty-function-text'>進階功能還在努力開發中，請以後再回來看看！</p>
                </div>
                <div className='sys_modal-empty-function-button-area'>
                    <button className='sys_modal-empty-function-button'>回上一頁</button>
                </div>
            </div>
        </div>
    )
}

export default ProfilePhotoModal