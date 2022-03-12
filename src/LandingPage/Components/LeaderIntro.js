import React from 'react'
import chouImg from '../img/tim.png'
import "../style.css"
import "../responsive.css"

export default function LeaderIntro () {
  return (
    <section id='members'>
      <h2 className="members__heading">團隊成員</h2>
      <div className='leader-intro'>
        <div className='leader-intro-bkg'>
          <div className='lit-upper'>
            <img src={chouImg} className='leader-intro-img' alt='Tim Chou (Arctics Academy Founder)'/>
            <div className='leader-intro-title'>
              <p className='lit-header'>共同創辦人</p>
              <p className='lit-info'>周致廷 Tim</p> 
              <p className='lit-info'>臺灣大學</p>
            </div>
          </div>
          <div className='leader-intro-content'>
            <p>
            我是Tim 周致廷，畢業於台南一中，曾就讀於日本早稻田大學，目前正就讀於臺灣大學。我們是由10個大學生所組成的團隊，分別來自臺灣大學、清華大學、香港科技大學以及倫敦帝國學院。高中時期的我們也曾經對未來感到迷茫，所以我們希望建立一個平台讓學弟妹們可以諮詢相關科系的學長姐，獲取第一手的科系資訊以及寶貴的升學經驗，期待看到學弟妹能夠更清楚自己的方向以及目標！
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}