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
import PropTypes from 'prop-types';


function ManagePaymentPopup(props) {
  const { showManagePaymentPopup, setManagePaymentPopup } = props;
  const handleClose = () => {
    setManagePaymentPopup(false);
  };

  return (
    <>


      <Modal
        isOpen={showManagePaymentPopup}
        onClose={handleClose}
        isDismissable={false}
        size="3xl"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <div className="w-[100%] overflow-hidden">
                <div className="text-[15px] font-bold bg-[#fafafa] text-[#00AF8F]  mt-[35px] ml-[10px]">
                  {" "}
                  Payment Pay{" "}
                </div>
              </div>
              <ModalBody>
                <div className="flex p-1 w-[100%]">
                  <div className="flex flex-col-2  ...">
                    <span className="text-[13px] text-black font-bold text-left pl-2 pt-1 w-[140px]">
                      Appointment No.
                    </span>
                    <span className="text-[13px] text-black text-left  pl-2 w-[142px] mt-1">
                      112020000118
                    </span>
                  </div>
                  <div className="flex flex-col-2  ...">
                    <span className="text-[13px] text-black font-bold text-left pl-2 pt-1 w-[66px]">
                      Reg.Mark
                    </span>
                    <span className="text-[13px] text-black text-left pl-12 w-[px] mt-1">
                      WK9571
                    </span>
                  </div>
                </div>
                <div className="flex p-1">
                  <div className="flex flex-col-2  ...">
                    <span className="text-[13px] text-black font-bold  text-left pl-2 pt-1 w-[130px]">
                      Centre
                    </span>
                    <span className="text-[13px] text-black mr-[-80px] text-left pl-5 w-[232px] mt-1">
                      TY1
                    </span>
                  </div>
                  <div className="flex flex-col-2  ...">
                    <span className="text-[13px] text-black font-bold text-left pl-2 pt-1 w-[95px]">
                      Primary Exam
                    </span>
                    <span className="text-[13px] text-black text-left mr-[-100px] pl-5 w-[210px] mt-1">
                      008
                    </span>
                    <span className="text-[13px] text-black font-bold  text-left pl-2 pt-1 w-[100px]">
                      Free(HK$)
                    </span>
                    <span className="text-[30px] text-black text-left font-bold text-[rgb(0,155,119)] pl-5 w-[1px] mt-[-5px]">
                      585.00
                    </span>
                  </div>
                </div>
                <div className="flex p-1">
                  <div className="flex flex-col-2  ...">
                    <span className="text-[18px] text-[rgb(255,102,102)]  font-bold text-left pl-2 pt-1 mt-1 ">
                      *
                    </span>
                    <span className="text-[13px] text-black font-bold text-left pl-2 pt-1 w-[110px] mt-2">
                      Payment Method
                    </span>

                    <span className="text-[11px] text-black text-left pl-5 w-[210px] mt-1 mr-[-110px]">
                      <RadioGroup
                        size="sm"
                        className="text-xs"
                        defaultChecked
                      >
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
                  <div className="flex flex-col-2  ...">
                    <span className="text-[11px] text-black  text-left pl-2 pt-1 w-[85px]">
                      <RadioGroup
                        size="sm"
                        className="text-xs"
                        defaultChecked
                      >
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
                      <RadioGroup
                        size="sm"
                        className="text-xs"
                        defaultChecked
                      >
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
                      <RadioGroup
                        size="sm"
                        className="text-xs"
                        defaultChecked
                      >
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
                    <span className="text-[11px] text-black text-left pl-5 w-[170px] mt-1">
                      <RadioGroup
                        size="sm"
                        className="text-xs"
                        defaultChecked
                      >
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
                    <span className="text-[13px] text-black font-bold text-left pl-2 pt-1 w-[120px]">
                      Remark
                    </span>
                    <span className="text-xs w-[70%] text-black text-left ml-8   border-[2px] border-[#d3dcda] rounded-sm ">
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
                    <span className="text-[13px] w-[70%] text-black text-left ml-8 mt-1 text-[#00AF8F]   border-[#d3dcda] rounded-sm ">
                      In - progress
                    </span>
                  </div>
                </div>

              </ModalBody>
              <ModalFooter className="mt-[-24px] ">
                <Button className="bg-[#e4e4e7] fontsize-13px  " onPress={onClose}>Cancel</Button>
                <Button className="bg-[#00AF8F] fontsize-13px ml-30 text-white">
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
ManagePaymentPopup.propTypes = {
  showManagePaymentPopup: PropTypes.string,
  closeManagePaymentPopup: PropTypes.func,
};

export default ManagePaymentPopup;
