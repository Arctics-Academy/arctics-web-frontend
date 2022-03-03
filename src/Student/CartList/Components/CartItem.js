import "../std_cartlist.css"
import { ReactComponent as CoinIcon } from '../img/coin.svg'
import { ReactComponent as SchoolIcon } from '../img/school.svg'
import { ReactComponent as ExpIcon } from '../img/exp.svg'
import { ReactComponent as HashtagIcon } from '../img/hashtag.svg'
import { ReactComponent as ArrowIcon } from '../img/right_arrow.svg'
import { ReactComponent as Star } from '../img/star.svg'
import { ReactComponent as DeleteIcon } from '../img/delete.svg'
import { ReactComponent as InfoIcon } from '../img/info.svg'
import img_path from '../img/tmp_avatar.png';


const CartItem = ({name=""}) => {
  return (
      <div className="std_cartitem-wrapper">
        <div className="std_cartitem-col1">
          <img src={img_path} className="std_cartitem-img"></img>
          <p className="std_cartitem-name">{name}</p>
        </div>
        <div className="std_cartitem-col2">
          <CoinIcon className="std_cartitem-coin-icon" />
          <SchoolIcon className="std_cartitem-school-icon" />
        </div>
        <div className="std_cartitem-col3">
          <div className="std_cartitem-fee">
            <span className="std_cartitem-number">
              200<span className="std_cartitem-unit"> /半小時</span>
            </span>
          </div>
          <div className="std_cartitem-edu-hashtag">
            <p>國立臺灣大學</p>
            <p>機械學系</p>
            <p>二年級</p>
          </div>
        </div>
        <div className="std_cartitem-col4">
          <ExpIcon className="std_cartitem-exp-icon"/>
          <HashtagIcon className="std_cartitem-hashtag-icon"/>
        </div>
        <div className="std_cartitem-col5">
          <div className="std_cartitem-exp">
            <span className="std_cartitem-number">
              15<span className="std_cartitem-unit"> 次</span>
            </span>
          </div>
          <div className="std_cartitem-edu-hashtag">
            <p>學習歷程檔案</p>
            <p>筆試準備</p>
            <p>社團</p>
          </div>
        </div>
        <p className="std_cartitem-intro-title">個人簡介</p>
        <div className="std_cartitem-intro">
          <p className="std_cartitem-intro-content">我也不知道可以寫什麼，大概請他們寫一些
諮詢風格、諮詢經歷、教學理念、簡述自己的升學歷程之類的吧......嗎？</p>
          <span className="std_cartitem-intro-check">
            查看完整簡介
            <ArrowIcon className="std_cartitem-arrow-icon" />
          </span>
        </div>
        <div className="std_cartitem-button-group">
          <div className="std_cartitem-level">
            <Star className="std_cartitem-level-star" />
            <p>4</p>
            <span className="std_cartitem-level-float">.8</span>
          </div>
          <button className="std_cartitem-delete-button">
            <DeleteIcon className="std_cartitem-delete-icon"/>
            <p>移除</p>
          </button>
          <button className="std_cartitem-info-button">
            <InfoIcon className="std_cartitem-info-icon"/>
            <p>求詳細</p>
          </button>
          <button className="std_cartitem-appmt-button">立即預約</button>
        </div>
      </div>
  )
}

export default CartItem;