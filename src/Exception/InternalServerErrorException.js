import './exception.css'
import { ReactComponent as Background } from './img/internal-error-background.svg'
import { Link } from 'react-router-dom'
import MetaTags from 'react-meta-tags'

const NotFoundException = () => {
    return (
        <div className='exp_internal-error-main'>
            <MetaTags>
                <title>內部伺服器錯誤 | Arctics</title>
            </MetaTags>
            <Background className='exp_internal-error-background'/>
            <div>
                <h1 className='exp_internal-error-heading'>500</h1>
            </div>
            <div>
                <p className='exp_internal-error-text'>喔不！好像發生了些問題！這個時候你可以：</p>
                <ul className='exp_internal-error-list'>
                    <li className='exp_internal-error-list-item'>1 重新<a className='exp_internal-error-action'><Link to='/login'>登入</Link></a></li>
                    <li className='exp_internal-error-list-item'>2 重新載入頁面</li>
                    <li className='exp_internal-error-list-item'>3 回到<a className='exp_internal-error-link'><Link to='/'>首頁</Link></a></li>
                </ul>
                <p className='exp_internal-error-text'>如果您持續遇到問題，麻煩您<a className='exp_internal-error-link'>寫信回報</a>給我們。我們會盡快處理！</p>
            </div>
        </div>
    )
}

export default NotFoundException