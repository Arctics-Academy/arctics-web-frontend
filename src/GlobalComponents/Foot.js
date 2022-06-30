import React from 'react';
import './style.css';
import './responsive.css';
import imgFB from './img/footer-fb-icon.png';
import imgIns from './img/footer-insta-icon.png';
import imgEmail from './img/footer-email-icon.png'


export default function Foot () {
    return (
        <footer>
            <p className="footer footer__left">版權所有 &copy; {(new Date).getFullYear()} Arctics升學顧問</p>
		    <p className="footer footer__mid rwd-hide">Made with 💙 in Taiwan</p>
		    <ul className="footer footer__right rwd-hide">
			    <li className="footer__link-item"><a href="https://www.facebook.com/Arctics%E5%8D%87%E5%A4%A7%E5%AD%B8%E9%A1%A7%E5%95%8F%E5%AA%92%E5%90%88%E5%B9%B3%E5%8F%B0-106026625341508/" target="_blank"><img src={imgFB} alt="facbook link" height="24px"></img></a></li>
			    <li className="footer__link-item"><a href="https://www.instagram.com/arctics.tw/" target="_blank"><img src={imgIns} alt="instagram link" height="24px"></img></a></li>
			    <li className="footer__link-item"><a href="MAILTO:arcticsteam.official@gmail.com" target="_blank" rel="noreferrer noopener"><img src={imgEmail} alt="email link" height="24px" width="24px"></img></a></li>
		    </ul>
        </footer>
    );
}