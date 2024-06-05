import React from "react";
import {
  Modal,
  ModalContent,
  Button,
  ModalBody,
  ModalFooter,
  Textarea,
} from "@nextui-org/react";

function DefectlistConfigPopup(props) {
  const {
    showDefectlistConfigPopup,
    handleDefectlistConfigPopup,
    handleFinalResultConfirmationPopup
  } = props;

  return (
    <>
      <Modal
        isOpen={showDefectlistConfigPopup}
        onClose={() => handleDefectlistConfigPopup(false)}
        isDismissable={false}
        size="5xl"
        radius="sm"
        className="w-[40%] h-[50%]"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <div className="bg-lightGreen w-[100%]  text-[12px] p-1 font-bold text-black text-center h-8">
                Defectlist Config
              </div>
              <ModalBody>
                <div className="flex flex-row ">
                  <span className="text-xs text-black text-left ml-8   border-[2px] border-greyBorder rounded-sm ">
                    <Textarea
                      radius="none"
                      classNames={{
                        input:
                          "resize-y  min-h-[200px] md:w-[250px] lg:w-[360px] xl:w-[400px] hover: border-transparent",
                      }}
                    />
                  </span>
                </div>
              </ModalBody>
              <ModalFooter className="justify-center ">
                <Button
                  className={`bg-persianGreen text-[white] font-bold rounded-sm h-7 `}
                  variant="bordered"
                  size="sm"
                  onClick={handleFinalResultConfirmationPopup}
                  data-testid="next-button"
                >
                  Next
                </Button>
                <Button
                  className={`bg-[white] text-[black] font-bold shadow-sm rounded-sm ml-6 h-7 `}
                  variant="bordered"
                  size="sm"
                  type="submit"
                  data-testid="cancel-button"
                  onPress={onClose}
                >
                  Cancel
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
export default DefectlistConfigPopup;