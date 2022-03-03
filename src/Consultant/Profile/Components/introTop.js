import Photo from "../img/upload-photo.svg";
import Avatar from "../img/tmp_avatar.png";
import Star from "../img/star.svg";
import Pen from "../img/edit-pen.svg";
import Eye from "../img/eye-no-lash.svg";
import Calendar from "../img/calendar.svg";
import "./introTop.css";

const IntroTop = ({ profile, page, toEditMode }) => {
  const { name, count, star } = profile;
  const handleClickEdit = () => {
    toEditMode(true);
  };
  const handleClickCancel = () => {
    toEditMode(false);
  };
  const handleClickConfirm = () => {
    toEditMode(false);
  };
  const handleClickEye = () => {};
  const topButton = {
    intro: [
      {
        text: "學生角度檢視",
        src: Eye,
        key: "eye",
        onClick: () => handleClickEye(),
      },
      {
        text: "編輯個人檔案",
        src: Pen,
        key: "pen",
        onClick: () => handleClickEdit(),
      },
    ],
    edit: [
      {
        text: "取消",
        src: "",
        key: "cancel",
        onClick: () => handleClickCancel(),
      },
      {
        text: "確認",
        src: "",
        key: "confirm",
        onClick: () => handleClickConfirm(),
      },
    ],
  };
  const showButton = (buttons) => {
    return (
      <div class="introTop">
        {buttons.map((e) => (
          <button class={"introTop-".concat(e.key)} onClick={e.onClick}>
            <img src={e.src} alt={e.key} />
            {e.text}
            {console.log(e.onClick)}
          </button>
        ))}
      </div>
    );
  };
  const showButtonByPage = (page) => {
    if (page === "intro") return showButton(topButton.intro);
    else if (page === "intro-edit") return showButton(topButton.edit);
  };
  return (
    <div class="introTop">
      <div class="introTop">
        <img class="introTop-avatar" src={Avatar} alt="my avatar" />
        <img class="introTop-photo" src={Photo} alt="camera" />
      </div>
      <div class="introTop">
        <span class="introTop-name">{name}</span>
        <div>
          <span class="introTop-already">已諮詢</span>
          <span class="introTop-times">{count}次</span>
        </div>
        {page !== "account" && (
          <div>
            <span>
              <img class="introTop-star" src={Star} alt="star" />
            </span>
            <span class="introTop-point">{star}</span>
          </div>
        )}
      </div>

      {showButtonByPage(page)}
    </div>
  );
};

export default IntroTop;
