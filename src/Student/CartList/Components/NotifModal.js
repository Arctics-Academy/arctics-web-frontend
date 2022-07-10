import '../std_cartlist_notifModal.css';
import { ParamContext } from '../../../ContextReducer';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import StudentApi from '../../../Axios/studentAxios'

const NotifModal = ({title, content, hidden, setHidden, mode, clt}) => {
    const context = useContext(ParamContext)
    const history = useHistory()

    // patch: context does not wrap list item into search result format (search result format looses info)
    const unwrapSearchResult = (filter) => {
        let cart = {
            consultantId: filter.id,

            surname: "",
            name: filter.name,
            photo: filter.photo,
    
            price: filter.fee,
            school: filter.education.school,
            major: filter.education.major,
            year: filter.education.year,
            
            count: filter.exp,
            labels: filter.labels,
            intro: filter.intro,
            star: filter.star
        }
        return cart
    }

    const handleCancel = () => {
        setHidden(true)
    }

    const handleConfirm = async () => {
         if (mode==="clearAll"){
            // update origin
            await StudentApi.clearCartList({ id: context.Info.id })
            // update context
            context.setInfo({type: 'clearList'})
            // update view
            setHidden(!hidden)
         } 
         else {
            // update origin
            if (mode === 'addToList') {
                clt = unwrapSearchResult(clt)
                if (context.Info.list.consultants.filter((e)=>(e.consultantId === clt.consultantId)).length !== 0) {
                    setHidden(true)
                    return
                }
                await StudentApi.addCartList({ id: context.Info.id, consultantId: clt.consultantId })
            }
            if (mode === 'deleteSingleListItem') {
                await StudentApi.deleteCartList({ id: context.Info.id, consultantId: clt.consultantId })
            }
            // update context
            context.setInfo({
                type: mode,
                payload: (mode==='addToList')? {newConsultant: clt}:{deleteId: clt.id}
            })
            // update view
            setHidden(true)
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
                    <button className='std_modal-notif-button' style={{'backgroundColor': '#f5f5f5', 'color': '#003b6b'}} onClick={handleCancel}>取消</button>
                    <button className='std_modal-notif-button' style={{'backgroundColor': '#f2d60f', 'color': '#003b6b'}} onClick={handleConfirm}>確定</button>
                </div>
            </div>
        </div>
    )
}

export default NotifModal