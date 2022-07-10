import "./editTable.css";
import { updateStudentID, updateProfileData } from "../../../Axios/consulAxios";
import { ReactComponent as Upload } from "../img/black-upload.svg";
import { useForm } from "react-hook-form";
import { useContext, useState, useEffect } from "react";
import { ParamContext } from "../../../ContextReducer";

import { ReactComponent as Check } from "../img/black-check.svg";
import { ReactComponent as X } from "../img/white-x.svg";

const EditTable = ({ id, profile, changePage }) => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm()
  const context = useContext(ParamContext)
  const [stdIdBuffer, setStdIdBuffer] = useState(false)
  const consulItems = ["面試技巧", "筆試技巧", "備審資料", "生涯規劃"];
  let lastSubmittedFile = undefined
  let uploadFile = watch('studentIdScan')
  useEffect(() => {
    if (uploadFile != undefined && uploadFile[0] !== undefined) {
      setStdIdBuffer(URL.createObjectURL(uploadFile[0]))
    }
  }, [uploadFile])
  const feeOptions = [250, 300, 350, 400, 450, 500];
  const schoolOptions = [
    "國立臺灣大學",
    // "國立清華大學",
    // "國立交通大學",
    // "國立政治大學",
    // "國立成功大學",
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

  const NTUMajorArray = ['中國文學系', '外國語文學系', '歷史學系', '哲學系', '人類學系', '圖書資訊學系', '日本語文學系', '戲劇學系', '數學系', '物理學系', '化學系', '地質科學系', '心理學系', '地理環境資源學系', '大氣科學系', '政治學系', '經濟學系', '社會學系', '社會工作學系', '醫學系',  '牙醫學系', '護理學系', '醫學檢驗暨生物技術學系', '物理治療學系', '職能治療學系', '藥學系', '土木工程學系', '機械工程學系', '化學工程學系', '工程科學及海洋工程學系', '材料科學與工程學系', '醫學工程學系', '農藝學系', '生物環境系統工程學系', '農業化學系', '森林環境暨資源學系', '動物科學技術學系', '農業經濟學系', '園藝暨景觀學系', '生物產業傳播暨發展學系', '生物機電工程學系', '昆蟲學系', '植物病理與微生物學系', '獸醫學系', '工商管理學系', '會計學系', '財務金融學系', '國際企業學系', '資訊管理學系', '公共衛生學系', '電機工程學系', '資訊工程學系', '法律學系', '生命科學系', '生化科技學系' ]

  const handleFilledData = async (data) => {
    console.debug(data)
    if (data.labels === false) data.labels = []
    if (data.field === false) data.field = []
    if (data.studentIdScan !== undefined && data.studentIdScan[0] !== undefined && data.studentIdScan[0] !== lastSubmittedFile) {
      const fdt = new FormData()
      fdt.append('id', id)
      fdt.append('studentIdScan', data.studentIdScan[0])
      setStdIdBuffer(false)
      delete data.studentIdScan
      try {
        const { status, msg } = await updateStudentID(fdt)
        console.debug(status, msg)
        lastSubmittedFile = fdt.get('studentIdScan')        
      } catch (e) {
        console.debug(e)
      }    
    }
    console.debug(data)
    let payload = { profile: data, id: id}
    try {
      const { status, msg } = await updateProfileData(payload)
      console.debug(status, msg)
    } catch (e) {
      console.debug(e)
    }
    context.setInfo({
      type: 'editProfile',
      payload: payload.profile
    })
    context.setLogin(true)
    changePage('intro-main')
  }

  const handleDisplaySIDPreview = (e) => {
    console.debug('upload!')
    setStdIdBuffer(URL.createObjectURL(e.target.files[0]))
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
            <select class="editTable-education-major" defaultValue={profile.major? profile.major:''} placeholder="填寫科系" {...register('major')}>
              {NTUMajorArray.map((m)=> {
                return (<option value={m}>{m}</option>)
              })}
            </select>
            <br />
            {/*<button class="editTable-education-add-major">
              + 新增雙輔科系
            </button>
            */}
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
          <div class="editTable-card">
              {stdIdBuffer!==false ? (
                <img className="editTable-preview-sid" src={stdIdBuffer} alt="學生證照片"></img>
              ) : (
                <span>學生證照片</span>
              )}
          </div>
          <label class="editTable-filebutton">
            <Upload />
            更新學生證
            <span>
              <input type="file" id="myfile" onChange={handleDisplaySIDPreview} name="studentIdScan" {...register('studentIdScan')}/>
            </span>
          </label>
        </div>
        

        {/* <div class="editTable-education">

        </div> */}
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
      label: `相關經歷 /        能力證明`,
      ps: "家教經歷、曾錄取校系、語言能力證明、獲獎紀錄等",
      component: (
        <textarea type="text" placeholder="輸入文字" {...register('experiences')} resiz>
          {profile.experiences}
        </textarea>
      ),
    },
    {
      key: "intro",
      label: "個人簡介",
      ps: "如果不知道要寫什麼的話，可以簡述諮詢風格、諮詢經歷、教學理念、升學歷程等",
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
        <button className="editTable-exit" onClick={()=>{changePage('intro-main')}}><X /> 取消</button>
        <button className="editTable-submit" type="submit"><Check /> 確認</button>
      </div>
    </form>
  )
};
export default EditTable;
