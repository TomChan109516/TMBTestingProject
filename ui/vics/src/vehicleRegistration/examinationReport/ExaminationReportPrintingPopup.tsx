import React from "react";
import {
  Modal,
  ModalContent,
  ModalBody,
  Button,
  Input,
} from "@nextui-org/react";
export default function ExaminationReportPrintingPopup() {

 
  return (
    <Modal
      isOpen={true}
    //onClose={}
      isDismissable={false}
      size="full"
      className="w-[35%]  h-[35%] "
    >
      <ModalContent>
        {(onClose) => (
          <>
            <div className="bg-lightGreen w-[100%]  text-[12px] p-1 font-bold text-black text-center h-8">
              Print Examination Report
            </div>

            <ModalBody>
              <div className=" text-center text-black  p-1 text-inputTxt mt-2 font-bold">
                Please enter security paper number
              </div>
              <div className="flex flex-row justify-center font-calibri text-inputTxt font-bold  ">
              <Input
          className=" w-[50%] min-h-unit-6  h-unit-6 bg-white   "
          classNames={{ inputWrapper: " min-h-unit-6 h-unit-6 " }}
          variant="bordered"
          radius="none"
          type="text"
        />
              </div>
              <div className="flex flex-row justify-center mt-2">
                <Button
                  className={`bg-tropicalrainforest text-[white] font-bold rounded-sm h-7 `}
                  variant="bordered"
                  size="sm"
                >
                  Print
                </Button>
                <Button
                  className={`bg-[white] text-[black] font-bold shadow-sm rounded-sm ml-4 h-7 `}
                  variant="bordered"
                  size="sm"
                  type="submit"
                >
                  Cancel
                </Button>
              </div>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
