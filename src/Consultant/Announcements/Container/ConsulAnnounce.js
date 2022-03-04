import { useState } from "react";
import Announcement from "../Component/Announcement";
import Notification from "../Component/Notification";

import { MetaTags } from "react-meta-tags";

const ConsulAnnounce = () => {
  return (
    <div className="clt_announce-main">
      <MetaTags>
        <title>通知 | Arctics</title>
      </MetaTags>
      <Announcement />
      <Notification />
    </div>
  );
};
export default ConsulAnnounce;
