import { ParamContext } from "../../../ContextReducer";
import { useContext } from 'react'
import "../clt_announce.css";
import icon from '../img/announcement_icon.png';
import { readNotificationsOrAnnouncements } from "../../../Axios/consulAxios";



const Notification = ({setContent, setTitle, setHidden}) => {
  const context = useContext(ParamContext)
  const handleOnRead = async (evt) => {
    console.log(evt.target.dataset.nid)
    let clicked = context.Info.notifications.list.filter((e) => (e.id === evt.target.dataset.nid))
    console.log(evt.target.dataset.nid, clicked, clicked[0])
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
    console.log(context.Info)
    console.log(status, message)
    console.log(payload)
  }
  const displayNotifications = (notifs) => {
    return notifs.map( (obj)=>{
      let time = new Date(obj.timestamp).toLocaleString()
      console.log(obj.id)
      return(
        <div className={(obj.read ? "clt_notif-line-wrapper clt_notif-line-wrapper-read" : "clt_notif-line-wrapper")} data-nid={`${obj.id}`} onClick={handleOnRead}>
          <p className="clt_notif-line-content" data-nid={`${obj.id}`} onClick={handleOnRead}>
            <span className={(obj.read ? "clt_notif-line-title-read" : "clt_notif-line-title-unread")} data-nid={`${obj.id}`} onClick={handleOnRead}>{obj.title}</span>
            <span className={(obj.read ? "clt_notif-line-main-read" : "clt_notif-line-main-unread")} data-nid={`${obj.id}`} onClick={handleOnRead}>&nbsp;&nbsp;&#8212;&nbsp;&nbsp;{obj.content}</span>
          </p>
          <p className="clt_notif-line-time" data-nid={`${obj.id}`} onClick={handleOnRead}>{time}</p>
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
