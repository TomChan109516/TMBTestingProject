import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalBody,
  Button,
  Input,
} from "@nextui-org/react";
import { useDispatch } from "react-redux";

import { hide } from "../state/ShowTabsSlice";

export default function VehicleSubmissionConfirmation({
  setShowPopup,
  showPopup,
}) {
  const dispatch = useDispatch();
  const [userName] = useState<string>(localStorage.getItem("userName") || "");
  const closeTabs = () => {
    dispatch(hide());
  };

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <Modal
      isOpen={showPopup}
      onClose={handleClose}
      isDismissable={false}
      size="full"
      className="w-[35%]  h-[40%] "
    >
      <ModalContent>
        {(onClose) => (
          <>
            <div className="bg-[#ddf3f2] w-[100%]  text-[12px] p-1 font-bold text-black text-center h-8">
              Submission Confirmation
            </div>

            <ModalBody>
              <div className=" text-center text-black  p-1 text-[12px] mt-2 font-bold">
                Are you sure to submit inspection results?
              </div>
              <div className="flex flex-row justify-center ">
                <div className="justify-center font-bold text-[12px] mt-1">
                  UserName
                </div>
                <div className="justify-center ml-4">
                  <Input
                    labelPlacement="outside-left"
                    data-testid="vehicleClass"
                    className="w-[130px] rounded-sm"
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
                    className="w-[130px] rounded-sm"
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
                  className={`bg-[#009b77] text-[white] font-bold rounded-sm `}
                  variant="bordered"
                  size="sm"
                  onClick={closeTabs}
                >
                  Yes
                </Button>
                <Button
                  className={`bg-[white] text-[black] font-bold shadow-sm rounded-sm ml-6 `}
                  variant="bordered"
                  size="sm"
                  type="submit"
                  onPress={onClose}
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
