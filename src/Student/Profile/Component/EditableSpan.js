import { useState } from "react"

const EditableSpan = ({value, setValue, name, title}) => {
  const [edit, setEdit] = useState(false)
  if (edit) {
    return (
      <div className={`${name}-input-block`}>
        <input className={`${name}-input`} value={value} onChange={(e)=>{setValue(e)}} />
        <button className={`${name}-confirm`} onClick={setEdit(false)}>儲存{title}</button>
      </div>
    )
  } else {
    return (
      <span className={`${name}-span`}>{value}</span>
    )
  }
}

export default EditableSpan