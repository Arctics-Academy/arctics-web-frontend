import IntroTop from "./introTop";
import Pen from "../img/edit-pen.svg";

import "./intro.css";

const showBlocks = (items) => {
  return items.map((e) => {
    return <span class="intro-main-block">{e}</span>;
  });
};

const Intro = ({ profile }) => {
  return (
    <>
      <IntroTop name={profile.name} times={profile.times} star={profile.star} />
      <div class="intro-top">
        <button class="intro-top-edit">
          <img src={Pen} alt="star" />
          編輯個人檔案
        </button>
        <button class="intro-top-student">
          <img src={Pen} alt="star" />
          學生角度檢視
        </button>
      </div>
      <div class="Line-2"></div>

      <table class="intro-main">
        <tr>
          <td>
            <span class="intro-main-key">費用</span>
          </td>
          <td>
            <span class="intro-main-text">{profile.fee}</span>
            <span class="intro-main-unit">/半小時</span>
          </td>
        </tr>
        <tr>
          <td>
            <span class="intro-main-key">就讀/畢業</span>
          </td>
          <td>
            <span class="intro-main-text">
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
            <span class="intro-main-key">學群</span>
          </td>
          <td>{showBlocks(profile.disciplines)}</td>
        </tr>
        <tr>
          <td>
            <span class="intro-main-key">諮詢項目</span>
          </td>
          <td>{showBlocks(profile.items)}</td>
        </tr>
        <tr>
          <td>
            <span class="intro-main-key">相關經歷/ 能力證明</span>
          </td>
          <td>
            <span class="intro-main-text">{profile.experiences}</span>
          </td>
        </tr>
        <tr>
          <td>
            <span class="intro-main-key">個人簡介</span>
          </td>
          <td>
            <span class="intro-main-text">{profile.intro}</span>
          </td>
        </tr>
      </table>
    </>
  );
};

export default Intro;
