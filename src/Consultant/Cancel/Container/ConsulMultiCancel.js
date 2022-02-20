import { useState } from 'react'
import '../clt_cancel.css'

const ConsulMultiCancel = () => {
    const [toCancel, setToCancel] = useState([])
    return (
        <div className='clt_cancel-multi-main'>
            <div className='clt_cancel-multi-title'>
                <span className='clt_cancel-multi-title-text'>取消多堂課程</span>
                <div className='clt_cancel-multi-title-underline' />
                <span className='clt_cancel-multi-title-guide'>請選擇要請假的課堂</span>
            </div>
            <div className='clt_cancel-multi-meeting-list'>

            </div>
            <div className='clt_cancel-multi-status-display'>
                <p className='clt_cancel-multi-status-text'>
                    已選擇
                    <span className='clt_cancel-multi-selected-count'>{toCancel.length}</span>
                    堂課程
                </p>
                <div className='clt_cancel-multi-status-underline' />
            </div>
            <div className='clt_cancel-multi-action-btns'>
                <button className='clt_cancel-multi-cancel-confirm-btn'>請假</button>
                <button className='clt_cancel-multi-quit-back'>放棄並返回課程頁面</button>
            </div>
        </div>
    )
}

export default ConsulMultiCancel