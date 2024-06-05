import React from "react";
import {
  Modal,
  ModalContent,
  ModalBody,
  Button,
  Select,
  SelectItem,
  Checkbox,
  Input,
} from "@nextui-org/react";

function SpeedConfigPopUp(props) {
  const handleClose = () => {
    props.closePopup(false);
    props.SpeedPopUp(false);
    props.setSpeedConfigPopUp(false);
  };

  return (
    <>
      <Modal
        isOpen={true}
        isDismissable={false}
        onClose={handleClose}
        size="5xl"
        className=" overflow-y-auto"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <div
                className="bg-[#ddf3f2] h-8 w-[100%] p-1 font-bold text-black text-center text-popupHeading:'16px',
 font-calibri"
              >
                Speed Config
              </div>
              <>
                <ModalBody>
                  <div className="grid grid-cols-3 text-right gap-1 text-inputTxt">
                    <div className=" flex flex-grow-0 m-1 items-center mt-5 font-calibri font-bold ">
                      <span className=" ml-[-12px] w-[40%] ">
                        Speed Setting
                      </span>
                      <Input
                        labelPlacement="outside-left"
                        className="ml-5 w-[50%]"
                        radius="none"
                        size="sm"
                        variant="bordered"
                        placeholder="50"
                      ></Input>
                    </div>
                    <div className=" flex flex-grow-0 m-1 items-center mt-5 font-calibri font-bold ">
                      <span className="ml- w-[50%] ">Speed Test Mode</span>
                      <Select
                        labelPlacement="outside-left"
                        size="sm"
                        className="ml-4 w-[50%]"
                        radius="none"
                        variant="bordered"
                        placeholder="Wheel Driven"
                      >
                        <SelectItem key={1}>Data1</SelectItem>
                      </Select>
                    </div>
                    <div className="flex m-1 items-center mt-5 font-calibri  font-bold ">
                      <span className="ml-1 w-[50%] ">Propulation </span>
                      <Select
                        labelPlacement="outside-left"
                        size="sm"
                        className="ml-2 w-[50%]"
                        radius="none"
                        variant="bordered"
                        placeholder="Front-wheel Driven"
                      >
                        <SelectItem key={1}>Data1</SelectItem>
                      </Select>
                    </div>
                    <div className="flex m-1 items-center mt-5 font-calibri  font-bold ">
                      <span className=" w-[40%] ">Wheel Test Type</span>
                      <Select
                        labelPlacement="outside-left"
                        size="sm"
                        className="ml-2 w-[50%]"
                        radius="none"
                        variant="bordered"
                        placeholder="Leftand right Wheel Driven"
                      >
                        <SelectItem key={1}>Right</SelectItem>
                      </Select>
                    </div>
                  </div>
                  <div className="flex p-3 pl-12">
                    <div className="flex flex-col-4  ...">
                      <span className="text-[12px] text-black font-bold text-left mt-[-4px] w-[10px]">
                        <Checkbox defaultSelected radius="none"></Checkbox>
                      </span>
                      <span className="text-[12px] text-black font-bold text-left ml-4  mt-[-3px]">
                        Speedometer Test
                      </span>
                    </div>
                  </div>
                </ModalBody>
                <div className="flex justify-center mb-4">
                  <Button
                    className={`bg-[#009b77] text-[white] font-bold rounded-sm `}
                    variant="bordered"
                    size="sm"
                  >
                    Save
                  </Button>
                  <Button
                    className={`bg-[white] text-[black] font-bold shadow-sm rounded-sm ml-6  `}
                    variant="bordered"
                    size="sm"
                    type="submit"
                    onClick={handleClose}
                    onPress={onClose}
                  >
                    Quit
                  </Button>
                </div>
              </>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
export default SpeedConfigPopUp;
