import React from 'react';
import '../style.css';
import '../responsive.css';
import imgFB from '../img/footer-fb-icon.png';
import imgIns from '../img/footer-insta-icon.png';
import imgEmail from '../img/footer-email-icon.png'


export default function Foot () {
    return (
        <footer>
            <p className="footer footer__left">Copyright &copy; 2021 Arctics 平台</p>
		    <p className="footer footer__mid rwd-hide">Made with 💙 in Taiwan</p>
		    <ul className="footer footer__right rwd-hide">
			    <li className="footer__link-item"><img src={imgFB} alt="facbook link" height="24px"></img></li>
			    <li className="footer__link-item"><img src={imgIns} alt="instagram link" height="24px"></img></li>
			    <li className="footer__link-item"><a href="MAILTO:artics.academy666@gmail.com" target="_blank" rel="noreferrer noopener"><img src={imgEmail} alt="email link" height="24px" width="24px"></img></a></li>
		    </ul>
        </footer>
    );
}