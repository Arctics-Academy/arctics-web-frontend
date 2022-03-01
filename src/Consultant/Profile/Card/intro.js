import { useState } from "react";
import IntroTop from "../Components/introTop";
import EditTable from "../Components/editTable";
import IntroTable from "../Components/introTable";
import Line1 from "../Components/line1";

const Intro = ({ profile }) => {
  const [editMode, setEditMode] = useState(false);
  return (
    <>
      <IntroTop
        profile={profile}
        page={editMode ? "intro-edit" : "intro"}
        toEditMode={(e) => {
          setEditMode(e);
        }}
      />

      <Line1 />
      {editMode ? (
        <EditTable profile={profile} />
      ) : (
        <IntroTable profile={profile} />
      )}
    </>
  );
};

export default Intro;
