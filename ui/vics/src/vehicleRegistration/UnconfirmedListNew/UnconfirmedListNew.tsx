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
import PropTypes from 'prop-types';
const uservalidityPeriodData = [
    {
      id : "231121145425",
      vehicleClass: "145429",
      updateTime: "2023-11-21 15:31:53",
      lane:"12",
      validityPeriod: "F",
      status: "Active",
    },
  ];
function UnconfirmedNewListPopUp(props) {
    const open = props.showUnconfirmedNewListPopUp;       
        const handleClose = () => {
          props.closeUnconfirmedNewListPopUp(false);
        };
  return (
    <>
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
                          className="w-[200px] inline-block rounded-md border-persianGreen bg-[white] mr-5 ml-3 p-1 "
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
                        className={`bg-persianGreen text-[white] w-[100px] font-bold rounded overflow-hidden mr-1 `}
                        size="sm"
                      >
                        Search
                      </Button>
                      <Button
                        radius="lg"
                        className={`bg-persianGreen w-[100px] text-[white] font-bold rounded overflow-hidden `}
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
                        <TableColumn className="bg-green text-white text-center text-sm font-bold border-1 border-white first:rounded-none last:rounded-none">
                          ID
                        </TableColumn>
                        <TableColumn className="bg-green text-white text-center text-sm font-bold border-1 border-white">
                          Appointment ID
                        </TableColumn>
                        <TableColumn className="bg-green text-white text-center text-sm font-bold border-1 border-white">
                          Veh.Number
                        </TableColumn>
                        <TableColumn className="bg-green text-white text-center text-sm font-bold border-1 border-white">
                          Lane Number
                        </TableColumn>
                        <TableColumn className="bg-green text-white text-center text-sm font-bold border-1 border-white">
                          Time
                        </TableColumn>
                        <TableColumn className="bg-green text-white text-center text-sm font-bold border-1 border-white first:rounded-none last:rounded-none">
                          Operation
                        </TableColumn>
                      </TableHeader>
                      <TableBody>
                        {uservalidityPeriodData.map((details, index) => {
                          return (
                            <TableRow
                              key={index}
                              className="even: odd:bg-white_color font-calibri text-center"
                            >
                              <TableCell className="border-1 border-greyBorder font-bold text-sm">
                                {index + 1}
                              </TableCell>
                              <TableCell className="border-1 border-greyBorder font-bold text-sm">
                                {details.id}
                              </TableCell>
                              <TableCell className="border-1 border-greyBorder font-bold  text-sm">
                                {details?.vehicleClass}
                              </TableCell>
                              <TableCell className="border-1 border-greyBorder font-bold  text-sm">
                                {details?.lane}
                              </TableCell>
                              <TableCell className="border-1 border-greyBorder font-bold  text-sm">
                                {details?.updateTime}
                              </TableCell>
                              <TableCell className="border-1 border-greyBorder text-orange font-bold  text-sm ">
                                <h2
                                  className=" cursor-pointer text-red"
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
                  className={`bg-persianGreen w-[210px] text-[white] font-bold rounded overflow-hidden `}
                  size="sm"
                >
                  Show Vehicle(s) From Other Lanes
                </Button>
                <Button
                  radius="lg"
                  className={`bg-[white] text-[black] font-bold border-1.5 border-greyBorder rounded overflow-hidden ml-6  `}
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
};
UnconfirmedNewListPopUp.propTypes = {
    showUnconfirmedNewListPopUp: PropTypes.bool,
    closeUnconfirmedNewListPopUp: PropTypes.func,
}
export default UnconfirmedNewListPopUp;
