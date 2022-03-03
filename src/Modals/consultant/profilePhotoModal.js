import './clt_modal.css'
import { ReactComponent as BlackCircleCamera } from '../img/black-circle-camera.svg'


const ProfilePhotoModal = () => {
    return (
        <div className='clt_modal-open-meeting'>
            <div className='clt_modal-open-meeting-info'>
                <div className='clt_modal-profile-photo-icon-area'>
                    <BlackCircleCamera className='clt_modal-profile-photo-icon' />
                </div>
                <div className='clt_modal-profile-photo-button-area'>
                    <button className='clt_modal-upload-button'>上傳照片</button>
                    <button className='clt_modal-delete-button'>刪除照片</button>
                </div>
            </div>
        </div>
    )
}

export default ProfilePhotoModal