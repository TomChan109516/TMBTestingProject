import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableColumn,
  TableRow,
} from "@nextui-org/react";
import DynoPrinting from "./DynoPrinting";
import { IconChevronsLeft } from "@tabler/icons-react";
function RemoteAuthorization(props) {
  const handleClose = () => {
    props.setRemoteAuthorizationPopup(false);
  };
  const [view, setView] = useState(false);

  const uservalidityPeriodData = [
    {
      Time: "11:15:32",
      RequestBy: "Wrong Da Man(12A)",
      ApptNo: "1234567899",
      RegMark: "FB2115",
      Description: "Dyno Remote Printing",
      Operation: "View",
    },
    {
      Time: "11:10:30",
      RequestBy: "Wrong Da Man(12A)",
      ApptNo: "12334657321",
      RegMark: "FH100",
      Description: "Dyno De-selection",
      Operation: "View",
    },
    {
      Time: "10:55:41",
      RequestBy: "Chan Da Man(12B)",
      ApptNo: "1234567899",
      RegMark: "-----",
      Description: "Sign in request",
      Operation: "View",
    },
    {
      Time: "11:51:00",
      RequestBy: "Ho Da Man(Dyno1)",
      ApptNo: "1234567899",
      RegMark: "LL1256",
      Description: "Skip Test Request",
      Operation: "View",
    },
  ];
  const handleView = () => {
    setView(true);
  };
  function setIconleft(arg0: boolean) {
    throw new Error("Function not implemented.");
  }

  return (
    <>
      <Modal
        size="4xl"
        className="rounded-md "
        onClose={handleClose}
        isOpen={true}
        isDismissable={false}
        hideCloseButton={true}
      >
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex py-1 text-[20px]  text-white font-calibri font-bold bg-persianGreen text-left gap-4">
                Remote Authorization Info
                <p className="  w-7 h-7 text-center rounded-full bg-red">4</p>
                <Button
                  onClick={handleClose}
                  className="ml-[485px] bg-persianGreen text-white"
                >
                  <p className=" absolute right-2 ">
                    {" "}
                    <span>
                      <IconChevronsLeft
                        size={35}
                        color="white"
                        onClick={() => setIconleft(true)}
                      />
                    </span>{" "}
                  </p>
                </Button>
              </ModalHeader>
              <ModalBody>
                <div>
                  <div className="">
                    <Table
                      radius="none"
                      className="w-[896px]  h-[239px] -mb-1 -mt-2 -ml-6"
                      classNames={{ wrapper: "p-0 " }}
                    >
                      <TableHeader>
                        <TableColumn className="bg-darkGrey text-white text-center text-sm font-bold first:rounded-none last:rounded-none">
                          Time
                        </TableColumn>
                        <TableColumn className="bg-darkGrey text-white text-center text-sm font-bold ">
                          Request by
                        </TableColumn>
                        <TableColumn className="bg-darkGrey text-white text-center text-sm font-bold ">
                          Appt. No
                        </TableColumn>
                        <TableColumn className="bg-darkGrey text-white text-center text-sm font-bold ">
                          Reg. Mark
                        </TableColumn>
                        <TableColumn className="bg-darkGrey text-white text-center text-sm font-bold  first:rounded-none last:rounded-none">
                          Description
                        </TableColumn>
                        <TableColumn className="bg-darkGrey text-white text-center text-sm font-bold  first:rounded-none last:rounded-none">
                          Operation
                        </TableColumn>
                      </TableHeader>
                      <TableBody>
                        {uservalidityPeriodData.map((details) => {
                          return (
                            <TableRow
                              key={details.Time}
                              className="even:bg-lightblue odd:bg-fadedwhite font-calibri text-center"
                            >
                              <TableCell className=" font-calibri font-bold  text-sm   text-center  ">
                                {details.Time}
                              </TableCell>
                              <TableCell className=" font-calibri font-bold  text-sm   text-center  ">
                                {details.RequestBy}
                              </TableCell>
                              <TableCell className="   text-center  font-calibri font-bold text-sm">
                                {details.ApptNo}
                              </TableCell>
                              <TableCell className="  text-centerfont-calibri font-bold  text-sm">
                                {details.RegMark}
                              </TableCell>
                              <TableCell className="  text-centerfont-calibri font-bold  text-sm">
                                {details.Description}
                              </TableCell>
                              <TableCell className=" text-center font-calibri text-sm">
                                <div className="flex justify-center px-4">
                                  <Button
                                    className="text-white font-calibri font-bold rounded-sm bg-orange h-8 "
                                    variant="light"
                                    radius="none"
                                    // data-testid="yo"
                                    onClick={() => {
                                      handleView();
                                    }}
                                  >
                                    View
                                  </Button>
                                </div>
                              </TableCell>
                            </TableRow>
                          );
                        })}
                      </TableBody>
                    </Table>
                    {view && (
                      <DynoPrinting data-testid="dyno" setView={setView} />
                    )}
                  </div>
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
export default RemoteAuthorization;
