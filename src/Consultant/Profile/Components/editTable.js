import "./editTable.css";
import { updateStudentID, updateProfileData } from "../../../axios";
import { ReactComponent as Upload } from "../img/black-upload.svg";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { ParamContext } from "../../../ContextReducer";

const EditTable = ({ id, profile, changePage }) => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const context = useContext(ParamContext)
  const consulItems = ["面試技巧", "筆試技巧", "備審資料", "生涯規劃"];
  let lastSubmittedFile = null
  const feeOptions = [250, 300, 350, 400, 450, 500];
  const schoolOptions = [
    "國立臺灣大學",
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

  const handleFilledData = async (data) => {
    console.log(data)
    if (data.labels === false) data.labels = []
    if (data.field === false) data.field = []
    if (data.studentIdScan !== undefined && data.studentIdScan[0] !== undefined && data.studentIdScan[0] !== lastSubmittedFile) {
      const fdt = new FormData()
      fdt.append('studentIdScan', data.studentIdScan[0])
      fdt.append('id', id)
      delete data.studentIdScan
      try {
        const { status, msg } = await updateStudentID(fdt)
        console.log(status, msg)
        lastSubmittedFile = fdt.get('studentIdScan')        
      } catch (e) {
        console.log(e)
      }    
    }
    console.log(data)
    let payload = { profile: data, id: id}
    try {
      const { status, msg } = await updateProfileData(payload)
      console.log(status, msg)
    } catch (e) {
      console.log(e)
    }
    context.setInfo({
      type: 'editProfile',
      payload: payload.profile
    })
    changePage('intro-main')
  }

  const studentCard = undefined;
  const showCheckedDscp = (dscp) => {
    if (profile.disciplines.includes(dscp)) return true;
    else return false;
  };
  const showOptions = (options) => {
    return options.map((e) => <option value={e} >{e}</option>);
  };
  const showToggleButton = (items, group) => {
    return items.map((e) => (
      <label class="editTable-switch">
        <input type="checkbox" defaultChecked={profile[group].includes(e)? true:false} value={e} {...register(group)} />
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
            <select defaultValue={profile.school} {...register('school')}>{showOptions(schoolOptions)}</select>
          </div>
          <div>
            <label>科系</label>
            <br />
            <input class="editTable-education-major" defaultValue={profile.major? profile.major:''} placeholder="填寫科系" {...register('major')} />
            <br />
            <button class="editTable-education-add-major">
              + 新增雙輔科系
            </button>
          </div>
          <div>
            <label>年級</label>
            <br />
            <select class="editTable-education-grade" defaultValue={profile.year} {...register('year')}>
              <option value={'一年級'} >一年級</option>
              <option value={'二年級'} >二年級</option>
              <option value={'三年級'} >三年級</option>
              <option value={'四年級'} >四年級</option>
              <option value={'四年級以上'} >四年級以上</option>
            </select>
          </div>
        </div>

        <div class="editTable-education">
          <div class="editTable-card">
            {studentCard ? (
              <img src={studentCard} alt="學生證照片"></img>
            ) : (
              <span>學生證照片</span>
            )}
          </div>
          <label class="editTable-filebutton">
            <Upload />
            更新學生證
            <span>
              <input type="file" id="myfile" name="studentIdScan" {...register('studentIdScan')}/>
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
      component: <select defaultValue={profile.price} {...register('price')}>{showOptions(feeOptions)}</select>,
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
      component: showToggleButton(displines, 'field'),
    },
    {
      key: "consulItem",
      label: "諮詢項目",
      ps: "",
      component: showToggleButton(consulItems, 'labels'),
    },
    {
      key: "experiences",
      label: "相關經歷/能力證明",
      ps: "家教經歷、曾錄取校系、語言能力證明、獲獎紀錄等等",
      component: (
        <textarea type="text" placeholder="輸入文字" {...register('experiences')}>
          {profile.experiences}
        </textarea>
      ),
    },
    {
      key: "intro",
      label: "個人簡介",
      ps: "如果不知道要寫什麼的話，可以簡述諮詢風格、諮詢經歷、教學理念、升學歷程等等！",
      component: (
        <textarea type="text" placeholder="輸入文字" {...register('intro')}>
          {profile.intro}
        </textarea>
      ),
    },
  ];

  return (
    <form class="editTable" onSubmit={handleSubmit(handleFilledData)}>
      {showTable(editTableObj)}
      <div className="editTable-btns">
        <button className="editTable-exit" onClick={()=>{changePage('intro-main')}}>取消</button>
        <button className="editTable-submit" type="submit">確認</button>
      </div>
    </form>
  )
};
export default EditTable;
