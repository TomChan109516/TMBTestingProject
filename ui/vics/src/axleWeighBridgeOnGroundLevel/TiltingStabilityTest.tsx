import { Input } from "@nextui-org/react";
import AppointmentLayout from "../vehicleRegistration/registration/Appointment";
import React, { useState } from "react";
import ResultAndSubmit from "../common/components/ResultAndSubmit";
import TextArea from "../common/components/TextArea";
import { useDispatch } from "react-redux";
import { setisAccepted } from "../vehicleRegistration/submissionConfirmation/state/SubmissionConfirmationSlice";

function TiltingStabilityTest() {
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
    <>
      <div className="mt-3">
        <h1 className="border-white mb-1 text-left font-bold text-sm ml-2">
          Tilting Stability Test
        </h1>
        <div className="font-bold  text-[13px]">
          <AppointmentLayout heading="Axle Weigh Bridge On Ground Level"  />
        </div>

        <div className="grid lg:grid-cols-11 sm:grid-cols-4 ml-[59px] w-[100%] ">
          <div className="border-white mt-3 text-[13px] text-left font-bold text-sm ml-2">
            Tilting angle{" "}
          </div>

          <div className="ml-[2px] mt-2">
            <Input
              radius="none"
              labelPlacement="outside-left"
              size="sm"
              className="w-[158px]   border-greyBorder bg-white p-1"
              variant="bordered"
            />
          </div>
        </div>
      </div>
      <div className=" mb-4">
        <TextArea />
      </div>
      <div className="mb-2">
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
    </>
  );
}
export default TiltingStabilityTest;
