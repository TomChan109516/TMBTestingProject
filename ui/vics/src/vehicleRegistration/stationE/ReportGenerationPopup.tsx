import React from "react";
import {
  Modal,
  ModalContent,
  Button,
  ModalBody,
  Select,
  SelectItem,
  ModalFooter,
} from "@nextui-org/react";

function ReportGenerationPopup(props) {
  const { showReportGenerationPopup, handleDefectlistConfigPopup } = props;

  return (
    <>
      <Modal
        isOpen={showReportGenerationPopup}
        onClose={() => handleDefectlistConfigPopup(false)}
        isDismissable={false}
        size="5xl"
        radius="sm"
        className="w-[40%] h-[60%]"
        data-testid="report-generation-popup"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <div className="bg-lightGreen w-[100%]  text-[12px] p-1 font-bold text-black text-center h-8"></div>
              <ModalBody>
                <div className="  text-black  p-1 text-inputTxt mt-2 font-bold">
                  Report Generation
                </div>
                <div className="  text-black  p-1 text-inputTxt  font-bold">
                  Remark Addition from Predefined List
                </div>

                <div className="items-center ml-1">
                  <Select
                    placeholder="Select"
                    labelPlacement="outside-left"
                    data-testid="vehicleClass"
                    className="w-[95%]"
                    radius="none"
                    size="lg"
                    name="center"
                    aria-label="center"
                    variant="bordered"
                  >
                    <SelectItem key={3}>Select</SelectItem>
                  </Select>
                </div>

                <div className="  text-black  p-1 text-inputTxt mt-4 font-bold">
                  Examination Report language:
                </div>
                <div className="flex justify-between">
                  <div className=" flex  ">
                    <Button
                      size="sm"
                      radius="none"
                      className="mr-4 ml-2 h-6  text-white font-calibri font-bold bg-persianGreen "
                    >
                      ENG
                    </Button>
                    <Button size="sm" className="h-6" radius="none">
                      Chinese
                    </Button>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter className="justify-center">
                <Button
                  className={`bg-persianGreen text-[white] font-bold rounded-sm h-7 `}
                  variant="bordered"
                  size="sm"
                  data-testid="next-button"
                  onClick={() => handleDefectlistConfigPopup(true)}
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
export default ReportGenerationPopup;