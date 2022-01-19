import React, { useContext } from 'react';
import './style.css';
import './responsive.css';
import logo from './img/nav-arctics-logo.png';
import { ParamContext } from '../ContextReducer';

export default function NavMobile () {
	const context = useContext(ParamContext)

	const handleOnClick = (e)=>{ document.getElementById("checkbox").checked = false;}
	if (!context.isLogin) {
    	return (
    	    <nav className="r-nav rwd-show">
		  		<img className="r-nav__logo" src={logo} alt="arctics" height="41px"></img>
		    	<div className="r-nav__hamburger">
					<input id="checkbox" type="checkbox"></input>
					<span className="r-nav__meat"></span>
					<span className="r-nav__meat"></span>
					<span className="r-nav__meat"></span>
					<ul className="r-nav__menu rwd-show">
						<li className="r-nav__menu-item"><a href="#top" onClick={handleOnClick}>首頁</a></li>
						<li className="r-nav__menu-item"><a href="#about-us" onClick={handleOnClick}>關於我們</a></li>
						<li className="r-nav__menu-item"><a href="#function" onClick={handleOnClick}>產品功能</a></li>
						<li className="r-nav__menu-item"><a href="#members" onClick={handleOnClick}>團隊成員</a></li>
						<li className="r-nav__menu-item" ><a href="#contact-us" onClick={handleOnClick}>聯絡我們</a></li>
					</ul>
				</div>
	    	</nav>
    	);
	} else {
		if (context.Info.identity === 'consultant') {
			return (
				<nav className="r-nav rwd-show">
					  <img className="r-nav__logo" src={logo} alt="arctics" height="41px"></img>
					<div className="r-nav__hamburger">
						<input id="checkbox" type="checkbox"></input>
						<span className="r-nav__meat"></span>
						<span className="r-nav__meat"></span>
						<span className="r-nav__meat"></span>
						<ul className="r-nav__menu rwd-show">
							<li className="r-nav__menu-item"><a onClick={handleOnClick}>首頁</a></li>
							<li className="r-nav__menu-item"><a onClick={handleOnClick}>通知</a></li>
							<li className="r-nav__menu-item"><a onClick={handleOnClick}>我的諮詢</a></li>
							<li className="r-nav__menu-item"><a onClick={handleOnClick}>我的錢包</a></li>
							<li className="r-nav__menu-item" ><a onClick={handleOnClick}>小幫手</a></li>
						</ul>
					</div>
				</nav>
			);
		}
	}
}

// <li><button className="r-nav__action-button" onClick={handleOnClick}>註冊 / 登入</button></li> => temporarily removed