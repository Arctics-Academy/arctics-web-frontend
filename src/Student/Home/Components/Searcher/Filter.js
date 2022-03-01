import { useForm } from 'react-hook-form'
import './std_searcher.css'
import { ReactComponent as CoinIcon } from '../../img/coin.svg'
import { ReactComponent as HashtagIcon } from '../../img/hashtag.svg'
import { ReactComponent as SchoolIcon } from '../../img/school.svg'
import { ReactComponent as ExpIcon } from '../../img/exp.svg'
import { ReactComponent as BachelorIcon } from '../../img/bachelor.svg'

const experienceHashtags = ['自然組', '社會組', '轉組', '特殊班', '校隊', '社團', '營隊', '畢聯會', '有補習', '沒補習', '自學', '學生會', '競賽']
const admissionHashtags = ['特殊選材', '繁星推薦', '個人申請', '指考分發', '學習歷程', '模擬面試', '面試技巧', '二階筆試', '認識校系']

const Filter = () => {
    const displayDays = () => {
        const sevenDays = ['日', '一', '二', '三', '四', '五', '六']
        return sevenDays.map((e) => {
            return (
                <label className='std_filter-cd-weekday-label' htmlFor={e}>
                    <input id={e} type='checkbox' value={e} />    
                    <span className='std_filter-cd-weekday'>{e}</span>
                </label>
            )
        })
    }

    const displayHashtags = (hashtags, group) => {
        return hashtags.map((e) => {
            return (
                <label className='std_filter-cd-hashtag-label' htmlFor={e}>
                    <input id={e} type='radio' value={e} name={group} /> 
                    <span className='std_filter-cd-hashtag-item'>
                        {e}
                    </span>
                </label>
            )
        })    
    }

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
                <div className='std_filter-condition-title'>
                    <p className='std_filter-condition-title-text'>條件篩選</p>
                </div>
                <div className='std_filter-condition-row'>
                    <div className='std_filter-cd-cost'>
                        <CoinIcon className='std_filter-cd-cost-icon' />
                        <select className='std_filter-short-select' id='lwb'>
                            <option className='std_filter-short-option'>100</option>
                        </select>
                        <span className='std_filter-cd-span'>~</span>
                        <select className='std_filter-short-select' id='upb'>
                            <option className='std_filter-short-option'>250</option>
                        </select>
                        <span className='std_filter-cd-span'>/半小時</span>
                    </div>
                    <div className='std_filter-cd-week'>
                        <span className='std_filter-cd-week-title'>星期</span>
                        <div className='std_filter-cd-days'>
                            <form>
                                {displayDays()}
                            </form>
                        </div>
                    </div>
                </div>
                <div className='std_filter-condition-row'>
                    <div className='std_filter-cd-exp'>
                        <ExpIcon className='std_filter-cd-exp-icon' />
                        <select className='std_filter-short-select' id='exp'>
                            <option className='std_filter-short-option'>5</option>
                        </select>
                        <span className='std_filter-cd-span'>次以上</span>
                    </div>
                    <div className='std_filter-cd-time'>
                        <span className='std_filter-cd-time-title'>時間</span>
                        <input type='time' className='std_filter-cd-time-input'id='start' />
                        <span className='std_filter-cd-span'>~</span>
                        <input type='time' className='std_filter-cd-time-input'id='end' />
                    </div>
                </div>
                <div className='std_filter-condition-row'>
                    <div className='std_filter-cd-school'>
                        <SchoolIcon className='std_filter-cd-school-icon' />
                        <div className='std_filter-cd-school-selects'>
                            <select className='std_filter-cd-school-select-l'>
                                <option className='std_filter-cd-school-option' disabled selected>選擇學校</option>
                                <option className='std_filter-cd-school-option'>Nationa Taiwan University</option>
                            </select>
                            <select className='std_filter-cd-school-select-r'>
                                <option className='std_filter-cd-school-option' disabled selected>選擇學校</option>
                                <option className='std_filter-cd-school-option'>Nationa Taiwan University</option>
                            </select>
                            <select className='std_filter-cd-school-select-l'>
                                <option className='std_filter-cd-school-option' disabled selected>選擇學校</option>
                                <option className='std_filter-cd-school-option'>Nationa Taiwan University</option>
                            </select>
                            <select className='std_filter-cd-school-select-r'>
                                <option className='std_filter-cd-school-option' disabled selected>選擇學校</option>
                                <option className='std_filter-cd-school-option'>Nationa Taiwan University</option>
                            </select>
                            <select className='std_filter-cd-school-select-l'>
                                <option className='std_filter-cd-school-option' disabled selected>選擇學校</option>
                                <option className='std_filter-cd-school-option'>Nationa Taiwan University</option>
                            </select>
                            <select className='std_filter-cd-school-select-r'>
                                <option className='std_filter-cd-school-option' disabled selected>選擇學校</option>
                                <option className='std_filter-cd-school-option'>Nationa Taiwan University</option>
                            </select>
                        </div>
                    </div>
                    <div className='std_filter-cd-hashtag'>
                        <HashtagIcon className='std_filter-cd-hashtag-icon' />
                        <div className='std_filter-cd-hashtag-display'>
                            <div className='std_filter-cd-exp-hashtag'>
                                {displayHashtags(experienceHashtags, 'expHashtag')}
                            </div>
                            <div className='std_filter-cd-adm-hashtag'>
                                {displayHashtags(admissionHashtags, 'admHashtag')}
                            </div>
                        </div>
                    </div>                    
                </div>
                <div className='std_filter-condition-button'>
                    <input type='submit' className='std_filter-condition-submit-btn' value='前往搜尋' />
                </div>
            </div>
        </div>
    )
}

export default Filter