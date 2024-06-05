import { Modal, ModalContent, ModalBody, Button, Input, Textarea } from "@nextui-org/react";
import React from "react";
import PropTypes from "prop-types";

export default function RoleandCentrePopUp(props) {
  const { showSysConfigPopUp, setSysConfigPopUp } = props;
  const handleClose = () => {
    setSysConfigPopUp(false);
  };
  return (
    <Modal
        size="3xl"
        radius="none"
        isOpen={showSysConfigPopUp}
        onClose={handleClose}
      >
        <ModalContent className="rounded-md">
          {() => (
            <>
            <div className="text-sm">
              <div className="flex flex-col gap-1 text-[#007f62] font-bold text-[15px] font-[Calibri] ml-4 mt-2"> Role and Centre</div>
              <ModalBody>
                <div className="mt-1 ml-3 mr-3">
                  <div className="grid grid-cols-7 gap-1">
                  <div className="col-span-2">
                    <div className="font-bold text-left font-[Calibri] mt-1"> System Config ID </div>
                    <div className="font-bold text-left font-[Calibri] mt-3"> System Config Text </div>
                    <div className="font-bold text-left font-[Calibri] mt-12"> System Config Description </div>
                    </div>

                  <div className="col-span-5">
                    < div className="w-full ">
                      <Input disabled size="sm" radius="none" variant="bordered" classNames={{ inputWrapper: "min-h-unit-6 h-7 rounded-sm" }} />
                    </div>
                    < div className="w-full mt-0.5">
                      <Textarea size="sm" radius="none" variant="bordered" />
                  </div>
                    < div className="w-full mt-0.5">
                      <Input size="sm" radius="none" variant="bordered" classNames={{ inputWrapper: "min-h-unit-6 h-7 rounded-sm" }} />
                  </div>
                  </div>
                </div>
                </div>

              </ModalBody>
              </div>
              <div className="flex justify-end mb-4 mt-2 mr-6">
                <Button
                  className={`bg-[white] text-[black] shadow-sm rounded-sm border font-bold font-[Calibri] text-sm `}
                  variant="bordered"
                  size="sm"
                  onClick={handleClose}
                >
                  Cancel
                </Button>
                <Button
                  className={`bg-[#00af8f] text-white shadow-sm ml-2 rounded-sm border font-bold font-[Calibri] text-sm`}
                  variant="bordered"
                  size="sm"
                  type="submit"
                >
                  Confirm
                </Button>
              </div>
            </>
          )}
        </ModalContent>
      </Modal>
  );
}
RoleandCentrePopUp.propTypes = {
  showSysConfigPopUp: PropTypes.bool,
  setSysConfigPopUp: PropTypes.func,
}