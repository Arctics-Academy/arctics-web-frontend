import IntroTable from "../../Consultant/Profile/Components/introTable";
import IntroTop from "../../Consultant/Profile/Components/introTop";
import Line1 from "../../Consultant/Profile/Components/line1";
import { ParamContext } from "../../ContextReducer";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { wrapConsultantPreview } from "../../DataProcessUtils";
import studentApis from "../../Axios/studentAxios";
import './std-review.css'
import { MetaTags } from "react-meta-tags";

const Preview = () => {
  const context = useContext(ParamContext)
  const { cltid } = useParams()
  useEffect(() => {
    const getData = async (id) => {
      const res = await studentApis.getConsultantProfilePreview({consultantId: id});
      context.setInfo({type:'storePreviewData', payload: wrapConsultantPreview(res.data)})
      console.debug(wrapConsultantPreview(res.data))
      console.debug(id, res.data)
    }
    getData(cltid)
  })
  
  return (
    <>
      <MetaTags>
        <title>顧問簡介 | Arctics</title>
      </MetaTags>
      <div className="std-preview-wrap">
        <div className="std-preview-databox-wrap">
          <div className="std-preview-box">
            <IntroTop profile={context.Info.tmpViewForStd} page={'student-view'} changePage={()=>('')} />
            <Line1 />
            <IntroTable profile={context.Info.tmpViewForStd} studentView={true} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Preview