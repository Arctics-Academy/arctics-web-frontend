import { useState } from 'react'
import '../clt_purse.css'
import { getSortedList } from './sortUtils'

const testReceipt = [
    {id: 123451, student: 'Alexar', amount: 900, paytime: '2022/01/05', consultime: '2022/01/09', paystatus: '已提領'}, 
    {id: 123456, student: 'Alexa', amount: 500, paytime: '2022/02/05', consultime: '2022/02/09', paystatus: '未提領'},
    {id: 123411, student: 'Alexon', amount: 1500, paytime: '2022/12/05', consultime: '2022/12/09', paystatus: '未付款'},
    {id: 123421, student: 'Alexy', amount: 150, paytime: '2022/12/11', consultime: '2022/12/19', paystatus: '已提領'},
    {id: 123441, student: 'Alexara', amount: 250, paytime: '2022/02/05', consultime: '2022/02/10', paystatus: '已提領'},
    {id: 123431, student: 'Alexary', amount: 500, paytime: '2022/02/01', consultime: '2022/02/06', paystatus: '未付款'},
    {id: 123401, student: 'Alexaron', amount: 1500, paytime: '2022/02/01', consultime: '2022/02/11', paystatus: '未提領'}
]


const Receipt = () => {

    const [sortTarget, setSortTarget] = useState('id')
    const [receipt, setReceipt] = useState(getSortedList(sortTarget, testReceipt))

    const handleOnclickId = () => {
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
    }

    const DisplayMoney = ({title, amount}) => {
        return (
            <>
                <span className='clt_purse-money-display-title'>{title}</span>
                <span className='clt_purse-money-display-amount'>{amount}</span>
                <span className='clt_purse-money-display-unit'>元</span>
            </>
        )
    }

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

    const displayList = (data) => {
        return (
            data.map((e) => {
                return (
                    <div className='clt_purse-list-item'>
                        <span className='clt_purse-list-item-id'>{e.id}</span>
                        <span className='clt_purse-list-item-student'>{e.student}</span>
                        <span className='clt_purse-list-item-amount'>{e.amount}</span>
                        <span className='clt_purse-list-item-pay-time'>{e.paytime}</span>
                        <span className='clt_purse-list-item-consul-time'>{e.consultime}</span>
                        <span className='clt_purse-list-item-pay-status'>{e.paystatus}</span>
                    </div>
                )
            })
        )
    }
    
    return (
        <div className='clt_purse-receipt-body'>
            <div className='clt_purse-display-amount'>
                <div className='clt_purse-receipt-display-available'>
                    <DisplayMoney title={'可提領金額'} amount={1000} />
                </div>
                <div className='clt_purse-receipt-display-unwithdrawed'>
                    <DisplayMoney title={'已提領'} amount={1000} />
                </div>
            </div>
            <div className='clt_purse-sep-line' />
            <div className='clt_purse-list'>
                <div className='clt_purse-list-header'>
                    {displayHeader()}
                </div>
                <div className='clt_purse-list-body'>
                    {displayList(receipt)}
                </div>
            </div>
        </div>
    )
}

export default Receipt