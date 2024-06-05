import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";


export default function RandomCheckDeletePopup() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <Button onPress={onOpen}>Reset Assignment</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col text-[#28b5a0] gap-1"></ModalHeader>
              <ModalBody>
              Are you sure to Delete?
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