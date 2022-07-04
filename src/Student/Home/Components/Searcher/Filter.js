import { useForm } from 'react-hook-form'
import './std_searcher.css'
import { ReactComponent as CoinIcon } from '../../img/coin.svg'
import { ReactComponent as HashtagIcon } from '../../img/hashtag.svg'
import { ReactComponent as SchoolIcon } from '../../img/school.svg'
import { ReactComponent as ExpIcon } from '../../img/exp.svg'
import { ReactComponent as BachelorIcon } from '../../img/bachelor.svg'
import { NTUFieldToMajorMap } from './Mapping'
import studentApi from '../../../../Axios/studentAxios'
import { useState, useContext } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import { ParamContext } from '../../../../ContextReducer'
import { wrapFilterResult } from '../../../../DataProcessUtils'

const experienceHashtags = ['自然組', '社會組', '轉組', '特殊班', '校隊', '社團', '營隊', '畢聯會', '有補習', '沒補習', '自學', '學生會', '競賽']
const admissionHashtags = ['特殊選材', '繁星推薦', '個人申請', '指考分發', '學習歷程', '模擬面試', '面試技巧', '二階筆試', '認識校系']
const fields = ['文史哲學群', '外語學群', '社會心理學群', '資訊學群', '藝術學群', '數理化學群', '地球環境學群', '法政學群', '財經學群', '醫藥衛生學群', '工程學群', '生物資源學群', '大眾傳播學群', '管理學群', '生命科學學群']

const Filter = ({modalHidden, setModalHidden}) => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [selectedField, setField] = useState('')
    const searcher = useForm()
    const location = useLocation()
    const history = useHistory()
    const context = useContext(ParamContext)
    const displayDays = () => {
        const sevenDays = ['日', '一', '二', '三', '四', '五', '六']
        return sevenDays.map((e) => {
            return (
                <label className='std_filter-cd-weekday-label' htmlFor={e}>
                    <input id={e} type='checkbox' value={e} {...register('day')} />    
                    <span className='std_filter-cd-weekday'>{e}</span>
                </label>
            )
        })
    }

    const displayHashtags = (hashtags, group) => {
        return hashtags.map((e) => {
            return (
                <label className='std_filter-cd-hashtag-label' htmlFor={e}>
                    <input id={e} type='radio' value={e} name={group} {...register(group)} /> 
                    <span className='std_filter-cd-hashtag-item'>
                        {e}
                    </span>
                </label>
            )
        })    
    }

    const filedOptions = (list) => {
        return list.map((e) => {
            return <option className='std_sf_option' value={e}>{e}</option>
        })
    }

    const majorOptions = (field) => {
        if (field === '' || field[0] === undefined) return []
        return NTUFieldToMajorMap[field].map((e) => {
            return <option className='std_sf_option' value={e} >{e}</option>
        })
    }

    const onSubmit = async (data) => {
        if (data.field === undefined || data.field === "選擇學群領域") setModalHidden(false)
        else console.log("Search on: ", data)
        
        let majorQuery = (data.major !== '選擇學系' ? data.major : NTUFieldToMajorMap[data.field])
        const res = await studentApi.getFilterResult({query: {school:["國立臺灣大學"], major: majorQuery}}) //, field:[data.field]
        console.log(res, location)
        context.setInfo({type:'saveFilterResult', payload: {filterResult: wrapFilterResult(res.data)}})
        console.log(context.Info)
        if (location.pathname === '/student-home') history.push('/student-search-result')
    }

    return (
        <div className='std_filter-main'>
            <div className='std_filter-subject-field'>
                <div className='std_filter-sf-title'>
                    <p className='std_filter-sf-title-text'>選擇學科領域</p>
                </div>
                <form className='std_filter-sf-selects' onSubmit={searcher.handleSubmit(onSubmit)}>
                    <div className='std_filter-sf-icon-wrapper'>
                        <BachelorIcon className='std_filter-sf-icon' />
                        <span className='std_filter-sf-icon-text'>學群領域</span>
                    </div>
                    <select className='std_filter-sf-select' id='field' {...searcher.register('field')} onChange={(e)=>{setField(e.target.value)}}>
                        <option className='std_sf_option' disabled selected>選擇學群領域</option>
                        {filedOptions(fields)}
                    </select>
                    <select className='std_filter-sf-select' id='subject' {...searcher.register('major')}>
                        <option className='std_sf_option' disabled selected>選擇學系</option>
                        {majorOptions(selectedField)}
                    </select>
                    <button type='submit' className='std_filter_temp_submit'>前往搜尋</button>
                </form>
            </div>
            {/* <form className='std_filter-condition' onSubmit={handleSubmit(onSubmit)}>
                <div className='std_filter-condition-title'>
                    <p className='std_filter-condition-title-text'>條件篩選</p>
                </div>
                <div className='std_filter-condition-row'>
                    <div className='std_filter-cd-cost'>
                        <CoinIcon className='std_filter-cd-cost-icon' />
                        <select className='std_filter-short-select' id='lwb' {...register('lowerBound')}>
                            <option className='std_filter-short-option'>100</option>
                        </select>
                        <span className='std_filter-cd-span'>~</span>
                        <select className='std_filter-short-select' id='upb' {...register('upperBound')}>
                            <option className='std_filter-short-option'>250</option>
                        </select>
                        <span className='std_filter-cd-span'>/半小時</span>
                    </div>
                    <div className='std_filter-cd-week'>
                        <span className='std_filter-cd-week-title'>星期</span>
                        <div className='std_filter-cd-days'>
                            <div>
                                {displayDays()}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='std_filter-condition-row'>
                    <div className='std_filter-cd-exp'>
                        <ExpIcon className='std_filter-cd-exp-icon' />
                        <select className='std_filter-short-select' id='exp' {...register('exp')}>
                            <option className='std_filter-short-option'>5</option>
                        </select>
                        <span className='std_filter-cd-span'>次以上</span>
                    </div>
                    <div className='std_filter-cd-time'>
                        <span className='std_filter-cd-time-title'>時間</span>
                        <input type='time' className='std_filter-cd-time-input'id='start' {...register('startTime')}/>
                        <span className='std_filter-cd-span'>~</span>
                        <input type='time' className='std_filter-cd-time-input'id='end' {...register('endTime')}/>
                    </div>
                </div>
                <div className='std_filter-condition-row'>
                    <div className='std_filter-cd-school'>
                        <SchoolIcon className='std_filter-cd-school-icon' />
                        <div className='std_filter-cd-school-selects'>
                            <select className='std_filter-cd-school-select-l' {...register('school1')}>
                                <option className='std_filter-cd-school-option' disabled selected>選擇學校</option>
                                <option className='std_filter-cd-school-option'>Nationa Taiwan University</option>
                            </select>
                            <select className='std_filter-cd-school-select-r' {...register('school2')}>
                                <option className='std_filter-cd-school-option' disabled selected>選擇學校</option>
                                <option className='std_filter-cd-school-option'>Nationa Taiwan University</option>
                            </select>
                            <select className='std_filter-cd-school-select-l' {...register('school3')}>
                                <option className='std_filter-cd-school-option' disabled selected>選擇學校</option>
                                <option className='std_filter-cd-school-option'>Nationa Taiwan University</option>
                            </select>
                            <select className='std_filter-cd-school-select-r' {...register('school4')}>
                                <option className='std_filter-cd-school-option' disabled selected>選擇學校</option>
                                <option className='std_filter-cd-school-option'>Nationa Taiwan University</option>
                            </select>
                            <select className='std_filter-cd-school-select-l' {...register('school5')}>
                                <option className='std_filter-cd-school-option' disabled selected>選擇學校</option>
                                <option className='std_filter-cd-school-option'>Nationa Taiwan University</option>
                            </select>
                            <select className='std_filter-cd-school-select-r' {...register('school6')}>
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
            </form> */}
        </div>
    )
}

export default Filter