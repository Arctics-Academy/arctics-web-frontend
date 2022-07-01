// Import ...
import { useState, useContext } from 'react'
import { ParamContext } from '../../../ContextReducer'

// Import Components
import StageDisplay from '../Component/StageDisplay'
import SelectionCard from '../Component/SelectionCard'
import BlankFooter from '../Component/BlankFooter'

// Import Stylesheets
import '../std-booking.css'


// Main Component
const BookingFirstStage = ({ demo=false }) => { // add demo switch later
  const Context = useContext(ParamContext)
  const [slot, setSlot] = useState(null)
  console.log(slot)

  const DefaultData = {
    available: [[], [], [25,26,27], [20, 21], [], [], []],
    studentBooked: [[2022, 7, 4, 26]],
    teacherBooked: [[2022, 6, 30, 29]]
  }

  const Student = {
    surname: (demo ? "黃" : Context.Info.profile.surname),
    name: (demo ? "苓" : Context.Info.profile.name),
    school: (demo ? "臺中女中" : Context.Info.profile.school),
    grade: (demo ? "三年級" : Context.Info.profile.year)
  }

  const Consultant = {
    surname: (demo ? "李" : Context.Info.tmpViewForStd.surname),
    name: (demo ? "小蓁" : Context.Info.tmpViewForStd.name),
    school: (demo ? "國立臺灣大學" : Context.Info.tmpViewForStd.school),
    major: (demo ? "外國語言學系" : Context.Info.tmpViewForStd.major),
    price: 200
  }
  
  const Data = {
    data: DefaultData,
    consultant: Consultant,
    student: Student
  }

  return (
    <>
      <StageDisplay stage={1} />
      <SelectionCard data={Data.data} slot={slot} setSlot={setSlot} consultant={Data.consultant} student={Data.student} />
      <BlankFooter />
    </>
  )
}

export default BookingFirstStage