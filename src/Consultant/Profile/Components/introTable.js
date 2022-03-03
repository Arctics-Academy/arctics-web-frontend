import Calendar from "../Components/calendar";
import "./introTable.css";

const showBlocks = (items) => {
  return items.map((e) => {
    return <span class="introTable-block">{e}</span>;
  });
};

const IntroTable = ({ profile, studentView }) => {
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
              {profile.school}
              <br />
              {profile.major}
              <br />
              {profile.year}
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
            <span class="introTable-title">相關經歷/ 能力證明</span>
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
            <Calendar timeslot={profile.timetable} editing={false} />
          </td>
        </tr>
      )}
    </>
  );
};

export default IntroTable;
