import IntroTop from "../Components/introTop";
import AccountTable from "../Components/accountTable";
import Line1 from "../Components/line1";
const Account = ({ profile }) => {
  return (
    <>
      <IntroTop profile={profile} page="account" />
      <Line1 />
      <AccountTable profile={profile} />
    </>
  );
};
export default Account;
