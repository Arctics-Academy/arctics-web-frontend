import Calendar from "./calendar";
import Bear from "../img/timetable-bear.png";
import {ReactComponent as DarkCalendarIcon} from '../img/dark-calendar-icon.svg'
import Loading from '../../../Login/img/loading48.gif'
import "./timeTable.css";
import { resolveTimetable, wrapTimetable } from "../../../DataProcessUtils";
import { useForm, FormProvider } from "react-hook-form";
import { updateProfileData } from "../../../Axios/consulAxios";
import { useState, useContext } from "react";
import { ParamContext } from "../../../ContextReducer";

const TimeTable = ({ profile }) => {
  const methods = useForm()
  const [loading, setLoading] = useState(false)
  const [msgVisible, setMsgVisible] = useState(false)
  const context = useContext(ParamContext)

  const updateTimetable = async (data) => {
    setLoading(true)
    console.debug(wrapTimetable(data.selected))
    let payload = {
      profile: {
        timetable: wrapTimetable(data.selected)
      } , id: context.Info.id
    }
    try {
      const { status, msg } = await updateProfileData(payload)
      setLoading(false)
      setMsgVisible(true)
      console.debug(status, msg)
      context.setInfo({
        type: 'editTimetable',
        payload: payload.profile.timetable
      })
      context.setLogin(true)
      setTimeout(() => {setMsgVisible(false)}, 3000)
    } catch (e) {
      console.debug(e)
    }
  }

  return (
    <FormProvider {...methods} >
      <form class="timeTable" onSubmit={methods.handleSubmit(updateTimetable)} >
        <div class="timeTable-section">
          <div class="timeTable-title"><DarkCalendarIcon /> 可預約時間表</div>
          <Calendar editing={true} timeslot={resolveTimetable(profile.timetable)} />
        </div>
        <div class="timeTable-section">
          <div className="timeTable-submit">
            <p className="timeTable-submitted-message" style={msgVisible? {}:{display:'none'}}>時間表已成功更新!</p>
            <button type='submit'>{loading? (<img src={Loading} />):'確認變更'}</button>
          </div>
        <div class="timeTable-caution">
            <p>注意事項</p>
            <ol>
              <li>請選擇自己一定可以的時間</li>
              <li>時間表變更不會影響已預約時段</li>
            </ol>
            {/* <img alt="bear" src={Bear} /> */}
          </div>
        </div>
      </form>
    </FormProvider>
  );
};
export default TimeTable;
