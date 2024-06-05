import React from "react";
import {
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  Button,
  Textarea,
  RadioGroup,
  Radio,
} from "@nextui-org/react";
import PropTypes from "prop-types";
import { IconInfoCircle } from "@tabler/icons-react";

function ManagePayTogetherPopup(props) {
  const { showManagePayTogetherPopup, setManagePayTogetherPopup } = props;
  const handleClose = () => {
    setManagePayTogetherPopup(false);
  };

  return (
    <>
      <Modal
        isOpen={showManagePayTogetherPopup}
        onClose={handleClose}
        isDismissable={false}
        size="3xl"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <div className="w-[100%] overflow-hidden">
                <div className="text-[13px] font-bold bg-[#fafafa] text-[rgb(0,155,119)]  mt-[35px] ml-[10px]">
                  {" "}
                  Pay Together{" "}
                </div>
              </div>
              <ModalBody>
                <div className="flex p-1 w-[100%]">
                  <div className="flex flex-col-2  ...">
                    <span className="text-[13px] text-black font-bold text-left pl-1 pt-1 w-[140px]">
                      No. of Payment
                    </span>
                    <span className="text-[13px] text-black text-left   w-[142px] mt-1">
                      <div className="flex">
                        2
                        <IconInfoCircle
                          size={18}
                          strokeWidth={3}
                          color={"orange"}
                          className="mr-2 ml-1"
                        />
                      </div>
                    </span>
                  </div>
                  <div className="flex flex-col-2  ...">
                    <span className="text-[13px] text-black font-bold text-left pl-14 pt-1 w-[197px]">
                      Total Payment Amount
                    </span>
                    <span className="text-[13px] text-black text-left pl-4  mt-2">
                      (HK$)
                    </span>
                    <span className="text-[30px] text-black text-left font-bold text-[rgb(0,155,119)] pl-1 w-[1px] mt-[-11px]">
                      935.00
                    </span>
                  </div>
                </div>

                <div className="flex mt-[-20px]">
                  <div className="flex flex-col-2  ...">
                    <span className="text-[18px] text-[rgb(255,102,102)]  font-bold text-left pl-2 pt-1 mt- ">
                      *
                    </span>
                    <span className="text-[13px] text-black font-bold text-left pl-2 pt-1 w-[127px] mt-1">
                      Payment Method
                    </span>

                    <span className="text-[11px] text-black text-left  w-[210px] mt-[8px] mr-[-110px]">
                      <RadioGroup size="sm" className="text-xs" defaultChecked>
                        <Radio
                          size="sm"
                          name="OriginLane"
                          value="22S"
                          defaultChecked
                          className="text-xs"
                          classNames={{
                            wrapper:
                              "group-data-[selected=true]:bg-[#00AF8F] group-data-[selected=true]:border-[#00Af8F] text-xs font-[Calibri]",
                            control: "bg-white",
                            base: "border-[#00AF8F]",
                          }}
                        >
                          Cash
                        </Radio>
                      </RadioGroup>
                    </span>
                  </div>
                  <div className="flex flex-col-2 mt-1 ml-[-8px] ...">
                    <span className="text-[11px] text-black  text-left pl-2 pt-1 w-[85px]">
                      <RadioGroup size="sm" className="text-xs" defaultChecked>
                        <Radio
                          size="sm"
                          name="OriginLane"
                          value="22S"
                          defaultChecked
                          className="text-xs"
                          classNames={{
                            wrapper:
                              "group-data-[selected=true]:bg-[#00AF8F] group-data-[selected=true]:border-[#00Af8F] text-xs font-[Calibri]",
                            control: "bg-white",
                            base: "border-[#00AF8F]",
                          }}
                        >
                          Cheque
                        </Radio>
                      </RadioGroup>
                    </span>
                    <span className="text-[11px] text-black text-left pl-5 w-[110px] mt-1">
                      <RadioGroup size="sm" className="text-xs" defaultChecked>
                        <Radio
                          size="sm"
                          name="OriginLane"
                          value="22S"
                          defaultChecked
                          className="text-xs"
                          classNames={{
                            wrapper:
                              "group-data-[selected=true]:bg-[#00AF8F] group-data-[selected=true]:border-[#00Af8F] text-xs font-[Calibri]",
                            control: "bg-white",
                            base: "border-[#00AF8F]",
                          }}
                        >
                          ECheque
                        </Radio>
                      </RadioGroup>
                    </span>
                    <span className="text-[11px] text-black  text-left pl-2 pt-1 w-[60px]">
                      <RadioGroup size="sm" className="text-xs" defaultChecked>
                        <Radio
                          size="sm"
                          name="OriginLane"
                          value="22S"
                          defaultChecked
                          className="text-xs"
                          classNames={{
                            wrapper:
                              "group-data-[selected=true]:bg-[#00AF8F] group-data-[selected=true]:border-[#00Af8F] text-xs font-[Calibri]",
                            control: "bg-white",
                            base: "border-[#00AF8F]",
                          }}
                        >
                          EPS
                        </Radio>
                      </RadioGroup>
                    </span>
                    <span className="text-[11px] text-black text-left pl-5 w-[170px] ml-2 mt-1">
                      <RadioGroup size="sm" className="text-xs" defaultChecked>
                        <Radio
                          size="sm"
                          name="OriginLane"
                          value="22S"
                          defaultChecked
                          className="text-xs"
                          classNames={{
                            wrapper:
                              "group-data-[selected=true]:bg-[#00AF8F] group-data-[selected=true]:border-[#00Af8F] text-xs font-[Calibri]",
                            control: "bg-white",
                            base: "border-[#00AF8F]",
                          }}
                        >
                          FPS
                        </Radio>
                      </RadioGroup>
                    </span>
                  </div>
                </div>
                <div className="flex p-1">
                  <div className="flex flex-col-2  ...">
                    <span className="text-[13px] text-black font-bold text-left pl-1 pt-1 w-[120px]">
                      Remark
                    </span>
                    <span className="text-xs w-[80%] text-black text-left ml-5   border-[2px] border-[#d3dcda] rounded-sm ">
                      <Textarea
                        placeholder="123"
                        radius="none"
                        classNames={{
                          input:
                            "resize-y  h-[100px] w-[560px] hover: border-transparent",
                        }}
                      />
                    </span>
                  </div>
                </div>
                <div className="flex p-1">
                  <div className="flex flex-col-2  ...">
                    <span className="text-[13px] text-black font-bold text-left pl-2 pt-1 w-[170px]">
                      Payment Status
                    </span>
                    <span className="text-[13px] w-[70%] text-black text-left ml-6 mt-1 text-[#00AF8F]   border-[#d3dcda] rounded-sm ">
                      In - progress
                    </span>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter className="mt-[-26px]  ">
                <Button
                  className={`bg-[#ffffff] text-[black] fontsize-13px rounded-sm ml-4`}
                  variant="bordered"
                  onPress={onClose}
                >
                  Cancel
                </Button>
                <Button className="bg-[#00AF8F] fontsize-13px ml-30 text-white rounded-sm">
                  Confirm Pay
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
ManagePayTogetherPopup.propTypes = {
  showManagePayTogetherPopup: PropTypes.string,
  closeManagePayTogetherPopup: PropTypes.func,
};

export default ManagePayTogetherPopup;
