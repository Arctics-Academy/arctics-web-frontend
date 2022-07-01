// Import Components
import StageDisplay from '../Component/StageDisplay'
import DetailCard from '../Component/DetailCard'
import BlankFooter from '../Component/BlankFooter'

// Import Stylesheets
import '../std-booking.css'

// Component
const BookingThirdStage = () => {
  return (
    <>
      <StageDisplay stage={3}/>
      <DetailCard />
      <BlankFooter />
    </>
  );
};

export default BookingThirdStage
