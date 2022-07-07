import "./std_result.css"
import { useContext } from "react"
import { ParamContext } from "../../ContextReducer"
import SearchBody from "../Home/Components/Searcher/SearchBody"
import ResultBox from "./ResultBox"

const test = [
  {
    "id": 1,
    "name": "李小蓁",
    "img":"",
    "fee": 200,
    "exp": 15,
    "education": { "school": "國立臺灣大學", "major": "外國語文學系", "year":"二年級" },
    "hashtags": ["學習歷程檔案", "筆試準備", "社團"],
    "intro": "我也不知道可以寫什麼，大概請他們寫一些諮詢風格、諮詢經歷、教學理念、簡述自己的升學歷程之類的吧？",
    "star": 4.8,
    "deleted": false
  },
  {
    "id": 2,
    "name": "李小蓁",
    "img":"",
    "fee": 200,
    "exp": 15,
    "education": { "school": "國立臺灣大學", "major": "外國語文學系", "year":"二年級" },
    "hashtags": ["學習歷程檔案", "筆試準備", "社團"],
    "intro": "我也不知道可以寫什麼，大概請他們寫一些諮詢風格、諮詢經歷、教學理念、簡述自己的升學歷程之類的吧？",
    "star": 4.8,
    "deleted": false
  }
]

const StudentResult = () => {
  const context = useContext(ParamContext)
  const displayResult = (results) => {
    if (results.length === 0) return (<div className="std-result-empty-box"><span>目前尚無此分類之顧問</span></div>)
    else return results.map((e)=>(<ResultBox clt={e} context={context} setContext={context.setInfo} />))
  }
  return (
    <div className="std-result-main">
      <SearchBody place={'result'} />
      <div className="std-result-results">
        {displayResult(context.Info.filterResult)}
      </div>
    </div>
  )
}

export default StudentResult