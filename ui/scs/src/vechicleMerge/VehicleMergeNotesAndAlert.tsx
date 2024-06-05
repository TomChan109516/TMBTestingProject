import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { CircleX, Download, Search } from "tabler-icons-react";

function VehicleMergeNotesAndAlert() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = React.useState("md");

  const sizes = ["4xl"];

  const handleOpen = (size) => {
    setSize(size);
    onOpen();
  };

  return (
    <>
      <div className="flex flex-wrap gap-3">
        {sizes.map((size) => (
          <Button key={size} onPress={() => handleOpen(size)}>
            Open {size}
          </Button>
        ))}
      </div>
      <Modal size={size} isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <div className="flex flex-wrap pt-6">
                  <div className="w-[100%] p-[5px] pl-2 ">
                    <h1>
                      <h5 className="absolute -top-2 start-3 pl-[10px] pr-[10px] text-sm/[13px] text-[#00AF8F]">
                        Notes and Alerts
                      </h5>
                      <div className="flex flex-wrap pt-4 pl-3  text-[#808080]">
                        <span className="font-bold">
                          This Vehicle is the master of link id:
                        </span>
                        <span className="text-[#808080] pl-3 underline">
                          0001
                        </span>
                        <span className="pl-4">
                          
                          <Search
                            size={20}
                            color="white"
                            className="bg-[#00AF8F] rounded-sm"
                          />
                        </span>
                      </div>
                      <div className="min-h-[250px] max-h-[250px] h-[250px] overflow-x-hidden text-black"></div>
                    </h1>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button
                  className="bg-[#ffffff] float-left ml-2 rounded "
                  variant="bordered"
                  type="submit"
                  size="sm"
                  onPress={onClose}
                  fond-bold
                >
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
export default VehicleMergeNotesAndAlert;