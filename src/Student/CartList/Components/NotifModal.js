import '../std_cartlist_notifModal.css';
import { ParamContext } from '../../../ContextReducer';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';

const NotifModal = ({title, content, hidden, setHidden, mode, clt}) => {
    const context = useContext(ParamContext)
    const history = useHistory()
    const handleConfirm = ()=>{
         if (mode==="clearAll"){
            context.setInfo({type: 'clearAll'})
            setHidden(!hidden);
         } else {
            context.setInfo({
                type: mode,
                payload: (mode==='addToList')? {newConsultant: clt}:{deleteId: clt.id}
            })
            console.log({
                type: mode,
                payload: (mode==='addToList')? {newConsultant: clt}:{deleteId: clt.id}
            })
            setHidden(!hidden);
         }
    }

    return (
        <div className='std_modal-notif' style={hidden? {display:'none'}:{}}>
            <div className='std_modal-notif-info'>
                <div className='std_modal-notif-icon-area'>
                    <p className='std_modal-notif-subheading'>{title}</p>
                    <p className='std_modal-notif-text'>{content}</p>
                </div>
                <div className='std_modal-notif-button-area'>
                    <button className='std_modal-notif-button' style={{'background-color': '#f5f5f5', 'color': '#003b6b'}} onClick={handleConfirm}>取消</button>
                    <button className='std_modal-notif-button' style={{'background-color': '#f2d60f', 'color': '#003b6b'}} onClick={handleConfirm}>確定</button>
                </div>
            </div>
        </div>
    )
}

export default NotifModal