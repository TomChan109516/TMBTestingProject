import React, { useState, useEffect } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import { Search, Printer } from "tabler-icons-react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { saveVehicleId } from "../attachment/state/attachmentSlice";
// import {searchVehicleData} from "./state/searchVehicleSlice";

export default function SearchVehicleTable() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const searchVehicleTableData = useSelector(
    (state) => state.SearchVehicle.searchVehicleResponse
  );
  const searchHandle = (vehicleId) => {
    dispatch(saveVehicleId(vehicleId));
    navigate(`/VehicleDetail/${vehicleId}`);
  };

  return (
    <div className="-mt-[50px]">
      <div className="text-left bg-[#00AF8F] text-white p-2"> Vehicles </div>

      <Table radius="none" shadow="sm" classNames={{ wrapper: "p-0" }}>
        <TableHeader className=" bg-[#A0D9C1] text-[#00AF8F] text-sm  text-center font-bold">
          <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold">
            {}
          </TableColumn>
          <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold">
            Vehicle Id
          </TableColumn>
          <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold">
            Chassis No.
          </TableColumn>
          <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold">
            Vehicle Class
          </TableColumn>
          <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold">
            Make
          </TableColumn>

          <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold">
            Float Name
          </TableColumn>
          <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold">
            Reg. Mark
          </TableColumn>
          <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold">
            Sub-Class
          </TableColumn>
          <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold">
            C&E No.
          </TableColumn>
          <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold">
            T.A No.
          </TableColumn>
        </TableHeader>
        <TableBody>
          {searchVehicleTableData?.map((searchVehicleinfo) => (
            <TableRow>
              <TableCell>
                {/* <PageviewIcon
                                    className=" text-[#00AF8F]  mr-2  text-3xl text-center"
                                  onClick={() => searchHandle(searchVehicleinfo.vehicleId)}
                                >
                                    <svg data-testid="PageviewIcon"></svg>{" "}
                                </PageviewIcon>
                                <PrintIcon
                                    className=" text-[#00AF8F]  text-center  text-3xl"
                                //   onClick={() => handleAppointmentLetter(searchAppointment.appointmentNumber)}
                                /> */}
                 <div className="inline-flex">              
                <Search
                  size="20"
                  color="white"
                  className="bg-[#00AF8F] rounded-sm "
                  onClick={() => searchHandle(searchVehicleinfo.vehicleId)}
                >
                  {/* <svg data-testid="PageviewIcon"></svg>{" "} */}
                </Search>
                <Printer
                  size="20"
                  color="white"
                  className="bg-[#00AF8F] rounded-sm ml-2 "
                //   className=" text-[#00AF8F]  text-center  text-3xl"
                />
                </div> 
              </TableCell>
              {/* <TableCell>{searchVehicle.appointmentNo}</TableCell> */}
              <TableCell data-testid="vehicleid">{searchVehicleinfo.vehicleId}</TableCell>
              <TableCell data-testid="chassisNo">{searchVehicleinfo.chassisNumber}</TableCell>
              <TableCell data-testid="vehicleClass">{searchVehicleinfo.vehicleClass}</TableCell>
              <TableCell data-testid="make">{searchVehicleinfo.make}</TableCell>
              <TableCell data-testid="floatNo">{searchVehicleinfo?.floatName}</TableCell>

              <TableCell>{searchVehicleinfo.regMark}</TableCell>
              <TableCell>{searchVehicleinfo?.vehicleSubClass}</TableCell>
              <TableCell>{searchVehicleinfo.taNumber}</TableCell>

              <TableCell>{searchVehicleinfo.ceNumber}</TableCell>
              {/* <TableCell>{searchVehicleinfo.make}</TableCell>
                            <TableCell>{searchVehicleinfo.make}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
