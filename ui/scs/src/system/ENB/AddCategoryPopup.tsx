import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
} from "@nextui-org/react";
import { theme } from "../../common/themes/themeConfig";

function AddCategoryPopup(props) {
  const { showAddCategoryPopup, closeAddcategoryPopup } = props;

  const handleClose = () => {
    closeAddcategoryPopup(false);
  };
  return (
    <div>
      <Modal
        isOpen={showAddCategoryPopup}
        onClose={handleClose}
        size="4xl"
        radius="none"
        className="rounded-sm"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader
                className={`flex flex-col gap-1 text-tropicalRainForest font-[${theme?.fontFamily?.calibri}] font-bold text-sm`}
              >
                Add Category
              </ModalHeader>
              <ModalBody>
                <div>
                  <div className="flex flex-row items-center">
                    <div
                      className={`text-sm font-[${theme?.fontFamily?.calibri}] ml-2  text-left font-bold`}
                    >
                      Category
                    </div>
                    <div className="flex w-full mt-1 ml-[80px]">
                      <Input
                        id="standard-basic"
                        variant="bordered"
                        radius="none"
                        size="sm"
                        className="flex flex-grow rounded-sm"
                      />
                    </div>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button
                  className={`text-sm rounded-sm font-[${theme?.fontFamily?.calibri}] font-bold bg-[white] border-2 border-[lightgray]`}
                  onPress={onClose}
                >
                  Cancel
                </Button>
                <Button
                  className={`text-sm rounded-sm font-[${theme?.fontFamily?.calibri}] font-bold bg-[#e0a648] text-white`}
                  onPress={onClose}
                >
                  Save
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
export default AddCategoryPopup;
