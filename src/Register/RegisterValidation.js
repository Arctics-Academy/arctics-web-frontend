import { useState } from 'react'
import './register.css'

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

const RegisterValidation = () => {
    const [inputCount, setInputCount] = useState(0)
    const [vcode, setVcode] = useState({1: ' ', 2: ' ', 3: ' ', 4: ' ', 5: ' ', 6: ' '})

    const handleKeyboardOnkeydown = (event) => {
        if (inputCount === 6 && event.keyCode != 8) return
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

    return (
        <div className='reg-validate-main' tabIndex={0} onKeyDown={handleKeyboardOnkeydown}>
            <div className='reg-validate-body'>
                <div className='reg-validate-message'>
                    <p className='reg-validate-text'>我們會寄出一組驗證碼到你的手機</p>
                    <p className='reg-validate-text'>請在下方輸入</p>
                </div>
                <div className='reg-validate-codes'>
                    <ShowValidCode input={vcode} />
                </div>
                <div className='reg-validate-submit'>
                    <button className='reg-validate-submit-button'>送出</button>
                </div>
                <div className='reg-validate-resend-request'>
                    <p className='reg-validate-resend-request-text'>沒有收到驗證碼嗎?按<span className='reg-validate-resend-request-link'>此鍵</span>再重新發送一次!</p>
                </div>
            </div>
            <input style={{opacity:'0'}} onKeyDown={handleKeyboardOnkeydown} autoFocus />
        </div>
    )
}

export default RegisterValidation