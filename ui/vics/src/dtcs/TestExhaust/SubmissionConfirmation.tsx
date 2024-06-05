import React from "react";
import { Button, Input } from "@nextui-org/react";
import { Modal, ModalContent, ModalBody, ModalHeader } from "@nextui-org/react";
export function SubmissionConfirmation(props) {
  const { setPassword } = props;
  const handleClose = () => {
    props.closeSubmissionConfirmationt(false);
  };
  return (
    <div className="w-screen h-screen">
      <Modal
        size="lg"
        isOpen={true}
        onClose={handleClose}
        isDismissable={false}
        radius="none"
        className="h-[40%] rounded-sm"
        classNames={{
          backdrop: "bg-lightBlack/50 backdrop-opacity-40",
          header: "bg-lightGreen font-bold text-[14px]",
          closeButton: "hover:bg-white/4 active:bg-white/10",
          body: "px-0 py-0",
        }}
      >
        <ModalContent>
          <div className="bg-[#ddf3f2] h-8 w-[100%] text-[15px] py-[3px]  font-bold text-black text-center text-popupHeading:'16px', font-calibri p-3">
            Close Lane
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
                  className="w-[150px] rounded-sm"
                  radius="none"
                  size="sm"
                  name="center"
                  placeholder="User001"
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
                />
              </div>
            </div>
          </ModalBody>

          <div className=" flex justify-center mb-20 mt-4 ml-8">
            <Button
              className={`bg-persianGreen text-[white] font-bold rounded-sm `}
              variant="bordered"
              size="sm"
            >
              Confirm
            </Button>
            <Button
              className={`bg-[white] text-[black] font-bold shadow-sm rounded-sm ml-6 `}
              variant="bordered"
              size="sm"
              type="submit"
              onClick={handleClose}
            >
              No
            </Button>
          </div>
        </ModalContent>
      </Modal>
    </div>
  );
}
export default SubmissionConfirmation;
