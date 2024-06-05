import React, { useState } from "react";
import AppointmentLayout from "../vehicleRegistration/registration/Appointment";
import TextArea from "../common/components/TextArea";
import { useDispatch } from "react-redux";
import ResultAndSubmit from "../common/components/ResultAndSubmit";
import { setisAccepted } from "../vehicleRegistration/submissionConfirmation/state/SubmissionConfirmationSlice";
const SweptCircleAndPortableBrakeRollerTester = ({title}) => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedRadio, setSelectedRadio] = useState("");
  const [isBtnDisable, setIsBtnDisable] = useState(false);
  const [tabName, setTabName] = useState(title);

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
        <AppointmentLayout heading={title} />
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
export default SweptCircleAndPortableBrakeRollerTester;