import '../std_cartlist_notifModal.css'

const NotifModal = ({title, content, hidden, setHidden, mode, id}) => {

    // const haddleConfirm = ()=>{
    //     if (mode=="clearAll"){
    //         // let mapped = data.map( item => { return {...item, deleted: !item.deleted} } );
    //         //setData(mapped);
    //         setHidden(!hidden);
    //     }
    //     else{
    //         // let mapped = data.map( item=>{
    //         //     return item.id==id? {...item, deleted: !item.deleted}:{...item};
    //         // } )
    //         //setData(mapped);
    //         setHidden(!hidden);
    //     }
    // }

    return (
        <div className='std_modal-notif' style={hidden? {display:'none'}:{}}>
            <div className='std_modal-notif-info'>
                <div className='std_modal-notif-icon-area'>
                    <p className='std_modal-notif-subheading'>{title}</p>
                    <p className='std_modal-notif-text'>{content}</p>
                </div>
                <div className='std_modal-notif-button-area'>
                    <button className='std_modal-notif-button' style={{'background-color': '#f5f5f5', 'color': '#003b6b'}} onClick={()=>setHidden(!hidden)}>取消</button>
                    <button className='std_modal-notif-button' style={{'background-color': '#f2d60f', 'color': '#003b6b'}} onClick={()=>setHidden(!hidden)}>確定</button>
                </div>
            </div>
        </div>
    )
}

export default NotifModal