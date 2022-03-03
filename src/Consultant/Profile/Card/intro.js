import { useState } from "react";
import IntroTop from "../Components/introTop";
import EditTable from "../Components/editTable";
import IntroTable from "../Components/introTable";
import Line1 from "../Components/line1";

const Intro = ({ id, profile, handleStudentView }) => {
  const [mode, setMode] = useState("intro-main");
  const getMode = (mode, profile) => {
    if (mode === "intro-main") {
      handleStudentView(false);
      return <IntroTable profile={profile} studentView={false} />;
    } else if (mode === "intro-edit") {
      handleStudentView(false);
      return <EditTable id={id} profile={profile} changePage={(e) => setMode(e)} />;
    } else if (mode === "intro-view") {
      handleStudentView(true);
      return <IntroTable profile={profile} studentView={true} />;
    }
  };

  return (
    <>
      <IntroTop profile={profile} page={mode} changePage={(e) => setMode(e)} />
      <Line1 />
      {getMode(mode, profile)}
    </>
  );
};

export default Intro;
