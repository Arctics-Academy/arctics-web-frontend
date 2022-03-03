import { useContext } from "react"
import { useForm } from "react-hook-form"
import { Link, useParams, useHistory } from "react-router-dom"
import './register.css'
import IcebergImage from './img/Iceberg.png'
import { ReactComponent as GoogleIcon} from './img/google-brands.svg'
import { ReactComponent as FacebookIcon } from './img/facebook-brands.svg'
import { submitConsultantRegistrationData } from "../axios"
import { sendEmailOTP } from "../axios"
import { ParamContext } from "../ContextReducer"


const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { identity } = useParams()
    const context = useContext(ParamContext)
    const history = useHistory()

    const registerOnSubmit = async (payload) => {
        if (identity === 'consultant') {
            const { status, data } = await submitConsultantRegistrationData(payload);
            console.log(status, data)
            payload['password'] = ''
            payload['identity'] = 'consultant'
            payload['id'] = data.id
            await context.setInfo({
                type: 'register',
                payload: payload,
            })
            context.setLogin(true)
            const otpRequest = await sendEmailOTP({id:data.id})
            console.log(otpRequest.status, otpRequest.msg)
            history.push('/register-email-otp')
        } else {
            console.log('std')
        }
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

    return (
        <div className="register-main">
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
                            <input className="register-school-inputbox" placeholder="就讀學校" {...register('school', {required: true})} />
                            {errors.school && <span className="register-error-message" id='school'>請填入就讀學校!</span>}
                        </div>
                        <div className="register-grade">
                            <input type='number' className="register-grade-inputbox" placeholder="年級" {...register('year', {required: true})} />
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
                        <button type='submit' className="register-submit-button">註冊</button>
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