import React from "react";
import {
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  Button,
  CheckboxGroup,
  Checkbox,
} from "@nextui-org/react";

function PrimaryCodesPopup(props) {
  const primaryCodes = props.primaryExamCodes;
  const primarySelected = props.selectedPrimaryCodes;
  const open = props.showPrimaryCodePopup;
  const handleClose = () => {
    props.closePrimExmPopup(false);
  };
  const handleChangePExamCode = (event) => {
    props.handleChangePrimaryExamCode(event);
  };

  return (
    <Modal
      size="5xl"
      isOpen={open}
      onClose={handleClose}
      radius="none"
      className="rounded-sm"
    >
      <ModalContent>
        {() => (
          <>
            <div className="flex flex-col text-sm p-2 pl-5 border-b border-[lightgray]">
              {" "}
              Primary Exam Code List
            </div>
            <ModalBody>
              <CheckboxGroup
                className="pt-2 text-[12px] flex flex-col max-h-96 max-w-full"
                size="sm"
                value={primarySelected}
                defaultValue={primarySelected}
              >
                {primaryCodes?.length > 0 ? primaryCodes.map((exam) => (
                  <Checkbox
                    size="sm"
                    radius="none"
                    checked={
                      exam.ExamCode + "," + exam.InspectionTypeName === primarySelected
                    }
                    className="pt-0 text-[#00AF8F]"
                    key={exam.ExamCode}
                    value={exam.ExamCode + "," + exam.InspectionTypeName}
                    name={exam.ExamCode + " " + exam.InspectionTypeName}
                    onChange={(e) => {
                      handleChangePExamCode(e);
                    }}
                    classNames={{
                      wrapper:
                        " after:bg-[#00AF8F] pt-0 text-xs font-[Calibri]",
                    }}
                    data-testid={`primaryId_${exam.ExamCode}`}
                  >
                    <div className="text-[12px] uppercase pt-0">
                      {exam.ExamCode + " " + exam.InspectionTypeName}
                    </div>
                  </Checkbox>
                )): <p className="font-calibri text-sm text-black pt-0 text-left">No Data</p>}
              </CheckboxGroup>
            </ModalBody>
            <ModalFooter>
              <div className="float-right">
                <Button
                  data-testid="clearAll"
                  className="bg-[white] ml-[5px] text-[black] border border-[black] font-bold rounded h-8"
                  onClick={() => {
                    props.handleClickClearAll("prim");
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
  );
}

export default PrimaryCodesPopup;
