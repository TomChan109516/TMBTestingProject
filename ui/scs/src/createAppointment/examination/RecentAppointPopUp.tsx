import React from "react";
import {
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  Button,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/react";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

export default function RecentAppointPopup(props) {
  const { recentAppointments } = useSelector(
    (state) => state.createAppointment
  );
  const open = props.showRecentAppointPopup;
  const handleClose = () => {
    props.closeRecentAppointPopup(false);
  };

  return (
    <>
      <Modal size="5xl" isOpen={open} onClose={handleClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <div className="flex-initial text-[#00AF8F] p-[10px] ml-[-15px] font-bold text-[16px]">
                  Recent Appointment
                </div>
                <Table
                  classNames={{
                    wrapper: "h-[300px]",
                  }}
                >
                  <TableHeader>
                    <TableColumn
                      className="bg-[#A0D9C1] text-[#00AF8F] text-[13px] text-left font-bold"
                      key="appointmentNumber"
                      data-testid="AppointNo"
                    >
                      Appoint No.
                    </TableColumn>
                    <TableColumn
                      className="bg-[#A0D9C1] text-[#00AF8F] text-[13px] text-left font-bold"
                      key="centreCode"
                      data-testid="CentreCode"
                    >
                      Centre
                    </TableColumn>
                    <TableColumn
                      className="bg-[#A0D9C1] text-[#00AF8F] text-[13px] text-left font-bold"
                      key="laneId"
                      data-testid="Lane"
                    >
                      Lane
                    </TableColumn>
                    <TableColumn
                      className="bg-[#A0D9C1] text-[#00AF8F] text-[13px] text-left font-bold"
                      key="appointmentDate"
                      data-testid="ExamDate"
                    >
                      Exam Date
                    </TableColumn>
                    <TableColumn
                      className="bg-[#A0D9C1] text-[#00AF8F] text-[13px] text-left font-bold"
                      key="primaryExamCode"
                      data-testid="primaryExamCode"
                    >
                      Exam Code
                    </TableColumn>
                    <TableColumn
                      className="bg-[#A0D9C1] text-[#00AF8F] text-[13px] text-left font-bold"
                      key="vehicleClassId"
                      data-testid="vehicleClass"
                    >
                      Vehicle Class{" "}
                    </TableColumn>
                    <TableColumn
                      className="bg-[#A0D9C1] text-[#00AF8F] text-[13px] text-left font-bold"
                      key="vehicleId"
                      data-testid="vehicleId"
                    >
                      Vehicle Id
                    </TableColumn>
                    <TableColumn
                      className="bg-[#A0D9C1] text-[#00AF8F] text-[13px] text-left font-bold"
                      key="regMark"
                      data-testid="regMark"
                    >
                      Reg Mark.
                    </TableColumn>
                    <TableColumn
                      className="bg-[#A0D9C1] text-[#00AF8F] text-[13px] text-left font-bold"
                      key="chassisNumber"
                      data-testid="chassisNo"
                    >
                      Chassis No.
                    </TableColumn>
                    <TableColumn
                      className="bg-[#A0D9C1] text-[#00AF8F] text-[13px] text-left font-bold"
                      key="result"
                      data-testid="result"
                    >
                      Result
                    </TableColumn>
                    <TableColumn
                      className="bg-[#A0D9C1] text-[#00AF8F] text-[13px] text-left font-bold"
                      key="freeOfCharge"
                      data-testid="foc"
                    >
                      FOC
                    </TableColumn>
                  </TableHeader>
                  <TableBody items={recentAppointments}>
                    {(item) => (
                      <TableRow key={item.appointmentNumber}>
                        {(columnKey) => (
                          <TableCell className="text-[11px] text-left bg-[#faf7f7] pb-[1px] pt-0">
                            {columnKey === "appointmentDate" ? (
                              dayjs(item.appointmentDate).format("DD/MM/YYYY")
                            ) : (
                              <span>{getKeyValue(item, columnKey)}</span>
                            )}
                          </TableCell>
                        )}
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </ModalBody>
              <ModalFooter>
                <Button
                  className="bg-[white] text-[black] font-bold"
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
