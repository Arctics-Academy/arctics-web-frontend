import Announcement from "../Component/Announcement";
import Notification from "../Component/Notification";

const StudentAnnounce = () => {
  return (
    <div className="std_announce-main">
      <Announcement />;
      <Notification />;
    </div>
  );
};
export default StudentAnnounce;
