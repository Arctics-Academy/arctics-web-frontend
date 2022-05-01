import '../system/system_modal.css'
import { ReactComponent as RedExclamationPoint } from '../img/red-exclamation-point.svg'


const EmptySearchModal = ({hidden, setHidden}) => {
    return (
        <div className='sys_modal-open-meeting' style={hidden? {display:'none'}:{}}>
            <div className='sys_modal-open-meeting-info'>
                <div className='sys_modal-empty-function-icon-area'>
                    <RedExclamationPoint className='sys_modal-empty-function-icon' />
                    <p className='sys_modal-empty-function-subheading'>搜尋條件不足</p>
                    <p className='sys_modal-empty-function-text'>使用顧問搜尋須至少選擇學群！</p>
                </div>
                <div className='sys_modal-empty-function-button-area'>
                    <button className='sys_modal-empty-function-button' onClick={()=>setHidden(true)}>確認</button>
                </div>
            </div>
        </div>
    )
}

export default EmptySearchModal