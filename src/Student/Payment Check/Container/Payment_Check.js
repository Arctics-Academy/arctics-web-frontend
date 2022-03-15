import { useState } from "react";
import StandardDisplay from "../Component/Standard_Display";
import PersonalDetails from "../Component/Personal_Detail"

const paymentCheck = () => {
  return (
    <div className="std_payment-check-main">
      <StandardDisplay />
      <PersonalDetails />
    </div>
  );
};
export default paymentCheck;
