import './std_searcher.css'
import Filter from './Filter'
import { ReactComponent as SearchTitleIcon } from '../../img/searchtitle.svg'
import { ReactComponent as SearchIcon } from '../../img/search.svg'
import { useState } from 'react'
import EmptySearchModal from '../../../../Modals/student/emptySearchModal'

const SearchBody = ({place}) => {
    const [modalHidden, setModalHidden] = useState(true)
    return (
        <>
            <EmptySearchModal hidden={modalHidden} setHidden={setModalHidden} />
            <div className={`std_search-${place}-main`}>
                <div className='std_search-title'>
                    <SearchTitleIcon className='std_search-title-icon' />
                    <span className='std_search-title-text'>尋找顧問</span>
                </div>
                <div className='std_search-bar'>
                    <input className='std_search-text-input' placeholder='用關鍵字搜尋你的顧問' />
                    <div className='std_search-text-sep-line' />
                    <SearchIcon className='std_search-text-button' />
                </div>
                <Filter modalHidden={modalHidden} setModalHidden={setModalHidden} />
            </div>
        </>
    )
}

export default SearchBody