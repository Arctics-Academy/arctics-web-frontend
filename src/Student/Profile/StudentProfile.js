import "./std_profile.css"
import { useContext } from "react"
import { ParamContext } from "../../ContextReducer"
import bearStudent from "../../Register/img/bearStudent.png"

const StudentProfile = () => {
  const context = useContext(ParamContext)
  return (
    <div className="std-profile-main">
      <div className="std-profile-title">
        <div className="std-profile-title-text">
          個人檔案
        </div>
        <div className="std-profile-underline" />
      </div>
      <div className="std-profile-content">
        <div className="std-profile-body">
          <div className="std-profile-name">
            <span className="std-profile-name-text">{context.Info.profile.surname}{context.Info.profile.name}</span>
          </div>
          <div className="std-profile-exp">
            <span className="std-profile-content-title">已諮詢</span>
            <span className="std-profile-exp-count">{context.Info.profile.experiences} 次</span>
          </div>
          <div className="std-profile-sep-line" />
          <div className="std-profile-item">
            <span className="std-profile-content-title">就讀學校</span>
            <span className="std-profile-value">{context.Info.profile.school}</span>
          </div>
          <div className="std-profile-item">
            <span className="std-profile-content-title">就讀年級</span>
            <span className="std-profile-value">{context.Info.profile.year}</span>
          </div>
          <div className="std-profile-item">
            <span className="std-profile-content-title">電子信箱</span>
            <span className="std-profile-value">{context.Info.profile.email}</span>
          </div>
          <div className="std-profile-item">
            <span className="std-profile-content-title">手機號碼</span>
            <span className="std-profile-value">{context.Info.profile.mobile}</span>
          </div>
        </div>
        <div className="std-profile-image-block">
          <img src={bearStudent} />
        </div>
      </div>
    </div>
  )
}

export default StudentProfile