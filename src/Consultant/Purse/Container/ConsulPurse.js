import { useParams, useHistory } from 'react-router-dom'
import '../clt_purse.css'
import Receipt from '../Components/Receipt'

const onClickStyle = {
    color: '#f5f5f5',
    backgroundColor: '#c0ac49'
}

const unClickStyle = {
    color: '#c0ac49',
    backgroundColor: '#f5f5f5'
}

const ConsulPurse = () => {
    const { mode } = useParams()
    const history = useHistory()
    
    const jumpToReceipt = () => {history.push('/consultant-purse/receipt')}
    const jumpToWithdraw = () => {history.push('/consultant-purse/withdraw')}

    const modeBtns = () => {
        if (mode === 'receipt') {
            return (
                <>
                    <button className='clt_purse-mode-btn' onClick={jumpToReceipt} style={onClickStyle}>明細</button>
                    <button className='clt_purse-mode-btn' onClick={jumpToWithdraw} style={unClickStyle}>提領</button>
                </>
            )
        } else {
            return (
                <>
                    <button className='clt_purse-mode-btn' onClick={jumpToReceipt} style={unClickStyle}>明細</button> 
                    <button className='clt_purse-mode-btn' onClick={jumpToWithdraw} style={onClickStyle}>提領</button>
                </>
            )
        }
    }

    const displayContent = () => {
        if (mode === 'receipt') {
            return <Receipt />
        } else {
            return
        }
    }

    return (
        <div className='clt_purse-main'>
            <div className='clt_purse-title'>
                <span className='clt_purse-title-text'>我的錢包</span>
                <div className='clt_purse-title-underline' />
            </div>
            <div className='clt_purse-mode-bottons'>
                {modeBtns()}
            </div>
            <div className='clt_purse-content'>
                {displayContent()}
            </div>
        </div>
    )
}

export default ConsulPurse