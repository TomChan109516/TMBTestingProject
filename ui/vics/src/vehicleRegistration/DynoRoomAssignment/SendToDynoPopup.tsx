import React from "react";
import {
  Modal,
  ModalContent,
  ModalBody,
  Button,
  Input,
} from "@nextui-org/react";
export default function SendToDynoPopup() {

 
  return (
    <Modal
      isOpen={true}
      isDismissable={false}
      size="full"
      className="w-[35%]  h-[40%] "
    >
      <ModalContent>
        {(onClose) => (
          <>
            <div className="bg-lightGreen w-[100%]  text-[12px] p-1 font-bold text-black text-center h-8">
              Send to Dyno
            </div>

            <ModalBody>
              <div className=" text-center text-black  p-1 text-inputTxt mt-2 font-bold">
                Send to Dyno Workload List?
              </div>
              <div className="flex flex-row justify-center font-calibri text-underline text-inputTxt font-bold  ">
              23492049234
              </div>
              <div className="flex flex-row justify-center font-calibri text-inputTxt font-bold ">
                to Dyno 1
              </div>
              <div className="flex flex-row justify-center font-calibri text-inputTxt font-bold">
            
              </div>

              <div className="flex flex-row justify-center mt-2">
                <Button
                  className={`bg-tropicalrainforest text-[white] font-bold rounded-sm h-7 `}
                  variant="bordered"
                  size="sm"
                >
                  Confirm
                </Button>
                <Button
                  className={`bg-[white] text-[black] font-bold shadow-sm rounded-sm ml-6 h-7 `}
                  variant="bordered"
                  size="sm"
                  type="submit"
             
                >
                  Back
                </Button>
              </div>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
