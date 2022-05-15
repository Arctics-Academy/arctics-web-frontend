import Calendar from "../Components/calendar";
import "./introTable.css";
import { resolveTimetable } from "../../../DataProcessUtils";
import { useForm, FormProvider } from "react-hook-form";

const showBlocks = (items) => {
  return items.map((e) => {
    return <span class="introTable-block">{e}</span>;
  });
};

const IntroTable = ({ profile, studentView }) => {
  const form = useForm()
  //form to prevent calender crash...
  console.log(profile.timetable, resolveTimetable(profile.timetable))
  return (
    <>
      <table class="introTable">
        <tr>
          <td>
            <span class="introTable-title">費用</span>
          </td>
          <td>
            <span class="introTable-data">{profile.price}</span>
            <span class="introTable-unit">/半小時</span>
          </td>
        </tr>
        <tr>
          <td>
            <span class="introTable-title">就讀/畢業</span>
          </td>
          <td>
            <span class="introTable-data">
              {profile.school} {profile.major} {profile.year}
            </span>
          </td>
        </tr>
        <tr>
          <td>
            <span class="introTable-title">學群</span>
          </td>
          <td>{showBlocks(profile.field)}</td>
        </tr>
        <tr>
          <td>
            <span class="introTable-title">諮詢項目</span>
          </td>
          <td>{showBlocks(profile.labels)}</td>
        </tr>
        <tr>
          <td>
            <span class="introTable-title">相關經歷/<br />能力證明</span>
          </td>
          <td>
            <span class="introTable-data">{profile.experiences}</span>
          </td>
        </tr>
        <tr>
          <td>
            <span class="introTable-title">個人簡介</span>
          </td>
          <td>
            <span class="introTable-data">{profile.intro}</span>
          </td>
        </tr>
      </table>
      {studentView && (
        <tr class="introTable-calendar">
          <td id="introTable-calendar">
            <span class="introTable-title">可預約時間表</span>
          </td>
          <td>
            <FormProvider {...form}>
              <Calendar timeslot={resolveTimetable(profile.timetable)} editing={false} />
            </FormProvider>
          </td>
        </tr>
      )}
    </>
  );
};

export default IntroTable;
