import { InfoLabelTwoLine } from "../Components/InfoLabel"
import RecordRow from "../Components/RecordRow"

const DefaultData = {
  name: "黃OO",
  school: "OO學校",
  grade: "O年級",
  array: [{
    meetingNumber: "000000",
    name: "王OO",
    price: 200,
    paymentTime: null,
    meetingTime: "XXXX/XX/XX（X）XX:XX~XX:XX"
  }, {
    meetingNumber: "000000",
    name: "李OO",
    price: 200,
    paymentTime: "XXXX/XX/XX（X）XX:XX",
    meetingTime: "XXXX/XX/XX（X）XX:XX~XX:XX"
  }]
}

const RecordCard = ({ data=DefaultData }) => {
  return (
    <div className="std-record-record-card__background">
      <div className="std-record-record-card__wrapper">
        <div className="std-record-record-card__label-wrapper">
          <InfoLabelTwoLine identifier="student" label="學生" content1={data.name} content2={data.school+' '+data.grade} />
        </div>
        <RecordRow data={-1} />
        {(data.array.length===0 ?
          <RecordRow data={0} /> :
          (data.array.map((item, index) => {return(<RecordRow key={index} data={item} />)}))
        )}
      </div>
    </div>
  )
}

export default RecordCard