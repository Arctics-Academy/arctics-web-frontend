import { useState, useContext } from "react"
import { useForm } from "react-hook-form"
import { Link, useParams, useHistory } from "react-router-dom"
import './register.css'
import IcebergImage from './img/Iceberg.png'
import { ReactComponent as GoogleIcon} from './img/google-brands.svg'
import { ReactComponent as FacebookIcon } from './img/facebook-brands.svg'
import Loading from '../Login/img/loading48.gif'
import { submitConsultantRegistrationData } from "../axios"
import { sendEmailOTP } from "../axios"
import { ParamContext } from "../ContextReducer"
import { wrapLoginData } from "../DataProcessUtils"

import MetaTags from 'react-meta-tags'


const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { identity } = useParams()
    const [loading, setLoading] = useState(false)
    const context = useContext(ParamContext)
    const history = useHistory()
    const schoolList = ['國立臺灣大學']
    const NTUMajorArray = ['中國文學系', '外國語文學系', '歷史學系', '哲學系', '人類學系', '圖書資訊學系', '日本語文學系', '戲劇學系', '數學系', '物理學系', '化學系', '地質科學系', '心理學系', '地理環境資源學系', '大氣科學系', '政治學系', '經濟學系', '社會學系', '社會工作學系', '醫學系', '護理學系', '醫學檢驗暨生物技術學系', '物理治療學系', '職能治療學系', '藥學系', '土木工程學系', '機械工程學系', '化學工程學系', '工程科學及海洋工程學系', '材料科學與工程學系', '醫學工程學系', '農藝學系', '生物環境系統工程學系', '農業化學系', '森林環境暨資源學系', '動物科學技術學系', '農業經濟學系', '園藝暨景觀學系', '生物產業傳播暨發展學系', '生物機電工程學系', '昆蟲學系', '植物病理與微生物學系', '獸醫學系', '工商管理學系', '會計學系', '財務金融學系', '國際企業學系', '資訊管理學系', '公共衛生學系', '電機工程學系', '資訊工程學系', '法律學系', '生命科學系', '生化科技學系' ]
    const registerOnSubmit = async (payload) => {
        if (identity === 'consultant') {
            setLoading(true)
            const { status, data } = await submitConsultantRegistrationData(payload);
            console.log(status, data)
            await context.setInfo({
                type: 'register',
                payload: wrapLoginData(data, 'consultant'),
            })
            context.setLogin(true)
            const otpRequest = await sendEmailOTP({id:data.id})
            console.log(otpRequest.status, otpRequest.msg)
            setLoading(false)
            history.push('/register-email-otp')
        } else {
            setLoading(false)
            console.log('std')
        }
    }

    const displayOptions = (ops) => {
        return ops.map((op) => (
            <option value={op}>{op}</option>
        ))
    }

    const emailValidatePattern = {
        value: /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/,
        message: "請輸入正確的Email格式"
    }
    const phoneValidatePattern = {
        value: /^[0-9]{10,10}$/,
        message: "請輸入正確的電話號碼格式,勿輸入非數字字元"
    }
    const passwordValidatePattern = {
        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,150}$/,
        message: "正確的密碼格式須包含至少1大寫英文字母,1小寫英文字母,1數字,1特殊字元,長度至少為8"
    }

    const submitButtonContent = () => {
        if (loading) {
            return (
                <img className="register-loading" src={Loading} />
            )
        } else return '註冊'
    }

    return (
        <div className="register-main">
            <MetaTags>
                <title>註冊 | Arctics</title>
            </MetaTags>
            <form className="register-content-box" onSubmit={handleSubmit(registerOnSubmit)}>
                <div className="register-image-block">
                    <img className="register-image" src={IcebergImage} />
                </div>
                <div className="register-form">
                    <div className="register-name">
                        <div className="register-firstname">
                            <input className="register-firstname-inputbox" placeholder="姓" {...register('surname', {required: true})} />
                            {errors.name && <span className="register-error-message" id='name'>請填入名字!</span>}
                        </div>
                        <div className="register-lastname">
                            <input className="register-lastname-inputbox" placeholder="名" {...register('name', {required: true})} />
                            {errors.surname && <span className="register-error-message" id='surname'>請填入姓氏!</span>}
                        </div>    
                    </div>
                    <div className="register-institution">
                        <div className="register-school">
                            <select className="register-school-inputbox" placeholder="就讀學校" {...register('school', {required: true})}>
                                <option selected disabled >請選擇就讀學校</option>
                                {displayOptions(schoolList)}
                            </select>
                            {errors.school && <span className="register-error-message" id='school'>請填入就讀學校!</span>}
                        </div>
                        <div className="register-grade">
                            <select className="register-grade-inputbox" placeholder="年級" {...register('year', {required: true})}>
                                <option selected disabled >請選擇年級</option>
                                <option value={'一年級'} >一年級</option>
                                <option value={'二年級'} >二年級</option>
                                <option value={'三年級'} >三年級</option>
                                <option value={'四年級'} >四年級</option>
                                <option value={'四年級以上'} >四年級以上</option>
                            </select>
                            {errors.year && <span className="register-error-message" id='grade'>請填入年級!</span>}
                        </div>    
                    </div>
                    <div className="register-email">
                        <input className="register-email-inputbox" placeholder="電子郵件" {...register('email', {required: '請填入Email!', pattern: emailValidatePattern})}/>
                        {errors.email?.message && <span className="register-error-message" id='email'>{errors.email.message}</span>}
                    </div>
                    <div className="register-phone">
                        <input className="register-phone-inputbox" placeholder="手機號碼 輸入範例: 0912345678" {...register('mobile', {required: '請填入手機號碼!', pattern: phoneValidatePattern})} />
                        {errors.mobile?.message && <span className="register-error-message" id='phone'>{errors.mobile.message}</span>}
                    </div>
                    <div className="register-password">
                        <input type='password' className="register-password-inputbox" placeholder="密碼" {...register('password', {required: '請填入密碼!', pattern: passwordValidatePattern})} />
                        {errors.password?.message && <span className="register-error-message" id='pwd'>{errors.password.message}</span>}
                    </div>
                    <div className="register-submit">
                        <button type='submit' className="register-submit-button">{submitButtonContent()}</button>
                        <p className="register-to-login">已經有帳號了嗎, 點選<Link to='/login'><span className="register-login-link">登入</span></Link></p>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Register

/* Removed temporarily */
/*
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
*/