import { useState, useContext } from "react"
import './login.css'
import { ReactComponent as Lock } from './img/lock.svg'
import { Link, useHistory } from "react-router-dom"
import { submitConsultantLoginData } from "../axios"
import Loading from './img/loading48.gif'
import { ParamContext } from "../ContextReducer"
import { wrapLoginData } from "../DataProcessUtils"

import MetaTags from 'react-meta-tags'

const Login = () => {
    const [account, setAccount] = useState('')
    const [password, setPassword] = useState('')
    const [displayWrongAct, setDisplayWrongAct] = useState(false)
    const [displayWrongPwd, setDisplayWrongPwd] = useState(false)
    const [loading, setLoading] = useState(false)
    const history = useHistory()
    const context = useContext(ParamContext)

    const getIdentity = (id) => {
        if (id.substring(0,2) === 'TR') {
            return 'consultant'
        } else {
            return 'student'
        }
    }

    const handleLogin = async () => {
        //handle empty output
        setLoading(true)
        const payload = {
            email: account,
            password
        }
        try {
            const { status, data } = await submitConsultantLoginData(payload);
            setLoading(false)
            if (status === 'failed') {
                setDisplayWrongAct(true)
                setDisplayWrongPwd(true)
            } else {
                console.log(status, data)
                setAccount('')
                setPassword('')
                context.setInfo({
                    type: 'login',
                    payload: wrapLoginData(data, getIdentity(data.id))
                })
                context.setLogin(true)
                history.push(`/${getIdentity(data.id)}-home`)
            }
        } catch (err) {
            console.log(err)
            setLoading(false)
            setDisplayWrongAct(true)
            setDisplayWrongPwd(true)
        }
    }

    return (
        <div className="login_main">
            <MetaTags>
                <title>登入 | Arctics</title>
            </MetaTags>
            <div className="login_form">
                <div className="login_title">
                    <Lock className="login_lock_icon"/>
                </div>
                <div className="login_input">
                    <div className="login_account">
                        <input className="login_account_inputbox" value={account} onChange={evt=>{setAccount(evt.target.value)}} placeholder="電子郵件" />
                        <p className="login_account_warn">{displayWrongAct? '電子郵件錯誤, 請重新輸入':' '}</p>
                    </div>
                    <div className="login_password">
                        <input type="password" minLength={8} className="login_password_inputbox" vlaue={password} onChange={evt=>{setPassword(evt.target.value)}} placeholder="密碼" />
                        <p className="login_password_warn">{displayWrongPwd? '密碼錯誤, 請重新輸入':' '}</p>
                    </div>
                    <div className="login_submit">
                        <button className="login_submit_btn" onClick={handleLogin}>{loading? (<img className="login-loading" src={Loading}/>):'登入'}</button>
                    </div>
                    <p className="login_to_register">還沒有帳號嗎, 點選<Link to='/register-identity'><span className="login_register_link">註冊</span></Link></p>
                </div>
            </div>
        </div>
    )
}

export default Login