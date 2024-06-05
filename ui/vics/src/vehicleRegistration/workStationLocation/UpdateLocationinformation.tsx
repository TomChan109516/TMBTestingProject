import {
  Modal,
  ModalContent,
  ModalBody,
  Button,
  Select,
  SelectItem,
  Input,
} from "@nextui-org/react";
import PropTypes from "prop-types";
import React from "react";
const UpdateLocationinformation = (props) => {
  const open = props.showUpdateLocationinformation;
  const handleClose = () => {
    props.closeUpdateLocationinformation(false);
  };
  return (
    <>
      <Modal
        isOpen={open}
        onClose={handleClose}
        size="4xl"
        className="font-calibri text-inputTxt max-w-2xl h-fit rounded-sm"
      >
        <ModalContent className="mb-3">
          <div
            className="bg-lightblue h-8 w-[100%] p-1 font-bold text-black text-center justify-center
                            text-popupHeading"
          >
            Location Information
          </div>
          <ModalBody>
            <div className="flex  items-center h-[7%] ml-32  font-bold text-black text-inputTxt">
              <div className="w-[20%] text-right mr-2  font-calibri">
                Location Code
              </div>
              <div className="w-[100%]">
                <Input
                  size="sm"
                  variant="bordered"
                  classNames={{ inputWrapper: "h-7 w-[40%] rounded-sm" }}
                  placeholder="1"
                ></Input>
              </div>
            </div>
            <div className="flex  items-center h-[7%] ml-32  font-bold text-black">
              <div className="w-[20%] text-right mr-2  font-calibri">
                Location Name
              </div>
              <div className="w-[100%]">
                <Input
                  size="sm"
                  variant="bordered"
                  classNames={{ inputWrapper: "h-7 w-[40%] rounded-sm" }}
                  placeholder="GF1A"
                ></Input>
              </div>
            </div>
            <div className="flex  items-center h-[7%] ml-24 font-bold text-black">
              <div className="w-[20%] text-right mr-2  font-calibri ">
                Lane number
              </div>
              <div className="w-[31%] ml-2 ">
                <Select
                  labelPlacement="outside-left"
                  size="sm"
                  variant="bordered"
                  radius="none"
                  placeholder="01"
                >
                  <SelectItem key="TY" className="rounded-sm">
                    {" "}
                    01{" "}
                  </SelectItem>
                </Select>
              </div>
            </div>
            <div className="flex  items-center h-[7%] ml-24 font-bold text-black">
              <div className="w-[20%] text-right mr-2  font-calibri">
                Station
              </div>
              <div className="w-[31%] ml-2">
                <Select
                  labelPlacement="outside-left"
                  size="sm"
                  variant="bordered"
                  radius="none"
                  placeholder="A"
                >
                  <SelectItem key="TY" className="rounded-sm">
                    {" "}
                    A{" "}
                  </SelectItem>
                </Select>
              </div>
            </div>
            <div className="flex  items-center h-[7%] ml-32 font-bold text-black">
              <div className="w-[20%] text-right mr-2  font-calibri">IP</div>
              <div className="w-[100%]">
                <Input
                  size="sm"
                  variant="bordered"
                  classNames={{ inputWrapper: "h-7 w-[40%] rounded-sm" }}
                  placeholder="192.168.117.66"
                ></Input>
              </div>
            </div>
            <div className="flex  items-center h-[7%] ml-32 font-bold text-black">
              <div className="w-[20%] text-right mr-2  font-calibri">Port</div>
              <div className="w-[100%]">
                <Input
                  size="sm"
                  variant="bordered"
                  classNames={{ inputWrapper: "h-7 w-[40%] rounded-sm" }}
                  placeholder="1"
                ></Input>
              </div>
            </div>
            <div className="mr-2 mt-3 text-center">
              <Button className="m-1 bg-persianGreen text-white font-bold rounded-sm h-7">
                Save
              </Button>
              <Button
                className="m-1 bg-white border text-black font-bold ml-4 rounded-sm h-7"
                onClick={handleClose}
              >
                Cancel
              </Button>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
UpdateLocationinformation.propTypes = {
  showUpdateLocationinformation: PropTypes.bool,
  closeUpdateLocationinformation: PropTypes.func,
};
export default UpdateLocationinformation;
