import React from 'react';
import '../style.css';
import '../responsive.css';
import img0 from '../img/tim.png';
import img1 from '../img/christine.png';
import img2 from '../img/alex.png';
import img3 from '../img/sean.png';
import img4 from '../img/avery.png';
import img5 from '../img/samuel.png';
import img6 from '../img/amanda.png';

const members = [
    {
        id: 0, name: 'Tim',
        chName: '周致廷',
        image: img0,
        altText: 'image of Tim',
        position: '共同創辦人'
    },
    {
        id: 1, name: 'Christine',
        chName: '李韋蓁',
        image: img1,
        altText: 'image of Christine',
        position: '共同創辦人'
    },
    {
        id: 2, name: 'Alex',
        chName: '吳軒丞',
        image: img2,
        altText: 'image of Alex',
        position: '共同創辦人'
    },
    {
        id: 3, name: 'Sean',
        chName: '羅邦齊',
        image: img3,
        altText: 'image of Sean',
        position: '技術長'
    },
    {
        id: 4, name: 'Avery',
        chName: '許雅宣',
        image: img4,
        altText: 'image of Avery',
        position: '前端工程師'
    },
    {
        id: 5, name: 'Samuel',
        chName: '王秉聖',
        image: img5,
        altText: 'image of Samuel',
        position: '前端工程師'
    },
    {
        id: 6, name: 'Amanda',
        chName: '梁芮瑄',
        image: img6,
        altText: 'image of Amanda',
        position: 'UI/UX設計師'
    }
];

const memberFirst = members.filter( e => e.id < 3);
const memberSecond = members.filter( e => e.id > 2);

export default function Members () {
    return (
        <section id="members">
            <h2 className="members__heading">團隊<br className="rwd-hide"></br><span className="members__heading-indent">成員</span></h2>
            <div className="members__first rwd-hide">
                {memberFirst.map( e=>{
                    if (e.id %2===0) { return(
                        <div className="members__box" key={e.id}>
                            <img className="members__photo" src={e.image} alt={e.altText}></img>
                            <h3 className="members__name">{e.chName}<br></br>{e.name}</h3><p className="members__position">{e.position}</p>
                        </div>
                    );}
                    else { return(
                        <div className="members__box members__flex_end" key={e.id}>
                            <img className="members__photo" src={e.image} alt={e.altText}></img>
                            <h3 className="members__name">{e.chName}<br></br>{e.name}</h3><p className="members__position">{e.position}</p>
                        </div>
                    );}
                })}
            </div>
            <div className="members__second rwd-hide">
                {memberSecond.map( e=>{
                    if (e.id %2===0) { return(
                        <div className="members__box" key={e.id}>
                            <img className="members__photo" src={e.image} alt={e.altText}></img>
                            <h3 className="members__name">{e.chName}<br></br>{e.name}</h3><p className="members__position">{e.position}</p>
                        </div>
                    );}
                    else { return(
                        <div className="members__box members__flex_end" key={e.id}>
                            <img className="members__photo" src={e.image} alt={e.altText}></img>
                            <h3 className="members__name">{e.chName}<br></br>{e.name}</h3><p className="members__position">{e.position}</p>
                        </div>
                    );}
                })}
            </div>
            <div className="r-members rwd-show">
                {members.map( e=>{
                    if (e.id===0 || e.id===2 || e.id===3 || e.id===5) { return(
                        <div className="r-members__box" key={e.id+7}>
                            <img className="members__photo" src={e.image} alt={e.altText}></img>
                            <h3 className="members__name">{e.chName}<br></br>{e.name}</h3><p className="members__position">{e.position}</p>
                        </div>
                    );}
                    else { return(
                        <div className="r-members__box members__flex_end" key={e.id+7}>
                            <img className="members__photo" src={e.image} alt={e.altText}></img>
                            <h3 className="members__name">{e.chName}<br></br>{e.name}</h3><p className="members__position">{e.position}</p>
                        </div>
                    );}
                })}
            </div>
        </section>
    );
}