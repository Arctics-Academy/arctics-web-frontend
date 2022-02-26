import '../std_home.css' 
import { ReactComponent as AnnounceIcon } from '../img/announceicon.svg'

const Announcement = () => {
    return (
        <div className="std_home-ancmt">
            <div className="std_home-ancmt-title">
                <AnnounceIcon className='std_home-ancmt-title-icon' />
                <span className='std_home-ancmt-title-content'> 最新公告</span>
            </div>
            <div className='std_home-ancmt-banner'>
                <p className='std_home-ancmt-banner-title'>顧問問卷調查</p>
                <a className='std_home-ancmt-banner-link'>立即前往</a>
                {/*<img className='std_home-ancmt-banner-bkg' src={announcementBkg} />*/}
            </div>
        </div>
    )
}

export default Announcement