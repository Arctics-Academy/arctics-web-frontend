import { useState } from "react";
import Announcement from "../Component/Announcement";
import Notification from "../Component/Notification";

const ConsulAnnounce = () => {
  return (
    <div className="clt_announce-main">
      <Announcement />;
      <Notification />
    </div>
  );
};
export default ConsulAnnounce;
