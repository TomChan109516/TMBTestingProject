import {
  Modal,
  ModalContent,
  ModalBody,
  Button,
  ModalHeader,
  Input,
  Select,
  SelectItem,
} from "@nextui-org/react";
import React from "react";
import { IconInfoCircle } from "@tabler/icons-react";
function DeleteVEEPairing(props) {
  const open = props.showDeleteVEEPairing;
  const formData = props.formData;
  const handleDeleteVEEPairing = () => {
    props.setshowDeleteVEEPairing(true);
  };
  const handleClose = () => {
    props.closeDeleteVEEPairing(false);
  };

  return (
    <Modal
      isOpen={open}
      onClose={handleClose}
      isDismissable={false}
      size="3xl"
      className="h-[40%] rounded-sm w-full"
      classNames={{
        backdrop: "bg-lightBlack/50 backdrop-opacity-40",
        header: "bg-lightGreen p-2  font-bold text-[13px] ",
        closeButton: "hover:bg-white/4 active:bg-white/10",
      }}
    >
      <ModalContent>
        {() => (
          <>
            <ModalHeader className="flex flex-col gap-1 text-[black]">
              <div className="text-center font-calibri font-bold text-popupHeading">
                ARTU Unit Config - Delete Pairing
              </div>
            </ModalHeader>
            <ModalBody>
              <div>
                <div>
                  <div className="text-[12px] font-calibri font-bold ">
                    <div className="w-full pl-2 ">
                      <div className="   text-center w-[100%] text-[14px] font-bold font-[calibri] mt-2">
                        <div className="flex justify-center">
                          <IconInfoCircle
                            size={40}
                            strokeWidth={2}
                            color={"red"}
                            className=" h-[25px] "
                          />
                          Confirm to delete this VEE Pairing
                          <div></div>
                        </div>
                      </div>
                      <div>
                        <div className="grid grid-cols-3 gap-3 mt-4">
                          <div className="flex">
                            Lane
                            <Select
                              labelPlacement="outside-left"
                              radius="none"
                              classNames={{ trigger: "min-h-unit-2 h-6" }}
                              variant="bordered"
                              name="lane"
                              aria-label="center"
                              className="w-[100px] font-[Calibri] ml-4"
                              placeholder={formData.lane}
                              value={formData.lane}
                            >
                              <SelectItem key={""}>{formData.lane}</SelectItem>
                            </Select>
                          </div>
                          <div className="flex">
                            Station
                            <Select
                              labelPlacement="outside-left"
                              radius="none"
                              classNames={{ trigger: "min-h-unit-2 h-6" }}
                              variant="bordered"
                              name="lane"
                              aria-label="center"
                              className="w-[100px] font-[Calibri] ml-4"
                              placeholder={formData.station}
                              value={formData.station}
                            >
                              <SelectItem key={""}>
                                {formData.station}
                              </SelectItem>
                            </Select>
                          </div>{" "}
                          <div>
                            <div className="flex">
                              <div className="w-[38%]">Keep-Alive(ms)</div>
                              <div className="w-[60%]">
                                <Input
                                  size="sm"
                                  radius="none"
                                  value={formData.description}
                                  variant="bordered"
                                  classNames={{
                                    inputWrapper: "h-7 w-[100%] mr-5 ",
                                  }}
                                ></Input>
                              </div>
                            </div>
                          </div>
                          <div></div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="grid grid-cols-3 gap-3 mt-2">
                        <div className="flex">
                          Address
                          <Input
                            size="sm"
                            value={formData.address}
                            radius="none"
                            variant="bordered"
                            classNames={{ inputWrapper: "h-7 w-[75%] ml-3 " }}
                          ></Input>
                        </div>
                        <div>
                          <div className="flex ml-1">
                            Port
                            <Input
                              size="sm"
                              radius="none"
                              value={formData.port}
                              variant="bordered"
                              classNames={{ inputWrapper: "h-7 w-[80%] ml-2" }}
                            ></Input>
                          </div>
                        </div>
                        <div className="w-full">
                          <div className="flex text-[12px]">
                            <Button
                              className={`bg-darkGrey text-white shadow-sm rounded-sm w-[73%] mr-3 font-bold`}
                              variant="bordered"
                              size="sm"
                              onClick={handleDeleteVEEPairing}
                            >
                              Delete VEE Pairing
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ModalBody>
            <div className="grid grid-cols-3 gap-2   ml-[190px] mb-4">
              <div className="text-end">
                <Button
                  className={`bg-navButton text-[white] shadow-sm rounded-sm ml-2 font-bold`}
                  variant="bordered"
                  size="sm"
                  type="submit"
                >
                  Confirm
                </Button>
              </div>
              <div>
                <Button
                  className={`bg-white text-[black] shadow-sm rounded-sm font-bold`}
                  variant="bordered"
                  size="sm"
                  onClick={handleClose}
                >
                  Back
                </Button>
              </div>
              <div className="text-center w-full"></div>
            </div>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
export default  DeleteVEEPairing