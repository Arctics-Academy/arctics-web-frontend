// Import ...
import { useState, useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { ParamContext } from '../../../ContextReducer'
import StudentApi from '../../../Axios/studentAxios'

// Import Components
import StageDisplay from '../Component/StageDisplay'
import SelectionCard from '../Component/SelectionCard'
import BlankFooter from '../Component/BlankFooter'

// Import Stylesheets
import '../std-booking.css'


// Main Component
const BookingFirstStage = ({ demo=false }) => {
  const Context = useContext(ParamContext)
  const History = useHistory()
  const [slot, setSlot] = useState(null)

  const DefaultData = {
    available: [[], [], [], [], [], [], []],
    studentBooked: [],
    teacherBooked: []
  }

  const Student = {
    surname: (demo ? "黃" : Context.Info.profile.surname),
    name: (demo ? "苓" : Context.Info.profile.name),
    school: (demo ? "臺中女中" : Context.Info.profile.school),
    grade: (demo ? "三年級" : Context.Info.profile.year)
  }

  const Consultant = {
    surname: (demo ? "李" : ""),
    name: (demo ? "小蓁" : Context.Info.toBook.name),
    school: (demo ? "國立臺灣大學" : Context.Info.toBook.school),
    major: (demo ? "外國語言學系" : Context.Info.toBook.major),
    price: (demo ? 200 : Context.Info.toBook.price)
  }
  
  var InitData = {
    data: DefaultData,
    consultant: Consultant,
    student: Student
  }

  const [Data, setData] = useState(InitData)

  const parseAvailable = (timetable) => {
    for (let i in timetable) {
      for (let j in timetable[i]) {
        timetable[i][j] += 18
      }
    }
    return timetable
  }

  useEffect(() => {
    const updateSlots = async () => {
      console.log(Context.Info.tmpViewForStd)
      const { data } = await StudentApi.getBookingSlot({ 
        studentId: Context.Info.id, 
        consultantId: Context.Info.toBook.id
      })
      let updated = {
        data: {
          available: parseAvailable(data.available),
          studentBooked: data.studentBooked,
          teacherBooked: data.consultantBooked,
        },
        consultant: Consultant,
        student: Student
      }
      console.log(updated)
      setData({ ...updated })
    }

    updateSlots()
  }, [])

  const handleSubmit = () => {
    console.log(Context.Info)
    if (Context.Info.tmpBookingForStd === null) {
      alert('請選擇諮詢時段！')
    }
    else {
     History.push('/student-booking-3')
    }
  }

  const handleCancel = () => {
    Context.setInfo({ type: 'storeStudentBookingSlot', payload: null })
    try {
      History.goBack()
      window.scrollTo(0, 0)
    }
    catch (e) {
      History.push('/student-home#top')
    }
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