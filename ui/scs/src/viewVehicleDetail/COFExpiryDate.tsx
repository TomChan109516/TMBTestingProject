import { Button } from "@nextui-org/react";
import {
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  Input,
} from "@nextui-org/react";
import "react-datepicker/dist/react-datepicker.css";
import PropTypes from "prop-types";
import React, { useState } from "react";

function COFExpiryDatePopup(props) {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const { cofExpiryDatePopup, setCofExpiryDatePopup } = props;

  const handleSelectDateChange = (newValue: React.SetStateAction<Date>) => {
    setSelectedDate(newValue);
  };

  const handleClose = () => {
    setCofExpiryDatePopup(false);
  };
  return (
    <div className="w-[100%] h-[100%]">
      <Modal
        size="2xl"
        isOpen={cofExpiryDatePopup}
        onClose={handleClose}
        classNames={{
          body: "py-4",
          backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
          closeButton: " hover:bg-white/5 active:bg-white/20",
        }}
      >
        <ModalContent>
          {() => (
            <>
              <ModalBody>
                <div data-testId="cofexpiry-date-popup" className="flex-initial text-[#00AF8F] font-bold text-[15px]">
                  COF Expiry Date
                </div>
                <div className="flex-initial text-[12px]">
                  Last COF Cert Issue Date:
                </div>
                <div className="flex-initial text-[12px]">
                  Original COF Expiry Date: 14/08/1999
                </div>
                <div className="flex flex-row items-center text-[12px]">
                  <div className="w-[10%] text-left font-bold">Valid For </div>
                  <div className="w-[75%] ml-10">
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
                <div className="flex flex-row font-bold text-[12px]">
                  <span className="pt-2 pr-2">COF Expiry Date</span>
                  <div className="border-1 w-[75%]">
                    <Input
                    className=" border-0"
                      id="standard-basic"
                      radius="none"
                      variant="bordered"
                      size="sm"
                      name="startDate"
                      type="date"
                      // value={selectedDate}
                      // onChange={handleSelectDateChange}
                    />
                 
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button
                  className="bg-[#ffffff] flex-initial text-[12px] "
                  variant="bordered"
                  type="submit"
                  fond-bold
                  onClick={handleClose}
                >
                  Cancel
                </Button>
                <Button
                  className="flex-initial bg-[#00AF8F] text-white text-[12px]"
                  variant="bordered"
                  type="submit"
                  fond-bold
                  // onClick={handleClose}
                >
                  Confirm
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
export default COFExpiryDatePopup;
COFExpiryDatePopup.propTypes = {
  cofExpiryDatePopup: PropTypes.bool,
  setCofExpiryDatePopup: PropTypes.func,
};
