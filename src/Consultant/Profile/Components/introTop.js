import Photo from "../img/upload-photo.svg";
import Avatar from "../img/tmp_avatar.png";
import Star from "../img/star.svg";
import "./introTop.css";
const IntroTop = ({ name, times, star }) => {
  return (
    <>
      <div class="intro-top">
        <img class="intro-top-avatar" src={Avatar} alt="my avatar" />
        <img class="intro-top-photo" src={Photo} alt="my avatar" />
      </div>
      <div class="intro-top">
        <span class="intro-top-name">{name}</span>

        <div>
          <span class="intro-top-already">已諮詢</span>
          <span class="intro-top-times">{times}次</span>
        </div>
        <div>
          <span>
            <img class="intro-top-star" src={Star} alt="star" />
          </span>
          <span class="intro-top-point">{star}</span>
        </div>
      </div>
    </>
  );
};

export default IntroTop;
