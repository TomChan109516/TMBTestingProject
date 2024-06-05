import { Button, Checkbox, CheckboxGroup } from "@nextui-org/react";
import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/react";

type CentreData = {
  examCode: string;
  isChecked: boolean;
  label: string;
  id: number;
  value: string;
};

const codeList = [
  {
    id: "1",
    label: "027 Deffective Meter Seal",
    value: "027 Deffective Meter Seal",
    isChecked: false,
  },
  {
    id: "2",
    label: "028 BI-ANNUAL INSPECTION",
    value: "028 BI-ANNUAL INSPECTION",
    isChecked: false,
  },
  {
    id: "3",
    label: "029 REPLACEMENT Meter",
    value: "029 REPLACEMENT Meter",
    isChecked: false,
  },
  {
    id: "4",
    label: "02R RECHECK FOR EXAM TYPE 002",
    value: "02R RECHECK FOR EXAM TYPE 002",
    isChecked: false,
  },
  {
    id: "5",
    label: "030 TAXIMETER NEW FARE CHANGE EXERCISE",
    value: "030 TAXIMETER NEW FARE CHANGE EXERCISE",
    ischecked: false,
  },
  {
    id: "6",
    label: "031 REALLOCATION OF VEHICLE REGISTRATION MARK",
    value: "031 REALLOCATION OF VEHICLE REGISTRATION MARK",
    ischecked: false,
  },
  {
    id: "7",
    label: "032 TOTAL LOSS AFTER WELDING",
    value: "032 TOTAL LOSS AFTER WELDING",
    isChecked: false,
  },
  {
    id: "8",
    label: "034 MODIFICATION OF FUEL TANK",
    value: "034 MODIFICATION OF FUEL TANK",
    isChecked: false,
  },
  {
    id: "10",
    label: "035 CERTIFICATE OF FITNESS (FOC)-SECOND STAGE",
    value: "035 CERTIFICATE OF FITNESS (FOC)-SECOND STAGE",
    isCHecked: false,
  },
  {
    id: "11",
    label: "036 SPECIAL EXAMINATION",
    value: "036 SPECIAL EXAMINATION",
    isChecked: false,
  },
  {
    id: "12",
    label: "037 EXCESS WIDTH/ HEIGHT/ LENGTH/PERMIT",
    value: "037 EXCESS WIDTH/ HEIGHT/ LENGTH/PERMIT",
    isChecked: false,
  },
  {
    id: "13",
    label: "038 STAMPING ENGINE NO",
    value: "038 STAMPING ENGINE NO",
    isCHecked: false,
  },
  {
    id: "14",
    label: "03R RECHECK FOR EXAM TYPE 003",
    value: "03R RECHECK FOR EXAM TYPE 003",
    isChecked: false,
  },
  {
    id: "15",
    label: "040 VIO-SPEED DISPLAY DEVICE CHECK",
    value: "040 VIO-SPEED DISPLAY DEVICE CHECK",
    isChecked: false,
  },
  {
    id: "16",
    label: "041 VERFICATION OF CHASSIS NO",
    value: "041 VERFICATION OF CHASSIS NO",
    isChecked: false,
  },
  {
    id: "17",
    label: "042 VERFIFICATION OF ENGINE",
    value: "042 VERFIFICATION OF ENGINE",
    isChecked: false,
  },
  {
    id: "18",
    label: "043 DEFFECTIVE TAXIMETER",
    value: "043 DEFFECTIVE TAXIMETER",
    isChecked: false,
  },
  {
    id: "19",
    label: "044 VERIFICATION OF SEATING CAPACITY",
    value: "044 VERIFICATION OF SEATING CAPACITY",
    isChecked: false,
  },
  {
    id: "20",
    label: "046 VIO-SPEED LIMITER DEVICE",
    value: "046 VIO-SPEED LIMITER DEVICE",
    isChecked: false,
  },
  {
    id: "21",
    label: "047 VERIFICATION OF DIMIENSION",
    value: "047 VERIFICATION OF DIMIENSION",
    isChecked: false,
  },
  {
    id: "22",
    label: "048 EDRD SEALING ",
    value: "048 EDRD SEALING ",
    isChecked: false,
  },
  {
    id: "23",
    label: "04R RECHECK FOR EXAM TYPE 004",
    value: "04R RECHECK FOR EXAM TYPE 004",
    isChecked: false,
  },
  {
    id: "24",
    label: "050 VERFICATION OF BODY TYPE",
    value: "050 VERFICATION OF BODY TYPE",
    isChecked: false,
  },
  {
    id: "25",
    label: "051 WINDOW  GLASS EXMPTION",
    value: "051 WINDOW  GLASS EXMPTION",
    isChecked: false,
  },
  {
    id: "26",
    label: "052 VERFICATION OF BODY TYPE",
    value: "052 VERFICATION OF BODY TYPE",
    isChecked: false,
  },
  {
    id: "27",
    label: "053 VIO-VERIFICATION OF WINDOW  GLASS",
    value: "053 VIO-VERIFICATION OF WINDOW  GLASS",
    isChecked: false,
  },
];

export default function ExamCodeListPopUp() {
  const [examData, setExamData] = useState<CentreData[]>(codeList);

  const handleExamCodeChange = (id: number) => {
    const updatedExamCode = examData.map((data) => {
      if (data.id === id) {
        data.isChecked == !data.isChecked;
      }
      return data;
    });
    setExamData(updatedExamCode);
  };

  return (
    <>
      <Modal isOpen={true} size="5xl">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col  text-mdfont-[Calibri] font-bold text-[#009b77]">
                Exam Code List
              </ModalHeader>
              <ModalBody>
                <div>
                  <div className="flex flex-row  ">
                    <div className="flex   flex-grow border border-[lightgray] m-3   ">
                      <div className="grid grid-cols-2 overflow-y-scroll h-[400px] w-[960px] ">
                        {examData.map((data) => (
                          <Checkbox
                            key={data.id}
                            isSelected={data.isChecked}
                            value={data.value}
                            radius="none"
                            size="sm"
                            classNames={{ wrapper: "after:bg-[#00AF8F]" }}
                            className="rounded-sm m-[px]"
                            onChange={() => handleExamCodeChange(data.id)}
                          >
                            {data.label}
                          </Checkbox>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter className="flex justify-start ">
                <Button
                  className=" bg-[#ffffff] text-[black] font-[Calibri] text-sm  font-bold border rounded-none"
                  onPress={onClose}
                >
                  Clear
                </Button>
                <Button
                  className=" ml-[83%] rounded-none bg-[#00AF8F] text-[black] font-[Calibri] text-sm  font-bold"
                  onPress={onClose}
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
