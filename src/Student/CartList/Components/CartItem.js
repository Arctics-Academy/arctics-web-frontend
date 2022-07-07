import "../std_cartlist.css";
import { useState } from "react";
import { ReactComponent as CoinIcon } from '../img/coin.svg';
import { ReactComponent as SchoolIcon } from '../img/school.svg';
import { ReactComponent as ExpIcon } from '../img/exp.svg';
import { ReactComponent as HashtagIcon } from '../img/hashtag.svg';
import { ReactComponent as UpIcon } from '../img/arrow_up.svg';
import { ReactComponent as DownIcon } from '../img/arrow_down.svg';
import { ReactComponent as Star } from '../img/star.svg';
import { ReactComponent as DeleteIcon } from '../img/delete.svg';
import { ReactComponent as InfoIcon } from '../img/info.svg';
import img_path from '../img/defaultAvt.png';
import NotifModal from "./NotifModal";
import { useHistory, Link } from "react-router-dom";

const CartItem = ( {clt, setContext, context } ) => {
  const [itemHidden, setItemHidden] = useState(true);
  const [introOpen, setIntroOpen] = useState(false);
  const history = useHistory()

  const handleBooking = () => {
    console.log(context)
    setContext({
      type: 'selectBooking',
      payload: {
        id: clt.consultantId,
        name: clt.surname+clt.name,
        school: clt.school,
        major: clt.major,
        price: clt.price
      }
    })
    history.push('/student-booking-1')
  } 

  if (!clt.labels) clt.labels = []
  let hashtag_converted = clt.labels;
  if (clt.labels.length<3){
    for(let i=clt.labels.length; i<3; i++){
      hashtag_converted.push("n");
    }
  }

  const Hashtag = hashtag_converted.map((e, i)=>{
    if (e==="n")
      return (<p key={i} style={{opacity: 0}} >{e}</p>)
    else return ( <p key={i} >{e}</p> )
  })

  const level_int = parseInt(clt.star);
  const level_fl = Math.round((clt.star-level_int)*10);

  const intro_component = (intro) => {
    if (!intro) intro = ""
    if (intro.length <= 50){
      return(
        <div className="std_cartitem-intro">
          <p className="std_cartitem-intro-content">{intro}</p>
        </div>
      )
    }
    else {
      const short_intro = intro.slice(0, 50);
      if (!introOpen){
        return(
          <div className="std_cartitem-intro">
            <p className="std_cartitem-intro-content">{short_intro} ⋯⋯</p>
            <button className="std_cartitem-intro-check" onClick={()=>setIntroOpen(true)}>
              查看完整簡介
              <DownIcon className="std_cartitem-arrow-icon" />
            </button>
          </div>
        )
      }
      else return(
        <div className="std_cartitem-intro">
          <p className="std_cartitem-intro-content">{ intro }</p>
          <button className="std_cartitem-intro-check" onClick={()=>setIntroOpen(false)}>
            隱藏
            <UpIcon className="std_cartitem-arrow-icon" />
          </button>
        </div>
      )
    }
  }

  return (
      <div className="std_cartitem-wrapper">
        <NotifModal title={"移除 顧問：" + clt.name} content={"確定要將這位顧問從清單中移除嗎？"} hidden={itemHidden} setHidden={setItemHidden} mode={"deleteSingleListItem"} clt={ clt } />
        <div className="std_cartitem-col1">
          <img src={img_path} className="std_cartitem-img" alt='consultant headshot'></img>
          <p className="std_cartitem-name">{clt.surname+clt.name}</p>
        </div>
        <div className="std_cartitem-col2">
          <CoinIcon className="std_cartitem-coin-icon" />
          <SchoolIcon className="std_cartitem-school-icon" />
        </div>
        <div className="std_cartitem-col3">
          <div className="std_cartitem-fee">
            <span className="std_cartitem-number">
              {clt.price}<span className="std_cartitem-unit"> /半小時</span>
            </span>
          </div>
          <div className="std_cartitem-edu-hashtag">
            <p>{clt.school}</p>
            <p>{clt.major}</p>
            <p>{clt.year}</p>
          </div>
        </div>
        <div className="std_cartitem-col4">
          <ExpIcon className="std_cartitem-exp-icon"/>
          <HashtagIcon className="std_cartitem-hashtag-icon"/>
        </div>
        <div className="std_cartitem-col5">
          <div className="std_cartitem-exp">
            <span className="std_cartitem-number">
              {clt.count}<span className="std_cartitem-unit"> 次</span>
            </span>
          </div>
          <div className="std_cartitem-edu-hashtag">
            {Hashtag}
          </div>
        </div>
        <p className="std_cartitem-intro-title">個人簡介</p>
        { intro_component(clt.intro) }
        <div className="std_cartitem-button-group">
          <div className="std_cartitem-level">
            {
              !(clt.star) ? 
              <>
                <p></p>
              </> : 
              <>
                <Star className="std_cartitem-level-star" />
                <p>{level_int}</p><span className="std_cartitem-level-float">.{level_fl}</span>
              </>
            }
          </div>
          <button className="std_cartitem-delete-button" onClick={()=>setItemHidden(!itemHidden)}>
            <DeleteIcon className="std_cartitem-delete-icon"/>
            <p>移除</p>
          </button>
          <button className="std_cartitem-info-button">
            <InfoIcon className="std_cartitem-info-icon"/>
            <Link to={`/student-preview/${clt.id}`}><p>求詳細</p></Link>
          </button>
          <button className="std_cartitem-appmt-button" onClick={handleBooking} >立即預約</button>
        </div>
      </div>
  )
}

export default CartItem;