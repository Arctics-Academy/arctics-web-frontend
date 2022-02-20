import IntroTop from "./introTop";
import Pen from "../img/edit-pen.svg";
import "./edit.css";
// const showBlocks = (items) => {
//   return items.map((e) => {
//     return <span class="intro-main-block">{e}</span>;
//   });
// };
const feeOptions = [250, 300, 350, 400, 450, 500];
const schoolOptions = [
  "國立台灣大學",
  "國立清華大學",
  "國立交通大學",
  "國立政治大學",
  "國立成功大學",
];
const majorOptions = ["資訊工程學系", "外國語文學系", "電機工程學系"];
const displines = [
  "資訊學群",
  "醫藥衛生",
  "管理學群",
  "教育學群",
  "工程學群",
  "教育學群",
  "法政學群",
];
const items = ["面試技巧", "筆試技巧", "備審資料", "生涯規劃"];
const showOptions = (options) => {
  return options.map((e) => <option>{e}</option>);
};
const showToggleButton = (items) => {
  return items.map((e) => (
    <label class="switch">
      <input type="checkbox" />
      <span class="toggle-button">{e}</span>
    </label>
  ));
};
const Edit = ({ profile }) => {
  return (
    <>
      <IntroTop name={profile.name} times={profile.times} star={profile.star} />
      <div class="intro-top">
        <button class="intro-top-edit">
          <img src="" alt="cancel" />
          取消
        </button>
        <button class="intro-top-student">
          <img src="" alt="save" />
          儲存
        </button>
      </div>
      <div class="Line-2"></div>
      <form class="form">
        <table>
          <tr>
            <td>
              <label class="title" for="fee">
                費用
              </label>
            </td>
            <td>
              <select>{showOptions(feeOptions)}</select>
            </td>
          </tr>
          <tr class="education">
            <td>
              <label class="title" for="education">
                就讀/畢業
              </label>
            </td>
            <td>
              <div>
                <label class="title">學校</label>
                <br />
                <select class="schoolOption">
                  {showOptions(schoolOptions)}
                </select>
              </div>
              <div>
                <label class="title">科系</label>
                <br />
                <input class="major" placeholder="填寫科系" />
                <br />
                <button class="add-major">新增雙輔科系</button>
              </div>
              <div>
                <label class="title">年級</label>
                <br />
                <input class="grade" min="1" max="10" type="number" />
              </div>

              <div class="card section">
                <img src="" alt="學生證照片"></img>
              </div>

              <div class="section renew">
                <button class="renew">
                  <img src="" alt="upload" />
                  更新學生證
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <label class="title">學群領域</label>
            </td>
            <td>{showToggleButton(displines)}</td>
          </tr>
          <tr>
            <td>
              <label class="title">諮詢項目</label>
            </td>
            <td>{showToggleButton(items)}</td>
          </tr>
          <tr>
            <td>
              <label class="title">相關經歷/能力證明</label>
              <div class="ps">
                家教經歷、曾錄取校系、語言能力證明、獲獎紀錄等等
              </div>
            </td>
            <textarea type="text" placeholder="輸入文字" />
          </tr>
          <tr>
            <td>
              <label class="title">個人簡介</label>
              <div class="ps">
                如果不知道要寫什麼的話，可以簡述諮詢風格、諮詢經歷、教學理念、升學歷程等等！
              </div>
            </td>
            <textarea type="text" placeholder="輸入文字" />
          </tr>
        </table>
        <div class="intro-top submit">
          <button class="intro-top-edit">
            <img src="" alt="cancel" />
            取消
          </button>
          <button class="intro-top-student">
            <img src="" alt="save" />
            儲存
          </button>
        </div>
      </form>
    </>
  );
};

export default Edit;
