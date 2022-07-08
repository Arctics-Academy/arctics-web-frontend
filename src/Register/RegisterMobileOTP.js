import { useState, useContext, useEffect, useRef } from 'react'
import './register.css'
import { useHistory, useParams } from 'react-router-dom'
import { sendMobileOTP, verifyMobileOTP } from '../Axios/consulAxios'
import studentApis from '../Axios/studentAxios'
import { ParamContext } from '../ContextReducer'
import Loading from '../Login/img/loading48.gif'

import MetaTags from 'react-meta-tags'

import ActionButton from '../GlobalComponents/Components/ActionButton'

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

const RegisterMobileOTP = () => {
    const [inputCount, setInputCount] = useState(0)
    const [vcode, setVcode] = useState({1: ' ', 2: ' ', 3: ' ', 4: ' ', 5: ' ', 6: ' '})
    const [displayErrMsg, setDisplayErrMsg] = useState(true)
    const [timerLeft, setTimerLeft] = useState(180)
    const [counting, setCounting] = useState(true)
    const [loading, setLoading] = useState(false)
    const { identity } = useParams()
    const context = useContext(ParamContext)
    const history = useHistory()
    const inputBox = useRef(null)

    const clearVcode = () => {  
        setInputCount(0)
        setVcode({1: ' ', 2: ' ', 3: ' ', 4: ' ', 5: ' ', 6: ' '}) 
    }
    
    const displayTimer = () => {
        let sec = timerLeft%60
        let min = Math.floor(timerLeft/60)
        let secDisplay = (sec>=10)? `${sec}`:`0${sec}`
        return `${min}:${secDisplay}`
    }

    const handleKeyboardOnkeydown = (event) => {
        handleOnClickFocus()
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

    const handleOnClickFocus = (event) => {
        inputBox.current.focus();
    }

    const handleSubmitOTP = async () => {
        console.log('loading',  loading)
        const payload = wrapCode(vcode, context.Info.id)
        setLoading(true)
        console.log('loading',  loading)
        let res;
        if (identity === 'consultant') {
            res = await verifyMobileOTP(payload)
        } else {
            res = await studentApis.verifyMobileOTP(payload)
        }
        setLoading(false)
        if (res.status === 'failed') {
            setDisplayErrMsg(false)
            clearVcode()
        } else {
            console.log(res.msg)
            history.push('/register-success')
        }
    }

    const handleResendOTP = async () => {
        setCounting(true)
        let res;
        if (identity === 'consultant') {
            res = await sendMobileOTP({id:context.Info.id})
        } else {
            res = await studentApis.sendMobileOTP({id:context.Info.id})
        }
        console.log(res.status, res.msg)
        clearVcode()
    }

    const displayResendTimer = () => {
        return (
            <>
                <p className='reg-validate-resend-request-text'>沒有收到驗證碼嗎?按
                    <span className='reg-validate-resend-request-link' style={counting? {opacity:'0.3'}:{}} onClick={counting? ()=>{return}:handleResendOTP}>此鍵</span>
                    再重新發送一次!
                </p>
                <p className='reg-validate-resend-request-text' hidden={!counting}>再等待 {displayTimer()} 可再次發送驗證碼</p>
            </>
        )
    }

    useEffect(() => {
        if (counting) {
            if (timerLeft === 0) {
                setTimerLeft(10)
                setCounting(false)
            } else {
                window.setTimeout(() => {
                    setTimerLeft(timerLeft-1);
                }, 1000)
            }
        }
    }, [timerLeft, counting])

    return (
        <div className='reg-validate-main' tabIndex={0} onKeyDown={handleKeyboardOnkeydown}>
            <MetaTags>
                <title>驗證手機號碼 | Arctics</title>
            </MetaTags>
            <div className='reg-validate-body'>
                <div className='reg-validate-message'>
                    <p className='reg-validate-text'>我們會寄出一組驗證碼到你的手機</p>
                    <p className='reg-validate-text'>請在下方輸入</p>
                </div>
                <div className='reg-validate-codes'>
                    <ShowValidCode input={vcode} />
                </div>
                <p className='reg-validate-err-msg' hidden={displayErrMsg}>驗證碼錯誤!</p>
                <div className='reg-validate-submit'>
                    {/* <button className='reg-validate-submit-button' onClick={handleSubmitOTP}>
                        {loading? (<img className='register-email-otp-loading' src={Loading} />):'送出'}
                    </button> */}
                    <ActionButton label="送出/驗證" loading={loading} callback={handleSubmitOTP} />
                </div>
                <div className='reg-validate-resend-request'>
                    {displayResendTimer()}
                </div>
            </div>
            <input ref={inputBox} style={{opacity:'0'}} onKeyDown={handleKeyboardOnkeydown} autoFocus />
        </div>
    )
}

export default RegisterMobileOTP