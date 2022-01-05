import React from 'react';
import '../style.css';
import '../responsive.css';

export default function AboutUs () {
    return (
        <section id="about-us">
            <h2 className="about-us__heading">
                關於
                <br className="rwd-hide"></br>
                <span className="about-us__heading-indent">我們</span>
            </h2>
			<p className="about-us__text">求學是一段過程，有些人有明確的目標，有些人霧裡看花，不清楚自己的方向是什麼。無論是何種情況，尋求過來人的幫助是最有效的方法。在資訊爆炸的時代，最令人心安的資訊來源莫過於找到一個有經驗的學長姐。Arctics致力於建造國高中生與有經驗的大學生之間的橋樑，讓經驗與心得可以傳承與有需要的學子。</p>
        </section>
    );
}