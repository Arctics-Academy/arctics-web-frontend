import greetBear from '../img/greetbear.png'
import '../std_home.css'
import { ParamContext } from '../../../ContextReducer'
import { useContext } from 'react'

const Greeting = () => {
    const context = useContext(ParamContext)

    const timeGreet = () => {
        return "早啊"
    }

    const wishes = () => {
        return "今天也是美好的一天!"
    }

    return (
        <div className='std_home-greeting'>
            <div className='std_home-greet-content'>
                <img className='std_home-greet-bear' src={greetBear}/>
                <span className='std_home-greet'>{timeGreet()}</span>
                <span className='std_home-greet-usrname'>{context.Info.profile.name}</span>
                <span className='std_home-greet-wishes'>{wishes()}</span>
            </div>
            <div className='std_home-greet-underline'>

            </div>
        </div>
    )
}

export default Greeting