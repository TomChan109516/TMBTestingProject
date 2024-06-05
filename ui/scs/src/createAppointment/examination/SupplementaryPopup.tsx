import React from "react";
import PropTypes from "prop-types";
import {
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  Button,
  CheckboxGroup,
  Checkbox,
} from "@nextui-org/react";

function SupplementaryPopup(props) {
  const supplementaryCodes = props.supplementaryExamCodes;
  const checkedList = props.checkedList;
  const open = props.showSupplementaryCodePopup;
  const handleClose = () => {
    props.closeSupplemantaryExmPopup(false);
  };

  const handleChangeSExamCode = (event) => {
    props.handleChangeSecondayExamCode(event);
  };
  return (
    <>
      <Modal
        radius="none"
        className="rounded-sm"
        size="5xl"
        isOpen={open}
        onClose={handleClose}
      >
        <ModalContent>
          {() => (
            <>
              <div className="flex flex-col text-sm p-2 pl-5 border-b border-[lightgray]">
                {" "}
                Supplementary Exam Code List
              </div>
              <ModalBody>
                <CheckboxGroup
                  color="success"
                  className="flex flex-col max-h-96 max-w-full pt-4"
                  value={checkedList}
                  classNames={{ wrapper: "after:bg-[#00AF8F] text-white" }}
                >
                  {supplementaryCodes?.length > 0 ? supplementaryCodes.map((exam, index) => (
                    <Checkbox
                      key={index}
                      radius="none"
                      size="sm"
                      value={exam.ExamCode}
                      className="pt-0"
                      onChange={handleChangeSExamCode}
                      classNames={{
                        wrapper: "after:bg-[#00AF8F] text-white",
                      }}
                      data-testid="supplementaryId"
                    >
                      <div className="text-[12px] uppercase pt-0">
                        {exam.ExamCode + " " + exam.InspectionTypeName}
                      </div>
                    </Checkbox>
                  )):<p className="font-calibri text-sm text-black pt-0 text-left">No Data</p>}
                </CheckboxGroup>
              </ModalBody>
              <ModalFooter>
                <div className="float-right">
                  <Button
                    data-testid="clearAll"
                    className="bg-[white] ml-[5px] text-[black] border border-[black] font-bold rounded h-8"
                    onClick={() => {
                      props.handleClickClearAll("supp");
                    }}
                  >
                    Clear
                  </Button>
                  <Button
                    data-testid="close"
                    name="Close"
                    className="bg-[white] ml-[5px] text-[black] border border-[black] font-bold rounded h-8"
                    onClick={handleClose}
                  >
                    Close
                  </Button>
                </div>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
SupplementaryPopup.propTypes = {
  supplementaryExamCodes: PropTypes.array,
  checkedList: PropTypes.array,
  showSupplementaryCodePopup: PropTypes.bool,
  primarySelected: PropTypes.string,
  closeSupplemantaryExmPopup: PropTypes.func,
  handleChangeSecondayExamCode: PropTypes.func,
  handleClickClearAll: PropTypes.func,
};

export default SupplementaryPopup;
