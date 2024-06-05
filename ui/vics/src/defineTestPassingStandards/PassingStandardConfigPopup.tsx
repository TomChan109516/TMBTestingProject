import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Select,
  SelectItem,
  Selection,
} from "@nextui-org/react";
import PassingStandardconfigAllPopUp from "./PassingStandardconfigAllPopUp";

const tests = [
  "OHM Test",
  "HT Test",
  "Brake Roller Test (BRT)",
  "Smoke Test - Diesel",
  "Smoke Test - Petrol",
  "Smoke Test - LPG",
  "Speedometer",
  "SLD",
  "SDD",
  "Taximeter Test",
];

const testsSpecific = ["General", "TA"];

function PassingStandardConfigPopup(props) {
  const [testValue, setTestValue] = React.useState<
    Selection & { currentKey?: string }
  >(new Set([]));
  const [testSpecificValue, setTestSpecificValue] = React.useState<
    Selection & { currentKey?: string }
  >(new Set([]));

  const open = props.showPassingStandardConfigPopup;

  const handleClose = () => {
    props.closePassingStandardConfigPopup(false);
  };
  const [showPassingStandardConfigAllPopup, setPassingStandardConfigAllPopup] =
    useState(false);

  const closePassingStandardConfigPopup = (val) => {
    setPassingStandardConfigAllPopup(val);
  };

  const handleNext = () => {
    setPassingStandardConfigAllPopup(true);
  };

  return (
    <div>
      <Modal
        size="lg"
        isOpen={open}
        onClose={handleClose}
        isDismissable={false}
      >
        <ModalContent className="">
          {() => (
            <>
              <ModalHeader className="flex flex-col text-black font-calibri font-bold  bg-lightGreen text-center i justify-center  gap-1">
                Passing Standard Config
              </ModalHeader>
              <ModalBody className=" px-0">
                <div>
                  <div>
                    <p className="flex justify-center font-semibold mt-4">
                      Please select the test to configure the Passing Standard
                    </p>
                    <div>
                      <div className=" flex justify-center mb-5 mt-6 mx-auto space-x-[10px]">
                        <div className=" ml-6">
                          <p className="font-semibold">Test Type</p>
                        </div>
                        <div>
                          <Select
                            labelPlacement="outside-left"
                            className="text-lg text-black font-bold ml-4 mr-4 "
                            classNames={{ base: "w-[180px]" }}
                            radius="none"
                            size="sm"
                            name="Test Type"
                            aria-label="Test Type"
                            variant="bordered"
                            placeholder="OHM Test"
                            selectedKeys={testValue}
                            onSelectionChange={setTestValue}
                          >
                            {tests.map((test, index) => (
                              <SelectItem key={index} value={test}>
                                {test}
                              </SelectItem>
                            ))}
                          </Select>
                        </div>
                      </div>
                      <div className=" flex justify-center mx-auto md:space-x-[-7px] ml-2 ">
                        <div className="ml-3">
                          <p className=" font-semibold ">Test Specific</p>
                        </div>
                        <div className=" mb-2">
                          <Select
                            labelPlacement="outside-left"
                            className="text-lg text-black font-bold ml-4 mr-4 "
                            classNames={{ base: "w-[180px]" }}
                            radius="none"
                            size="sm"
                            name="Test Specific"
                            aria-label="Test Specific"
                            variant="bordered"
                            placeholder="General"
                            selectedKeys={testSpecificValue}
                            onSelectionChange={setTestSpecificValue}
                          >
                            {testsSpecific.map((test, index) => (
                              <SelectItem key={index} value={test}>
                                {test}
                              </SelectItem>
                            ))}
                          </Select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter className="justify-center mb-8 ml-16 ">
                <Button
                  className="text-white h-6 font-bold bg-tropicalrainforest border-[#e0dede] rounded-sm mr-6"
                  radius="none"
                  name="Next"
                  aria-label="Next"
                  onClick={handleNext}
                >
                  Next
                </Button>
                <Button
                  className="text-black font-calibri h-6 font-bold bg-white border-1 border-[#e0dede] ml-0 mr-10 rounded-sm"
                  radius="none"
                  onClick={() => props.closePassingStandardConfigPopup(false)}
                >
                  Cancel
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      {showPassingStandardConfigAllPopup && (
        <PassingStandardconfigAllPopUp
          showPassingStandardConfigAllPopup={showPassingStandardConfigAllPopup}
          closePassingStandardConfigAllPopup={closePassingStandardConfigPopup}
          testType={tests[testValue?.currentKey || 0]}
          testSpecific={testsSpecific[testSpecificValue?.currentKey || 0]}
          handleClose={handleClose}
        ></PassingStandardconfigAllPopUp>
      )}
    </div>
  );
}

export default PassingStandardConfigPopup;