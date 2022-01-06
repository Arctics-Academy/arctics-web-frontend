import React from 'react';
import '../style.css';
import '../responsive.css';
import logo from '../img/nav-arctics-logo.png';

export default function Nav() {

	const handleScrollTop = (evt)=>document.querySelector('#top').scrollIntoView({ behavior: 'smooth' });
	const handleScrollAbout = (evt)=>document.querySelector('#about-us').scrollIntoView({ behavior: 'smooth' });
	const handleScrollFunction = (evt)=>document.querySelector('#function').scrollIntoView({ behavior: 'smooth' });
	const handleScrollMembers = (evt)=>document.querySelector('#members').scrollIntoView({ behavior: 'smooth' });
	const handleScrollContact = (evt)=>document.querySelector('#contact-us').scrollIntoView({ behavior: 'smooth' });

    return(
        <nav className="rwd-hide">
		    <img className="nav__logo" src={logo} alt="arctics" width="224px" height="41px"></img>
		    <div className="nav__right">
			    <ul className="nav__menu">
				    <li className="nav__menu-item"><a href="#top" onClick={handleScrollTop}>首頁</a></li>
				    <li className="nav__menu-item"><a href="#about-us" onClick={handleScrollAbout}>關於我們</a></li>
				    <li className="nav__menu-item"><a href="#function" onClick={handleScrollFunction}>產品功能</a></li>
				    <li className="nav__menu-item"><a href="#members" onClick={handleScrollMembers}>團隊成員</a></li>
				    <li className="nav__menu-item" ><a href="#contact-us" onClick={handleScrollContact}>聯絡我們</a></li>
			    </ul>
		    </div>
	    </nav>
    );
}

//<button className="nav__action-button">註冊 / 登入</button> => temporarily removed