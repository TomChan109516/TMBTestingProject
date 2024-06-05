import React from "react";
import {
  Modal,
  ModalContent,
  ModalBody,
  Button,
  Input,
} from "@nextui-org/react";
export default function DisableDefectPopup({ setIsDisableDefect,systemName }) {

 const setIsDisable=() => {
  setIsDisableDefect(false)
}
  return (
    <Modal
      isOpen={true}
      onClose={setIsDisable}
      isDismissable={false}
      size="full"
      className="w-[35%]  h-[40%] "
    >
      <ModalContent>
        {(onClose) => (
          <>
            <div className="bg-lightGreen w-[100%]  text-[12px] p-1 font-bold text-black text-center h-8">
              Disable Defect - System Code
            </div>

            <ModalBody>
              <div className=" text-center text-black  p-1 text-inputTxt mt-2 font-bold">
                Do you confirm to disbale this Defect - System Code?
              </div>
              <div className="flex flex-row justify-center font-calibri text-inputTxt font-bold  ">
                System Code: 01
              </div>
              <div className="flex flex-row justify-center font-calibri text-inputTxt font-bold ">
                System Name(EN): {systemName}
              </div>
              <div className="flex flex-row justify-center font-calibri text-inputTxt font-bold">
                System Name(CH): CHINESE TEXT
              </div>

              <div className="flex flex-row justify-center mt-2">
                <Button
                  className={`bg-[#009b77] text-[white] font-bold rounded-sm h-7 `}
                  variant="bordered"
                  size="sm"
                >
                  Yes
                </Button>
                <Button
                  className={`bg-[white] text-[black] font-bold shadow-sm rounded-sm ml-6 h-7 `}
                  variant="bordered"
                  size="sm"
                  type="submit"
                   onClick={setIsDisable}
                >
                  No
                </Button>
              </div>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
