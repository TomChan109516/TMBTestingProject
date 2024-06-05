// import { useSelect } from "@nextui-org/react";
import {
  Button,
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
} from "@nextui-org/react";
import "react-datepicker/dist/react-datepicker.css";
// import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// import { saveSearchEnquiryResponse } from "../state/enquiryAppointmentSlice";
// import {useNavigate} from 'react-router-dom';

export default function RegMarkPopup(props) {
  const { regMarkPopup, setRegMarkPopup } = props;

  const handleClose = () => {
    setRegMarkPopup(false);
  };
  return (
    <div className="w-[100%] h-[100%]">
      <Modal
        size="2xl"
        isOpen={regMarkPopup}
        onClose={handleClose}
        classNames={{
          body: "py-4",
          backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
          closeButton: "mt-6 hover:bg-white/5 active:bg-white/20",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <div className="flex-initial text-[#00AF8F] p-[10px] ml-[-15px]  font-bold text-[16px]">
                  Synchronize VALID vehicle particulars
                </div>

                <div className="flex-initial  p-[10px] ml-[-15px]  text-[16px]">
                  Are you sure you want to synchronize vehicle particulars with
                  VALID ?
                </div>
                {/* <div className="flex-initial  p-[10px] ml-[-15px] font-bold text-[16px]">
                    Valid For
                  </div> */}
                <div className="flex flex-row items-center">
                  <div className="w-[15%] text-left font-bold">Reg. Mark </div>
                  <div className="w-[75%] ml-[30px]">
                    <Input
                      id="standard-basic"
                      name="regMark"
                      radius="none"
                      variant="bordered"
                      size="sm"
                      // value={regMark}
                      // onChange={handleRegMark}
                      maxLength={10}
                    />
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button
                  className="bg-[#ffffff] rounded  p-[10px] ml-[15px] font-bold text-sm "
                  variant="bordered"
                  type="submit"
                  fond-bold
                  onPress={onClose}
                >
                  No
                </Button>
                <Button
                  className=" bg-[#d2e1dc] text-[#2c8263] rounded p-[6px] ml-[15px] font-bold text-sm"
                  variant="bordered"
                  type="submit"
                  fond-bold
                  onClick={handleClose}
                >
                  Yes
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}

