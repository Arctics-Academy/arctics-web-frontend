import './exception.css'
import { ReactComponent as Background } from './img/not-found-background.svg'
import { Link, useHistory } from 'react-router-dom'
import MetaTags from 'react-meta-tags'

const NotFoundException = () => {
    const history = useHistory()
    const goToLastPage = () => history.goBack()
    return (
        <div className='exp_not-found-main'>
            <MetaTags>
                <title>找不到此頁面 | Arctics</title>
            </MetaTags>
            <Background alt='背景圖片' className='exp_not-found-background' />
            <div>
                <h1 className='exp_not-found-heading'>404</h1>
            </div>
            <div>
                <p className='exp_not-found-text'>糟糕！找不到你想要找的頁面...</p>
                <button className='exp_not-found-back-button' onClick={goToLastPage}>回上一頁</button>
                <Link to='/'><button className='exp_not-found-main-page-button'>回首頁</button></Link>
            </div>
        </div>
    )
}

export default NotFoundException