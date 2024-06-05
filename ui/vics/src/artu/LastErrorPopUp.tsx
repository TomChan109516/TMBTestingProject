import React from "react";
import {
  Modal,
  ModalContent,
  ModalBody,
  Button,
  ModalHeader,
} from "@nextui-org/react";
export default function LastErrorPopUp(props) {
  const open = props.showLastErrorPopUp;
  
  const testError = props.testError;
  const handleClose = () => {
    props.closeLastErrorPopUp(false);
  };
  return (
    <Modal
      isOpen={open}
      onClose={handleClose}
      isDismissable={false}
      radius="none"
      className="h-[82%]  "
      classNames={{
        backdrop: "bg-lightBlack/50 backdrop-opacity-40",
        header: "bg-lightGreen p-2  font-bold text-[13px] ",
        closeButton: "hover:bg-white/4 active:bg-white/10",
        body: "px-0 py-0",
      }}
    >
      <ModalContent>
        <>
          {" "}
          <ModalHeader>
            <div className="ml-[160px]">Last Error</div>
          </ModalHeader>
          <ModalBody>
            <div>
              <div className="flex flex-wrap">
                <div className="w-[100%] ">
                  <div className="grid grid-cols-2 text-center w-[100%] text-[13px] font-bold font-[calibri] border-b-1 border-[lightgray] shadow-sm mt-2">
                    <div className="grid grid-rows-2 ml-20 w-[50%] justify-end mb-2">
                      <div className="flex">
                        {" "}
                        <div>Lane:</div> <div className="ml-1">{testError?.laneId}</div>
                      </div>
                      <div className="flex">
                        {" "}
                        <div>Station:</div> <div className="ml-1">{testError?.stationId}</div>
                      </div>
                    </div>
                    <div className="grid grid-rows-2 w-[50%] mb-2">
                      <div className="flex">
                        {" "}
                        <div>Address:</div>{" "}
                        <div className="ml-1">{testError?.veesIp}</div>
                      </div>
                      <div className="flex">
                        {" "}
                        <div>Port:</div> <div className="ml-1">{testError?.veesPort}</div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 w-full">
                    <div className="border-1  border-[gray] rounded-sm flex text-[12px] font-[calibri] h-[330px] ml-3 mr-3 p-3 shadow-md ">
                      Query ObjectOutResponse xmlns="http://tempuri.org
                      QueryObjectOutResult xml version="1.0" encoding="GBK" root
                      header code0/code message Failed to get data: No results
                      were queried. message header vehcrpara statu10status
                      appointment_noappointment_no vehcrpara root
                      QueryObjectOutResult QueryObjectOutResponse soap:Body
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ModalBody>
          <div className="flex justify-center ">
            <Button
              className={`bg-[white] text-[black] font-bold shadow-sm rounded-md  font-[calibri] mb-2`}
              variant="bordered"
              size="sm"
              type="submit"
              onClick={handleClose}
            >
              Cancel
            </Button>
          </div>
        </>
      </ModalContent>
    </Modal>
  );
}

