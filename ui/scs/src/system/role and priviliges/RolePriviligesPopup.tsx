import React from "react";
import {
  Modal,
  Button,
  ModalContent,
  ModalBody,
  ModalFooter,
} from "@nextui-org/react";
import { IconAlertCircle } from "@tabler/icons-react";

function RolePriviligesPopup(props) {
  const { showRolePriviligesPopup, closeRolePriviligesPopup } = props;

  const handleClose = () => {
    closeRolePriviligesPopup(false);
  };

  const handleSave = () => {
    closeRolePriviligesPopup(false);
  };

  return (
    <div className="w-[80%] h-full">
      <Modal
        size="lg"
        isOpen={showRolePriviligesPopup}
        onClose={handleClose}
        radius="none"
        classNames={{
          base: "rounded-md",
          body: "py-4",
          backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
          closeButton: "hover:bg-white/5 active:bg-white/20",
        }}
      >
        <ModalContent>
          {() => (
            <>
              <ModalBody>
                <div className="flex justify-center mt-5">
                  <div className="flex mb-1 font-bold text-sm">
                    <div className="flex justify-center align-middle -mt-3 mr-1">
                      <IconAlertCircle size={38} color="red" />
                    </div>
                    <div className="">
                      <h3 className="">Do you confirm to disable this Role?</h3>
                    </div>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter className=" flex justify-center mb-5">
                <Button
                  className=" bg-[#00AF8F] text-white rounded-md ml-1 mr-1 font-bold text-xs"
                  variant="bordered"
                  type="submit"
                  size="sm"
                  radius="none"
                  onClick={handleSave}
                >
                  Save
                </Button>
                <Button
                  className="bg-[#ffffff] rounded-md ml-2 font-black text-xs"
                  variant="bordered"
                  type="submit"
                  size="sm"
                  radius="none"
                  onClick={handleClose}
                >
                  Cancel
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
export default RolePriviligesPopup;
