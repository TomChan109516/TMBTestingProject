import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalBody,
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  Button,
  Input,
} from "@nextui-org/react";

import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import {
  setData,
  setUnConfirmedListVehicleData,
  setUnConfirmedListVehicleTableData,
} from "./state/InspectionDataSlice";
import data from "./state/data";
import { saveLoader } from "../login/state/loginSlice";
import { getAppointmentDetails } from "../login/service/login.service";
import { setData as setRegisterData } from "../vehicleRegistration/state/RegistrationDataSlice";
import { getalltestresult } from "./service/getAllTestResult";

function UnconfirmedListPagePopup(props) {
  const dispatch = useDispatch();
  const open = props.showUnconfirmedListPagePopup;
  const handleClose = () => {
    props.closeUnconfirmedListPagePopup(false);
  };
  const userId = localStorage.getItem("userName") || "Admin";

  const getDataAndHandleClose = async (appointId) => {
    //the retrieved api data will be stored in slice file
    const filteredVehicleData = props.vehicleDetails.filter(
      (details) => details.appointmentId === appointId
    );
    const { appointmentId, laneId } = filteredVehicleData[0];

    try {
      dispatch(saveLoader(true));
      const response = await getAppointmentDetails(appointId);
      const testResultResponse = await getalltestresult(response.inspectionId);
      const vehicleData = {
        userId: userId,
        appointmentId,
        laneId,
        vehicleId: response?.vehicleId,
      };
      dispatch(
        setRegisterData({ regdata: response, appointmentId: appointId })
      );
      dispatch(saveLoader(false));
      dispatch(setData(data));
      dispatch(setUnConfirmedListVehicleData(vehicleData));

      dispatch(setUnConfirmedListVehicleTableData(testResultResponse));

      handleClose();
    } catch (error) {
      dispatch(setRegisterData({ regdata: {}, appointmentId: appointId }));
      dispatch(saveLoader(false));
    }
  };

  return (
    <>
      {/* <Button onPress={onOpen}>Lighting Config</Button> */}
      <Modal
        isOpen={open}
        size="5xl"
        className="font-calibri text-inputTxt rounded "
        hideCloseButton={true}
      >
        <ModalContent className="mb-3">
          {(onClose) => (
            <>
              <ModalBody>
                <>
                  <div className="ml-3 pb-1 font-bold text-[15px]">
                    <span> Unconfirmed List</span>
                  </div>
                  <div>
                    <div className="flex justify-end   ">
                      <div className="  text-right -my-1">
                        <label className="font-bold mr-2" htmlFor="Wheel Span">
                          Appoint No.
                        </label>

                        <Input
                          labelPlacement="outside-left"
                          size="sm"
                          className="w-[200px] inline-block rounded-md border-[#e0dede] bg-[rgb(250,250,250)] mr-5 ml-3 p-1 "
                          classNames={{
                            inputWrapper:
                              "border rounded overflow-hidden border-lightCyan",
                          }}
                          radius="none"
                          variant="bordered"
                        />
                      </div>

                      <Button
                        radius="sm"
                        className={`bg-[#01b686] text-[white] w-[100px] font-bold rounded overflow-hidden mr-1 `}
                        size="sm"
                      >
                        Search
                      </Button>
                      <Button
                        radius="lg"
                        className={`bg-[#01b686] persianGreen w-[100px] text-[white] font-bold rounded overflow-hidden `}
                        size="sm"
                      >
                        Reset
                      </Button>
                    </div>
                  </div>
                  <div className="">
                    <Table
                      radius="none"
                      shadow="sm"
                      classNames={{ wrapper: "p-0" }}
                    >
                      <TableHeader className="bg-tropicalrainforest ">
                        <TableColumn className="bg-[#007E63] text-white text-center text-sm font-bold border-1 border-white first:rounded-none last:rounded-none">
                          ID
                        </TableColumn>
                        <TableColumn className="bg-[#007E63] text-white text-center text-sm font-bold border-1 border-white">
                          Appointment ID
                        </TableColumn>
                        <TableColumn className="bg-[#007E63] text-white text-center text-sm font-bold border-1 border-white">
                          Veh.Number
                        </TableColumn>
                        <TableColumn className="bg-[#007E63] text-white text-center text-sm font-bold border-1 border-white">
                          Lane Number
                        </TableColumn>
                        <TableColumn className="bg-[#007E63] text-white text-center text-sm font-bold border-1 border-white">
                          Time
                        </TableColumn>
                        <TableColumn className="bg-[#007E63] text-white text-center text-sm font-bold border-1 border-white first:rounded-none last:rounded-none">
                          Operation
                        </TableColumn>
                      </TableHeader>
                      <TableBody>
                        {props.vehicleDetails.map((details, index) => {
                          return (
                            <TableRow
                              key={index}
                              className="even:bg-[#e7fbf6]  odd:bg-white_color font-calibri text-center"
                            >
                              <TableCell className="border-1 border-greyBorder font-bold text-sm">
                                {index + 1}
                              </TableCell>
                              <TableCell className="border-1 border-greyBorder font-bold text-sm">
                                {details.appointmentId}
                              </TableCell>
                              <TableCell className="border-1 border-greyBorder font-bold  text-sm">
                                {details?.vehicleId}
                              </TableCell>
                              <TableCell className="border-1 border-greyBorder font-bold  text-sm">
                                {details?.laneId}
                              </TableCell>
                              <TableCell className="border-1 border-greyBorder font-bold  text-sm">
                                {details?.createDatetime}
                              </TableCell>
                              <TableCell className="border-1 border-greyBorder text-orange font-bold  text-sm ">
                                <h2
                                  className=" cursor-pointer text-red"
                                  onClick={() =>
                                    getDataAndHandleClose(details.appointmentId)
                                  }
                                >
                                  Retrieve
                                </h2>
                              </TableCell>
                            </TableRow>
                          );
                        })}
                      </TableBody>
                    </Table>

                    <div className="font-bold  mt-4">
                      showing 1 to 1 of 1 rows{" "}
                    </div>
                  </div>
                </>
              </ModalBody>
              <div className="flex justify-center mb-10  mt-10">
                <Button
                  radius="sm"
                  className={`bg-[#01b686] w-[210px] text-[white] font-bold rounded overflow-hidden `}
                  size="sm"
                >
                  Show Vehicle(s) From Other Lanes
                </Button>
                <Button
                  radius="lg"
                  className={`bg-[white] text-[black] font-bold border-1.5 border-[#d3d3d3] rounded overflow-hidden ml-6  `}
                  variant="bordered"
                  size="sm"
                  type="submit"
                  onClick={handleClose}
                >
                  Quit
                </Button>
              </div>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
UnconfirmedListPagePopup.propTypes = {
  showUnconfirmedListPagePopup: PropTypes.bool,
  closeUnconfirmedListPagePopup: PropTypes.func,
};
export default UnconfirmedListPagePopup;
function axiosGet(arg0: string) {
  throw new Error("Function not implemented.");
}
