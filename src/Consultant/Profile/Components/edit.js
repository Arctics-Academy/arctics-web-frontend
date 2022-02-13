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
      <span class="slider">{e}</span>
    </label>
  ));
};
const Edit = ({ profile }) => {
  return (
    <>
      <IntroTop name={profile.name} times={profile.times} star={profile.star} />
      <div class="intro-top">
        <button class="intro-top-edit">
          <img src={Pen} alt="star" />
          取消
        </button>
        <button class="intro-top-student">
          <img src={Pen} alt="star" />
          儲存
        </button>
      </div>
      <div class="Line-2"></div>
      <form class="form">
        <table>
          <tr>
            <td>
              <label for="fee">費用 </label>
            </td>
            <td>
              <select>{showOptions(feeOptions)}</select>
            </td>
          </tr>
          <tr>
            <td>
              <label for="education">就讀/畢業 </label>
            </td>
            <td>
              <div>
                <label>學校</label>
                <select>{showOptions(schoolOptions)}</select>
              </div>
              <div>
                <label>科系</label>
                <select>{showOptions(majorOptions)}</select>
              </div>
              <div>
                <label>年級</label>
                <input type="number" />
              </div>
            </td>
          </tr>
          <tr>
            <td>學群領域</td>
            <td>{showToggleButton(displines)}</td>
          </tr>
          <tr>
            <td>諮詢項目</td>
            <td>{showToggleButton(items)}</td>
          </tr>
          <tr>
            <td>相關經歷/能力證明</td>
            <textarea type="text" />
          </tr>
          <tr>
            <td>個人簡介</td>
            <textarea type="text" />
          </tr>
        </table>
      </form>
    </>
  );
};

export default Edit;
