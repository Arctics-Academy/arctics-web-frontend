import IntroTop from "../Components/introTop";
import EditTable from "../Components/editTable";
import Line1 from "../Components/line1";

const Edit = ({ profile }) => {
  return (
    <>
      <IntroTop profile={profile} page="edit" />
      <Line1 />
      <EditTable profile={profile} />
    </>
  );
};

export default Edit;
