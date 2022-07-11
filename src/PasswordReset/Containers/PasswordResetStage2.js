// Import ...
import { useState, useContext } from "react"
import { useParams, useHistory } from "react-router-dom"
import { ParamContext } from "../../ContextReducer"

// Import Modules
import UserApi from "../../Axios/userAxios"

// Import Sub-components
import ActionButton from "../../GlobalComponents/Components/ActionButton"

// Stylesheet
import '../password-reset.css'


// Main Component
const PasswordResetStage2 = () => {
  const History = useHistory()
  const Params = useParams()
  const Context = useContext(ParamContext)

  const [loading, setLoading] = useState(false)
  const [otpNotMatchError, setOtpNotMatchError] = useState(false)
  const [passwordNotMatchError, setPasswordNotMatchError] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()

    setLoading(true)

    if (event.target["password"].value !== event.target["password-confirm"].value) {
      setPasswordNotMatchError(true)
      setLoading(false)
      return
    }
    else {
      setPasswordNotMatchError(false)
    }

    try {
      let payload = { 
        identity: Params.identity, 
        email: Context.Info.passwordResetEmail, 
        code: event.target["code"].value, 
        password: event.target["password"].value 
      }
      console.log('matchResetPasswordEmailOtp', payload)
      let { status, code } = await UserApi.matchResetPasswordEmailOtp(payload)
      if (status === 'success') {
        setOtpNotMatchError(false)
        setLoading(false)
        History.push('/password-reset-3')
      }
      else {
        if (code === 1) {
          setLoading(false)
          setOtpNotMatchError(true)
        }
        else {
          History.push('/login')
        }
      }
    }
    catch (e) {
      console.debug('PasswordResetStage2', e)
      History.push('/login')
    }
  }

  return (
    <div className="password-reset__outside-wrapper">
      <div className="password-reset__inside-wrapper">
        <div className="password-reset__title">重設密碼</div>
        <div className="password-reset__text">請完成以下表單以重設密碼。</div>
        <form className="password-reset__form" onSubmit={handleSubmit}>
          {(otpNotMatchError ? 
            <>
              <input className="password-reset__input password-reset__input--error" type="text" name="code" placeholder="驗證碼"/>
              <span className="password-reset__error">電子郵件驗證碼錯誤，請重新輸入。</span>
            </> :
            <>
              <input className="password-reset__input" type="text" name="code" placeholder="驗證碼"/>
              <span className="password-reset__error password-reset__error-hidden"></span>
            </>
          )}

          {(passwordNotMatchError ? 
            <>
              <input className="password-reset__input password-reset__input--error" type="password" name="password" placeholder="重新輸入新密碼"/>
              <span className="password-reset__error">密碼不相符，請輸入相同密碼。</span>

            </> :
            <>
              <input className="password-reset__input" type="password" name="password" placeholder="重新輸入新密碼"/>
              <span className="password-reset__error password-reset__error-hidden"></span>
            </>
          )}

          {(passwordNotMatchError ? 
            <>
              <input className="password-reset__input password-reset__input--error" type="password" name="password-confirm" placeholder="重新輸入新密碼"/>
              <span className="password-reset__error">密碼不相符，請輸入相同密碼。</span>

            </> :
            <>
              <input className="password-reset__input" type="password" name="password-confirm" placeholder="重新輸入新密碼"/>
              <span className="password-reset__error password-reset__error-hidden"></span>
            </>
          )}

          <div className="password-reset__button-wrapper">
            <ActionButton type="submit" label="重設密碼" loading={loading}/>
          </div>
        </form>
      </div>
    </div>
  )
}


// Export
export default PasswordResetStage2