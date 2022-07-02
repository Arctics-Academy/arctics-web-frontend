// Import ...
import { useContext } from 'react'
import { ParamContext } from '../../../ContextReducer'

// Icons
import GreetBear from '../img/greetbear.png'

// Stylesheets
import '../std_home.css'

const Greeting = ({ demo=true }) => {
  const Context = useContext(ParamContext)

  const Data = {
    name: (demo ? '秉聖' : Context.Info.profile.name)
  }

  const GreetString = () => {
    let time = new Date()
    if (time.getHours() < 13) { return "早安" }
    else if (time.getHours() > 20) { return "晚安" }
    else { return "午安" }
  }

  const PostString = () => { return "今天也是美好的一天！" }

  return (
    <div className='std_home-greeting'>
      <div className='std_home-greet-content'>
        <img className='std_home-greet-bear' src={GreetBear} alt='' />
        <span className='std_home-greet'>{GreetString()}</span>
        <span className='std_home-greet-usrname'>{Data.name}</span>
        <span className='std_home-greet-wishes'> {PostString()}</span>
      </div>
      <div className='std_home-greet-underline'>
      </div>
    </div>
  )
}

export default Greeting