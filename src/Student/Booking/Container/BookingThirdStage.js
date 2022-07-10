// Import Components
import StageDisplay from '../Component/StageDisplay'
import DetailCard from '../Component/DetailCard'
import BlankFooter from '../Component/BlankFooter'
import { MetaTags } from 'react-meta-tags'

// Import Stylesheets
import '../std-booking.css'

// Component
const BookingThirdStage = ({ demo=false }) => {
  return (
    <>
      <MetaTags>
        <title>確認付款 | Arctics</title>
      </MetaTags>
      <StageDisplay stage={3}/>
      <DetailCard demo={demo} />
      <BlankFooter />
    </>
  );
};

export default BookingThirdStage
