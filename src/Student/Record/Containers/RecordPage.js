import { useContext } from "react"
import { ParamContext } from "../../../ContextReducer"

import PageTitle from "../Components/PageTitle"
import RecordCard from "../Components/RecordCard"


const RecordPage = ({ demo=false }) => {
  const Context = useContext(ParamContext)

  const Data = {
    name: (demo ? "OOO" : Context.Info.profile.surname+Context.Info.profile.name),
    school: (demo ? "OO學校" : Context.Info.profile.school),
    grade: (demo ? "O年級" : Context.Info.profile.year),
    array: (demo ? [] : Context.Info["meetingsByStudentRecord"])
  }

  return (
    <div className="std-record-record-page__wrapper">
      <PageTitle title="付款資料" />
      <RecordCard data={Data} />
    </div>
  )
}

export default RecordPage