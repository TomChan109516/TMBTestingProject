import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  Button,
  ModalBody,
  Input,
} from "@nextui-org/react";
import { axiosPost } from "../../utils/axiosInstance";

function FinalResultConfirmationPopup(props) {
  const {
    showFinalResultConfirmationPopup,
    setshowFinalResultConfirmationPopup,
    handleFinalResultConfirmationPopup,
    confirm,
    setConfirm,
    data,
    url,
    tabledata,
    finalResult,
    setFinalResult,
  } = props;
  const [userName] = useState<string>(localStorage.getItem("userName") || "");

  const handleConfirm = async () => {
    try {
      const response = await axiosPost(url, data);
      if (response.isSuccess) {
        console.log(response.isSuccess);
      } else {
        console.log("false", response.isSuccess);
      }
    } catch (error) {
      console.log(error);
    }
    setFinalResult(true);
    setConfirm(true);
    setshowFinalResultConfirmationPopup(false);
  };

  return (
    <Modal
      isOpen={showFinalResultConfirmationPopup}
      onClose={() => handleFinalResultConfirmationPopup(false)}
      isDismissable={false}
      size="5xl"
      radius="sm"
      className="w-[35%] h-[40%]"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <div className="bg-lightGreen w-[100%]  text-[12px] p-1 font-bold text-black text-center h-7">
              Final Result confirmation
            </div>

            <ModalBody>
              <div className=" text-center text-black  p-1 text-[12px] mt-2 font-bold">
                Signature will be added to Examination Report
              </div>
              <div className="flex flex-row justify-center ">
                <div className="justify-center font-bold text-[12px] mt-1">
                  UserName
                </div>
                <div className="justify-center ml-4">
                  <Input
                    labelPlacement="outside-left"
                    data-testid="vehicleClass"
                    className="w-[150px] rounded-sm"
                    radius="none"
                    size="sm"
                    name="center"
                    value={userName}
                    placeholder={userName}
                    readOnly
                    aria-label="center"
                    variant="bordered"
                  />
                </div>
              </div>
              <div className="flex flex-row justify-center font-bold">
                <div className="justify-center text-[12px] mt-1">Password</div>
                <div className="justify-center ml-5">
                  <Input
                    labelPlacement="outside-left"
                    data-testid="vehicleClass"
                    className="w-[150px] rounded-sm"
                    radius="none"
                    size="sm"
                    name="center"
                    aria-label="center"
                    variant="bordered"
                    type="text"
                    inputMode="none"
                    autoComplete="off"
                    style={{ WebkitTextSecurity: "disc" }}
                  />
                </div>
              </div>

                <div className="flex flex-row justify-center mt-2">
                  <Button
                    className={`bg-persianGreen text-[white] font-bold rounded-sm `}
                    variant="bordered"
                    size="sm"
                    onClick={handleConfirm}
                    data-testid="Confirm"
                  >
                    Confirm
                  </Button>
                  <Button
                    className={`bg-[white] text-[black] font-bold shadow-sm rounded-sm ml-6 `}
                    variant="bordered"
                    size="sm"
                    type="submit"
                    onPress={onClose}
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
export default FinalResultConfirmationPopup;
