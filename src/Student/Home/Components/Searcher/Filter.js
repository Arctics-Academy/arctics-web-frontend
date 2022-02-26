import './std_searcher.css'
import { ReactComponent as CoinIcon } from '../../img/coin.svg'
import { ReactComponent as HashtagIcon } from '../../img/hashtag.svg'
import { ReactComponent as SchoolIcon } from '../../img/school.svg'
import { ReactComponent as ExpIcon } from '../../img/exp.svg'
import { ReactComponent as BachelorIcon } from '../../img/bachelor.svg'

const Filter = () => {
    return (
        <div className='std_filter-main'>
            <div className='std_filter-subject-field'>
                <div className='std_filter-sf-title'>
                    <p className='std_filter-sf-title-text'>選擇學科領域</p>
                </div>
                <div className='std_filter-sf-selects'>
                    <BachelorIcon className='std_filter-sf-icon' />
                    <select className='std_filter-sf-select' id='field'>
                        <option className='std_sf_option' disabled selected>選擇學群領域</option>
                        <option className='std_sf_option' >CS/IT</option>
                    </select>
                    <select className='std_filter-sf-select' id='subject'>
                        <option className='std_sf_option' disabled selected>選擇學門</option>
                        <option className='std_sf_option' >Computer Science</option>
                    </select>
                </div>
            </div>
            <div className='std_filter-condition'>
                <div className='std_filter-condition-row1'>

                </div>
                <div className='std_filter-condition-row2'>

                </div>
                <div className='std_filter-condition-row3'>

                </div>
            </div>
        </div>
    )
}

export default Filter