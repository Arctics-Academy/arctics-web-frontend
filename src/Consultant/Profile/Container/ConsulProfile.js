import Info from "./Info";
import Base from "../Components/Base";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import "./ConsulProfile.css";

const MyButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  padding: "6px 12px",
  border: "1px solid",
  lineHeight: 1.5,
  backgroundColor: "#0063cc",
  borderColor: "#0063cc",

  "&:hover": {
    backgroundColor: "#0069d9",
    borderColor: "#0062cc",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#0062cc",
    borderColor: "#005cbf",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
});

const ConsulProfile = () => {
  return (
    <div class="main">
      <span class="title">個人檔案</span>
      <div class="Line-1"></div>
      <div class="menu">
        <button>基本資料</button>
        <button>帳戶設定</button>
        <button>時間表</button>
      </div>
    </div>
  );
};

export default ConsulProfile;
