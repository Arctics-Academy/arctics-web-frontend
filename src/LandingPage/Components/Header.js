import React, {useState} from 'react';
import '../style.css';
import '../responsive.css'
import LogoImg from '../img/header-arctics-logo.png';
import { submitSubscriber } from '../../Axios/consulAxios';
//import { successSubscribe, invalidSubmission } from './modal/subscribeModal';

export default function Header () {

    const [email, setEmail] = useState("");
    const [confirmText, setConfirmText] = useState("通知我")
    const [popVis, setPopVis] = useState(false)
    const blankValue = (value)=>{
        if (value==="") return true;
        else return false;
    }

    const popText = (vis) => {
        if (vis) {
            return (
                <p className="popText" style={{marginLeft:'150px', color:'red'}}>請輸入正確email地址！</p>
            )
        }
    }

    const validateInput = (input) => {
        const valid = /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/.test(input);
        if (valid) return true
        else return false
    }

    const handleButton = async () => {
        if (blankValue(email)) {
            setConfirmText("輸入格式不符！")
            setPopVis(true)
            setTimeout(()=> {
                setConfirmText("通知我")
                setPopVis(false)
            }, 750)
        } else{    
            if (validateInput(email)) {
                const {status, msg} = await submitSubscriber(email)
                console.debug(status, msg)
                setConfirmText("已送出！")
                setTimeout(()=>{setConfirmText("通知我")}, 750)
            } else {
                setConfirmText("輸入格式不符！")
                setPopVis(true)
                setTimeout(()=> {
                    setConfirmText("通知我")
                    setPopVis(false)
                }, 750)
            }
        }   
        setEmail('');
    }

    return (
        <header id="top">
            <p className="header__slogan">
                <span className="rwd-hide">「 </span>
                陪您找尋
                <br></br>
                <span className="header__slogan-break">
                    進入
                    <span className="header__highlight">理想校系</span>
                    的最佳辦法
                <span className="rwd-hide"> 」</span>
                </span>
                {/*
                
                大學生的
                <span className="header__highlight">30分鐘</span>
                <br></br>
                <span className="header__slogan-break">
                    改變高中生的
                    <span className="header__highlight">30年人生</span>
                    
                </span>*/}
            </p>
		    <img className="header__logo" src={LogoImg} alt="arctics"></img>
		    <h1>升大學顧問媒合平台</h1>
		    <p className="header__subtitle">
                一個APP與上百名來自不同科系、
                <br className="rwd-show"></br>
                不同高中生涯的大學生視訊對談！
            </p>
		    <div className="header__form">
			    <a href="#function" id="header__function-button" className="header__function-button">查看平台功能</a>
			    <br className="rwd-show"></br>
			    <input className="header__email-box" id="email-input" placeholder="留下您的Email獲取最新消息" value={email} onChange={e=>setEmail(e.target.value.trim())} style={{borderColor: "red", border: "2px"}}></input>
			    <button className="header__email-button" id="email-button" onClick={handleButton}>{confirmText}</button>
		    </div>
            {popText(popVis)}
        </header>
    );
}