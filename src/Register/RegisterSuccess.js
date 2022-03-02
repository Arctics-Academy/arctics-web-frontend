import './register.css'
import IcelandImg from './img/Iceland.png'
import IcelandBearImg from './img/IcelandBear.png'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ParamContext } from '../ContextReducer'

const RegisterSuccess = () => {
    const context = useContext(ParamContext)
    return (
        <div className='reg-success-main'>
            <img className='reg-success-iceland' src={IcelandImg} />
            <img className='reg-success-icelandbear' src={IcelandBearImg} />
            <div className='reg-success-message'>
                <p className='reg-success-text'>註冊成功</p>
                <p className='reg-success-welcome'>歡迎你成為Arctics的一員!</p>
                <button className='reg-success-btn'><Link to={`/${context.Info.identity}-home`} >進到使用者頁面</Link></button>
            </div>
        </div>
    )
}

export default RegisterSuccess