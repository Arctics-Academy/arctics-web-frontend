import React, {useState} from 'react';
import { submitMessageForm } from '../axios';
import '../style.css';
import '../responsive.css';
//import { feedbackModal } from './modal/feedbackModal';

export default function ContactUs () {

	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [message, setMessage] = useState("");
	const [confirmText, setConfirmText] = useState("提交");

	const resetAllValue = ()=>{
		setName("");
		setPhone("");
		setMessage("");
	};

	const handleSubmit = async ()=>{
		const allValue = {
			name,
			phone,
			message
		};
		console.log(allValue);
		const {status, msg} = await submitMessageForm(allValue);
		console.log(status, msg)
		resetAllValue();
		//feedbackModal();
		setConfirmText("成功送出！")
		setTimeout(()=>{setConfirmText("提交")}, 1000)
	}
    return(
        <section id="contact-us">
            <h2 className="contact-us__heading">聯絡我們</h2>
		    <p className="contact-us__text rwd-show">如果您對我們的產品有興趣，或是想提供您寶貴的意見，我們都非常樂意與您討論。請在左方留下您的大名與電話，以讓我們的行銷團隊聯絡您！</p>
		    <div className="contact-us__content">				
			    <div className="contact-us__form">
				    <input className="contact-us__input contact-us__name-box" placeholder="姓名" value={name} onChange={e=>setName(e.target.value)}></input>
				    <input className="contact-us__input contact-us__no-box" placeholder="聯絡電話" value={phone} onChange={e=>setPhone(e.target.value)}></input>
				    <textarea className="contact-us__input contact-us__message-box" placeholder="您的訊息" value={message} onChange={e=>setMessage(e.target.value)}></textarea>
				    <button className="contact-us__submit-button" id="submit-button" onClick={handleSubmit}>{confirmText}</button>
			    </div>
			    <p className="contact-us__text rwd-hide">如果您對我們的產品有興趣，或是想提供您寶貴的意見，我們都非常樂意與您討論。請在左方留下您的大名與電話，以讓我們的行銷團隊聯絡您！</p>
		    </div>
        </section>
    );
    
}