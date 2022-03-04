import IntroTop from "../Components/introTop";
import AccountTable from "../Components/accountTable";
import Line1 from "../Components/line1";
const Account = ({ profile, hidden, setHidden, hidden2, setHidden2 }) => {
  return (
    <>
      <IntroTop profile={profile} page="account" hidden={hidden} setHidden={setHidden} />
      <Line1 />
      <AccountTable profile={profile} hidden={hidden2} setHidden={setHidden2} />
    </>
  );
};
export default Account;
