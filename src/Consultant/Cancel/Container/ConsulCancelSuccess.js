import '../clt_cancel.css'
import bearPic from '../img/successCancelBear.png'

const ConsulCancelSuccess = () => {
    /* Remark: Handle exception => id not belong to current user */

    return (
        <div className='clt_cancel-success-main'>
            <div className='clt_cancel-success-title'>
                <span className='clt_cancel-success-title-text'>請假成功!</span>
                <span className='clt_cancel-success-title-guide'>已取消下列課程</span>
            </div>
            <div className='clt_cancel-success-meeting-list'>

            </div>
            <div className='clt_cancel-success-action-btns'>
                <button className='clt_cancel-success-cancel-confirm-btn'>繼續請假</button>
                <button className='clt_cancel-success-quit-back'>返回課程頁面</button>
            </div>
            <div className='clt_cancel-success-image-div'>
                <img className='clt_cancel-success-image' src={bearPic} />
            </div>
        </div>
    )
}

export default ConsulCancelSuccess