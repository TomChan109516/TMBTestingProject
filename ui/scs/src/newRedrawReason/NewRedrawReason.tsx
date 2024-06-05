import React, { useState, useEffect } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Textarea,
  Button,
  useDisclosure,
} from "@nextui-org/react";

export default function NewRedrawReason(props) {
  const { newRedrawReason, setNewRedrawReason } = props;

  const handleClose = () => {
    setNewRedrawReason(false);
  };

  return (
    <>
     
     <Modal
        size="3xl"
        isOpen={true}
        onClose={handleClose}
        radius="none"
        classNames={{
          base: "rounded-sm",
          body: "py-4",
          backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
          closeButton: " hover:bg-white/5 active:bg-white/20",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex">
                <div className="flex-initial text-[#009B77] mb-1 font-bold text-sm">
                  New Redraw Reason
                </div>
              </ModalHeader>
              <ModalBody>
                <div className="flex flex-wrap pt-2">
                  <div className="w-[100%] p-[5px] pl-2 ">
                    <h1>
                      <h5 className="absolute -top-2 start-3 pl-[10px] pr-[10px] text-sm/[13px] text-[#009b77]">
                        Redraw Reason Detail
                      </h5>
                      <div className="mt-5 ml-5">
                        <div className="...">
                          <div className="flex flex-row">
                            <span className="text-xs text-black font-bold text-left  pt-1 w-[120px]">
                              Redraw Reason
                            </span>
                            <span className="text-xs w-[70%]  text-black text-left ml-8">
                              <Input
                                id="standard-basic"
                                radius="none"
                                variant="bordered"
                                size="sm"
                                maxLength={15}
                                placeholder="Traffic"
                              />{" "}
                            </span>
                          </div>
                        </div>

                        <div className="pt-5 pb-5">
                          <div className="flex flex-row">
                            <span className="text-xs text-black font-bold text-left  pt-1 w-[120px]">
                              Description
                            </span>
                            <span className="text-xs w-[70%] text-black text-left ml-8  border-[2px] border-[#d3dcda] rounded-sm ">
                              {/* <div className="min-h-[110px] max-h-[110px] h-[110px] overflow-x-hidden text-black">
                                <Textarea
                                    className="h-[106px]"
                                  placeholder="Absent due to traffic"
                                  radius="none"
                                />
                              </div> */}

                              <Textarea
                                //   className="h-[106px]"
                                placeholder="Absent due to traffic"
                                radius="none"
                              />
                            </span>
                          </div>
                        </div>
                      </div>
                      {/* <div className="min-h-[100px] max-h-[100px] h-[100px] overflow-x-hidden text-black"></div> */}
                    </h1>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button
                  className="bg-[#ffffff] rounded-sm ml-2 font-bold text-xs "
                  variant="bordered"
                  type="submit"
                  size="sm"
                  radius="none"
                  onClick={handleClose}
                >
                  Cancle
                </Button>
                <Button
                  className=" bg-[#009b77] text-white rounded-sm ml-1 mr-1 font-bold text-xs"
                  //   variant="bordered"
                  type="submit"
                  size="sm"
                  radius="none"
                  onClick={handleClose}
                >
                  Save
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
