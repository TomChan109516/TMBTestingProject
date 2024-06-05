import { Button, useSelect } from "@nextui-org/react";
import {
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getEnquireHistory } from "./service/appointmentDetail.service";
import { saveSearchEnquiryResponse } from "../state/enquiryAppointmentSlice";
import { useNavigate } from "react-router-dom";

const tableData = [
  {
    fileName: "18/12/2020 16:34",
    discription: "Rescheduled",
  },
];

function HistoryPopup(props) {
  const open = props.HistoryPopup;
  const [appointmentHistory, setAppointmentHistory] = useState([]);
  const { appointInfo } = useSelector((state) => state.timeExamSlot);
  // const { appointmentEnquiryDetails } = useSelector((state) => state.enquiryAppointment);
  const dispatch = useDispatch();
  const router = useNavigate();

  const handleClose = () => {
    props.closeHistoryPopup(false);
  };
  useEffect(() => {
    getHistory();
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    router("/appointHistory");
  };

  const getHistory = async () => {
    const appointmentHistoryResponse = await getEnquireHistory(
      appointInfo.appointmentNumber || "202305111444 "
    );
    dispatch(saveSearchEnquiryResponse(appointmentHistoryResponse));
    setAppointmentHistory(appointmentHistoryResponse);
  };
  // console.log(appointmentEnquiryDetails);
  return (
    <div className="w-[100%]">
      <Modal
        size="2xl"
        isOpen={open}
        onClose={handleClose}
        classNames={{
          body: "py-4",
          backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
          closeButton: "mt-6 hover:bg-white/5 active:bg-white/20",
        }}
      >
        <ModalContent>
          {() => (
            <>
              <ModalBody>
                <div className="flex-initial text-[#00AF8F] p-[10px] ml-[-15px] font-bold text-[16px]">
                  History
                </div>
                <Table
                  aria-label="Example table with client side pagination "
                  radius="none"
                  classNames={{
                    wrapper: "after:bg-[#00AF8F] min-h-[50px] font-bold",
                  }}
                >
                  <TableHeader className="text-[15px]">
                    <TableColumn className="bg-[#A0D9C1] text-[#00AF8F]  text-left font-bold  ">
                      Transaction Date
                    </TableColumn>
                    <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-left font-bold  ">
                      Reason
                    </TableColumn>
                    <TableColumn className="bg-[#A0D9C1] text-[#00AF8F]  text-left font-bold "></TableColumn>
                  </TableHeader>
                  <TableBody>
                    {appointmentHistory.map(
                      ({ transactionDate, reason, appointmentNumber }) => {
                        return (
                          <TableRow key={appointmentNumber}>
                            <TableCell className=" text-[#131212] text-[12px] text-left   ">
                              {transactionDate}{" "}
                            </TableCell>
                            <TableCell className=" text-[#000000] text-[12px] text-left ">
                              {" "}
                              {reason}
                            </TableCell>
                            <TableCell>
                              <Button
                                className="bg-[#00AF8F] text-[#f7f5f5] text-[12px] text-left font-bold h-8 rounded"
                                variant="bordered"
                                type="submit"
                                onClick={handleClick}
                              >
                                History
                              </Button>
                            </TableCell>
                          </TableRow>
                        );
                      }
                    )}
                  </TableBody>
                </Table>
              </ModalBody>
              <ModalFooter>
                <Button
                  className="bg-[#ffffff] rounded h-8"
                  variant="bordered"
                  type="submit"
                  fond-bold
                  onClick={handleClose}
                >
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
HistoryPopup.propTypes = {
  HistoryPopup: PropTypes.string,
  closeHistoryPopup: PropTypes.func,
};

export default HistoryPopup;
