import { Button } from "@nextui-org/react";
import PropTypes from "prop-types";
import React from "react";
import { Modal, ModalContent, ModalBody, ModalFooter } from "@nextui-org/react";
import { useSelector } from "react-redux";
import { Download } from "tabler-icons-react";

function GeneralAttachmentPopup(props) {
  const open = props.showGeneralAttachmentPopup;
  const { generalAttachment } = useSelector((state) => state.attachment);

  const handleClose = () => {
    props.setGeneralAttachmentPopup(false);
  };
  return (
    <div className="w-[100%]">
      <Modal
        size="5xl"
        isOpen={open}
        onClose={handleClose}
        classNames={{
          body: "py-6",
          backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
          closeButton: "mt-6 hover:bg-white/5 active:bg-white/20",
        }}
      >
        <ModalContent>
          {() => (
            <>
              <ModalBody>
                <div>
                  <div className="flex">
                    <div className="flex-initial text-[#00AF8F] p-[10px] ml-[-15px] font-bold text-md">
                      Attachment General Information
                    </div>
                    <div className="flex-end text-[#000000]    text-sm "></div>
                  </div>
                  <div className="mt-2">
                    <div>
                      <h1>
                        <h5 className="absolute -top-2 start-3 pl-[10px] pr-[10px] text-sm/[13px] text-[#00AF8F]">
                          Attachment General Information
                        </h5>

                        <div className="grid grid-cols-2 gap-4 mt-[40px] ml-[15px]">
                          <div className="grid grid-rows-4 grid-flow-col gap-3 whitespace-nowrap">
                            <div className="text-sm mr-5  flex flex-row gap-2 thikness">
                              <div className="grid grid-cols-4 items-center">
                                <div className="grid col-span-2 font-bold">
                                  Submission Date Time
                                </div>
                                <div className="grid grid-cols-2 gap-2">
                                  {generalAttachment.submissionDateTime}
                                </div>
                              </div>
                            </div>
                            <div className="text-sm  mr-5  flex flex-row gap-2 thikness">
                              <div className="grid grid-cols-4 items-center">
                                <div className="grid col-span-3 font-bold">
                                  Description
                                </div>
                                <div className="grid grid-cols-4 gap-2 text-start">
                                  {generalAttachment.description}
                                </div>
                              </div>
                            </div>
                            <div className="text-sm  mr-5  flex flex-row gap-2 thikness">
                              <div className="grid grid-cols-4 items-center">
                                <div className="grid col-span-1 font-bold">
                                  File
                                </div>

                                <div className="grid grid-cols-4 gap-2 text-start mr-[20px]">
                                  <Download size={20} color="black" />
                                  <span>{generalAttachment.file}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="grid grid-rows-4 grid-flow-col gap-2 thikness mt-[5px] ml- ">
                            <div className="text-sm  mr-5  flex flex-row gap-2 thikness">
                              <div className="grid grid-cols-4 items-center">
                                <div className="grid col-span-2 font-bold">
                                  Submitted By
                                </div>

                                <div className="grid grid-cols-4 gap-2">
                                  {generalAttachment.submittedBy}
                                </div>
                              </div>
                            </div>
                            <div className="text-sm  mr-5  flex flex-row gap-2 thikness">
                              <div className="grid grid-cols-4 items-center">
                                <div className="grid col-span-2 font-bold">
                                  Centre
                                </div>

                                <div className="grid grid-cols-5 gap-2">
                                  {generalAttachment.centreCode}
                                </div>
                              </div>
                            </div>
                            <div className="text-sm  mr-5  flex flex-row gap-2 thikness">
                              <div className="grid grid-cols-4 items-center">
                                <div className="grid col-span-2 font-bold">
                                  Additional Message
                                </div>
                                <div className="grid grid-cols-5 gap-2">
                                  {generalAttachment.additionalMessage}
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-row gap-2"></div>
                          </div>
                        </div>
                      </h1>
                    </div>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button
                  className="bg-[#ffffff] rounded"
                  variant="bordered"
                  type="submit"
                  onClick={handleClose}
                >
                  Cancel
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
GeneralAttachmentPopup.propTypes = {
  showGeneralAttachmentPopup: PropTypes.bool,
  closeGeneralAttachmentPopup: PropTypes.func,
};

export default GeneralAttachmentPopup;
