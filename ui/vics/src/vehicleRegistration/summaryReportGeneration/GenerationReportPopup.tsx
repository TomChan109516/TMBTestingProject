import {
  Button,
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  Select,
  SelectItem,
  Input,
} from "@nextui-org/react";
import React from "react";

function GenerationReportPopup(props) {
  const { showGenerationReportPopup, setGenerationReportPopup } = props;
  const handleClose = () => {
    setGenerationReportPopup(false);
  };
  return (
    <div>
      <>
        <Modal
          isOpen={showGenerationReportPopup}
          onClose={handleClose}
          isDismissable={false}
          size="3xl"
          className="font-calibri text-inputTxt max-w-3xl h-fit rounded-sm"
        >
          <ModalContent>
            {(onClose) => (
              <>
                <div
                  className="bg-lightblue h-7 w-[100%] p-1 font-bold text-black text-center text-popupHeading:'16px',
 font-calibri"
                >
                  Summary Report Generation Enquiry
                </div>

                <ModalBody>
                  <div className="grid grid-cols-2 text-right gap-1 font-calibri text-inputTxt ">
                    <div className=" flex flex-grow-0 m-1 items-center  font-calibri  ">
                      <span className="ml-1 w-[40%] ">Veh.class</span>
                      <Select
                        placeholder="Select Vehicle"
                        labelPlacement="outside-left"
                        size="sm"
                        className="ml-2 w-[40%]"
                        radius="none"
                        variant="bordered"
                      >
                        <SelectItem key={1}>Select Vehicle</SelectItem>
                      </Select>
                    </div>
                    <div className=" flex flex-grow-0 m-1 items-center font-calibri  ">
                      <span className="ml-1 w-[35%] ">Report Type</span>
                      <Select
                        placeholder="Overall Report"
                        labelPlacement="outside-left"
                        size="sm"
                        className="ml-2 w-[40%]"
                        radius="none"
                        variant="bordered"
                      >
                        <SelectItem key={1}>Overall Report</SelectItem>
                      </Select>
                    </div>
                    <div className="flex m-1 items-center  font-calibri   ">
                      <span className="ml-5 w-[35%] font-bold">Lane No.</span>
                      <Select
                        labelPlacement="outside-left"
                        size="sm"
                        className="ml-2 w-[40%]"
                        radius="none"
                        variant="bordered"
                      >
                        <SelectItem key={1}></SelectItem>
                      </Select>
                    </div>
                    <div className=" flex flex-grow-0 m-1 items-center  font-calibri  ">
                      <span className="ml-1 w-[35%] ">Exam. code</span>
                      <Select
                        labelPlacement="outside-left"
                        size="sm"
                        className="ml-2 w-[40%]"
                        radius="none"
                        variant="bordered"
                      >
                        <SelectItem key={1}></SelectItem>
                      </Select>
                    </div>

                    <div className="flex m-1 items-center mt-20 font-calibri  ">
                      <span className="ml-5 w-[35%]">Start Date</span>
                      <Input
                        labelPlacement="outside-left"
                        size="sm"
                        className="ml-2 w-[40%] "
                        radius="none"
                        variant="bordered"
                        type="date"
                      ></Input>
                    </div>

                    <div className=" flex m-1 items-center mt-20 font-calibri  ">
                      <span className="ml-1 w-[35%]">End Date</span>
                      <Input
                        labelPlacement="outside-left"
                        size="sm"
                        className="ml-2 w-[40%]"
                        radius="none"
                        variant="bordered"
                        type="date"
                      ></Input>
                    </div>
                  </div>
                </ModalBody>
                <ModalFooter className=" justify-center  ">
                  <Button
                    className=" bg-tropicalrainforest text-white font-calibri  mr-4 rounded-sm h-6"
                    variant="light"
                    radius="none"
                    size="sm"
                  >
                    Generate Report
                  </Button>
                  <Button
                    className=" border-2 bg-white border-greyBorder font-calibri shadow-sm rounded-sm h-6 "
                    radius="none"
                    size="sm"
                    onPress={onClose}
                  >
                    Quit
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </>
    </div>
  );
}

export default GenerationReportPopup;
