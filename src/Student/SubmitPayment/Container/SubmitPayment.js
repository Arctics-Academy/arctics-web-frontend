// Import Components
import SubmitPaymentDisplay from "../Component/SubmitPaymentDisplay"
import MeetingPaymentCard from "../Component/MeetingPaymentCard"
import BlankFooter from "../Component/BlankFooter"
import { useParams, useHistory } from "react-router-dom"
import { useState, useEffect, useContext } from "react"
import StudentApi from "../../../Axios/studentAxios"
import { ParamContext } from "../../../ContextReducer"
import { MetaTags } from "react-meta-tags"

// Component
const SubmitPayment = ({ demo=false }) => {
  const { meetingId } = useParams()
  const Context = useContext(ParamContext)
  const History = useHistory()
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)

  const SubmittedForm = new FormData()
  SubmittedForm.set('meetingId', `#${meetingId}`)

  const handleUpload = async (event) => {
    if (event.target.dataset.formLabel === 'file') {
      SubmittedForm.set('meetingPaymentScan', event.target.files[0])
    }
    else {
      console.debug(event.target.dataset.formLabel, event.target.value)
      SubmittedForm.set(event.target.dataset.formLabel, event.target.value)
    }
  }

  const handleSubmit = async () => {
    setLoading(true)
    try {
      // validate form
      // check all prop
      let validator = { 
        meetingId: false, 
        paymentName: false, 
        paymentDate: false, 
        meetingPaymentScan: false,
        paymentBankNo: false,
        paymentAccountNo: false
      } 
      for (let key of SubmittedForm.entries()) {
        if ((key[1] !== undefined) || (key[1] !== '')) {
          validator[key[0]] = true;
        }
      }
      // check validator
      let validWithScan = validator.meetingId && validator.paymentName && validator.paymentDate && validator.meetingPaymentScan;
      let validWithForm = validator.meetingId && validator.paymentName && validator.paymentDate && validator.paymentBankNo && 
        validator.paymentAccountNo;
      
      // if not valid...
      if (!(validWithForm || validWithScan)) {
        alert(`請將表單填寫完成！`)
        setLoading(false)
        return
      }

      // send form
      const { status, data } = await StudentApi.uploadPaymentProof(SubmittedForm)
      setLoading(false)
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
      <MetaTags>
        <title>提交付款證明 | Arctics</title>
      </MetaTags>
      <div className="std_submit-payment-display__overall-wrapper">
        <SubmitPaymentDisplay />
        <MeetingPaymentCard demo={demo} data={data} handleUpload={handleUpload} handleSubmit={handleSubmit} loading={loading}/>
        <BlankFooter />
      </div>
    </>
  );
};

export default SubmitPayment;
