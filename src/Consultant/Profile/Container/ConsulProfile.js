import { useContext, useState } from "react";
import Intro from "../Card/intro";
import Account from "../Card/account";
import Time from "../Card/time";
import Announcement from "../img/announcement.svg";
import "./ConsulProfile.css";
import { ParamContext } from "../../../ContextReducer";

const tempProfile = {
  name: "梁芮瑄",
  times: 5,
  star: 4.8,
  fee: 250,
  education: {
    school: "國立台灣大學",
    major: "外國語文學系",
    grade: 2,
  },
  disciplines: ["語言文學"],
  items: ["面試技巧", "備審資料"],
  experiences:
    "國立政治大學 日文系 備取\n東吳大學 日文系 正取\nTOEIC 聽讀 金色證書\nJEPT N2 通過 (178分)",
  intro:
    "我也不知道可以寫什麼，大概請他們寫一些諮詢風格、諮詢經歷、教學理念、簡述自己的升學歷程之類的吧......嗎？",
  email: "b09102035@ntu.edu.tw",
  phone: "0966750761",
  password: "12345678abcde",
  timeslot: [
    "mon9:30",
    "tue10:00",
    "wed10:00",
    "thu10:00",
    "fri10:00",
    "sat22:30",
    "sat23:00",
    "sat23:30",
  ],
};

const ConsulProfile = () => {
  const [page, setPage] = useState("intro");
  const context = useContext(ParamContext)
  const [studentView, setStudentView] = useState(false);

  const showPage = (page) => {
    if (page === "intro")
      return (
        <Intro
          profile={context.Info.profile}
          handleSudentView={(e) => setStudentView(e)}
        />
      );
    else if (page === "account") return <Account profile={context.Info.profile} />;
    else if (page === "time") return <Time profile={context.Info.profile} />;
  };

  return (
    <div class="consulProfile">
      {studentView ? (
        <div class="consulProfile-viewMode">
          <div>
            <img src={Announcement} alt="announce" />
            <span>尋找顧問</span>
          </div>
          <div>顧問簡介</div>
        </div>
      ) : (
        <div>
          <span class="consulProfile-title">個人檔案</span>
          <div class="consulProfile-line"></div>
          <div class="consulProfile-menu">
            <button onClick={() => setPage("intro")}>基本資料</button>
            <button onClick={() => setPage("account")}>帳戶設定</button>
            <button onClick={() => setPage("time")}>時間表</button>
          </div>
        </div>
      )}

      <div class="consulProfile-content">{showPage(page)}</div>
    </div>
  );
};

export default ConsulProfile;
