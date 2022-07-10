// Icons
import AnnounceIcon from '../img/announceicon.svg'

// Stylesheet
import '../std_home.css'


const Announcement = () => {
  return (
    <div className="std_home-ancmt">
      <div className="std_home-ancmt-title">
        <img className='std_home-ancmt-title-icon' src={AnnounceIcon} alt=''/>
        <span className='std_home-ancmt-title-content'> 最新公告</span>
      </div>
      <div className='std_home-ancmt-banner'>
        <p className='std_home-ancmt-banner-title'>目前沒有任何公告</p>
      </div>
    </div>
  )
}

export default Announcement