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
import AllInOneFillingTheFormulaeConfig from "./AllInOneFillingTheFormulaeConfig";
const tests = [
  "Brake Test",
  "Speedometer",
  "SDD",
];
const testsSpecific = ["General", "TA"];
function NewTestFormulae(props) {
  const [testValue, setTestValue] = React.useState<
    Selection & { currentKey?: string }
  >(new Set([]));
  const [testSpecificValue, setTestSpecificValue] = React.useState<
    Selection & { currentKey?: string }
  >(new Set([]));

  const {showNewTestFormulae ,closeNewTestFormulae} = props;
   const handleClose = () => {
    closeNewTestFormulae(false);
   }
    const [showAllInOneFillingTheFormulaeConfig, setshowAllInOneFillingTheFormulaeConfig] = useState(false);

  const closeAllInOneFillingTheFormulaeConfig = (val) => {
    setshowAllInOneFillingTheFormulaeConfig(val);
  };

  const handleNext = () => {
    setshowAllInOneFillingTheFormulaeConfig(true);
  };

  return (
    <div>
      <Modal
        size="lg"
        isOpen={showNewTestFormulae}
        onClose={closeNewTestFormulae}
        isDismissable={false}
      >
        <ModalContent className="">
          {() => (
            <>
              <ModalHeader className="flex flex-col text-black font-calibri font-bold  bg-lightGreen text-center i justify-center  gap-1">
                Formulae Config
              </ModalHeader>
              <ModalBody className=" px-0">
                <div>
                  <div>
                    <p className="flex justify-center font-semibold mt-4">
                    Please select the test to configure the formulae
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
                            placeholder="Brake Test"
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
                      <div className=" flex justify-center mx-auto md:space-x-[-7px] ml-2 mt-2 flex flex-row">
                        <div className="ml-6 text-[15px] ">
                          <p className=" font-semibold  ">Formulae <p className="ml-3">Type</p></p>
                        </div>
                        <div className=" mb-2">
                          <Select
                            labelPlacement="outside-left"
                            className="text-lg text-black font-bold ml-6 mr-4 "
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
                  className="text-white h-6 font-bold bg-tropicalrainforest  rounded-sm mr-6"
                  radius="none"
                  name="Next"
                  aria-label="Next"
                  onClick={handleNext}
                >
                  Next
                </Button>
                <Button
                  className="text-black font-calibri h-6 font-bold bg-white border-1 ml-0 mr-10 rounded-sm"
                  radius="none"
                  onClick={() => props.closeNewTestFormulae(false)}
                >
                  Cancel
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      {showAllInOneFillingTheFormulaeConfig && (
        <AllInOneFillingTheFormulaeConfig
          showAllInOneFillingTheFormulaeConfig={showAllInOneFillingTheFormulaeConfig}
          closeAllInOneFillingTheFormulaeConfig={closeAllInOneFillingTheFormulaeConfig}
          testType={tests[testValue?.currentKey || 0]}
          testSpecific={testsSpecific[testSpecificValue?.currentKey || 0]}
          handleClose={handleClose}
        ></AllInOneFillingTheFormulaeConfig>
      )}
    </div>
  );
}
export default NewTestFormulae;