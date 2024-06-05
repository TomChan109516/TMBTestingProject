import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";


export default function ResetAssignmentPopup() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <Button onPress={onOpen}>Reset Assignment</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col text-[#28b5a0]  gap-1">Tips</ModalHeader>
              <ModalBody>
              Reset Will clear the result of the draw, are you sure?
              </ModalBody>
              <ModalFooter>
                <Button className="text-black bg-[#e5e5e5]" variant="light" onPress={onClose}>
                 Cancel
                </Button>
                <Button className="text-white bg-[#28b5a0]" onPress={onClose}>
                  Confirm
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
