import Greeting from "../Components/Greeting"
import Announcement from "../Components/Announcement"
import Appointment from "../Components/Appointment"
import SearchBody from "../Components/Searcher/SearchBody"
import '../std_home.css'

const StudentHome = () => {
    return (
        <div className="std_home-main">
            <Greeting />
            <Announcement />
            <Appointment />
            <SearchBody />
        </div>
    )

}

export default StudentHome