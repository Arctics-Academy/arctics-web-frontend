import React from 'react';
import '../style.css';
import '../responsive.css';
import image1 from '../img/function-one.png';
import image2 from '../img/function-two.png';
import image3 from '../img/function-three.png';

export default function Function () {
    return (
        <section id="function">
            <h2 className="function__heading">產品功能</h2>
            <div className="function__flexbox">
                <div className="function__one">
					<h3 className="function__one-heading"><span className="function__one-number">01<br></br></span>尋找<span className="function__highlight">夢想學校<br className="rwd-hide"></br>科系</span>的學長姐</h3>
					<p className="function__one-description">透過Arctics篩選機制 (大學科系、高中經歷等)  快速找到歷程相似的學長姐</p>
					<img className="function__one-sc" src={image1} alt="圖片：在網站中搜尋"></img>
				</div>
                <div className="function__two">
				    <h3 className="function__two-heading"><span className="function__two-number">02<br></br></span>預約<span className="function__highlight">一對一</span><br className="rwd-hide"></br>大學申請指導</h3>
				    <p className="function__two-description">透過線上大學申請輔導<br className="rwd-hide"></br><span className="rwd-show">  </span>在任何地點都可諮詢就讀於名校的Arctics導師</p>
				    <img className="function__two-sc" src={image2} alt="圖片：預約"></img>
			    </div>
                <div className="function__three">
					<h3 className="function__three-heading"><span className="function__three-number">03<br></br></span>申請後<br className="rwd-hide"></br>給予<span className="function__highlight">評價</span></h3>
					<p className="function__three-description">給予優質Arctics導師評分<br className="rwd-hide"></br><span className="rwd-show">  </span>幫助下一屆學弟妹尋找有效的經驗分享</p>
					<img className="function__three-sc" src={image3} alt="評價"></img>
				</div>
            </div>
        </section>
    );
}