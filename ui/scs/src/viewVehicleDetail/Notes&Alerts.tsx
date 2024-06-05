import React, { useState } from "react";
import { CalendarPlus } from "tabler-icons-react";
import COFExpiryDatePopup from "./COFExpiryDate";

function NotesAndAlerts() {
  const [cofExpiryDatePopup, setCofExpiryDatePopup] = useState<boolean>(false);

  const handleCofExpiryDatePopup = () => {
    setCofExpiryDatePopup(true);
  };
  return (
    <div className="text-[11px] p-3">
      <div className="flex-initial text-left p-[2px]">
        Earliest Al Exam Date: 13/09/2020
      </div>
      <div className="flex-initial bg-[#dbf1e9] text-left p-[2px]">
        Earliest Al Booking Date: 13/07/2020
      </div>
      <div className="flex-initial  text-left p-[2px]">
        Last Al Exam Date: 10/11/2026 (EURO DCV)
      </div>
      <div className="pr-2 bg-[#dbf1e9] h-6 p-1">
        <div className="float-left"> COF needed on and after: 01/01/2024 </div>
        <div className="float-left ml-[5px]">
          {" "}
          <CalendarPlus
            data-testid="EditCalendarIcon"
            size="18"
            className="bg-[#00AF8F] text-white rounded-sm"
            onClick={handleCofExpiryDatePopup}
          />
        </div>
      </div>
      <div className="flex-initial  text-left p-[2px]">
        The vehicle is on alertlist: 40A02
      </div>
      <div>
        {" "}
        {cofExpiryDatePopup && (
          <COFExpiryDatePopup
            cofExpiryDatePopup={cofExpiryDatePopup}
            setCofExpiryDatePopup={setCofExpiryDatePopup}
          />
        )}
      </div>
    </div>
  );
}

export default NotesAndAlerts;
