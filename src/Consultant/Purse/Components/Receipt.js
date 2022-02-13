import { useState } from 'react'
import '../clt_purse.css'

const testReceipt = [{id: 123456, student: 'Alexar', amount: 500, paytime: '2022/02/05', consultime: '2022/02/09', paystatus: '已付款'}, {id: 123456, student: 'Alexar', amount: 500, paytime: '2022/02/05', consultime: '2022/02/09', paystatus: '已付款'}]

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
            <span className='clt_purse-list-header-id'>訂單編號↓</span>
            <span className='clt_purse-list-header-student'>學生姓名</span>
            <span className='clt_purse-list-header-amount'>金額↓</span>
            <span className='clt_purse-list-header-pay-time'>付款時間↓</span>
            <span className='clt_purse-list-header-consul-time'>諮詢時間↓</span>
            <span className='clt_purse-list-header-pay-status'>提領狀態↓</span>
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

const Receipt = () => {
    const [receipt, setReceipt] = useState(testReceipt)
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