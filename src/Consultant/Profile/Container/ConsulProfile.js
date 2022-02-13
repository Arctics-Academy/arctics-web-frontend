import Intro from "../Components/intro";
import Edit from "../Components/edit";

import "./ConsulProfile.css";
const tempProfile = {
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

const ConsulProfile = () => {
  return (
    <div class="main">
      <div>
        <span class="title">個人檔案</span>
        <div class="Line-1"></div>
        <div class="menu">
          <button>基本資料</button>
          <button>帳戶設定</button>
          <button>時間表</button>
        </div>
      </div>
      <div class="content">
        {/* <Intro profile={tempProfile} /> */}
        <Edit profile={tempProfile} />
      </div>
    </div>
  );
};

export default ConsulProfile;
