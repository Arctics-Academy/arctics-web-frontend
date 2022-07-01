import StageDisplay from '../Component/StageDisplay'
import SelectionCard from '../Component/SelectionCard'
import BlankFooter from '../Component/BlankFooter'

const BookingFirstStage = () => {
  return (
    <>
      <StageDisplay stage={1} />
      <SelectionCard />
      <BlankFooter />
    </>
  )
}

export default BookingFirstStage