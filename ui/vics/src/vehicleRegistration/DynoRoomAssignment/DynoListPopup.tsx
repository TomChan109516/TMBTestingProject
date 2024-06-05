import React from "react";
import { IconArrowRightToArc } from "@tabler/icons-react";
import {
  Modal,
  ModalContent,
  ModalBody,
  Button,
  Select,
  SelectItem,
  Checkbox,
  TableBody,
  Table,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";

const tableData = [
  {
    id: "01",
    Dyno_room: "Room 1 (reassigned)",
    Appt_no: 231020151942,
    Vehicle_class: "FE100",
    Reg_Mark: "FE100",
    Lane_no: "01",
    Print_dyno_chit: "2023-10-20 14:16:17",
    Test_item: "Dyno",
    Status: "Completed",
  },
  {
    id: "02",
    Dyno_room: "Room 1",
    Appt_no: 231020151942,
    Vehicle_class: "FE100",
    Reg_Mark: "FE100",
    Lane_no: "02",
    Print_dyno_chit: "2023-10-20 14:16:17",
    Test_item: "Non-dyno",
    Status: "In-progress",
  },
  {
    id: "03",
    Dyno_room: "Room 1",
    Appt_no: 231020151942,
    Vehicle_class: "FE100",
    Reg_Mark: "FE100",
    Lane_no: "14",
    Print_dyno_chit: "2023-10-20 14:16:17",
    Test_item: "Dyno",
    Status: "Todo",
  },
  {
    id: "04",
    Dyno_room: "Room 1",
    Appt_no: 231020151942,
    Vehicle_class: "FE100",
    Reg_Mark: "FE100",
    Lane_no: "16",
    Print_dyno_chit: "2023-10-20 14:16:17",
    Test_item: "Dyno",
    Status: "Rejected Printing",
  },
  {
    id: "05",
    Dyno_room: "Room 1",
    Appt_no: 231020151942,
    Vehicle_class: "FE100",
    Reg_Mark: "FE100",
    Lane_no: "20",
    Print_dyno_chit: "2023-10-20 14:16:17",
    Test_item: "Non-dyno",
    Status: "Awating printing",
  },
  {
    id: "06",
    Dyno_room: "Room 1",
    Appt_no: 231020151942,
    Vehicle_class: "FE100",
    Reg_Mark: "FE100",
    Lane_no: "14",
    Print_dyno_chit: "2023-10-20 14:16:17",
    Test_item: "Non-dyno",
    Status: "Requesting printing",
  },
];
function DynoListPopup() {
  const handleColor = (id) => {
    switch (id) {
      case "01":
        return "green";
      case "05":
        return "blue";
      default:
        return "";
    }
  };
  return (
    <>
      <Modal isOpen={true} radius="none" size="full" className="">
        <ModalContent>
          {(onClose) => (
            <>
              <div
                className="bg-[#ddf3f2] h-8 w-[100%] text-darkgreen p-1 font-bold text-black text-center text-popupHeading:'16px',
 font-calibri"
              >
                Dyno List
              </div>
              <>
                <ModalBody>
                  <div className="flex font-calibri font-bold mt-[-2] ">
                    <Button
                      radius="none"
                      className="h-6 bg-tropicalrainforest text-white"
                    >
                      Dyno Workload List
                    </Button>
                    <Button radius="none" className="text-white h-6 ml-1">
                      Dyno Draw List
                    </Button>
                  </div>

                  <div>
                    <Table
                      role="table"
                      radius="none"
                      shadow="sm"
                      classNames={{ wrapper: "p-0 " }}
                    >
                      <TableHeader>
                        <TableColumn className="bg-[#007E63]  text-white text-center text-sm font-bold first:rounded-none last:rounded-none">
                          <Checkbox
                            value="Hybrid Vehicle"
                            radius="full"
                            id="Hybrid Vehicle"
                            name="Hybrid Vehicle"
                            size="sm"
                            // checked={data?.hybridVehicleIndicator === "N" ? true : false}
                            classNames={{
                              wrapper: "after:bg-persianGreen bg-navGrey",
                            }}
                            className="rounded-sm ml-1"
                          ></Checkbox>
                        </TableColumn>
                        <TableColumn className="bg-[#007E63]  text-white text-center text-sm font-bold ">
                          Dyno Room
                        </TableColumn>
                        <TableColumn className="bg-[#007E63]  text-white text-center text-sm font-bold ">
                          Appt No
                        </TableColumn>
                        <TableColumn className="bg-[#007E63]   text-white text-center text-sm font-bold ">
                          Vehicle Class
                        </TableColumn>
                        <TableColumn className="bg-[#007E63]   text-white text-center text-sm font-bold ">
                          Reg. Mark
                        </TableColumn>
                        <TableColumn className="bg-[#007E63]  text-white text-center text-sm font-bold ">
                          Lane No
                        </TableColumn>
                        <TableColumn className="bg-[#007E63]  text-white text-center text-sm font-bold ">
                          Print Dyno Chit
                        </TableColumn>
                        <TableColumn className="bg-[#007E63]  text-white text-center text-sm font-bold ">
                          Test Item
                        </TableColumn>
                        <TableColumn className="bg-[#007E63]  text-white text-center text-sm font-bold ">
                          Status
                        </TableColumn>
                      </TableHeader>
                      <TableBody>
                        {tableData.map((details) => {
                          return (
                            <TableRow
                              key={details.id}
                              className="even:bg-[#e7fbf6] odd:bg-[#f9ffff] font-calibri text-center"
                            >
                              <TableCell className=" font-calibri font-bold  text-sm    text-center  ">
                                <Checkbox
                                  value=""
                                  radius="full"
                                  id=""
                                  name=""
                                  size="sm"
                                  // checked={data?.hybridVehicleIndicator === "N" ? true : false}
                                  classNames={{
                                    wrapper: "after:bg-persianGreen bg-navGrey",
                                  }}
                                  className="rounded-sm ml-1"
                                ></Checkbox>
                              </TableCell>
                              <TableCell className=" font-calibri font-bold  text-sm    text-center  ">
                                {details.Dyno_room}
                              </TableCell>
                              <TableCell className="   text-center  font-calibri font-bold text-sm">
                                {details.Appt_no}
                              </TableCell>
                              <TableCell className="   text-center  font-calibri font-bold text-sm">
                                {details.Vehicle_class}
                              </TableCell>
                              <TableCell className="   text-center  font-calibri   font-bold text-sm">
                                {details.Reg_Mark}
                              </TableCell>
                              <TableCell className="   text-center  font-calibri   font-bold text-sm">
                                {details.Lane_no}
                              </TableCell>
                              <TableCell className="   text-center  font-calibri   font-bold text-sm">
                                {details.Print_dyno_chit}
                              </TableCell>
                              <TableCell className="   text-center  font-calibri   font-bold text-sm">
                                {details.Test_item}
                              </TableCell>

                              <TableCell
                                style={{ color: handleColor(details.id) }}
                                className=" text-center font-calibri text-sm"
                              >
                                {details.id === "03" || details.id === "05" ? (
                                  <div className="flex justify-between ">
                                    {" "}
                                    <span>{details.Status}</span>{" "}
                                    <span>
                                      <IconArrowRightToArc
                                        className="flex justify-end items-end"
                                        stroke={2}
                                      />
                                    </span>{" "}
                                  </div>
                                ) : (
                                  <div className="flex justify-start">
                                    {details.Status}
                                  </div>
                                )}
                              </TableCell>
                            </TableRow>
                          );
                        })}
                      </TableBody>
                    </Table>
                  </div>
                  <div className="flex justify-between mt-6 font-calibri font-bold">
                    <div className=" flex  text-center w-[50%] ">
                      <div className=" font-[Calibri] text-sm text-center mt-1 font-bold  ">
                        Reassign Dyno Room
                      </div>
                      <div className="ml-2 w-[20%]   ">
                        <Select
                          labelPlacement="outside-left"
                          classNames={{ trigger: "h-6 min-h-6 " }}
                          radius="none"
                          size="sm"
                          name="page"
                          variant="bordered"
                        >
                          <SelectItem key="10" value="10">
                            10{" "}
                          </SelectItem>
                          <SelectItem key="20" value="20">
                            20{" "}
                          </SelectItem>
                        </Select>
                      </div>
                      <div className="ml-2  font-[Claibri]  text-sm font-bold">
                        <Button
                          radius="none"
                          className="bg-tropicalrainforest h-6 mt-1.5 text-white "
                        >
                          Reassign
                        </Button>
                      </div>
                    </div>
                    <Button
                      radius="none"
                      className="h-6  font-calibri font-bold bg-white border-2 border-navGrey"
                    >
                      Quit
                    </Button>
                  </div>
                </ModalBody>
              </>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
export default DynoListPopup;
