import Calendar from "./calendar";
import Bear from "../img/timetable-bear.png";
import "./timeTable.css";
import { resolveTimetable, wrapTimetable } from "../../../DataProcessUtils";
import { useForm, FormProvider } from "react-hook-form";
import { updateProfileData } from "../../../axios";
import { useContext } from "react";
import { ParamContext } from "../../../ContextReducer";

const TimeTable = ({ profile }) => {
  const methods = useForm()
  const context = useContext(ParamContext)
  const updateTimetable = async (data) => {
    console.log(wrapTimetable(data.selected))
    let payload = {
      profile: {
        timetable: wrapTimetable(data.selected)
      } , id: context.Info.id
    }
    try {
      const { status, msg } = await updateProfileData(payload)
      console.log(status, msg)
      context.setInfo({
        type: 'editTimetable',
        payload: payload.profile.timetable
      })
    } catch (e) {
      console.log(e)
    }
  } 
  return (
    <FormProvider {...methods} >
      <form class="timeTable" onSubmit={methods.handleSubmit(updateTimetable)} >
        <div class="timeTable-section">
          <div class="timeTable-title">可預約時間表</div>
          <Calendar editing={true} timeslot={resolveTimetable(profile.timetable)} />
        </div>
        <div class="timeTable-section">
          <button type='submit'>確認變更</button>
        <div class="timeTable-caution">
            <p>注意事項</p>
            <ol>
              <li>請選擇自己一定可以的時間</li>
              <li>時間表變更不會影響已預約時段</li>
            </ol>
            <img alt="bear" src={Bear} />
          </div>
        </div>
      </form>
    </FormProvider>
  );
};
export default TimeTable;
