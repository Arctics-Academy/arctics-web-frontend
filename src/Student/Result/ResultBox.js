import "../CartList/std_cartlist.css";
import { useState } from "react";
import { ReactComponent as CoinIcon } from '../CartList/img/coin.svg';
import { ReactComponent as SchoolIcon } from '../CartList/img/school.svg';
import { ReactComponent as ExpIcon } from '../CartList/img/exp.svg';
import { ReactComponent as HashtagIcon } from '../CartList/img/hashtag.svg';
import { ReactComponent as UpIcon } from '../CartList/img/arrow_up.svg';
import { ReactComponent as DownIcon } from '../CartList/img/arrow_down.svg';
import { ReactComponent as Star } from '../CartList/img/star.svg';
import { ReactComponent as DeleteIcon } from '../CartList/img/delete.svg';
import { ReactComponent as InfoIcon } from '../CartList/img/info.svg';
import img_path from '../CartList/img/defaultAvt.png';
import NotifModal from "../CartList/Components/NotifModal";
import studentApis from "../../Axios/studentAxios";
import { useHistory, Link } from "react-router-dom";

const ResultBox = ( {clt, setContext, context } ) => {
  const [itemHidden, setItemHidden] = useState(true);
  const [introOpen, setIntroOpen] = useState(false);
  const history = useHistory()

  const handleBooking = () => {
    console.log(context)
    setContext({
      type: 'selectBooking',
      payload: {
        id: clt.id,
        name: clt.name,
        school: clt.education.school,
        major: clt.education.major,
        price: clt.fee
      }
    })
    history.push('/student-booking-1')
  } 

  let hashtag_converted = clt.hashtags;
  if (clt.hashtags.length<3){
    for(let i=clt.hashtags.length; i<3; i++){
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

  const intro_component = ( intro )=>{
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

  const checkApi = async () => {
    const { status, data, message } = await studentApis.getConsultantProfilePreview({consultantId: 'TR00000002'})
    console.log(status, data)
  }

  return (
      <div className="std_cartitem-wrapper">
        <NotifModal title={"在清單中新增顧問：" + clt.name} content={"確定要將這位顧問新增到好奇清單嗎？"} hidden={itemHidden} setHidden={setItemHidden} mode={"addToList"} clt={ clt } />
        <div className="std_cartitem-col1">
          <img src={clt.img? clt.img:img_path} className="std_cartitem-img"></img>
          <p className="std_cartitem-name">{clt.name}</p>
        </div>
        <div className="std_cartitem-col2">
          <CoinIcon className="std_cartitem-coin-icon" />
          <SchoolIcon className="std_cartitem-school-icon" />
        </div>
        <div className="std_cartitem-col3">
          <div className="std_cartitem-fee">
            <span className="std_cartitem-number">
              {clt.fee}<span className="std_cartitem-unit"> /半小時</span>
            </span>
          </div>
          <div className="std_cartitem-edu-hashtag">
            <p>{clt.education.school}</p>
            <p>{clt.education.major}</p>
            <p>{clt.education.year}</p>
          </div>
        </div>
        <div className="std_cartitem-col4">
          <ExpIcon className="std_cartitem-exp-icon"/>
          <HashtagIcon className="std_cartitem-hashtag-icon"/>
        </div>
        <div className="std_cartitem-col5">
          <div className="std_cartitem-exp">
            <span className="std_cartitem-number">
              {clt.exp}<span className="std_cartitem-unit"> 次</span>
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
            {clt.star ? 
              (<>
                <Star className="std_cartitem-level-star" />
                <p>{level_int}</p>
                <span className="std_cartitem-level-float">.{level_fl}</span>
              </>) :
              <p></p>
            }
          </div>
          <button className="std_cartitem-delete-button" onClick={()=>setItemHidden(!itemHidden)}>
            {/*<DeleteIcon className="std_cartitem-delete-icon"/>*/}
            <p>加入清單</p>
          </button>
          <button className="std_cartitem-info-button" onClick={checkApi}>
            <InfoIcon className="std_cartitem-info-icon"/>
            <Link to={`/student-preview/${clt.id}`}><p>求詳細</p></Link>
          </button>
          <button className="std_cartitem-appmt-button" onClick={handleBooking} >立即預約</button>
        </div>
      </div>
  )
}

export default ResultBox;