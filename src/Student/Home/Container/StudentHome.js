import Greeting from "../Components/Greeting"
import Announcement from "../Components/Announcement"
import Appointment from "../Components/Appointment"
import SearchBody from "../Components/Searcher/SearchBody"
import '../std_home.css'

const StudentHome = () => {
  return (
    <div className="std_home-main">
      <Greeting />
      <div className="std_home-main__first-row">
        <Announcement />
        <Appointment />
      </div>
      <SearchBody place={'home'} />
    </div>
  )
}

export default StudentHome