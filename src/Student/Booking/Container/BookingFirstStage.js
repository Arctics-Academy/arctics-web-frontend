import StageDisplay from '../Component/StageDisplay'
import BookingCard from '../Component/BookingCard'
import BlankFooter from '../Component/BlankFooter'

const BookingFirstStage = () => {
  return (
    <>
      <StageDisplay stage={1} />
      <BookingCard />
      <BlankFooter />
    </>
  )
}

export default BookingFirstStage