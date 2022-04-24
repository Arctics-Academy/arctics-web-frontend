import "./std_result.css"
import { useContext } from "react"
import { ParamContext } from "../../ContextReducer"
import SearchBody from "../Home/Components/Searcher/SearchBody"
import CartItem from "../CartList/Components/CartItem"

const StudentResult = () => {
  const context = useContext(ParamContext)

  return (
    <div className="std-result-main">
      <div className="std-result-search-box">
        <SearchBody place={'result'} />
      </div>
      <div className="std-result-results">

      </div>
    </div>
  )
}

export default StudentResult