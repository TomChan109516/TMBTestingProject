import React, { useState } from "react";
import ResultAndSubmit from "../common/components/ResultAndSubmit";
import TextArea from "../common/components/TextArea";
import AppointmentLayout from "../vehicleRegistration/registration/Appointment";
import { useDispatch } from "react-redux";
import { setisAccepted } from "../vehicleRegistration/submissionConfirmation/state/SubmissionConfirmationSlice";

function MotorcycleBrakeTestRamp() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedRadio, setSelectedRadio] = useState("");
  const [isBtnDisable, setIsBtnDisable] = useState(false);
  const [tabName, setTabName] = useState("Motorcycle Brake Test Ramp");

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
        <AppointmentLayout heading="Motorcycle Brake Test Ramp" />
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

export default MotorcycleBrakeTestRamp;
