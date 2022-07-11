// Import ...
import { useContext, useState } from "react"
import { useParams, useHistory } from "react-router-dom"
import { ParamContext } from "../../ContextReducer"

// Import Modules
import UserApis from "../../Axios/userAxios"

// Import Sub-components
import ActionButton from "../../GlobalComponents/Components/ActionButton"

// Stylesheet
import "../password-reset.css"


// Main Component
const PasswordResetStage1 = () => {
	// Router
  const Context = useContext(ParamContext)
	const History = useHistory()
	const Params = useParams()
	// State
	const [loading, setLoading] = useState(false)
	const [emailExistError, setEmailExistError] = useState(false)

	const handleSubmit = async (event) => {
    event.preventDefault()

    setLoading(true)
    
    let payload = { identity: Params.identity, email: event.target.email.value }
    let { status, code } = await UserApis.getResetPasswordEmailOtp(payload)

    if (status === "success") {
      Context.setInfo({ type: "passwordResetEmail", payload: { passwordResetEmail: event.target.email.value }})
      setLoading(false)
      History.push(`/password-reset-2/${Params.identity}`)
    }
    else if (status === "failed") {
      if (code === 0) {
        setLoading(false)
        setEmailExistError(true)
      }
      else {
        History.push("/login")
      }
    }
    else {
      History.push("/login")
    }
	}
	
	return (
		<div className="password-reset__outside-wrapper">
      <div className="password-reset__inside-wrapper">
        <div className="password-reset__title">忘記密碼</div>
        <div className="password-reset__text">請在以下表單填入您的電子郵件地址。我們將會傳送一組驗證碼到您的信箱驗證您的身份。身份驗證成功後，您將可重新設定密碼。</div>
        <form className="password-reset__form-wrapper" onSubmit={handleSubmit}>
          {(!emailExistError ? 
            <>
              <input className="password-reset__input" type="text" name="email" placeholder="電子郵件"/>
              <span className="password-reset__error password-reset__error-hidden"></span>
            </> :
            <>
              <input className="password-reset__input password-reset__input--error" type="text" name="email" placeholder="電子郵件"/>
              <span className="password-reset__error">帳戶不存在，請輸入正確的電子郵件。</span> 
            </>)}
          <div className="password-reset__button-wrapper">
            <ActionButton label="驗證身份" type="submit" loading={loading} />
          </div>
        </form>
      </div>
		</div>
	)
}


// Export
export default PasswordResetStage1