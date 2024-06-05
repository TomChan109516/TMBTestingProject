import React, { useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
} from "@nextui-org/react";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import PropTypes from "prop-types";

export default function VehicleModificationHistory(props) {
  const { showVehicleHistory, setShowVehicleHistory } = props;

  const handleClose = () => {
    setShowVehicleHistory(false);
  };
  return (
    <div className="text-[#00AF8F]   font-bold text-[16px]">
      <Modal isOpen={showVehicleHistory} onClose={handleClose} size="2xl">
        <ModalContent>
          <>
            <div className="text-[rgb(0,155,119)] m-5 w-[50%] font-bold">
              Vehicle Modification History
            </div>
            <ModalBody>
              <Table>
                <TableHeader>
                  <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold">
                    Date Modified
                  </TableColumn>
                  <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold">
                    Modified
                  </TableColumn>
                  <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold">
                    Description
                  </TableColumn>
                  <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold">
                    Modification Details
                  </TableColumn>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell className=" items-center ">No Data</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </ModalBody>
            <ModalFooter>
              <Button
                data-testid="close"
                name="Close"
                className=" font-bold rounded h-8"
                onClick={handleClose}
              >
                Close
              </Button>
            </ModalFooter>
          </>
        </ModalContent>
      </Modal>
    </div>
  );
}
VehicleModificationHistory.propTypes = {
  showVehicleHistory: PropTypes.bool,
  setShowVehicleHistory: PropTypes.func,
};
