// Import ...
import { useState } from "react";

// Sub-Components
import Announcement from "../Component/Announcement";
import Notification from "../Component/Notification";
import NotifModal from "../../../Modals/system/notifModal";

import { MetaTags } from "react-meta-tags";

const StudentAnnouncements = () => {
  const [displayTitle, setDisplayTitle] = useState('Title')
  const [dispalyContent, setDisplayContent] = useState('Content')
  const [hidden, setHidden] = useState(true)
  return (
    <div className="clt_announce-main">
      <MetaTags>
        <title>通知 | Arctics</title>
      </MetaTags>
      <NotifModal title={displayTitle} content={dispalyContent} hidden={hidden} setHidden={setHidden} />
      <Announcement setContent={setDisplayContent} setTitle={setDisplayTitle} setHidden={setHidden} />
      <Notification setContent={setDisplayContent} setTitle={setDisplayTitle} setHidden={setHidden} />
    </div>
  );
};
export default StudentAnnouncements
