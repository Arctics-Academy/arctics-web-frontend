// Import ...
import { useHistory } from "react-router-dom"

// Import Sub-components
import ActionButton from "../../GlobalComponents/Components/ActionButton"

// Stylesheet
import '../password-reset.css'

// Main Component
const PasswordResetStage3 = () => {
  const History = useHistory()

  const handleNavToLogin = () => {
    History.push('/login')
  }

  return (
    <div className="password-reset__outside-wrapper">
      <div className="password-reset__inside-wrapper">
        <div className="password-reset__title">重設成功</div>
        <div className="password-reset__text">您的密碼已修改成功，請使用新密碼重新登入系統。點選按鈕以前往登入頁面。</div>
        <div className="password-reset__button-wrapper">
          <ActionButton label="前往登入" callback={handleNavToLogin} />
        </div>
      </div>
    </div>
  )
}

// Export
export default PasswordResetStage3