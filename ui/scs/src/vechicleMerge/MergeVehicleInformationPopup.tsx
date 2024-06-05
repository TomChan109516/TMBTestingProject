import React from "react";
import {
  Modal,
  ModalContent,
  ModalBody,
  Button,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";

import { Input, SelectItem, Select, Checkbox } from "@nextui-org/react";
import PropTypes from "prop-types";
import { Search } from "tabler-icons-react";
import CurrentMasterVehicleTableType from "./CurrentMasterVehicleTableType";

function MergeVehicleInformationPopup(props) {
  const MergeVehicleInformationPopup = props.showMergeVehicleInformationPopup;

  const handleClose = () => {
    props.setMergeVehicleInformationPopup(false);
  };
  return (
    <>
      <Modal
        isOpen={MergeVehicleInformationPopup}
        onClose={handleClose}
        size="full"
        className="w-[85%] h-[100%] overflow-y-auto"
      >
        <ModalContent>
          <>
            <ModalBody>
              <div className="flex-initial text-[#00AF8F] p-[0px] ml-[2px]  text-sm">
                Merge Vechicle Information
              </div>
              <div className="flex-initial text-[#00AF8F] p-[0px] ml-[2px]  text-sm">
                Current Link ID: 00004
              </div>
           
               

              {/* <Table
                radius="none"
                shadow="sm"
                classNames={{ wrapper: "p-0 mt-[-12px]" }}
              >
                <TableHeader className=" bg-[#A0D9C1] text-[#00AF8F] text-sm  text-center font-bold ">
                  <TableColumn
                    className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold border-1 border-white first:rounded-sm"
                    children={undefined}
                  ></TableColumn>
                  <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold border-1 border-white">
                    Type
                  </TableColumn>
                  <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold border-1 border-white">
                    Class
                  </TableColumn>
                  <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold border-1 border-white">
                    Vehicle ID
                  </TableColumn>
                  <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold border-1 border-white">
                    Reg.Mark
                  </TableColumn>
                  <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold border-1 border-white">
                    Chassis No
                  </TableColumn>
                  <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold border-1 border-white">
                    Make
                  </TableColumn>
                  <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold border-1 border-white">
                    C&E NO
                  </TableColumn>
                  <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold border-1 border-white">
                    Doc.No.
                  </TableColumn>

                  <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold border-1 border-white last:rounded-sm">
                    T.A.No
                  </TableColumn>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell
                      className="border-1  border-greyBorder p-[5px]  text-left"
                      children={undefined}
                    >
                      <Search
                        size={20}
                        color="white"
                        className="bg-[#00AF8F] rounded-sm"
                      />
                    </TableCell>
                    <TableCell className="border-1  border-greyBorder p-[5px]  text-left  ">
                      VALID
                    </TableCell>
                    <TableCell className="border-1  border-greyBorder p-[5px]  text-left ">
                      014
                    </TableCell>
                    <TableCell className="border-1  border-greyBorder p-[5px]  text-left">
                      003249009{" "}
                    </TableCell>
                    <TableCell className="border-1  border-greyBorder p-[5px]  text-left">
                      {" "}
                    </TableCell>
                    <TableCell className="border-1  border-greyBorder p-[5px]  text-left">
                      AB71R04925Z
                    </TableCell>
                    <TableCell className="border-1  border-greyBorder p-[5px]  text-left">
                      H20
                    </TableCell>
                    <TableCell
                      className="border-1  border-greyBorder p-[5px]  text-left"
                      children={undefined}
                    ></TableCell>
                    <TableCell
                      className="border-1  border-greyBorder p-[5px]  text-left"
                      children={undefined}
                    ></TableCell>
                    <TableCell
                      className="border-1  border-greyBorder p-[5px]  text-left"
                      children={undefined}
                    ></TableCell>
                  </TableRow>
                </TableBody>
              </Table> */}
              <div className="mt-[-11px]">   <CurrentMasterVehicleTableType/></div>
            
   
            
              <div className="pt-[5px] w-[100%]">
                <div className="flex"></div>
                <div>
                  <div className="ml-1">
                    <div className="mt-[5px] w-full">
                      <h1>
                        <h5 className="absolute -top-2 start-3 pl-[5px] pr-[10px] text-sm/[13px] text-[#00AF8F] ">
                          Search Child Vehicle
                        </h5>
                        <div className="grid grid-cols-5 gap-2">
                          <div className="col-span-4 ">
                            <div className="text-[10.5px] font-bold flex flex-row  ">
                              <div className="grid grid-rows-6 mt-1 h-[200px] grid-flow-col whitespace-nowrap w-4/5 ml-[40px]">
                                <div className="flex flex-row  pt-[15px] w-[100%]">
                                  <div className="ml-2  text-left  text-[11px]font-bold mt-[5px] w-[26.5%]">
                                    Vehicle ID
                                  </div>
                                  <div className="w-[90%] pl-8  ">
                                    <Input
                                      variant="bordered"
                                      radius="none"
                                      name="regMark"
                                      size="sm"
                                      maxLength={10}
                                      placeholder="00324009"
                                    />
                                  </div>
                                </div>
                                <div className="flex flex-row  pt-[15px] w-[100%] mt-[3px]">
                                  <div className="ml-2  text-left  text-[11px]font-bold mt-[5px] w-[26.5%]">
                                    Chassis No.
                                  </div>
                                  <div className="w-[90%] pl-8  ">
                                    <Input
                                      variant="bordered"
                                      radius="none"
                                      name="regMark"
                                      size="sm"
                                      maxLength={10}
                                      placeholder="A8"
                                    />
                                  </div>
                                </div>
                                <div className="flex flex-row  pt-[15px] w-[100%] mt-[5px] ">
                                  <div className="ml-2  text-left  text-[11px]font-bold mt-[5px] w-[26.5%]">
                                    Vehicle Class
                                  </div>

                                  <div className="w-[69%] mt-[px]  ml-5">
                                    <Select
                                      labelPlacement="outside-left"
                                      size="sm"
                                      radius="none"
                                      name="lane"
                                      variant="bordered"
                                      placeholder="Select"
                                    >
                                      <SelectItem key={""}>1</SelectItem>
                                    </Select>
                                  </div>
                                </div>
                                <div className="flex flex-row  pt-[15px] w-[100%] mt-[7px] ">
                                  <div className="ml-2  text-left  text-[11px]font-bold mt-[5px] w-[26.5%]">
                                    Make
                                  </div>

                                  <div className="w-[69%] mt-[px]  ml-5">
                                    <Select
                                      labelPlacement="outside-left"
                                      size="sm"
                                      radius="none"
                                      name="lane"
                                      variant="bordered"
                                      placeholder="Select"
                                    >
                                      <SelectItem key={""}>1</SelectItem>
                                    </Select>
                                  </div>
                                </div>
                                <div className="flex flex-row  pt-[15px] w-[100%] mt-[10px]">
                                  <div className="ml-2  text-left  text-[11px]font-bold mt-[5px] w-[26.5%]">
                                    Doc. No.
                                  </div>

                                  <div className="w-[95%] pl-9">
                                    <Input
                                      variant="bordered"
                                      radius="none"
                                      name="regMark"
                                      size="sm"
                                      maxLength={10}
                                      placeholder="16.50"
                                    />
                                  </div>
                                </div>
                                <div className="flex flex-row  pt-[15px] w-[100%] mt-[13px]">
                                  <div className="ml-2  text-left  text-[11px]font-bold mt-[5px] w-[19.5%]">
                                    Vehicle Type
                                  </div>
                                  <div className="w-[71%] mt-[px]  ml-10">
                                    <Select
                                      labelPlacement="outside-left"
                                      size="sm"
                                      radius="none"
                                      name="lane"
                                      variant="bordered"
                                      placeholder="Select"
                                    >
                                      <SelectItem key={""}>1</SelectItem>
                                    </Select>
                                  </div>
                                </div>
                              </div>
                              <div className="grid grid-rows-6 mt-2 h-[200px] grid-flow-col whitespace-nowrap w-4/5 ml-[70px]">
                                <div className="flex flex-row  pt-[15px] w-[100%]">
                                  <div className="ml-2  text-left  text-[11px]font-bold mt-[5px] w-[26.5%]">
                                    Reg. Mark
                                  </div>
                                  <div className="w-[90%] pl-8">
                                    <Input
                                      variant="bordered"
                                      radius="none"
                                      name="regMark"
                                      size="sm"
                                      maxLength={10}
                                    />
                                  </div>
                                </div>
                                <div className="flex flex-row  pt-[15px] w-[100%] mt-[2px]">
                                  <div className="ml-2  text-left  text-[11px]font-bold mt-[5px] w-[26.5%]">
                                    Length:
                                  </div>
                                  <div className="w-[80%] pl-8  text-[10px] font-bold ">
                                    <p>
                                      <Checkbox
                                        size="md"
                                        classNames={{
                                          wrapper:
                                            "after:bg-[#00AF8F] mt-1 text-sm ",
                                        }}
                                        radius="sm"
                                      />
                                      Compare alphanumeric characters only{" "}
                                    </p>
                                  </div>
                                </div>
                                <div className="flex flex-row  pt-[15px] w-[100%] mt-[5px] ">
                                  <div className="ml-2  text-left  text-[11px]font-bold mt-[5px] w-[26.5%]">
                                    Sub-Class
                                  </div>

                                  <div className="w-[90%] pl-8">
                                    <Input
                                      variant="bordered"
                                      radius="none"
                                      name="regMark"
                                      size="sm"
                                      maxLength={10}
                                      placeholder="N/A"
                                    />
                                  </div>
                                </div>
                                <div className="flex flex-row  pt-[15px] w-[100%] mt-[7px] ">
                                  <div className="ml-2  text-left  text-[11px]font-bold mt-[5px] w-[26.5%]">
                                    C&E No.
                                  </div>

                                  <div className="w-[90%] pl-8">
                                    <Input
                                      variant="bordered"
                                      radius="none"
                                      name="regMark"
                                      size="sm"
                                      maxLength={10}
                                    />
                                  </div>
                                </div>
                                <div className="flex flex-row  pt-[15px] w-[100%] mt-[10px]">
                                  <div className="ml-2  text-left  text-[11px]font-bold mt-[5px] w-[26.5%]">
                                    T.A No.
                                  </div>

                                  <div className="w-[90%] pl-8">
                                    <Input
                                      variant="bordered"
                                      radius="none"
                                      name="regMark"
                                      size="sm"
                                      maxLength={10}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="..."></div>
                        </div>
                        <div className="flex justify-end mb-2  mr-7">
                          <Button
                            className={`bg-[white] text-[black] shadow-sm rounded-sm `}
                            variant="bordered"
                            size="sm"
                          >
                            Reset
                          </Button>
                          <Button
                            className={`bg-[#00AF8F] text-white rounded-sm ml-1`}
                            variant="bordered"
                            size="sm"
                            type="submit"
                          >
                            Search
                          </Button>
                        </div>
                      </h1>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-left bg-[#007f62] text-white  text-[12px] p-1">
                Child Vehicle List
              </div>
              <Table
                radius="none"
                shadow="sm"
                classNames={{
                  wrapper: "p-0 mt-[-12px] overflow-y-auto h-45",
                }}
              >
                <TableHeader className=" bg-[#A0D9C1] text-[#00AF8F] text-sm  text-center font-bold">
                  <TableColumn
                    className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold border-1 border-white first:rounded-sm"
                    children={undefined}
                  ></TableColumn>
                  <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold border-1 border-white">
                    Type
                  </TableColumn>
                  <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold border-1 border-white">
                    Class
                  </TableColumn>
                  <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold border-1 border-white">
                    Vehicle ID
                  </TableColumn>
                  <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold border-1 border-white">
                    Reg.Mark
                  </TableColumn>
                  <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold border-1 border-white">
                    Chassis No.
                  </TableColumn>
                  <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold border-1 border-white">
                    Make
                  </TableColumn>
                  <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold border-1 border-white">
                    C&E NO
                  </TableColumn>
                  <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold border-1 border-white">
                    Doc.No.
                  </TableColumn>

                  <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold border-1 border-white last:rounded-sm">
                    T.A.No
                  </TableColumn>
                </TableHeader>
                <TableBody>
                  <TableRow>
                  <TableCell className="border-1  border-greyBorder p-[5px]  text-left  ">
                      <Search
                        size={20}
                        color="white"
                        className="bg-[#00AF8F] rounded-sm"
                      />
                    </TableCell>

                    <TableCell className="border-1  border-greyBorder p-[5px]  text-left  ">
                      VALID
                    </TableCell>
                    <TableCell className="border-1  border-greyBorder p-[5px]  text-left ">
                      014
                    </TableCell>
                    <TableCell className="border-1  border-greyBorder p-[5px]  text-left">
                      002757300{" "}
                    </TableCell>
                    <TableCell className="border-1  border-greyBorder p-[5px]  text-left">
                      {" "}
                    </TableCell>
                    <TableCell className="border-1  border-greyBorder p-[5px]  text-left">
                      AB71R04925Z
                    </TableCell>
                    <TableCell className="border-1  border-greyBorder p-[5px]  text-left">
                      H20
                    </TableCell>
                    <TableCell className="border-1  border-greyBorder p-[5px]  text-left">

                    </TableCell>

                    <TableCell className="border-1  border-greyBorder p-[5px]  text-left">

                    </TableCell>

                    <TableCell className="border-1  border-greyBorder p-[5px]  text-left">
                      
                    </TableCell>
                  </TableRow>
                  <TableRow>
                  <TableCell className="border-1  border-greyBorder p-[5px]  text-left  ">
                      <Search
                        size={20}
                        color="white"
                        className="bg-[#00AF8F] rounded-sm"
                      />
                    </TableCell>

                    <TableCell className="border-1  border-greyBorder p-[5px]  text-left  ">
                      VALID
                    </TableCell>
                    <TableCell className="border-1  border-greyBorder p-[5px]  text-left ">
                      014
                    </TableCell>
                    <TableCell className="border-1  border-greyBorder p-[5px]  text-left">
                      002757322{" "}
                    </TableCell>
                    <TableCell className="border-1  border-greyBorder p-[5px]  text-left">
                      {" "}
                    </TableCell>
                    <TableCell className="border-1  border-greyBorder p-[5px]  text-left">
                      AB71R04935Z
                    </TableCell>
                    <TableCell className="border-1  border-greyBorder p-[5px]  text-left">
                      TG
                    </TableCell>
                    <TableCell
                      className="border-1  border-greyBorder p-[5px]  text-left"
                      children={undefined}
                    ></TableCell>
                    <TableCell
                      className="border-1  border-greyBorder p-[5px]  text-left"
                      children={undefined}
                    ></TableCell>
                    <TableCell
                      className="border-1  border-greyBorder p-[5px]  text-left"
                      children={undefined}
                    ></TableCell>
                  </TableRow>
                  <TableRow>
                  <TableCell className="border-1  border-greyBorder p-[5px]  text-left  ">
                      <Search
                        size={20}
                        color="white"
                        className="bg-[#00AF8F] rounded-sm"
                      />
                    </TableCell>

                    <TableCell className="border-1  border-greyBorder p-[5px]  text-left  ">
                      VALID
                    </TableCell>
                    <TableCell className="border-1  border-greyBorder p-[5px]  text-left ">
                      014
                    </TableCell>
                    <TableCell className="border-1  border-greyBorder p-[5px]  text-left">
                      002757333{" "}
                    </TableCell>
                    <TableCell className="border-1  border-greyBorder p-[5px]  text-left">
                      {" "}
                    </TableCell>
                    <TableCell className="border-1  border-greyBorder p-[5px]  text-left">
                      AB71R04923Z
                    </TableCell>
                    <TableCell className="border-1  border-greyBorder p-[5px]  text-left">
                      TG
                    </TableCell>
                    <TableCell className="border-1  border-greyBorder p-[5px]  text-left">
                      005458-18-0001
                    </TableCell>
                    <TableCell
                      className="border-1  border-greyBorder p-[5px]  text-left"
                      children={undefined}
                    ></TableCell>
                    <TableCell
                      className="border-1  border-greyBorder p-[5px]  text-left"
                      children={undefined}
                    ></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <div className="flex justify-end mb-[10px] mr-1">
                <Button
                  className={`bg-[#ffffff]  text-[black] rounded-sm ml-1`} //white: '#fff'
                  variant="bordered"
                  size="sm"
                  onClick={handleClose}
                >
                  Close
                </Button>
              </div>
            </ModalBody>
          </>
        </ModalContent>
      </Modal>
    </>
  );
}
MergeVehicleInformationPopup.propTypes = {
  showMergeVehicleInformationPopup: PropTypes.string,
  closeMergeVehicleInformationPopup: PropTypes.func,
};

export default MergeVehicleInformationPopup;
