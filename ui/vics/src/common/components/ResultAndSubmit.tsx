import React, { useEffect, useState } from "react";
import {
  Button,
  Radio,
  RadioGroup,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import { addComponent } from "../../vehicleRegistration/submissionConfirmation/state/SubmissionConfirmationSlice";
import SubmissionConfirmationPopUp from "../../vehicleRegistration/submissionConfirmation/SubmissionConfirmationPopUp";
import { ResultAndSubmitProps } from "../model/ResultAndSubmit";
import { useNavigate } from "react-router-dom";

function ResultAndSubmit({
  tabName,
  url,
  data,
  showPopup,
  setShowPopup,
  setNeedInspection,
  setSubmitted,
  setIsBtnDisable,
  isBtnDisable,
  selectedRadio,
  handleClick,
  onRadioButtonChange,
  extraButtons,
}: ResultAndSubmitProps) {
  const [name, setName] = useState<string>(tabName);
  const dispatch = useDispatch();
  const names = useSelector((state) => state.submissionConfirmation);
  const deviceType = localStorage.getItem("deviceType") || "";

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(addComponent(name));
  }, [dispatch, name, names]);

  const buttonHandler = (fn) => {
    if (fn !== undefined) {
      fn();
    }
  };

  return (
    <div>
      <div>
        <div className="flex gap-4 justify-center font-calibri font-bold ">
          <RadioGroup
            orientation="horizontal"
            className="ml-4 mt-1"
            value={selectedRadio}
            onValueChange={onRadioButtonChange}
            data-testid="radio-button"
          >
            <span className="mr-4 text-popupHeading">Result</span>
            <Radio
              size="sm"
              classNames={{
                wrapper:
                  "group-data-[selected=true]:bg-persianGreen group-data-[selected=true]:border-persianGreen text-inputTxt font-calibri",
                control: "bg-white",
                base: "border-persianGreen",
              }}
              value="F"
            >
              <span className="text-red">FAIL</span>
            </Radio>
            <Radio
              size="sm"
              classNames={{
                wrapper:
                  "group-data-[selected=true]:bg-persianGreen group-data-[selected=true]:border-persianGreen text-inputTxt font-calibri",
                control: "bg-white",
                base: "border-persianGreen",
              }}
              value="P"
            >
              <span className="text-lightCyan">PASS</span>
            </Radio>
            <Radio
              size="sm"
              classNames={{
                wrapper:
                  "group-data-[selected=true]:bg-persianGreen group-data-[selected=true]:border-persianGreen text-inputTxt font-calibri",
                control: "bg-white",
                base: "border-persianGreen",
              }}
              value="S"
            >
              <span className="text-darkRed">SKIP</span>
            </Radio>
          </RadioGroup>
          <span className="ml-4 mt-1 text-popupHeading">Skip Test Reason</span>

          <Select
            placeholder="-"
            labelPlacement="outside-left"
            data-testid="vehicleClass"
            className="w-[15%]"
            radius="none"
            size="sm"
            name="center"
            aria-label="center"
            variant="bordered"
          >
            <SelectItem key={2}>Data</SelectItem>
          </Select>
        </div>

        <div className="flex gap-4 items-center justify-center mt-5 font-calibri font-bold mb-8">
          {extraButtons?.buttons
            .filter((button) => button.name !== "back")
            .map((button, index) => (
              <Button
                radius="none"
                className={
                  isBtnDisable
                    ? "bg-darkGrey text-white font-calibri font-bold  h-6"
                    : "bg-persianGreen text-white font-calibri font-bold h-6"
                }
                isDisabled={isBtnDisable}
                onClick={() => buttonHandler(button.handler)}
                key={index}
              >
                {button.name}
              </Button>
            ))}

          <Button
            radius="none"
            className={
              selectedRadio === "" || isBtnDisable
                ? "bg-darkGrey text-white font-calibri font-bold h-6"
                : "bg-persianGreen text-white font-calibri font-bold h-6"
            }
            onClick={handleClick}
            isDisabled={selectedRadio === "" || isBtnDisable}
            id="submit-btn"
            data-testid="submit-button"
          >
            Submit
          </Button>
        </div>
        <div className=" flex items-center mx-auto w-[95%] -mt-14 justify-end font-calibri font-bold">
          {extraButtons?.buttons.find((button) => button.name === "back") && (
            <Button
              radius="none"
              className="bg-persianGreen text-white font-calibri font-bold h-6"
              onClick={() => navigate("/vehicleRegistration")}
            >
              {deviceType === "Desktop" ? "Back" : "Back to Unconfirmed List"}
            </Button>
          )}
        </div>
        {showPopup && (
          <SubmissionConfirmationPopUp
            showSubmissionConfirmationPopUp={showPopup}
            setSubmissionConfirmationPopUp={setShowPopup}
            setNeedInspection={setNeedInspection}
            setSubmitted={setSubmitted}
            setIsBtnDisable={setIsBtnDisable}
            url={url}
            data={data}
            tabName={tabName}
          ></SubmissionConfirmationPopUp>
        )}
      </div>
    </div>
  );
}

export default ResultAndSubmit;
