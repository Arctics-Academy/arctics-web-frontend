import Avatar from "../img/tmp_avatar.png";
import Star from "../img/star.svg";
import Pen from "../img/edit-pen.svg";
import Photo from "../img/upload-photo.svg";
import "./intro.css";

const tempIntro = {
  name: "梁芮瑄",
  times: 5,
  star: 4.8,
  fee: 250,
  education: {
    school: "國立台灣大學",
    major: "外國語文學系",
    grade: "二年級",
  },
  disciplines: ["語言文學"],
  items: ["面試技巧", "面試技巧", "面試技巧", "面試技巧"],
  experiences:
    "國立政治大學 日文系 備取\n東吳大學 日文系 正取\nTOEIC 聽讀 金色證書\nJEPT N2 通過 (178分)",
  intro:
    "我也不知道可以寫什麼，大概請他們寫一些諮詢風格、諮詢經歷、教學理念、簡述自己的升學歷程之類的吧......嗎？",
};

const showBlocks = (items) => {
  return items.map((e) => {
    return <span class="intro-main-block">{e}</span>;
  });
};

const Intro = () => {
  return (
    <div class="intro">
      <div class="intro-top">
        <img class="intro-top-avatar" src={Avatar} alt="my avatar" />
        <img class="intro-top-photo" src={Photo} alt="my avatar" />
      </div>
      <div class="intro-top">
        <span class="intro-top-name">{tempIntro.name}</span>

        <div>
          <span class="intro-top-already">已諮詢</span>
          <span class="intro-top-times">{tempIntro.times}次</span>
        </div>
        <div>
          <span>
            <img class="intro-top-star" src={Star} alt="star" />
          </span>
          <span class="intro-top-point">{tempIntro.star}</span>
        </div>
      </div>

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
            <span class="intro-main-text">{tempIntro.fee}</span>
            <span class="intro-main-unit">/半小時</span>
          </td>
        </tr>
        <tr>
          <td>
            <span class="intro-main-key">就讀/畢業</span>
          </td>
          <td>
            <span class="intro-main-text">
              {tempIntro.education.school}
              <br />
              {tempIntro.education.major}
              <br />
              {tempIntro.education.grade}
            </span>
          </td>
        </tr>
        <tr>
          <td>
            <span class="intro-main-key">學群</span>
          </td>
          <td>{showBlocks(tempIntro.disciplines)}</td>
        </tr>
        <tr>
          <td>
            <span class="intro-main-key">諮詢項目</span>
          </td>
          <td>{showBlocks(tempIntro.items)}</td>
        </tr>
        <tr>
          <td>
            <span class="intro-main-key">相關經歷/ 能力證明</span>
          </td>
          <td>
            <span class="intro-main-text">{tempIntro.experiences}</span>
          </td>
        </tr>
        <tr>
          <td>
            <span class="intro-main-key">個人簡介</span>
          </td>
          <td>
            <span class="intro-main-text">{tempIntro.intro}</span>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Intro;
