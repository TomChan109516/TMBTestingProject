import React from "react";
import { Button, Input } from "@nextui-org/react";
import {
  Modal,
  ModalContent,
  ModalBody,
  ModalHeader,
  Select,
  SelectItem,
} from "@nextui-org/react";

export function TestExemptVehicle(props) {
  const { testExemptVehicle, setTestExemptVehicle } = props;

  const handleClose = () => {
    setTestExemptVehicle(false);
  };

  return (
    <div className="w-screen h-screen">
      <Modal
        size="2xl"
        isOpen={testExemptVehicle}
        onClose={handleClose}
        isDismissable={false}
        radius="none"
        className="h-[75%] rounded-sm"
        classNames={{
          backdrop: "bg-lightBlack/50 backdrop-opacity-40",
          header: "bg-lightGreen font-bold text-[14px]",
          closeButton: "hover:bg-white/4 active:bg-white/10",
          body: "px-0 py-0",
        }}
      >
        <ModalContent>
          <ModalHeader>
            <div className="ml-[250px]">Exempt Vehicle</div>
          </ModalHeader>
          <ModalBody>
            <div className="flex flex-row justify-center  mt-2 ml-10 mr-20 ">
              <div className="justify-center font-bold text-[12px] text-right mt-1 ">
                Vehicle ID
              </div>
              <div className="justify-center ml-2">
                <Input
                  labelPlacement="inside"
                  label=""
                  className="w-[170px] font-bold"
                  radius="none"
                  size="sm"
                  name="center"
                  aria-label="center"
                  variant="bordered"
                />
              </div>
            </div>

            <div className="flex flex-row justify-center mt-2 ml-10 mr-20   ">
              <div className="justify-center font-bold text-[12px] text-right mt-1">
                Reg.Mark
              </div>
              <div className="justify-center ml-2">
                <Input
                  labelPlacement="inside"
                  label=""
                  className="w-[170px] font-bold"
                  radius="none"
                  size="sm"
                  name="center"
                  aria-label="center"
                  variant="bordered"
                />
              </div>
            </div>

            <div className=" flex flex-row justify-center mt-2 ml-10 mr-24 ">
              <span className="justify-center font-bold text-[12px] mt-1 ">
                Vehicle Class
              </span>
              <Select
                labelPlacement="inside"
                label=""
                data-testid="Car"
                radius="none"
                size="sm"
                variant="bordered"
                className="ml-2 mr-2 font-bold bg-white border-greyBorder w-44  "
              >
                <SelectItem key={1}>Select Vehicle Type</SelectItem>

                <SelectItem key={2}>Private Car</SelectItem>
                <SelectItem key={3}>Private Light Bus</SelectItem>
                <SelectItem key={4}>Taxi(Lantau)</SelectItem>
                <SelectItem key={5}>Taxi(NT)</SelectItem>
                <SelectItem key={6}>Taxi(HK&KLN)</SelectItem>
                <SelectItem key={7}>PUBLIC LIGHT BUS</SelectItem>
                <SelectItem key={8}>TLIGHT GOODS VEHICLE</SelectItem>
                <SelectItem key={9}>MEDIUM GOODS VEHICLE</SelectItem>
                <SelectItem key={10}>HEAVY GOODS VEHICLE</SelectItem>
              </Select>
            </div>

            <div className="flex flex-row justify-center mt-2 mr-24 ">
              <div className="justify-center font-bold text-[12px] text-right mt-1">
                Chassis Number
              </div>
              <div className="justify-center ml-2">
                <Input
                  labelPlacement="inside"
                  label=""
                  className="w-[170px] font-bold"
                  radius="none"
                  size="sm"
                  name="center"
                  aria-label="center"
                  variant="bordered"
                />
              </div>
            </div>

            <div className="flex flex-row justify-center mt-2 mr-20 ">
              <div className="justify-center font-bold text-[12px] text-right mt-1">
                Skip Reason
              </div>
              <div className="justify-center ml-2">
                <Input
                  labelPlacement="inside"
                  label=""
                  className="w-[170px] font-bold"
                  radius="none"
                  size="sm"
                  name="center"
                  aria-label="center"
                  variant="bordered"
                />
              </div>
            </div>
            <div className="flex flex-row justify-center mt-2 mr-16 ">
              <div className="justify-center font-bold text-[12px] text-right mt-1">
                Remark
              </div>
              <div className="justify-center ml-2">
                <Input
                  labelPlacement="inside"
                  label=""
                  className="w-[170px] font-bold"
                  radius="none"
                  size="sm"
                  name="center"
                  aria-label="center"
                  variant="bordered"
                />
              </div>
            </div>
          </ModalBody>

          <div className=" flex justify-center mb-20 mt-4 ml-8">
            <Button
              className=" bg- lightGreen text-white rounded-sm mr-8  font-bold text-xs"
              type="submit"
              size="sm"
              radius="none"
            >
              Save
            </Button>
            <Button
              className="bg-  lightwhite rounded-sm mr-8 font-bold text-xs "
              variant="bordered"
              type="submit"
              size="sm"
              radius="none"
              onClick={handleClose}
            >
              No
            </Button>
          </div>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default TestExemptVehicle;
