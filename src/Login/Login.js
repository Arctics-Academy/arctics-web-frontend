import { useState } from "react"
import './login.css'
import { ReactComponent as Lock } from './img/lock.svg'

const Login = () => {
    const [account, setAccount] = useState('')
    const [password, setPassword] = useState('')
    const [displayWrongAct, setDisplayWrongAct] = useState(false)
    const [displayWrongPwd, setDisplayWrongPwd] = useState(false)

    return (
        <div className="login_main">
            <div className="login_form">
                <div className="login_title">
                    <Lock className="login_lock_icon"/>
                </div>
                <div className="login_input">
                    <div className="login_account">
                        <input className="login_account_inputbox" value={account} onChange={evt=>{setAccount(evt.target.value)}} placeholder="手機 / 電子郵件" />
                        <p className="login_account_warn">{displayWrongAct? '手機 / 電子郵件錯誤, 請重新輸入':' '}</p>
                    </div>
                    <div className="login_password">
                        <input type="password" minLength={8} className="login_password_inputbox" vlaue={password} onChange={evt=>{setPassword(evt.target.value)}} placeholder="密碼" />
                        <p className="login_password_warn">{displayWrongPwd? '密碼錯誤, 請重新輸入':' '}</p>
                    </div>
                    <div className="login_submit">
                        <button className="login_submit_btn">登入</button>
                    </div>
                    <p className="login_to_register">還沒有帳號嗎, 點選<span className="login_register_link">註冊</span></p>
                </div>
            </div>
        </div>
    )
}

export default Login