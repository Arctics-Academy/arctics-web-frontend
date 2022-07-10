import { useState, useContext } from "react"
import './login.css'
import { ReactComponent as Lock } from './img/lock.svg'
import { Link, useHistory } from "react-router-dom"
import { submitConsultantLoginData } from "../Axios/consulAxios"
import studentApis from "../Axios/studentAxios"
import Loading from './img/loading48.gif'
import { ParamContext } from "../ContextReducer"
import { wrapLoginData } from "../DataProcessUtils"

import MetaTags from 'react-meta-tags'

import ActionButton from "../GlobalComponents/Components/ActionButton"

const Login = () => {
    const [account, setAccount] = useState('')
    const [password, setPassword] = useState('')
    const [state, setState] = useState('consultant')
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
            let res;
            if (state === 'consultant') res = await submitConsultantLoginData(payload);
            else res = await studentApis.studentLogin(payload);
            setLoading(false)
            if (res.status === 'failed') {
                setDisplayWrongAct(true)
                setDisplayWrongPwd(true)
            } else {
                console.debug(res.status, res.data)
                setAccount('')
                setPassword('')
                context.setInfo({
                    type: 'login',
                    payload: wrapLoginData(res.data, getIdentity(res.data.id))
                })
                context.setLogin(true)
                history.push(`/${getIdentity(res.data.id)}-home`)
            }
        } catch (err) {
            console.debug(err)
            setLoading(false)
            setDisplayWrongAct(true)
            setDisplayWrongPwd(true)
        }
    }

    const handleChangeMode = (e) => {
        if (e.target.id === 'tc') setState('consultant')
        else setState('student')
    }

    return (
        <div className="login_main">
            <MetaTags>
                <title>登入 | Arctics</title>
            </MetaTags>
            <div className="login_wrapper">
                <div className="login_mode">
                    <div className="login_mode_tc">
                        <label htmlFor="tc" className="login_tc">
                            <input className="login_mode_radio" id='tc' type='radio' name='login' onChange={handleChangeMode} defaultChecked/>
                            <span className="login_tc_text">顧問登入</span>
                        </label>
                    </div>
                    <div className="login_mode_st">
                        
                        <label htmlFor="st" className="login_st">
                            <input className="login_mode_radio" id='st' type='radio' name='login' onChange={handleChangeMode}/>
                            <span className="login_st_text">學生登入</span>
                        </label>
                    </div>
                </div>
                <div className="login_form">
                    <div className="login_title">
                        <Lock className="login_lock_icon"/>
                    </div>
                    <div className="login_input">
                        <div className="login_account">
                            <input className="login_account_inputbox" value={account} onChange={evt=>{setAccount(evt.target.value)}} placeholder="電子郵件" autoComplete="username"/>
                            <p className="login_account_warn">{displayWrongAct? '電子郵件錯誤, 請重新輸入':' '}</p>
                        </div>
                        <div className="login_password">
                            <input type="password" minLength={8} className="login_password_inputbox" value={password} onChange={evt=>{setPassword(evt.target.value)}} placeholder="密碼" autoComplete="password" />
                            <p className="login_password_warn">{displayWrongPwd? '密碼錯誤, 請重新輸入':' '}</p>
                        </div>
                        <div className="login_submit">
                            <ActionButton label="登入" loading={loading} callback={handleLogin} />
                        </div>
                        <p className="login_to_register">還沒有帳號嗎？ <Link to='/register-identity'><span className="login_register_link">點我註冊</span></Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login