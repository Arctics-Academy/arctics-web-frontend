import "../clt_profile.css";

const tempIntro = {
  fee: 250,
  education: {
    school: "國立台灣大學",
    major: "外國語文學系",
    grade: "二年級",
  },
  disciplines: ["語言文學"],
  items: ["面試技巧", "面試技巧", "面試技巧", "面試技巧"],
  experiences: [
    "國立政治大學 日文系 備取",
    "東吳大學 日文系 正取",
    "TOEIC 聽讀 金色證書",
    "JEPT N2 通過 (178分)",
  ],
  intro:
    "我也不知道可以寫什麼，大概請他們寫一些諮詢風格、諮詢經歷、教學理念、簡述自己的升學歷程之類的吧......嗎？",
};

const Intro = () => {
  return (
    <div class="clt_home-intro">
      <div>
        <span>費用</span>
        <span>{tempIntro.fee}</span>
      </div>
      <div>
        <span>就讀/畢業</span>
        <span>{tempIntro.education.school}</span>
        <span>{tempIntro.education.major}</span>
        <span>{tempIntro.education.grade}</span>
      </div>
      <div>
        <span>學群</span>
        <span>{tempIntro.fee}</span>
      </div>
      <div>
        <span>諮詢項目</span>
      </div>
      <div>
        <span>相關經歷/能力證明</span>
      </div>
    </div>
  );
};

export default Intro;
