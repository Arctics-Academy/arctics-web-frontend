import greetBear from '../img/bear.png'
import { ParamContext } from '../../../ContextReducer'
import { useContext } from 'react'
import '../clt_home.css'

const Greeting = () => {
    const context = useContext(ParamContext)

    const timeGreet = () => {
        return "早啊"
    }

    const wishes = () => {
        return "今天也是美好的一天!"
    }

    return (
        <div className='clt_home__greeting'>
            <div className='clt_home__greet-content'>
                <img className='clt_home__greet-bear' src={greetBear}/>
                <span className='clt_home__greet'>{timeGreet()}</span>
                <span className='clt_home__greet-usrname'>{context.Info.name}</span>
                <span className='clt_home__greet-wishes'>{wishes()}</span>
            </div>
            <div className='clt_home__greet-underline'>

            </div>
        </div>
    )
}

export default Greeting