// Import ...
import { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { ParamContext } from '../../../ContextReducer'

// Import Components
import StageDisplay from '../Component/StageDisplay'
import SelectionCard from '../Component/SelectionCard'
import BlankFooter from '../Component/BlankFooter'

// Import Stylesheets
import '../std-booking.css'


// Main Component
const BookingFirstStage = ({ demo=false }) => {
  const Context = useContext(ParamContext)
  const [slot, setSlot] = useState(null)
  const History = useHistory()

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
    price: (demo ? 200 : Context.Info.toBook.price)
  }
  
  const Data = {
    data: DefaultData,
    consultant: Consultant,
    student: Student
  }

  const handleSubmit = () => {
    console.log(Context.Info)
    if (Context.Info.tmpBookingForStd === null) {
      alert('請選擇諮詢時段！')
    }
    else {
     History.push('/student-booking-three')
    }
  }

  const handleCancel = () => {
    Context.setInfo({ type: 'storeStudentBookingSlot', payload: null })
    History.push('/student-home') // FIXME: or to previous route
  }

  return (
    <>
      <StageDisplay stage={1} />
      <SelectionCard data={Data.data} slot={slot} setSlot={setSlot} consultant={Data.consultant} student={Data.student} handleSubmit={handleSubmit} handleCancel={handleCancel} />
      <BlankFooter />
    </>
  )
}

export default BookingFirstStage