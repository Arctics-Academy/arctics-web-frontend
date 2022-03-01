import { useState } from "react"
import './register.css'
import IcebergImage from './img/Iceberg.png'
import { ReactComponent as GoogleIcon} from './img/google-brands.svg'
import { ReactComponent as FacebookIcon } from './img/facebook-brands.svg'


const Register = () => {
    const [name, setName] = useState('')
    const [school, setSchool] = useState('')
    const [grade, setGrade] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className="register-main">
            <div className="register-content-box">
                <div className="register-image-block">
                    <img className="register-image" src={IcebergImage} />
                </div>
                <div className="register-form">
                    <div className="register-name">
                        <input className="register-name-inputbox" value={name} onChange={evt=>{setName(evt.target.value)}} placeholder="姓名" required />
                    </div>
                    <div className="register-institution">
                        <input className="register-school-inputbox" value={school} onChange={evt=>{setSchool(evt.target.value)}} placeholder="就讀學校" required />
                        <input className="register-grade-inputbox" value={grade} onChange={evt=>{setGrade(evt.target.value)}} placeholder="年級" required />
                    </div>
                    <div className="register-email">
                        <input className="register-email-inputbox" value={email} onChange={evt=>{setEmail(evt.target.value)}} placeholder="電子郵件" required />
                    </div>
                    <div className="register-phone">
                        <input className="register-phone-inputbox" value={phone} onChange={evt=>{setPhone(evt.target.value)}} placeholder="手機號碼" required />
                    </div>
                    <div className="register-password">
                        <input type='password' className="register-password-inputbox" minLength={8} value={password} onChange={evt=>{setPassword(evt.target.value)}} placeholder="密碼" required />
                    </div>
                    <div className="register-submit">
                        <button className="register-submit-button">註冊</button>
                        <p className="register-to-login">已經有帳號了嗎, 點選<span className="register-login-link">登入</span></p>
                    </div>
                    <div className="register-other">
                        <div className="register-other-header">
                            <div className="register-other-header-line" />
                            <span className="register-other-header-text">使用其他帳號登入</span>
                            <div className="register-other-header-line" />
                        </div>
                        <div className="register-google">
                            <div className="register-google-button">
                                <GoogleIcon className="register-google-icon" />
                                <p className="register-google-text">用Google帳號登入</p>
                            </div>
                        </div>
                        <div className="register-facebook">
                            <div className="register-facebook-button">
                                <FacebookIcon className="register-facebook-icon" />
                                <p className="register-facebook-text">用Facebook帳號登入</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register