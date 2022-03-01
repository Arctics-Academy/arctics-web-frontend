import { useState, useContext } from 'react'
import './register.css'
import { useHistory } from 'react-router-dom'
import { sendEmailOTP, verifyEmailOTP, sendMobileOTP } from '../axios'
import { ParamContext } from '../ContextReducer'

const ShowValidCode = ({ input }) => {
    return (
        <>
            <div className='vcode-left'><p className='vcode-number'>{input[1]}</p></div>
            <div className='vcode-left'><p className='vcode-number'>{input[2]}</p></div>
            <div className='vcode-left'><p className='vcode-number'>{input[3]}</p></div>
            <div className='vcode-right'><p className='vcode-number'>{input[4]}</p></div>
            <div className='vcode-right'><p className='vcode-number'>{input[5]}</p></div>
            <div className='vcode-right'><p className='vcode-number'>{input[6]}</p></div>
        </>        
    )
}

const wrapCode = (codearr, id) => {
    let code = codearr[1]+codearr[2]+codearr[3]+codearr[4]+codearr[5]+codearr[6]
    let data = {
        code, id
    }
    return data
}

const RegisterEmailOTP = () => {
    const [inputCount, setInputCount] = useState(0)
    const [vcode, setVcode] = useState({1: ' ', 2: ' ', 3: ' ', 4: ' ', 5: ' ', 6: ' '})
    const context = useContext(ParamContext)
    const history = useHistory()

    const clearVcode = () => { setVcode({1: ' ', 2: ' ', 3: ' ', 4: ' ', 5: ' ', 6: ' '}) }

    const handleKeyboardOnkeydown = (event) => {
        if (inputCount === 6 && event.keyCode !== 8) return
        if (event.keyCode >= 48 && event.keyCode <= 57 ) {
            let tempVcode = {...vcode}
            tempVcode[inputCount+1] = event.key
            setInputCount(inputCount+1)
            setVcode(tempVcode)
        } else if (event.keyCode === 8) {
            if (inputCount === 0) return
            let tempVcode = {...vcode}
            tempVcode[inputCount] = ' '
            setInputCount(inputCount-1)
            setVcode(tempVcode)
        } else return
    }

    const handleSubmitOTP = async () => {
        const payload = wrapCode(vcode, context.Info.id)
        const { status, msg } = await verifyEmailOTP(payload)
        if (status === 'fail') {
            clearVcode()
        } else {
            console.log(msg)
            const otpRequest = await sendMobileOTP({id:context.Info.id});
            console.log(otpRequest.status, otpRequest.msg)
            history.push('/register-mobile-otp')
        }
    }

    const handleResendOTP = async () => {
        const { status, msg } = await sendEmailOTP({id:context.Info.id})
        clearVcode()
    }

    return (
        <div className='reg-validate-main' tabIndex={0} onKeyDown={handleKeyboardOnkeydown}>
            <div className='reg-validate-body'>
                <div className='reg-validate-message'>
                    <p className='reg-validate-text'>我們會寄出一組驗證碼到你的Email</p>
                    <p className='reg-validate-text'>請在下方輸入</p>
                </div>
                <div className='reg-validate-codes'>
                    <ShowValidCode input={vcode} />
                </div>
                <div className='reg-validate-submit'>
                    <button className='reg-validate-submit-button' onClick={handleSubmitOTP} >送出並驗證手機</button>
                </div>
                <div className='reg-validate-resend-request'>
                    <p className='reg-validate-resend-request-text'>沒有收到驗證碼嗎?按<span className='reg-validate-resend-request-link' onClick={handleResendOTP}>此鍵</span>再重新發送一次!</p>
                </div>
            </div>
            <input style={{opacity:'0'}} onKeyDown={handleKeyboardOnkeydown} autoFocus />
        </div>
    )
}

export default RegisterEmailOTP