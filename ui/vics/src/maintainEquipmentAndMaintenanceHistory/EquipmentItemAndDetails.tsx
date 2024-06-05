import {
  Modal,
  ModalContent,
  ModalBody,
  Select,
  SelectItem,
  Input,
  Radio,
  RadioGroup,
  Button,
  ModalHeader,
} from "@nextui-org/react";
import React from "react";
import PropTypes from "prop-types";

const EquipmentItemAndDetails = (props) => {
  const {showPopUP, header, closeEquipmentItemAndDetails,data}=props
  const handleClose = () => {
    closeEquipmentItemAndDetails(false);
  };

  return (
    <Modal
      onClose={handleClose}
      size="2xl"
      isOpen={showPopUP}
      isDismissable={false}
      radius="none"
      className="flex font-calibri text-inputTxt overflow-y-auto mt-4 mb-4 "
    // hideCloseButton={true}
    >
      <ModalContent>
        <ModalHeader className="flex flex-row justify-center items-center bg-lightGreen">{header}</ModalHeader>
        <ModalBody>
          <div className="grid grid-rows-1 justify-items-center ">
            <div className="w-[100%] flex flex-row justify-center items-center">
              <label className=" flex justify-end w-[20%] font-bold mr-2" htmlFor="Wheel Span" aria-label="Equipment ID">
                Equipment ID
              </label>

              <Input
                radius="none"
                labelPlacement="outside-left"
                size="sm"
                className="w-[30%]  inline-block  border-[#e0dede]  p-1"
                data-testid="Equipment ID"
                variant="bordered"
                value={data?.id}
              />
            </div>
            <div className="w-[100%] flex flex-row justify-center items-center">
              <label className="flex justify-end w-[20%] font-bold mr-2" htmlFor="Wheel Span">
                Equipment Name
              </label>

              <Input
                radius="none"
                labelPlacement="outside-left"
                size="sm"
                className="w-[30%]  inline-block  border-[#e0dede]  p-1"
                variant="bordered"
                value={data?.equipmentName}
              />
            </div>
            <div className="w-[100%] flex flex-row justify-center items-center">
              <label className="flex justify-end w-[20%] font-bold mr-2" htmlFor="Wheel Span">
                Chinese Description
              </label>

              <Input
                radius="none"
                labelPlacement="outside-left"
                size="sm"
                className="w-[30%]  inline-block  border-[#e0dede]  p-1"
                variant="bordered"
                value={data?.chineseDescription}
              />
            </div>
            <div className="w-[100%] flex flex-row justify-start items-center mb-2 mt-1">
              <label className="flex justify-end w-[45%] font-bold mr-2" htmlFor="Wheel Span">
              Lane Number/Dyno Room Number                
              </label>
              <Select
                labelPlacement="outside-left"
                data-testid="vehicleClass"
                className="w-[29%]"
                radius="none"
                size="sm"
                name="center"
                aria-label="center"
                variant="bordered"
                placeholder="Select"
                value={data?.dynoRoomNoLaneNo}
              >
                <SelectItem className="text-[10px]" key={""}>
                  VEE
                </SelectItem>
              </Select>
            </div>
            <div className="w-[100%] flex flex-row justify-center items-center mb-2">
              <label className="flex justify-end w-[20%] mr-2 font-bold" htmlFor="Wheel Span">
                Station
              </label>
              <Select
                labelPlacement="outside-left"
                data-testid="vehicleClass"
                className="w-[29%]"
                radius="none"
                size="sm"
                name="center"
                aria-label="center"
                variant="bordered"
                placeholder="Select"
                value={data?.stationId}
              >
                <SelectItem className="text-[10px]" key={""}>
                  VEE
                </SelectItem>
              </Select>
            </div>
            <div className="w-[100%] flex flex-row justify-center items-center mb-2">
              <label className="flex justify-end w-[20%] mr-2 font-bold" htmlFor="Wheel Span">
                Type
              </label>
              <Select
                labelPlacement="outside-left"
                data-testid="vehicleClass"
                className="w-[29%]  "
                radius="none"
                size="sm"
                name="center"
                aria-label="center"
                variant="bordered"
                placeholder="Select"
                value={data?.type}
              >
                <SelectItem className="text-[10px]" key={""}>
                  VEE
                </SelectItem>
              </Select>
            </div>
            <div className="w-[100%] flex flex-row justify-center items-center">
              <label className="flex justify-end font-bold mr-2 w-[20%]" htmlFor="Wheel Span">
                Make
              </label>

              <Input
                radius="none"
                labelPlacement="outside-left"
                size="sm"
                className="w-[30%]  inline-block  border-[#e0dede]  p-1"
                variant="bordered"
              />
            </div>
            <div className="w-[100%] flex flex-row justify-center items-center">
              <label className="flex justify-end font-bold mr-2 w-[20%]" htmlFor="Wheel Span">
                Model
              </label>

              <Input
                radius="none"
                labelPlacement="outside-left"
                size="sm"
                className="w-[30%]  inline-block  border-[#e0dede]  p-1"
                variant="bordered"
              />
            </div>
            <div className="w-[100%] flex flex-row justify-center items-center">
              <label className="flex justify-end font-bold mr-2 w-[20%]" htmlFor="Wheel Span">
                Rating
              </label>

              <Input
                radius="none"
                labelPlacement="outside-left"
                size="sm"
                className="w-[30%]  inline-block  border-[#e0dede]  p-1"

                variant="bordered"
              />
            </div>
            <div className="w-[100%] flex flex-row justify-center items-center">
              <label className="flex justify-end font-bold mr-2 w-[20%]" htmlFor="Wheel Span">
                With or Without ART
              </label>

              <Select
                labelPlacement="outside-left"
                data-testid="vehicleClass"
                className="w-[29%] "
                radius="none"
                size="sm"
                name="center"
                aria-label="center"
                variant="bordered"
                placeholder="Select"
              >
                <SelectItem className="text-[10px]" key={""}>
                  -
                </SelectItem>
              </Select>
            </div>
            <div className="w-[100%] flex flex-row justify-center items-center">
              <label className="flex  justify-end font-bold mr-2 w-[20%]" htmlFor="Wheel Span">
                SN
              </label>

              <Input
                radius="none"
                labelPlacement="outside-left"
                size="sm"
                className="w-[30%]  inline-block  border-[#e0dede]  p-1"

                variant="bordered"
              />
            </div>
            <div className="w-[100%] flex flex-row justify-center items-center">
              <label className="flex  justify-end  font-bold mr-2 w-[20%]" htmlFor="Wheel Span">
                Manufacture Factory
              </label>

              <Input
                radius="none"
                labelPlacement="outside-left"
                size="sm"
                className="w-[30%]  inline-block  border-[#e0dede]  p-1"

                variant="bordered"
              />
            </div>
            {/* DON"T REMOVE THIS NEED TO CHECK
            <div className="w-[49.5%] flex flex-row justify-end items-center mb-2 mt-1">

              <label className="mr-2 font-bold" htmlFor="Wheel Span">
                Manufacture Cycle
              </label>
              <Select
                labelPlacement="outside-left"
                data-testid="vehicleClass"
                className="w-[150px]"
                radius="none"
                size="sm"
                name="center"
                aria-label="center"
                variant="bordered"
                placeholder="Select"
              >
                <SelectItem className="text-[10px]" key={""}>
                  VEE
                </SelectItem>
              </Select>

            </div>
            <div className="w-[83%] flex flex-row justify-center items-center">
              <label className="font-bold mr-2" htmlFor="Wheel Span">
                Scheduled Maintenance
              </label>

              <Input
                radius="none"
                labelPlacement="outside-left"
                size="sm"
                className="w-[158px]  inline-block  border-[#e0dede]  p-1"
                type="date"

                variant="bordered"
              />
              <label className="font-bold mr-2 " htmlFor="Wheel Span">
                to
              </label>

              <Input
                radius="none"
                labelPlacement="outside-left"
                size="sm"
                className="w-[158px]  inline-block  border-[#e0dede]  p-1"
                type="date"

                variant="bordered"
              />
            </div>
            <div className=" w-[65%] flex flex-row justify-end items-center">
              <label className="font-bold mr-4" htmlFor="Wheel Span">
                Status
              </label>
             
              <RadioGroup
                orientation="horizontal"
                defaultValue="daily"
                className="inline-block  border-[#e0dede]  p-1"
              >
                <Radio className="" value="daily" color="primary">
                  Waiting for repair
                </Radio>
                <Radio className="" value="weekly" color="secondary">
                  In-service
                </Radio>
              </RadioGroup>
            </div>
            <div className="w-[50%] flex flex-row justify-end items-center">
              <label className="font-bold mr-2" htmlFor="Wheel Span">
                Operator
              </label>

              <Input
                radius="none"
                labelPlacement="outside-left"
                size="sm"
                className="w-[158px]  inline-block  border-[#e0dede]  p-1"

                variant="bordered"
              />
            </div>
            <div className="w-[50%] flex flex-row justify-end items-center">
              <label className="font-bold mr-2" htmlFor="Wheel Span">
                Remark
              </label>

              <Input
                radius="none"
                labelPlacement="outside-left"
                size="sm"
                className="w-[158px]  inline-block  border-[#e0dede]  p-1"

                variant="bordered"
              />
            </div> */}
          </div>
          <div className="flex flex-row justify-center mt-3 mb-4">
            <Button className="bg-persianGreen font-bold text-white h-8 rounded p-1 mr-2">Save</Button>
            <Button className="bg-lightGrey font-bold text-black h-8 rounded p-1 border border-greyBorder"
            onClick={handleClose}
            >Cancel</Button>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );


};

EquipmentItemAndDetails.propTypes = {
  showEquipmentItemAndDetails: PropTypes.bool,
  closeEquipmentItemAndDetails: PropTypes.func,
};

export default EquipmentItemAndDetails;