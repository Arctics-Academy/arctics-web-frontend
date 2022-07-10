import { ParamContext } from "../../../ContextReducer";
import { useContext } from 'react'
import "../std_announce.css";
import icon from '../img/announcement_icon.png';
import { readNotificationsOrAnnouncements } from "../../../Axios/consulAxios";



const Notification = ({setContent, setTitle, setHidden}) => {
  const context = useContext(ParamContext)
  const handleOnRead = async (evt) => {
    console.debug(evt.target.dataset.nid)
    let clicked = context.Info.notifications.list.filter((e) => (e.id === evt.target.dataset.nid))
    console.debug(evt.target.dataset.nid, clicked, clicked[0])
    setContent(clicked[0].content)
    setTitle(clicked[0].title)
    setHidden(false)
    if (clicked[0].read) return
    context.setInfo({
      type: 'readNotification',
      payload: {
        nid: evt.target.dataset.nid
      }
    })
    context.setLogin(true)
    const payload = {
      id: context.Info.id,
      announcementId: [],
      notificationId: [evt.target.dataset.nid]
    }
    const { status, message } = await readNotificationsOrAnnouncements(payload)
    console.debug(context.Info)
    console.debug(status, message)
    console.debug(payload)
  }
  const displayNotifications = (notifs) => {
    return notifs.map( (obj)=>{
      let time = new Date(obj.timestamp).toLocaleString()
      console.debug(obj.id)
      return(
        <div className={(obj.read ? "std_notif-line-wrapper std_notif-line-wrapper-read" : "std_notif-line-wrapper")} data-nid={`${obj.id}`} onClick={handleOnRead}>
          <p className="std_notif-line-content" data-nid={`${obj.id}`} onClick={handleOnRead}>
            <span className={(obj.read ? "std_notif-line-title-read" : "std_notif-line-title-unread")} data-nid={`${obj.id}`} onClick={handleOnRead}>{obj.title}</span>
            <span className={(obj.read ? "std_notif-line-main-read" : "std_notif-line-main-unread")} data-nid={`${obj.id}`} onClick={handleOnRead}>&nbsp;&nbsp;&#8212;&nbsp;&nbsp;{obj.content}</span>
          </p>
          <p className="std_notif-line-time" data-nid={`${obj.id}`} onClick={handleOnRead}>{time}</p>
        </div>
      )
    })
  }
  return (
    <div className="std_notif-wrapper">
      <div className="std_notif-head-wrapper">
        <img className="std_notif-head-icon" src={icon} alt="icon"/>
        <span className="std_notif-head">個人通知</span>
      </div>
      <div className="std_notif-display-frame">
        {context.Info.notifications.list.length>0? displayNotifications(context.Info.notifications.list):
          <p className="std_notif_empty">目前尚無任何通知!</p>
        }
      </div>
    </div>
  );
};

export default Notification;
