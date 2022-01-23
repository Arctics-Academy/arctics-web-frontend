import moneySign from '../img/$.png'
import '../clt_home.css'

/* money for test -> context for formal version */
const money = 1000
const listForTest = [
    {
        date: '2021/09/10',
        name: 'Penguin',
        amount: 2000
    },
    {
        date: '2021/10/10',
        name: 'Seal',
        amount: 3000
    }
]

const listBody = (receipt) => {
    return (
        receipt.map((e) => (
            <li className='clt_home-purse-list-out'>
                <span className='clt_home-purse-list-out-date'>{e.date}</span>
                <span className='clt_home-purse-list-out-name'>{e.name}</span>
                <span className='clt_home-purse-list-out-amount'>{e.amount}</span>
                元
            </li>
        ))
    )
}

const MyPurse = () => {
    return (
        <div className='clt_home-purse'>
            <div className='clt_home-purse-title'>
                <img className='clt_home-purse-title-icon' src={moneySign} />
                <span className='clt_home-purse-title-text'>我的錢包</span>
            </div>
            <div className='clt_home-purse-list'>
                <div className='clt_home-purse-list-unwithdrawed'>
                    <p className='clt_home-purse-list-uwtext'>可提領金額</p>
                    <p className='clt_home-purse-list-amount'>
                        <span className='clt_home-purse-list-amount-num'>{money}</span>
                        元
                    </p>
                </div>
                <div className='clt_home-purse-list-sepline' />
                <div className='clt_home-purse-list-body'>
                    <ul className='clt_home-purse-list-body-ul'>
                        {listBody(listForTest)}
                    </ul>
                </div>
                <button className='clt_home-purse-show-receipt'>查看明細</button>
                <button className='clt_home-purse-goto-withdraw'>前往提領</button>
            </div>
        </div>
    )
}

export default MyPurse