import Intro from "../Components/Intro";

import "./ConsulProfile.css";

const ConsulProfile = () => {
  return (
    <div class="main">
      <div>
        <span class="title">個人檔案</span>
        <div class="Line-1"></div>
        <div class="menu">
          <button>基本資料</button>
          <button>帳戶設定</button>
          <button>時間表</button>
        </div>
      </div>
      <div>
        <Intro />
      </div>
    </div>
  );
};

export default ConsulProfile;
