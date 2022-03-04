import { ParamContext } from "../../../ContextReducer";
import { useContext } from 'react'
import "../clt_announce.css";
import icon from '../img/announcement_icon.png';
import { readNotificationsOrAnnouncements } from "../../../axios";



const Notification = () => {
  const context = useContext(ParamContext)
  const handleOnRead = async (evt) => {
    const payload = {
      id: context.Info.id,
      announcementId: [],
      notificationId: [evt.target.id]
    }
    //const { status, message } = await readNotificationsOrAnnouncements(payload)
    //console.log(status, message)
    console.log(payload)
  }
  const displayNotifications = (notifs) => {
    return notifs.map( (obj)=>{
      let time = new Date(obj.timestamp).toLocaleString()
      return(
        <div className={(obj.read ? "clt_notif-line-wrapper clt_notif-line-wrapper-read" : "clt_notif-line-wrapper")} id={obj.id} onClick={handleOnRead}>
          <p className="clt_notif-line-content"><span className={(obj.read ? "clt_notif-line-title-read" : "clt_notif-line-title-unread")}>{obj.title}</span><span className={(obj.read ? "clt_notif-line-main-read" : "clt_notif-line-main-unread")}>&nbsp;&nbsp;&#8212;&nbsp;&nbsp;{obj.content}</span></p>
          <p className="clt_notif-line-time">{time}</p>
        </div>
      )
    })
  }
  return (
    <div className="clt_notif-wrapper">
      <img src={icon} alt="icon"/>
      <span className="clt_notif-head">個人通知</span>
      <div className="clt_notif-display-frame">
        {context.Info.notifications.list.length>0? displayNotifications(context.Info.notifications.list):
          <p className="clt_notif_empty">目前尚無任何通知!</p>
        }
      </div>
    </div>
  );
};

export default Notification;
