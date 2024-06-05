
import { Button, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";
import React, { useState } from "react";
import { Search, Settings, X } from "tabler-icons-react";
import SelectNewMasterVehiclePopUp from "./SelectNewMasterVehiclePopUp";
import MergeVehicleInformationPopup from "./MergeVehicleInformationPopup";


function VehicleMergeLinkSearch() {
 
    const [showSelectNewMasterVehiclePopUp, setSelectNewMasterVehiclePopUp] = useState(false);
    const handleSelectNewMasterVehiclePopUp = () => {
        setSelectNewMasterVehiclePopUp(true);
      };

      const [showMergeVehicleInformationPopup, setMergeVehicleInformationPopup] = useState(false);
    const handleMergeVehicleInformationPopup = () => {
        setMergeVehicleInformationPopup(true);
      };

    return (
        <>
            <div className="mt-2 ml-1">
                <div className="mr-1">
                    <h1 className=" h-[250px]">
                        <h5 className="absolute -top mt-2 start-3 pl-[10px] pr-[10px] text-[12px]/[13px] text-[#00AF8F]">
                            Merge Vehicle Records
                        </h5>
                        <Table radius="none" shadow="sm" classNames={{ wrapper: "p-0" }} className="mt-5 pl-[10px] pr-[10px] mb-5">
                            <TableHeader className=" bg-[#A0D9C1] text-[#00AF8F] text-[12px]  text-left font-bold">

                                <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-[12px] text-left font-bold border-1 border-white first:rounded-none">
                                    Link Id
                                </TableColumn>
                                <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-[12px] text-left font-bold border-1 border-white">
                                    Master Vehicle Chassis No.
                                </TableColumn>
                                <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-[12px] text-left font-bold border-1 border-white">
                                    Description
                                </TableColumn>
                                <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-[12px] text-left font-bold border-1 border-white">
                                    Created Date
                                </TableColumn>
                                <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-[12px] text-left font-bold border-1 border-white">
                                    Updated Date
                                </TableColumn>
                                <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-[12px] text-center font-bold border-1 border-white last:rounded-none">
                                </TableColumn>
                            </TableHeader>
                            <TableBody>
                            <TableRow
                                >
                                    <TableCell className="border-1  border-greyBorder p-[5px]  text-left text-[12px] w-[16%]">
                                        01xzcse4
                                    </TableCell>
                                    <TableCell className="border-1  border-greyBorder p-[5px]  text-left text-[12px] w-[18%]">
                                        003249009
                                    </TableCell>
                                    <TableCell className="border-1  border-greyBorder p-[5px]  text-left text-[12px] w-[25%]">
                                        TKW
                                    </TableCell>
                                    <TableCell className="border-1  border-greyBorder p-[5px]  text-left text-[12px] w-[14%]">
                                        06/12/2022
                                    </TableCell>
                                    <TableCell className="border-1  border-greyBorder p-[5px]  text-left text-[12px] w-[14%]">
                                        10/12/2022
                                    </TableCell>
                                    <TableCell className="border-1  border-greyBorder p-[5px]  text-center text-[12px] w-[3%]"> <div className="flex">
                                        <Search
                                            size={18}
                                            color="white"
                                            className="bg-[#00AF8F] rounded-sm mt-[10px]"
                                            onClick={handleSelectNewMasterVehiclePopUp}
                                        />
                                        <Settings
                                            size={18}
                                            color="white"
                                            className="bg-[#00AF8F] rounded-sm ml-2 mt-[10px]"
                                            onClick={handleMergeVehicleInformationPopup}
                                        />
                                        <X
                                            size={18}
                                            color="white"
                                            className="bg-[#00AF8F] rounded-sm ml-2 mt-[10px]"
                                        />
                                    </div>
                                    </TableCell>
                                </TableRow>
                                <TableRow
                                >
                                    <TableCell className="border-1  border-greyBorder p-[5px]  text-left text-[12px] w-[16%]">
                                        01xzcse4
                                    </TableCell>
                                    <TableCell className="border-1  border-greyBorder p-[5px]  text-left text-[12px] w-[18%]">
                                        003249009
                                    </TableCell>
                                    <TableCell className="border-1  border-greyBorder p-[5px]  text-left text-[12px] w-[25%]">
                                        TKW
                                    </TableCell>
                                    <TableCell className="border-1  border-greyBorder p-[5px]  text-left text-[12px] w-[14%]">
                                        06/12/2022
                                    </TableCell>
                                    <TableCell className="border-1  border-greyBorder p-[5px]  text-left text-[12px] w-[14%]">
                                        10/12/2022
                                    </TableCell>
                                    <TableCell className="border-1  border-greyBorder p-[5px]  text-left text-[12px] w-[3%]"> <div className="flex">
                                        <Search
                                            size={18}
                                            color="white"
                                            className="bg-[#00AF8F] rounded-sm mt-[10px]"
                                            onClick={handleSelectNewMasterVehiclePopUp}
                                        />
                                        <Settings
                                            size={18}
                                            color="white"
                                            className="bg-[#00AF8F] rounded-sm ml-2 mt-[10px]"
                                            onClick={handleMergeVehicleInformationPopup}
                                        />
                                        <X
                                            size={18}
                                            color="white"
                                            className="bg-[#00AF8F] rounded-sm ml-2 mt-[10px]"
                                        />
                                    </div>
                                    </TableCell>
                                </TableRow>
                                <TableRow
                                >
                                    <TableCell className="border-1  border-greyBorder p-[5px]  text-left text-[12px] w-[16%]">
                                        01xzcse4
                                    </TableCell>
                                    <TableCell className="border-1  border-greyBorder p-[5px]  text-left text-[12px] w-[18%]">
                                        003249009
                                    </TableCell>
                                    <TableCell className="border-1  border-greyBorder p-[5px]  text-left text-[12px] w-[25%]">
                                        TKW
                                    </TableCell>
                                    <TableCell className="border-1  border-greyBorder p-[5px]  text-left text-[12px] w-[14%]">
                                        06/12/2022
                                    </TableCell>
                                    <TableCell className="border-1  border-greyBorder p-[5px]  text-left text-[12px] w-[14%]">
                                        10/12/2022
                                    </TableCell>
                                    <TableCell className="border-1  border-greyBorder p-[5px]  text-left text-[12px] w-[3%]"> <div className="flex">
                                        <Search
                                            size={18}
                                            color="white"
                                            className="bg-[#00AF8F] rounded-sm mt-[10px]"
                                            onClick={handleSelectNewMasterVehiclePopUp}
                                        />
                                        <Settings
                                            size={18}
                                            color="white"
                                            className="bg-[#00AF8F] rounded-sm ml-2 mt-[10px]"
                                            onClick={handleMergeVehicleInformationPopup}
                                        />
                                        <X
                                            size={18}
                                            color="white"
                                            className="bg-[#00AF8F] rounded-sm ml-2 mt-[10px]"
                                        />
                                    </div>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </h1>
                    <div className="flex justify-start mt-2 mr-1">

                        <Button
                            className={`bg-[#00AF8F] text-white text-[12px] rounded-sm ml-1`}
                            variant="bordered"
                            size="sm"
                            type="submit"
                           
                        >
                            Create New Link
                        </Button>
                    </div>
                </div>
            </div>
            {showSelectNewMasterVehiclePopUp&& (
        <SelectNewMasterVehiclePopUp
          showSelectNewMasterVehiclePopUp={showSelectNewMasterVehiclePopUp}
          setSelectNewMasterVehiclePopUp={setSelectNewMasterVehiclePopUp}
        ></ SelectNewMasterVehiclePopUp>
      )}

{showMergeVehicleInformationPopup&& (
        <MergeVehicleInformationPopup
          showMergeVehicleInformationPopup={showMergeVehicleInformationPopup}
          setMergeVehicleInformationPopup={setMergeVehicleInformationPopup}
        ></ MergeVehicleInformationPopup>
      )}
        </>
    );
}
export default VehicleMergeLinkSearch;