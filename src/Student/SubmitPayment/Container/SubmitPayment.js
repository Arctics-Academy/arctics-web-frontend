// Import Components
import SubmitPaymentDisplay from "../Component/SubmitPaymentDisplay"
import MeetingPaymentCard from "../Component/MeetingPaymentCard"
import BlankFooter from "../Component/BlankFooter"
import { useParams, useHistory } from "react-router-dom"
import { useState, useEffect, useContext } from "react"
import StudentApi from "../../../Axios/studentAxios"
import { ParamContext } from "../../../ContextReducer"

// Component
const SubmitPayment = ({ demo=false }) => {
  const { meetingId } = useParams()
  const Context = useContext(ParamContext)
  const History = useHistory()
  const [data, setData] = useState(null)

  const SubmittedForm = new FormData()
  SubmittedForm.set('meetingId', `#${meetingId}`)

  const handleUpload = async (event) => {
    if (event.target.dataset.formLabel === 'file') {
      SubmittedForm.set('meetingPaymentScan', event.target.files[0])
    }
    else {
      console.log(event.target.dataset.formLabel, event.target.value)
      SubmittedForm.set(event.target.dataset.formLabel, event.target.value)
    }
  }

  const handleSubmit = async () => {
    try {
      // validate form
      // check all prop
      let validator = { meetingId: false, paymentName: false, paymentDate: false, meetingPaymentScan: false } 
      for (let key of SubmittedForm.entries()) {
        if ((key[1] !== undefined) || (key[1] !== '')) {
          validator[key[0]] = true;
        }
      }
      // check validator
      let valid = true
      for (let prop in validator) {
        if (!validator[prop]) {
          valid = false
        }
      }
      
      // if not valid...
      if (!valid) {
        alert(`請將表單填寫完成！`)
        return
      }

      // send form
      const { status, data } = await StudentApi.uploadPaymentProof(SubmittedForm)
      // handle response
      if (status === 'success') {
        Context.setInfo({ 
          type: 'updatePaymentDate', 
          payload: {
            meetingId: `#${meetingId}`,
            meetingPaymentTime: data.paymentTime
          }
        })
        alert('檔案上傳成功！')
        History.push('/student-record')
      }
      else {
        alert('檔案上傳失敗，請重新選擇檔案。')
      }
    }
    catch (error) {
      console.debug('SubmitPaymentComponent', error)
      alert('伺服器出現錯誤，請稍後再試！')
      History.push('/student-home')
    }
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    let actualId = `#${meetingId}`
    for (let idx in Context.Info.meetingsByStudentRecord) {
      if (Context.Info.meetingsByStudentRecord[idx].meetingId === actualId) {
        setData(Context.Info.meetingsByStudentRecord[idx])
        break
      }
    }
  })

  return (
    <>
      <SubmitPaymentDisplay />
      <MeetingPaymentCard demo={demo} data={data} handleUpload={handleUpload} handleSubmit={handleSubmit}/>
      <BlankFooter />
    </>
  );
};

export default SubmitPayment;
