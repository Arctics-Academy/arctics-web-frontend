import "./editTable.css";

const EditTable = ({ profile }) => {
  const consulItems = ["面試技巧", "筆試技巧", "備審資料", "生涯規劃"];
  const feeOptions = [250, 300, 350, 400, 450, 500];
  const schoolOptions = [
    "國立台灣大學",
    "國立清華大學",
    "國立交通大學",
    "國立政治大學",
    "國立成功大學",
  ];
  const displines = [
    "資訊學群",
    "醫藥衛生",
    "管理學群",
    "教育學群",
    "語言文學",
    "工程學群",
    "教育學群",
    "法政學群",
  ];
  const showCheckedDscp = (dscp) => {
    if (profile.disciplines.includes(dscp)) return true;
    else return false;
  };
  const showOptions = (options) => {
    return options.map((e) => <option>{e}</option>);
  };
  const showToggleButton = (items) => {
    return items.map((e) => (
      <label class="editTable-switch">
        <input type="checkbox" />
        <span class="editTable-toggleButton">{e}</span>
      </label>
    ));
  };
  const showTable = (items) => {
    return items.map((e) => (
      <tr>
        <td>
          <label>{e.label}</label>
          <div class="editTable-ps">{e.ps}</div>
        </td>
        <td>{e.component}</td>
      </tr>
    ));
  };
  const showEducation = () => {
    return (
      <>
        <div class="editTable-education">
          <div>
            <label>學校</label>
            <br />
            <select>{showOptions(schoolOptions)}</select>
          </div>
          <div>
            <label>科系</label>
            <br />
            <input class="editTable-education-major" placeholder="填寫科系" />
            <br />
            <button class="editTable-education-add-major">
              + 新增雙輔科系
            </button>
          </div>
          <div>
            <label>年級</label>
            <br />
            <input
              // value={profile.education.grade}
              class="editTable-education-grade"
              min="1"
              max="10"
              type="number"
            />
          </div>
        </div>

        <div class="editTable-education">
          <div class="editTable-card">
            <img src="" alt="學生證照片"></img>
          </div>
          <label class="editTable-filebutton">
            <img src="" alt="upload" />
            更新學生證
            <span>
              <input type="file" id="myfile" name="myfile" />
            </span>
          </label>
        </div>
      </>
    );
  };
  const editTableObj = [
    {
      key: "fee",
      label: "費用",
      ps: "",
      component: <select>{showOptions(feeOptions)}</select>,
    },
    {
      key: "education",
      label: "就讀/畢業",
      ps: "",
      component: showEducation(),
    },
    {
      key: "displine",
      label: "學群領域",
      ps: "",
      component: showToggleButton(displines),
    },
    {
      key: "consulItem",
      label: "諮詢項目",
      ps: "",
      component: showToggleButton(consulItems),
    },
    {
      key: "experiences",
      label: "相關經歷/能力證明",
      ps: "家教經歷、曾錄取校系、語言能力證明、獲獎紀錄等等",
      component: (
        <textarea type="text" placeholder="輸入文字">
          {profile.experiences}
        </textarea>
      ),
    },
    {
      key: "intro",
      label: "個人簡介",
      ps: "如果不知道要寫什麼的話，可以簡述諮詢風格、諮詢經歷、教學理念、升學歷程等等！",
      component: (
        <textarea type="text" placeholder="輸入文字">
          {profile.intro}
        </textarea>
      ),
    },
  ];

  return <form class="editTable">{showTable(editTableObj)}</form>;
};
export default EditTable;
