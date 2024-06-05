import React, { useState } from "react";
import AppointmentLayout from "../vehicleRegistration/registration/Appointment";
import TextArea from "../common/components/TextArea";
import ResultAndSubmit from "../common/components/ResultAndSubmit";
import { useDispatch } from "react-redux";
import { setisAccepted } from "../vehicleRegistration/submissionConfirmation/state/SubmissionConfirmationSlice";

function BrakeTestLane() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedRadio, setSelectedRadio] = useState("");
  const [isBtnDisable, setIsBtnDisable] = useState(false);
  const [tabName, setTabName] = useState("Brake Test Lane");

  const handleClick = () => {
    setShowPopup(true);
  };

  const dispatch = useDispatch();

  const onRadioButtonChange = (value: string) => {
    dispatch(setisAccepted({ [tabName]: { isAccepted: false } }));
    setSelectedRadio(value);
  };

  return (
    <div className="h-full">
      <div>
        <AppointmentLayout heading="100m Brake Test Lane" />
      </div>
      <div className=" mb-4">
        <TextArea />
      </div>
      <div className="">
        <ResultAndSubmit
          selectedRadio={selectedRadio}
          onRadioButtonChange={onRadioButtonChange}
          isBtnDisable={isBtnDisable}
          setIsBtnDisable={setIsBtnDisable}
          showPopup={showPopup}
          setShowPopup={setShowPopup}
          tabName={tabName}
          handleClick={handleClick}
          extraButtons={{
            length: 2,
            buttons: [
              {
                name: "save",
              },
              {
                name: "back",
              },
            ],
          }}
        />
      </div>
    </div>
  );
}

export default BrakeTestLane;
