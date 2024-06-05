import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';

export default function App() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <Button onPress={onOpen}>Delete Record</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col text-[#28b5a0] gap-1">Delete Record</ModalHeader>
              <ModalBody>
                <p className="pt-2 ..."> <ErrorOutlineOutlinedIcon />
                    
            
                  Are you sure to delete?
                </p>
                
              </ModalBody>
              <ModalFooter>
                <Button className="text-black bg-[#e5e5e5]" variant="light" onPress={onClose}>
                  No
                </Button>
                <Button className="text-white bg-[#28b5a0]" onPress={onClose}>
                  Yes
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
