import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Divider,
  Input,
  Textarea,
} from "@nextui-org/react";
import React from "react";
function DynoPrinting(props) {
  const handleClose = () => {
    props.setView(false);
  };
  return (
    <>
      <Modal
        size="xl"
        className="rounded-sm overflow-hidden"
        onClose={handleClose}
        isOpen={true}
        isDismissable={false}
        hideCloseButton={true}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col text-black font-calibri font-bold bg-lightGreen text-center  justify-center  ">
                Remote Authorization
              </ModalHeader>
              <ModalBody>
                <div className=" w-[100%] text-center items-center  text-black  font-bold">
                  <div className="flex flex-row justify-center  ">
                    <div className="justify-center font-bold text-bold text-[13px]">
                      The vehicle has completed Dyno test and requesting to
                      print exam report
                    </div>
                  </div>
                </div>
                <div className="w-[100%] flex item-center text-center text-black  font-bold justify-center font-bold text-[13px] ">
                  <div className="w-[50%] text-right">Dyno Chit Time: </div>
                  <div className="w-[50%] text-left  font-bold text-[12px] text-darkGrey ml-2">
                    11:00:32(By Chan Da Man){" "}
                  </div>
                </div>
                <div className="w-[100%] flex text-center items-center  text-black  font-bold justify-center font-bold text-[13px]">
                  <div className="w-[50%] text-right">Request By: </div>
                  <div className="w-[50%] text-left font-bold text-[12px] text-darkGrey ml-2">
                    Wrong Da Man (Dyno 1){" "}
                  </div>
                </div>
                <div className="w-[100%] flex items-center text-center text-black  font-bold justify-center font-bold text-[13px] ">
                  <div className="w-[50%] text-right ">Appt. No: </div>
                  <div className="w-[50%] text-left font-bold text-[12px] text-darkGrey ml-2">
                    12334566789{" "}
                  </div>
                </div>
                <div className="w-[100%] flex items-center text-center text-black  font-bold justify-center font-bold text-[13px]  ">
                  <div className="w-[50%] text-right ">Reg. Mark: </div>
                  <div className="w-[50%] text-left font-bold text-[12px] text-darkGrey ml-2">
                    FB2115{" "}
                  </div>
                </div>
              </ModalBody>
              <ModalFooter className="justify-center ">
                <Button
                  className="text-white font-calibri font-bold  rounded-sm bg-persianGreen border-1 border-greyBorder h-8 ml-4 w-[150px] "
                  variant="light"
                  radius="none"
                  size="lg"
                >
                  Modify Defect
                </Button>
                <Button className="text-white font-calibri font-bold  rounded-sm bg-persianGreen border-1 border-greyBorder h-8 ml-4 w-[150px]">
                  Modify Stamp
                </Button>
              </ModalFooter>
              <div className="flex  items-center space-x-19 -mx-[24px] mb-3 ">
                <Divider orientation="horizontal" />
              </div>
              <div className="w-[100%] flex item-center text-center text-black  font-bold justify-center font-bold text-[12px] ">
                <div className="w-[50%] text-left pl-[220px]">Test Type: </div>
                <div className="w-[50%] text-left  font-bold text-[12px] text-darkGrey ml-2">
                  Dyno{" "}
                </div>
              </div>
              <div className="w-[100%] flex item-center text-center text-black  font-bold justify-center font-bold text-[12px] ">
                <div className="w-[50%] text-left  pl-[220px]">Time: </div>
                <div className="w-[50%] text-left  font-bold text-[12px] text-darkGrey ml-2">
                  11:15:32{" "}
                </div>
              </div>
              <div className="w-[100%] flex item-center text-center text-black mr-2 font-bold justify-center font-bold text-[12px] ">
                <div className="w-[50%] text-left pl-[220px]">Result: </div>
                <div className="w-[50%] text-left  font-bold text-[12px] text-persianGreen ml-2">
                  Pass{" "}
                </div>
              </div>
              <ModalFooter className="justify-center ">
                <Button
                  className="text-white font-calibri font-bold rounded-sm bg-persianGreen border-greyBorder h-8 "
                  variant="light"
                  radius="none"
                  size="lg"
                >
                  View Emission Report
                </Button>
              </ModalFooter>
              <div className="flex  items-center space-x-19 -mx-[24px] mb-3 ">
                <Divider orientation="horizontal" />
              </div>
              <ModalBody>
                <div className="flex flex-row justify-center  font-calibri mr-[80px] ">
                  <div className="justify-center font-bold text-[12px] mt-2 mr-[30px]">
                    UserName
                  </div>
                  <div className="justify-center mr-16">
                    <Input
                      labelPlacement="outside-left"
                      data-testid="chassisno"
                      className="w-[130px]"
                      radius="none"
                      size="sm"
                      name="center"
                      aria-label="center"
                      variant="bordered"
                    />
                  </div>
                </div>
                <div className="flex flex-row justify-center font-calibri mr-[150px] ">
                  <div className="justify-center font-bold text-[12px] mr-[36px] mt-2 ">
                    Password
                  </div>
                  <div className="justify-center -mr-2 ">
                    <Input
                      labelPlacement="outside-left"
                      data-testid="vehicleClass"
                      className="w-[130px]"
                      radius="none"
                      size="sm"
                      name="center"
                      aria-label="center"
                      variant="bordered"
                    />
                  </div>
                </div>
                <div className="flex  flex-row justify-center mt-2 mb-4  -ml-[30px]">
                  <div className="justify-center font-bold font-calibri text-[12px] mr-[31px] mt-2">
                    Remark
                  </div>
                  <div className="justify-center ml-4 ">
                    <Textarea
                      labelPlacement="outside-left"
                      className="w-[250px]  rounded-sm h-10"
                      size="sm"
                      radius="none"
                      aria-label="center"
                      variant="bordered"
                      disableAnimation
                      disableAutosize
                    />
                  </div>
                </div>
              </ModalBody>
              <ModalFooter className="justify-center  ">
                <Button
                  className="text-white font-calibri font-bold  rounded-sm bg-persianGreen border-1 border-greyBorder ml-4 h-8"
                  variant="light"
                  radius="none"
                  data-testid="approve"
                >
                  Approve
                </Button>
                <Button className="text-white font-calibri font-bold  rounded-sm bg-red border-1 border-greyBorder h-8 ml-4">
                  Reject
                </Button>
                <Button
                  className="text-black font-calibri font-bold  
                rounded-sm bg-white border-1.5 border-greyBorder ml-4 h-8"
                  onClick={() => {
                    handleClose();
                  }}
                >
                  Quit
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
export default DynoPrinting;
