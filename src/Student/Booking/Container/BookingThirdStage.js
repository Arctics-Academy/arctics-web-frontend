// Import Components
import MeetingDetailsCard from "../Component/MeetingDetailsCard";
import BlankFooter from "../Component/BlankFooter";
import StageDisplay from '../Component/StageDisplay'

// Component
const Booking = () => {
  return (
    <>
      <StageDisplay stage={3}/>
      <MeetingDetailsCard />
      <BlankFooter />
    </>
  );
};

export default Booking;
