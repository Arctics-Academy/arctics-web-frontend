import StandardDisplay from "../Component/Standard_Display";
import PersonalDetails from "../Component/Personal_Detail";
import "../std_payment-check.css";

const paymentCheck = () => {
  return (
    <div className="std_payment-check-main">
      <StandardDisplay />
      <PersonalDetails />
    </div>
  );
};
export default paymentCheck;
