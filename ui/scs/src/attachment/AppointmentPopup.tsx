import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  Button,
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import dayjs from "dayjs";
import { getAppointmentHistory } from "./service/vehicleAttachment.service";
import {RadioGroup, Radio} from "@nextui-org/react";
import { setSelectedAppointment } from "./state/attachmentSlice";


function AppointmentPopup(props) {
  const dispatch = useDispatch();

  const { showAppointmentPopup, setShowAppointmentPopup } = props;
  const [appointmentHistory, setAppointmentHistory] = useState<[]>([]);
  const [appointmentNumber, setAppointmentNumber] = useState<[]>([]);
  

   const handleClose = () => {
    setShowAppointmentPopup(false);
  };

``
  const handleRadioChange = () => {
    dispatch(setSelectedAppointment(appointmentNumber)) 
    setShowAppointmentPopup(false);
  }


  const appointHistory = async () => {
    const response = await getAppointmentHistory(chassisNumber);
    setAppointmentHistory(response);
  }
  const vehicleInfo = useSelector((state) => state.enquiryAppointment.enquiryVehicleInfo
  );
  const chassisNumber = vehicleInfo.chassisNumber

  useEffect(() => {
    appointHistory();
  }, [])

  return (
    <>
      <div className="w-[100%] p-[5px] pl-5 width={700} height={400}">
        <Modal
          isOpen={showAppointmentPopup}
          onClose={handleClose}
          size="5xl"
        >
          <ModalContent>
            {() => (
              <>
                <div className="w-[100%]">
                  <div className=" font-bold bg-[#fafafa] text-[#00AF8F]  mt-[35px] ml-[20px]">
                    {" "}
                    Appointment And Inspection{" "}
                  </div>
                </div>
                <ModalBody>
                  <Table aria-label="Example static collection table  ">
                    <TableHeader className="table-fixed">
                      <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] fontsize-14px text-left font-bold ">
                        {" "}
                      </TableColumn>
                      <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] fontsize-14px text-left font-bold ">
                        Date
                      </TableColumn>
                      <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] fontsize-14px text-left font-bold ">
                        Time
                      </TableColumn>
                      <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] fontsize-14px text-left font-bold ">
                        Centre
                      </TableColumn>
                      <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] fontsize-14pxtext-left font-bold ">
                        Lane
                      </TableColumn>
                      <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] fontsize-14px text-left font-bold ">
                        Appointment No
                      </TableColumn>
                      <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] fontsize-14pxtext-left font-bold ">
                        Exam Code
                      </TableColumn>
                      <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] fontsize-14px text-left font-bold ">
                        Result
                      </TableColumn>
                    </TableHeader>
                    <TableBody>

                      {appointmentHistory.map((data) => {
                        return (<TableRow key={data.id}>
                         
                          <TableCell className="radio" >
                            <input
                            
                              type="radio"
                              id="r1"
                              name="selectedValue"
                              value={data.appointmentNumber}
                              onChange = {(e) => setAppointmentNumber(e.target.value.toString())} 
      
                             
                            ></input>
                            <label htmlFor="r1"> </label>
                          </TableCell>
                          
                          <TableCell className="font-size:12px">
                            {dayjs(data?.appointmentdate).format("DD/MM/YYYY")}
                          </TableCell>
                          <TableCell className="font-size:12px">{dayjs(data?.appointmentdate).format("HH:MM")} </TableCell>

                          <TableCell className="font-size:12px">{data?.centreCode} </TableCell>
                          <TableCell className="font-size:12px"> {data?.laneId}</TableCell>
                          <TableCell className="font-size:12px">
                            {data?.appointmentNumber}
                          </TableCell>
                          <TableCell className="font-size:12px">{data?.primaryExamCode}</TableCell>
                          <TableCell className="font-size:12px"> </TableCell>
                        </TableRow>)
                      })
                      }

                    </TableBody>
                  </Table>
                </ModalBody>
                <ModalFooter>
                  <Button
                    className="bg-[#e4e4e7] fontsize-13px"
                    onClick={handleClose}
                  >
                    Cancel
                  </Button>
                  <Button className="bg-[#00AF8F] fontsize-13px text-white" onClick={handleRadioChange} >
                    Select
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    </>
  );
}
AppointmentPopup.propTypes = {
  showAppointmentpopup: PropTypes.bool,
  setShowAppointmentPopup: PropTypes.func,
};

export default AppointmentPopup;

