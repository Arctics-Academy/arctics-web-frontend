import './clt_modal.css'
import { ReactComponent as BlackCircleCamera } from '../img/black-circle-camera.svg'
import { updateProfilePhoto } from '../../Axios/consulAxios'
import { useContext } from 'react'
import { ParamContext } from '../../ContextReducer'


const ProfilePhotoModal = ({ hidden, setHidden }) => {
    const context = useContext(ParamContext)
    const handleOnChangeUpload = async (event) => {
        console.debug(event)
        const fdt = new FormData()
        fdt.append('profilePhoto', event.target.files[0])
        fdt.append('id', context.Info.id)
        setHidden(true)
        try{
            const { status, msg } = await updateProfilePhoto(fdt)
            console.debug(status, msg)
        } catch (e) {
            console.debug(e)
        }
        context.setLogin(true)
        context.setInfo({
            type: 'updateAvatar',
            payload: {
                photo: URL.createObjectURL(event.target.files[0])
            }
        })       
    }
    const handleDeletePhoto = async () => {
        setHidden(true)
        try {
            const { status, msg } = await updateProfilePhoto({id:context.Info.id})
            console.debug(status, msg)
        } catch (e) {
            console.debug(e)
        }
        context.setInfo({
            type: 'updateAvatar',
            payload: {
                photo: 'NotFound'
            }
        })
        context.setLogin(true)
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