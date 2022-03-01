import "./introTable.css";

const showBlocks = (items) => {
  return items.map((e) => {
    return <span class="introTable-block">{e}</span>;
  });
};

const IntroTable = ({ profile }) => {
  return (
    <table class="introTable">
      <tr>
        <td>
          <span class="introTable-title">費用</span>
        </td>
        <td>
          <span class="introTable-data">{profile.fee}</span>
          <span class="introTable-unit">/半小時</span>
        </td>
      </tr>
      <tr>
        <td>
          <span class="introTable-title">就讀/畢業</span>
        </td>
        <td>
          <span class="introTable-data">
            {profile.education.school}
            <br />
            {profile.education.major}
            <br />
            {profile.education.grade}
          </span>
        </td>
      </tr>
      <tr>
        <td>
          <span class="introTable-title">學群</span>
        </td>
        <td>{showBlocks(profile.disciplines)}</td>
      </tr>
      <tr>
        <td>
          <span class="introTable-title">諮詢項目</span>
        </td>
        <td>{showBlocks(profile.items)}</td>
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
  );
};

export default IntroTable;
