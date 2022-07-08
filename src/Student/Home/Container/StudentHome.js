import Greeting from "../Components/Greeting"
import Announcement from "../Components/Announcement"
import Appointment from "../Components/Appointment"
import SearchBody from "../Components/Searcher/SearchBody"
import '../std_home.css'
import { MetaTags } from "react-meta-tags"

const StudentHome = () => {
  return (
    <>
      <MetaTags>
        <title>學生首頁 | Arctics</title>
      </MetaTags>
      <div className="std_home-main">
        <Greeting />
        <div className="std_home-main__first-row">
          <Announcement />
          <Appointment />
        </div>
        <SearchBody place={'home'} />
      </div>
    </>
  )
}

export default StudentHome