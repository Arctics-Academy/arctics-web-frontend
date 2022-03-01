import { Link } from 'react-router-dom'
import './register.css'
import BearStudent from './img/bearStudent.png'
import BearConsultant from './img/bearConsultant.png'

const RegisterIdentity = () => {
    return (
        <div className='register_identity-main'>
            <div className='register_identity-title'>
                <span className='register_identity-title-text'>請先選擇你的身份</span>
            </div>
            <div className='register_identity-choices'>
                <div className='register_identity-consultant'>
                    <p className='register_identity-consultant-title'>顧問</p>
                    <Link to='/register/consultant'><img className='register_identity-consultant-image' src={BearConsultant} /></Link>
                </div>
                <div className='register_identity-student'>
                    <p className='register_identity-student-title'>學生</p>
                    <Link to='/register/student'><img className='register_identity-student-image' src={BearStudent} /></Link>
                </div>
            </div>            
        </div>
    )
}

export default RegisterIdentity