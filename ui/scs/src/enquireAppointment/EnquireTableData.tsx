import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import { Search, Printer } from "tabler-icons-react";
import { REPRINT_CERTIFICATE } from "../constants/urlConstants";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { axiosGetPDF } from "../utils/axiosInstance";
import dayjs from "dayjs";

export default function EnquireTableData() {
  const navigate = useNavigate();

  const searchAppointmentData = useSelector(
    (state) => state.enquiryAppointment.searchEnquiryAppointment
  );

  const searchHandle = (appointmentNumber) => {
    navigate(`/appointmentDetail/${appointmentNumber}`);
  };
  // const fetchAppointmentDetails = async () => {
  //   try {
  //     const baseUrl = GET_APPOINTMENT_DETAIL;
  //     const apiUrl = `${baseUrl}?appointmentNumber=202304150529`;
  //     const response = await axiosGet(apiUrl);
  //     dispatch(saveAppointmentDetails(response));
  //   } catch (error) {
  //     console.error("Error fetching Appointment Details data:", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchAppointmentDetails();
  // }, []);

  const handleAppointmentLetter = async (appointmentNumber) => {
    try {
      const response = await axiosGetPDF(
        REPRINT_CERTIFICATE + appointmentNumber
      );
      const file = new Blob([response], { type: "application/pdf" });
      const fileURL = URL.createObjectURL(file);
      window.open(fileURL);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="-mt-[50px]">
      <div className="text-left bg-[#00AF8F] text-white p-2"> Appointment</div>

      <Table radius="none" shadow="sm" classNames={{ wrapper: "p-0" }}>
        <TableHeader className=" bg-[#A0D9C1] text-[#00AF8F] text-sm  text-center font-bold">
          <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold">
            {}
          </TableColumn>
          <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold">
            Appointment No
          </TableColumn>
          <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold">
            Center
          </TableColumn>
          <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold">
            Lane
          </TableColumn>
          <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold">
            Exam Date
          </TableColumn>
          <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold">
            Exam code
          </TableColumn>
          <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold">
            Vehicle Class
          </TableColumn>
          <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold">
            Reg. Mark
          </TableColumn>
          <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold">
            Vehicle Id
          </TableColumn>
          <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold">
            Chassis No.
          </TableColumn>
        </TableHeader>

        <TableBody>
          {searchAppointmentData.map((searchAppointment) => (
            <TableRow key={searchAppointment.appointmentNumber}>
              <TableCell>
                <div className="inline-flex">
                <Search
                  size="18"
                  color="white"
                  className="bg-[#00AF8F] rounded-sm "
                  onClick={() =>
                    searchHandle(searchAppointment.appointmentNumber)
                  }
                >
                  {/* <svg data-testid="PageviewIcon"></svg>{" "} */}
                </Search>
                <Printer
                  size="18"
                  color="white"
                  className="bg-[#00AF8F] rounded-sm ml-2"
                  onClick={() =>
                    handleAppointmentLetter(searchAppointment.appointmentNumber)
                  }
                />
                </div>
              </TableCell>
              <TableCell>{searchAppointment.appointmentNumber}</TableCell>
              <TableCell>{searchAppointment.centerCode}</TableCell>
              <TableCell>{searchAppointment.laneId}</TableCell>
              <TableCell>
                {dayjs(searchAppointment.examDate).format("DD/MM/YYYY HH:mm")}
              </TableCell>
              <TableCell>{searchAppointment.primaryExamCode}</TableCell>
              <TableCell>{searchAppointment.vehicleClassId}</TableCell>
              <TableCell>{searchAppointment.regMark}</TableCell>
              <TableCell>{searchAppointment.vehicleId}</TableCell>
              <TableCell>{searchAppointment.chassisNumber}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
