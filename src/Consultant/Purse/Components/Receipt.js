import { useState, useContext, useEffect } from 'react'
import '../clt_purse.css'
import { getSortedList } from './sortUtils'
import { ParamContext } from '../../../ContextReducer'

const Receipt = () => {
    const context = useContext(ParamContext)
    /*
    const [sortTarget, setSortTarget] = useState('id')
    const [receipt, setReceipt] = useState(getSortedList(sortTarget, context.Info.receipts))
    useEffect(() => {
        setReceipt(getSortedList(sortTarget, context.Info.receipts))
    }, [context.Info.receipts])

    const handleOnclickId = () => {
        console.debug(receipt, context.Info.receipts)
        if (sortTarget === 'id') setSortTarget('id-r')           
        else setSortTarget('id')
        setReceipt(getSortedList(sortTarget, receipt))
    }

    const handleOnclickAmount = () => {
        if (sortTarget === 'amount') setSortTarget('amount-r')
        else setSortTarget('amount')
        setReceipt(getSortedList(sortTarget, receipt))
    }

    const handleOnclickPayTime = () => {
        if (sortTarget === 'paytime') setSortTarget('paytime-r')
        else setSortTarget('paytime')
        setReceipt(getSortedList(sortTarget, receipt))
    }

    const handleOnclickConsulTime = () => {
        if (sortTarget === 'consultime') setSortTarget('consultime-r')
        else setSortTarget('consultime')
        setReceipt(getSortedList(sortTarget, receipt))
    }

    const handleOnclickPayStatus = () => {
        if (sortTarget === 'paystatus') setSortTarget('paystatus-r')
        else setSortTarget('paystatus')
        setReceipt(getSortedList(sortTarget, receipt))
    }*/

    const DisplayMoney = ({title, amount}) => {
        return (
            <>
                <span className='clt_purse-money-display-title'>{title}</span>
                <span className='clt_purse-money-display-amount'>{amount}</span>
                <span className='clt_purse-money-display-unit'>元</span>
            </>
        )
    }

    /*
    const displayHeader = () => {
        return (
            <>
                <span className='clt_purse-list-header-id' onClick={handleOnclickId}>訂單編號↓</span>
                <span className='clt_purse-list-header-student'>學生姓名</span>
                <span className='clt_purse-list-header-amount' onClick={handleOnclickAmount}>金額↓</span>
                <span className='clt_purse-list-header-pay-time' onClick={handleOnclickPayTime}>付款時間↓</span>
                <span className='clt_purse-list-header-consul-time' onClick={handleOnclickConsulTime}>諮詢時間↓</span>
                <span className='clt_purse-list-header-pay-status' onClick={handleOnclickPayStatus}>提領狀態↓</span>
            </>
        )
    }
    */

    const displayHeader = () => {
        return (
            <>
                <span className='clt_purse-list-header-timestamp'>付款時間</span>
                <span className='clt_purse-list-header-content'>付款項目</span>
                <span className='clt_purse-list-header-amount'>交易金額</span>
                <span className='clt_purse-list-header-balance'>帳戶餘額</span>
            </>
        )
    }

    const displayList = (data) => {
        if (data[0] !== undefined) {
            return (
                data.map((e) => {
                    return (
                        <div className='clt_purse-list-item'>
                            <span className='clt_purse-list-item-timestamp'>{e.timestamp.toLocaleString()}</span>
                            <span className='clt_purse-list-item-content'>{e.content}</span>
                            <span className='clt_purse-list-item-amount'>新台幣 {e.amount} 元</span>
                            <span className='clt_purse-list-item-balance'>新台幣 {e.balance} 元</span>
                        </div>
                    )
                })
            )
        } else {
            return (
                <p className='clt_purse-list-empty-msg'>目前尚無任何明細!</p>
            )
        }
    }
    
    return (
        <div className='clt_purse-receipt-body'>
            <div className='clt_purse-display-amount'>
                <div className='clt_purse-receipt-display-available'>
                    <DisplayMoney title={'可提領金額'} amount={context.Info.purse.balance} />
                </div>
                <div className='clt_purse-receipt-display-unwithdrawed'>
                    <DisplayMoney title={'已提領'} amount={context.Info.purse.withdrawn} />
                </div>
            </div>
            <div className='clt_purse-sep-line' />
            <div className='clt_purse-list'>
                <div className='clt_purse-list-header'>
                    {displayHeader()}
                </div>
                <div className='clt_purse-list-body'>
                    {displayList(context.Info.purse.transactions)}
                </div>
            </div>
        </div>
    )
}

export default Receipt