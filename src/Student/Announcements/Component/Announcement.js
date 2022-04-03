import "../std_announce.css";
import icon from "../img/announcement_icon.png";

const announce = [
  {
    title: "【問卷調查】",
    main: "顧客問卷抽大獎",
    content: "內文內文內文內文內文內文內文內文內文內文內文內文內文……",
    time: "2021/08/17（二）15:34",
  },
  {
    title: "【問卷調查】",
    main: "推薦朋友來",
    content: "內文內文內文內文內文內文內文內文內文內文內文內文內文……",
    time: "2021/08/17（二）15:34",
  },
  {
    title: "【問卷調查】",
    main: "推薦朋友來",
    content: "內文內文內文內文內文內文內文內文內文內文內文內文內文……",
    time: "2021/08/17（二）15:34",
  },
  {
    title: "【平台快訊】",
    main: "維修公告",
    content: "內文內文內文內文內文內文內文內文內文內文內文內文內文……",
    time: "2021/08/17（二）15:34",
  },
];

const announcements = announce.map((obj, idx) => {
  return (
    <div className="std_announce-line-wrapper" key={idx}>
      <p className="std_announce-line-title">{obj.title}</p>
      <p className="std_announce-line-main">{obj.main}</p>
      <p className="std_announce-line-content">{obj.content}</p>
      <p className="std_announce-line-time">{obj.time}</p>
      <div className="std_announce-line-border"></div>
    </div>
  );
});
const Announcement = () => {
  return (
    <div className="std_announce-wrapper">
      <img src={icon} alt="icon" />
      <span className="std_announce-head">最新公告</span>
      <div className="std_announce-display-frame">{announcements}</div>
    </div>
  );
};

export default Announcement;
