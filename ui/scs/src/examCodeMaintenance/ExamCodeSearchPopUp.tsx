import React from "react";
import {
  Button,
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  Textarea,
} from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { theme } from "../common/themes/themeConfig";

function ExamCodeSearchPopUp(props) {
  const open = props.ExamCodeSearchPopUp;
  const navigate = useNavigate();
  const {
    showExamCodeSearchPopUp,
    setShowExamCodeSearchPopUp,
    selectedExamCode,
  } = props;

  const handleClose = () => {
    setShowExamCodeSearchPopUp(false);
    navigate("/examCodeMaintenance");
  };

  return (
    <div className="w-[100%] h-[100%]">
      <Modal
        size="2xl"
        isOpen={showExamCodeSearchPopUp}
        onClose={handleClose}
        radius="none"
        classNames={{
          base: "rounded-sm",
          body: "py-4",
          backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
          closeButton: " hover:bg-white/5 active:bg-white/20",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <div
                  className={`text-[${theme?.colors?.persianGreen}] font-[${theme?.fontFamily?.calibri}] flex-initial text-[#00AF8F] p-[10px]  ml-[-15px] font-bold text-[16px]`}
                >
                  New Exam Code Details
                </div>
                <div>
                  <h1>
                    <h5
                      className={`text-[${theme?.colors?.persianGreen}] font-[${theme?.fontFamily?.calibri}] absolute -top-2 start-3  pl-[10px] pr-[10px] text-sm/[13px] text-[#00AF8F]`}
                    >
                      Exam Code Information
                    </h5>
                    <div className="grid grid-cols-4 gap-4 mt-2">
                      <div
                        className={`font-[${theme?.fontFamily?.calibri}] text-sm text-black ml-5 mt-2 font-bold text-left pt-1 w-[80px]`}
                      >
                        Exam Code
                      </div>
                      <div
                        className={`font-[${theme?.fontFamily?.calibri}] text-sm pt-3 text-black text-left ml-8`}
                      >
                        {selectedExamCode?.ExamCode}
                      </div>
                    </div>
                    <div className="grid grid-cols-4 gap-4 mt-2">
                      <div
                        className={`font-[${theme?.fontFamily?.calibri}] text-sm ml-5 text-black font-bold text-left  pt-1 w-[80px]`}
                      >
                        Exam Name
                      </div>
                      <div
                        className={`font-[${theme?.fontFamily?.calibri}] text-sm pt-1 text-black text-left ml-8`}
                      >
                        {selectedExamCode?.InspectionTypeName}
                      </div>
                    </div>
                    <div className="grid grid-cols-4 gap-4 mt-2">
                      <div
                        className={`font-[${theme?.fontFamily?.calibri}] text-sm ml-5 text-black font-bold text-left  pt-1 w-[80px]`}
                      >
                        Exam Type
                      </div>
                      <div
                        className={`font-[${theme?.fontFamily?.calibri}] text-sm pt-1 text-black text-left ml-8`}
                      >
                        {selectedExamCode?.ExamClass}
                      </div>
                    </div>
                    <div className="flex flex-row mt-1 mb-20"></div>
                    <div className="grid grid-cols-4 gap-4 mt-2 mb-2">
                      <div
                        className={`font-[${theme?.fontFamily?.calibri}] text-sm ml-5 text-black font-bold text-left  pt-1 w-[80px]`}
                      >
                        Description
                      </div>
                      <div
                        className={`font-[${theme?.fontFamily?.calibri}] text-sm text-black w-[410px] text-left ml-8`}
                      >
                        <span>
                          <Textarea
                            id="standard-basic"
                            radius="none"
                            variant="bordered"
                            size="sm"
                            maxLength={100}
                            placeholder="Description"
                            classNames={{
                              inputWrapper: `min-h-unit-6 h-8 rounded-sm border border-solid border-[${theme?.colors?.greyBorder}]`,
                            }}
                          />
                        </span>
                      </div>
                    </div>
                  </h1>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button
                  className={`bg-white text-black font-[${theme?.fontFamily?.calibri}] border border-solid border-[${theme?.colors?.greyBorder}] text-sm shadow-sm font-bold rounded-sm ml-1`}
                  variant="bordered"
                  type="submit"
                  size="sm"
                  radius="none"
                  onPress={onClose}
                >
                  Cancel
                </Button>
                <Button
                  className={`bg-[${theme?.colors?.persianGreen}] font-[${theme?.fontFamily?.calibri}] text-sm text-white font-bold rounded-sm ml-1`}
                  type="submit"
                  size="sm"
                  radius="none"
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
export default ExamCodeSearchPopUp;
