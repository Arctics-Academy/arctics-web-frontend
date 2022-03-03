import { useState } from "react";

import Pen from "../img/edit-pen.svg";
import Eye from "../img/blue-eye-open.svg";
import Eyelash from "../img/eye-close.svg";
import "./accountTable.css";

const hidePassword = (pw) => {
  if (pw) return pw.replaceAll(/(.)/g, "*");
};

const Account = ({ profile }) => {
  const [editingEmail, setEditingEmail] = useState(false);
  const [editingPhone, setEditingPhone] = useState(false);
  const [editingPw, setEditingPw] = useState(false);
  const [myEmail, setMyEmail] = useState(profile.email);
  const [myPhone, setMyPhone] = useState(profile.mobile);
  const [myPw, setMyPw] = useState(profile.password);

  const myAccount = {
    email: {
      title: "電子信箱",
      verifyText: "驗證信箱",
      backupText: "+ 新增備援信箱",
    },
    phone: {
      title: "手機號碼",
      verifyText: "驗證號碼",
      backupText: "+ 新增備援號碼",
    },
    password: {
      title: "密碼",
    },
  };
  return (
    <div class="account">
      <table>
        <tr>
          <td>
            <span class="account-title">{myAccount.email.title}</span>
          </td>
          <td>
            {editingEmail ? (
              <>
                <input
                  type="email"
                  class="account-edit-input"
                  placeholder={"請輸入" + myAccount.email.title}
                  value={myEmail}
                  onChange={(e) => {
                    setMyEmail(e.target.value);
                  }}
                />
                <div class="account-edit-button">
                  <button class="account-edit-backup">
                    {myAccount.email.backupText}
                  </button>
                  <button class="account-edit-verify">
                    {myAccount.email.verifyText}
                  </button>
                </div>
              </>
            ) : (
              <>
                <div class="account-data">
                  {myEmail}
                  <button
                    class="account-pen"
                    onClick={() => {
                      setEditingEmail(true);
                    }}
                  >
                    <img src={Pen} alt="pen" />
                  </button>
                </div>
                <button class="account-backup">
                  {myAccount.email.backupText}
                </button>
              </>
            )}
          </td>
        </tr>
        <tr>
          <td>
            <span class="account-title">{myAccount.phone.title}</span>
          </td>
          <td>
            {editingPhone ? (
              <>
                <input
                  type="tel"
                  class="account-edit-input"
                  placeholder={"請輸入" + myAccount.phone.title}
                  value={myPhone}
                  onChange={(e) => {
                    setMyPhone(e.target.value);
                  }}
                />
                <div class="account-edit-button">
                  <button class="account-edit-backup">
                    {myAccount.phone.backupText}
                  </button>
                  <button class="account-edit-verify">
                    {myAccount.phone.verifyText}
                  </button>
                </div>
              </>
            ) : (
              <>
                <div class="account-data">
                  {myPhone}
                  <button
                    class="account-pen"
                    onClick={() => {
                      setEditingPhone(true);
                    }}
                  >
                    <img src={Pen} alt="pen" />
                  </button>
                </div>
                <button class="account-backup">
                  {myAccount.phone.backupText}
                </button>
              </>
            )}
          </td>
        </tr>
        <tr>
          <td>
            <span class="account-title">{myAccount.password.title}</span>
          </td>
          <td>
            {editingPw ? (
              <>
                <div>
                  <input
                    type="password"
                    class="account-edit-input"
                    placeholder="請輸入原密碼"
                  />
                  <img class="account-eye-icon" src={Eye} alt="eye" />
                </div>
                <div>
                  <input
                    type="password"
                    class="account-edit-input"
                    placeholder="請輸入新密碼"
                  />
                  <img class="account-eye-icon" src={Eyelash} alt="eyelash" />
                </div>

                <div class="account-edit-ps">
                  建議為8~16字元、英數混合之密碼
                </div>
                <div>
                  <input
                    class="account-edit-input"
                    type="password"
                    placeholder="請確認新密碼"
                  />
                  <img class="account-eye-icon" src={Eyelash} alt="eyelash" />
                </div>
                <div class="account-edit-button ">
                  <button class="account-edit-verify-pw">儲存密碼</button>
                </div>
              </>
            ) : (
              <>
                <div class="account-data">
                  {hidePassword(myPw)}
                  <button
                    class="account-pen"
                    onClick={() => {
                      setEditingPw(true);
                    }}
                  >
                    <img src={Pen} alt="pen" />
                  </button>
                </div>
              </>
            )}
          </td>
        </tr>
      </table>
    </div>
  );
};
export default Account;
