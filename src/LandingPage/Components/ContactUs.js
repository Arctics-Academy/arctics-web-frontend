import React, {useState} from 'react';
import { submitMessageForm } from '../../axios';
import '../style.css';
import '../responsive.css';
//import { feedbackModal } from './modal/feedbackModal';

export default function ContactUs () {

	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [message, setMessage] = useState("");
	const [confirmText, setConfirmText] = useState("提交");
	const [errorState, setErrorState] = useState("")

	const resetAllValue = ()=>{
		setName("");
		setPhone("");
		setMessage("");
	};

	const popText = (errorcode) => { // state string
		let items = []
		if (include('1', errorcode)) items.push("姓名")
		if (include('2', errorcode)) items.push("聯絡電話")
		if (include('3', errorcode)) items.push("您的訊息")

		let errorString = "", index
		for (index in items) {
			// console.log(index, items.length-1, parseInt(index) !== parseInt(items.length-1))
			if (parseInt(index) !== parseInt(items.length-1)) errorString += items[index] + "、"
			else errorString += items[index]
		}
		errorString = `請填入${errorString}！`

		if (!errorcode) return <span></span>
		else if (errorcode === "0") return <span className="errorMessage" style={{color:'white', fontWeight: 'bold'}}>成功送出！</span>
		else return <span className="errorMessage" style={{color:'red', fontWeight: 'bold'}}>{errorString}</span>
	}

	const include = (flag, state) => {
		if (state.indexOf(flag) !== -1) return true
		else return false
	}

	const validateForm = (form) => {
		let state = ""

		if (!form.name) state += "1"
		if (!form.phone) state += "2"
		if (!form.message) state += "3"
		
		if (state === "") state = "0"

		return state
	}

	const handleSubmit = async ()=>{
		const allValue = {
			name,
			phone,
			message
		};
		// console.log(allValue);
		
		let formStatus = validateForm(allValue)
		if (formStatus === "0") { // Validate True
			const {status, msg} = await submitMessageForm(allValue)
			resetAllValue();
			// feedbackModal()
			// setConfirmText("成功送出！")
			setErrorState(formStatus)
			setTimeout(()=>{setConfirmText("提交"); setErrorState("")}, 2000)
		}
		else { // Validate Failed
			setErrorState(formStatus)
			setTimeout(()=>{setConfirmText("提交"); setErrorState("")}, 1000)
		}
	};

    return(
        <section id="contact-us">
            <h2 className="contact-us__heading">聯絡我們</h2>
		    <p className="contact-us__text rwd-show">如果您對我們的產品有興趣，或是想提供您寶貴的意見，我們都非常樂意與您討論。請在左方留下您的大名與電話，以讓我們的行銷團隊聯絡您！</p>
		    <div className="contact-us__content">				
			    <div className="contact-us__form">
				    <input className="contact-us__input contact-us__name-box" placeholder="姓名" value={name} onChange={e=>setName(e.target.value)}></input>
				    <input className="contact-us__input contact-us__no-box" placeholder="聯絡電話" value={phone} onChange={e=>setPhone(e.target.value)}></input>
				    <textarea className="contact-us__input contact-us__message-box" style={{resize: 'none'}} placeholder="您的訊息" value={message} onChange={e=>setMessage(e.target.value)}></textarea>
					{popText(errorState)}
				    <button className="contact-us__submit-button" id="submit-button" onClick={handleSubmit}>{confirmText}</button>
			    </div>
			    <p className="contact-us__text rwd-hide">如果您對我們的產品有興趣，或是想提供您寶貴的意見，我們都非常樂意與您討論。請在左方留下您的大名與電話，以讓我們的行銷團隊聯絡您！</p>
		    </div>
        </section>
    );
}