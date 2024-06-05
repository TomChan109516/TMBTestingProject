import { Button, Modal, ModalContent, ModalBody, ModalFooter } from "@nextui-org/react";
import React from "react";
import { AlertCircle } from "tabler-icons-react";

export const DeleteIconPopup = ({ setShowDeleteIcon }) => {
  const handleClose = () => {
    setShowDeleteIcon(false);
  };
  return (
    <div className="text-left font-[Calibri] pr-1">
      <Modal
        isOpen={true}
        onClose={handleClose}
        size="xs"
        className="font-[Calibri]">
        <ModalContent className="rounded-sm">
          {() => (
            <>
              <div className="text-[#00AF8F] text-sm pt-4 pl-3 font-bold">
                Prompt
              </div>
              <ModalBody>
                <div className="flex mb-1 gap-0">
                  <AlertCircle
                    size={30}
                    strokeWidth={3}
                    color={"orange"}
                  />
                  <span className="text-[13px]">
                    Are you sure you want to delete this record?
                  </span>
                </div>
              </ModalBody>
              <ModalFooter className="py-0 px-1 pb-2">
                <div className="mr-1.5">
                  <Button
                    radius="none"
                    type="reset"
                    size="sm"
                    className="bg-white text-black border border-solid border-greyBorder rounded-[3px]  min-w-unit-2 w-9 h-7 text-[13px] font-bold  py-0"
                    onClick={handleClose}>
                    No
                  </Button>
                  <Button
                  onClick={handleClose}
                    type="submit"
                    size="sm"
                    radius="none"
                    className="rounded-[3px]  min-w-unit-2 w-9 h-7 bg-[#00AF8F] text-white font-bold text-md text-[13px]  py-0 ml-2">
                    Yes
                  </Button>
                </div>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};
