import React from 'react';
import '../style.css';
import '../responsive.css';
import image1 from '../img/function-one.png';
import image2 from '../img/function-two.png';
import image3 from '../img/function-three.png';

export default function Function () {
    return (
        <section id="function">
            <h2 className="function__heading">平台優勢</h2>
            <div className="function__flexbox">
                <div className="function__one">
					<h3 className="function__one-heading"><span className="function__one-number">01</span><br></br>與學長姐<br className="rwd-hide"></br>來場<span className="function__highlight">專屬對談</span></h3>
					<p className="function__one-description">與有相關成功經驗的學長姐進行專屬對談，破解<span className="function__highlight">學習歷程檔案、二階面試筆試、讀書計畫</span>等相關疑惑。</p>
					<img className="function__one-sc" src={image1} alt="圖片：在網站中搜尋"></img>
				</div>
                <div className="function__two">
				    <h3 className="function__two-heading"><span className="function__two-number">02</span><br></br>線上諮詢<br className="rwd-hide"></br> <span className="function__highlight">時間由您做主</span></h3>
				    <p className="function__two-description"><span className="function__highlight">為期半小時的一對一視訊討論</span>，可以配合個人時間，<span className="function__highlight">媒合同時段的顧問</span>供您自由選擇。</p>
				    <img className="function__two-sc" src={image2} alt="圖片：預約"></img>
			    </div>
                <div className="function__three">
					<h3 className="function__three-heading"><span className="function__three-number">03</span><br></br>顧問經驗<br className="rwd-hide"></br>與評分<span className="function__highlight">透明化</span></h3>
					<p className="function__three-description">瀏覽每一位學長姐的<span className="function__highlight">個人履歷、諮詢經驗值與個人評分與評論</span>，期待能幫助您找到最符合自身需求的諮詢顧問。</p>
					<img className="function__three-sc" src={image3} alt="圖片：評價"></img>
				</div>
            </div>
        </section>
    );
}