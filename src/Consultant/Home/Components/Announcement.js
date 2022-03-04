import announcementIcon from '../img/announcement\ icon.png'
import announcementBkg from '../img/announcementBkg.png'
import '../clt_home.css' 

const Announcement = () => {
    return (
        <div className="clt_home-ancmt">
            <div className="clt_home-ancmt-title">
                <img className='clt_home-ancmt-title-icon' src={announcementIcon}/>
                <span className='clt_home-ancmt-title-content'>最新公告</span>
            </div>
            <div className='clt_home-ancmt-banner'>
                <p className='clt_home-ancmt-banner-title'>顧問問卷調查</p>
                <a className='clt_home-ancmt-banner-link'>立即前往</a>
                <img className='clt_home-ancmt-banner-bkg' src={announcementBkg} />
            </div>
        </div>
    )
}

export default Announcement