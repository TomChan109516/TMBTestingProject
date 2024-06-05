import React from "react";
import {
  Button,
  Modal,
  ModalContent,
  ModalBody,
  ModalHeader,
} from "@nextui-org/react";

export function ReactiveExemption({ setIsReactiveExemption }) {
  const setReactiveExemption = () => {
    setIsReactiveExemption(false);
  };

  return (
    <div className="w-screen h-screen">
      <Modal
        size="2xl"
        isOpen={true}
        onClose={setReactiveExemption}
        isDismissable={false}
        radius="none"
        className="h-[40%] rounded-sm"
        classNames={{
          backdrop: "bg-lightBlack/50 backdrop-opacity-40",
          header: "bg-lightGreen  font-bold text-[14px]",
          closeButton: "hover:bg-white/4 active:bg-white/10",
          body: "px-0 py-0",
        }}
      >
        <ModalContent>
          <ModalHeader>
            <div className="ml-[250px]">Reactive Vehicle Exemption</div>
          </ModalHeader>
          <ModalBody>
            <div className="flex flex-row items-center justify-center ml-6 mt-7 mb-2">
              <p
                className="text-sm text-black font-bold text-center w-[500px]"
                style={{ whiteSpace: "nowrap" }}
              >
                <b>Do you confirm to reactivate this Vehicle Exemption</b>
              </p>
            </div>
            <div className="flex flex-row items-center  justify-center  mt-1 mb-2 ml-4 ">
              <div className="flex flex-row">
                <span className="text-sm text-black font-bold text-left w-[170px] mt-1 ml-40 mr-10">
                  ID: &nbsp;<span>7</span>
                </span>
                &nbsp;
              </div>
            </div>
          </ModalBody>

          <div className=" flex justify-center mb-20 mt-4 ml-8">
            <Button
              className=" bg-navButton text-white rounded-sm mr-8  font-bold text-xs"
              type="submit"
              size="sm"
              radius="none"
            >
              Yes
            </Button>
            <Button
              className="bg-lightwhite rounded-sm mr-8 font-bold text-xs "
              variant="bordered"
              type="submit"
              size="sm"
              radius="none"
              onClick={setReactiveExemption}
            >
              No
            </Button>
          </div>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default ReactiveExemption;
