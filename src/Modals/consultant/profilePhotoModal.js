import './clt_modal.css'
import { ReactComponent as BlackCircleCamera } from '../img/black-circle-camera.svg'
import { updateProfilePhoto } from '../../axios'
import { useContext } from 'react'
import { ParamContext } from '../../ContextReducer'


const ProfilePhotoModal = ({ hidden, setHidden }) => {
    const context = useContext(ParamContext)
    const handleOnChangeUpload = async (event) => {
        console.log(event)
        const fdt = new FormData()
        fdt.append('profilePhoto', event.target.files[0])
        fdt.append('id', context.Info.id)
        try{
            const { status, msg } = await updateProfilePhoto(fdt)
            console.log(status, msg)
        } catch (e) {
            console.log(e)
        }
        setHidden(true)
    }
    const handleDeletePhoto = async () => {
        try {
            const { status, msg } = await updateProfilePhoto({id:context.Info.id})
            console.log(status, msg)
        } catch (e) {
            console.log(e)
        }
        setHidden(true)
    }
    return (
        <div className='clt_modal-open-meeting' style={hidden? {display:'none'}:{display:'flex'}}>
            <div className='clt_modal-open-meeting-info'>
                <div className='clt_modal-profile-photo-icon-area'>
                    <BlackCircleCamera className='clt_modal-profile-photo-icon' />
                </div>
                <div className='clt_modal-profile-photo-button-area'>
                    <label htmlFor='upload'>
                        <span className='clt_modal-upload-button'>上傳照片</span>
                        <input id='upload' onChange={handleOnChangeUpload} type='file'/>
                    </label>
                    <button className='clt_modal-delete-button' onClick={handleDeletePhoto}>刪除照片</button>
                    <button className='clt_modal-cancel-button' onClick={()=>setHidden(true)}>取消</button>
                </div>
            </div>
        </div>
    )
}

export default ProfilePhotoModal