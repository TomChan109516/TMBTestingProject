import React from "react";
import {
  Modal,
  ModalContent,
  Button,
  Input,
  Select,
  SelectItem,
  Checkbox,
  ModalFooter,
} from "@nextui-org/react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

function VehiclePopup(props) {
  const appId = useSelector((state: any) => state.data.appointmentId);
  const data = useSelector((state: any) => state.data.regdata);

  const open = props.VehiclePopup;
  const handleClose = () => {
    props.closePopup(false);
    props.VehiclePopup(false);
  };
  return (
    <Modal
      isOpen={open}
      onClose={handleClose}
      isDismissable={false}
      size="full"
      className="w-[95%] h-[95%] overflow-y-auto"
    >
      <ModalContent>
        <>
          <div className="bg-lightGreen w-[100%] p-1 font-bold text-black text-center ">
            Vehicle Info
          </div>
          <div className="mr-4">
            <div className="grid grid-cols-4 text-right gap-1 font-calibri text-inputTxt font-bold ">
              <div className=" flex flex-grow-0 m-1 items-center mt-5 font-calibri  ">
                <span className="ml-2 w-[40%] ">Veh. Make</span>
                <Input
                  disabled={data?.vehicleMakeId === ""}
                  placeholder=""
                  data-testid="vehMake"
                  labelPlacement="outside-left"
                  size="sm"
                  className="ml-2 w-[50%]"
                  radius="none"
                  variant="bordered"
                  value={data ? data.vehicleMakeId : "-"}
                ></Input>
              </div>
              <div className=" flex flex-grow-0 m-1 items-center mt-5 font-calibri  ">
                <span className="ml-2 w-[35%] ">Veh. Model</span>
                <Input
                  disabled={data?.vehicleModelCode === ""}
                  placeholder=""
                  data-testid="vehModel"
                  labelPlacement="outside-left"
                  size="sm"
                  className="ml-2 w-[50%]"
                  radius="none"
                  variant="bordered"
                  value={data ? data.vehicleModelCode : "-"}
                ></Input>
              </div>
              <div className="flex m-1 items-center mt-5 font-calibri   ">
                <span className="ml-1 w-[36%] ">Model Code</span>
                <Input
                  disabled={data?.vehicleModelCode === ""}
                  placeholder=""
                  data-testid="modelCode"
                  labelPlacement="outside-left"
                  size="sm"
                  className="ml-2 w-[50%]"
                  radius="none"
                  variant="bordered"
                  value={data ? data.vehicleModelCode : "-"}
                ></Input>
              </div>
            </div>
            <div className="grid grid-cols-4 text-right gap-1 font-calibri text-inputTxt font-bold ">
              <div className=" flex flex-grow-0 m-1 items-center mt-5 font-calibri w-[100%] ">
                <span className="ml-1 w-[40%] ">Manu. Year</span>
                <Input
                  disabled={data?.vehiclYeareMfc === ""}
                  placeholder=" "
                  data-testid="manuYear"
                  labelPlacement="outside-left"
                  size="sm"
                  className="ml-2 w-[50%]"
                  radius="none"
                  variant="bordered"
                  value={data ? data.vehiclYeareMfc : "-"}
                ></Input>
              </div>
              <div className=" flex flex-grow-0 m-1 items-center mt-5 font-calibri w-[100%] ">
                <span className="ml-1 w-[35%] ">Seating Cap.</span>
                <div className="grid grid-cols-3 gap-3 ml-2 border border-greyBorder w-[50%]">
                  <div>
                    <Input
                      data-testid="seatingCap"
                      labelPlacement="outside-left"
                      label="L:"
                      size="sm"
                      className="ml-1 w-[43px]"
                      radius="none"
                      value={data ? data.vehicleLowerSeatCapQuantity : "-"}
                    ></Input>
                  </div>
                  <div>
                    <Input
                      placeholder=""
                      data-testid="seatingCap"
                      labelPlacement="outside-left"
                      label="U:"
                      size="sm"
                      className="w-[43px]"
                      radius="none"
                      value={data ? data.vehicleUpperSeatCapQuantity : "-"}
                    ></Input>
                  </div>
                  <div>
                    {" "}
                    <Input
                      placeholder=""
                      data-testid="seatingCap"
                      labelPlacement="outside-left"
                      label="S:"
                      size="sm"
                      className=" w-[43px]"
                      radius="none"
                      value={data ? data.VehiclStandardCapQuantity : "-"}
                    ></Input>
                  </div>
                </div>
              </div>
              <div className="flex m-1 items-center mt-5 font-calibri w-[100%]  ">
                <span className="ml-1 w-[35%] ">ApprovalNo.</span>
                <Input
                  disabled={data?.vehicleTypeApprovalNumber === ""}
                  placeholder=""
                  data-testid="approvalNo"
                  labelPlacement="outside-left"
                  size="sm"
                  className="ml-2 w-[50%]"
                  radius="none"
                  variant="bordered"
                  value={data ? data.vehicleTypeApprovalNumber : "-"}
                ></Input>
              </div>
              <div className="flex m-1 items-center mt-5 font-calibri w-[100%]  ">
                <span className="ml-1 w-[35%] ">Tyre Size.</span>
                <Input
                  placeholder=""
                  data-testid="tyresize"
                  labelPlacement="outside-left"
                  size="sm"
                  className="ml-2 w-[50%]"
                  radius="none"
                  variant="bordered"
                  value=""
                ></Input>
              </div>
            </div>
            <div className="grid grid-cols-2 text-right gap-1 font-calibri text-inputTxt font-bold ">
              <div className=" flex flex-grow-0  m-1 items-center mt-5 font-calibri w-[100%] ">
                <span className="  w-[20%]">Chassis No.</span>
                <Input
                  disabled={data?.vehicleChasisNumber === ""}
                  placeholder=""
                  data-testid="chassisNo"
                  labelPlacement="outside-left"
                  size="sm"
                  className="ml-3 w-[70%]"
                  radius="none"
                  variant="bordered"
                  value={data ? data.vehicleChasisNumber : "-"}
                ></Input>
              </div>
              <div className=" flex flex-grow-0 m-1 items-center mt-5 font-calibri w-[100%] ">
                <span className=" w-[18%] ">VIN Location</span>
                <Input
                  disabled={data?.vinLocation === ""}
                  placeholder=""
                  data-testid="vINLocation"
                  labelPlacement="outside-left"
                  size="sm"
                  className="ml-2 w-[70%]"
                  radius="none"
                  variant="bordered"
                  value={data ? data.vinLocation : "-"}
                ></Input>
              </div>
            </div>
            <div className="grid grid-cols-4 text-right gap-1 font-calibri text-inputTxt font-bold">
              <div className=" flex flex-grow-0 m-1 items-center mt-5 font-calibri  ">
                <span className="ml-2 w-[40%] ">Body Type</span>
                <Input
                  placeholder=""
                  data-testid="bodyType"
                  labelPlacement="outside-left"
                  size="sm"
                  className="ml-2 w-[50%]"
                  radius="none"
                  variant="bordered"
                  value={data ? data.vehicleBodyTypeId : "-"}
                ></Input>
              </div>
              <div className=" flex flex-grow-0 m-1 items-center mt-5 font-calibri  ">
                <span className="ml-2 w-[35%] ">Engine No</span>
                <Input
                  disabled={data?.vehicleEngineNumber === ""}
                  placeholder=""
                  data-testid="engineNo"
                  labelPlacement="outside-left"
                  size="sm"
                  className="ml-1 w-[50%]"
                  radius="none"
                  variant="bordered"
                  value={data ? data.vehicleEngineNumber : ""}
                ></Input>
              </div>
              <div className="flex m-1 items-center mt-5 font-calibri   ">
                <span className="ml-1 w-[36%] ">Engine Model.</span>
                <Input
                  disabled={data?.vehicleEngineNumber === ""}
                  placeholder=""
                  data-testid="engineModel"
                  labelPlacement="outside-left"
                  size="sm"
                  className="ml-2 w-[50%]"
                  radius="none"
                  variant="bordered"
                  value={data ? data.vehicleEngineNumber : "-"}
                ></Input>
              </div>

              <div className=" flex flex-grow-0 m-1 items-center mt-5 font-calibri  ">
                <span className="ml-1 w-[40%] "> Engine Cap.</span>
                <Input
                  disabled={data?.vehicleEngineSizeQty === ""}
                  placeholder=""
                  data-testid="engineCap"
                  labelPlacement="outside-left"
                  size="sm"
                  className="ml-2 w-[50%]"
                  radius="none"
                  variant="bordered"
                  value={data ? data.vehicleEngineSizeQty : "-"}
                ></Input>
              </div>
            </div>
            <div className="grid grid-cols-4 text-right gap-1 font-calibri text-inputTxt font-bold">
              <div className=" flex flex-grow-0 m-1 items-center mt-5 font-calibri  ">
                <span className="ml-1 w-[41%] ">Propulsion</span>
                <Select
                  labelPlacement=""
                  data-testid="propulsion"
                  className="ml-2 w-[50%]"
                  radius="none"
                  size="sm"
                  name="center"
                  aria-label="center"
                  variant="bordered"
                  placeholder=""
                >
                  <SelectItem className="text-[10px]" key={""}>
                    {data ? data.vehiclePropulsion : "-"}
                  </SelectItem>
                </Select>
              </div>
              <div className=" flex flex-grow-0 m-1 items-center mt-5 font-calibri  ">
                <span className="ml-1 w-[35%] ">Max. RPM</span>
                <Input
                  disabled={data?.vehicleMaxRPM === ""}
                  placeholder=""
                  data-testid="maxRPM"
                  labelPlacement="outside-left"
                  size="sm"
                  className="ml-2 w-[50%]"
                  radius="none"
                  variant="bordered"
                  value={data ? data.vehicleMaxRPM : ""}
                ></Input>
              </div>
              <div className="flex m-1 items-center mt-5 font-calibri   ">
                <span className="ml-1 w-[36%] "> Rated Power(kW)</span>
                <Input
                  disabled={data?.vehicleRatePower === ""}
                  placeholder=""
                  data-testid="ratedPowerkW"
                  labelPlacement="outside-left"
                  size="sm"
                  className="ml-2 w-[50%]"
                  radius="none"
                  variant="bordered"
                  value={data ? data.vehicleRatePower : "-"}
                ></Input>
              </div>

              <div className=" flex flex-grow-0 m-1 items-center mt-5 font-calibri  ">
                <span className="ml-1 w-[40%] ">Rated RPM (For Dyno)</span>
                <Input
                  placeholder=""
                  data-testid="ratedRPMForDyno"
                  labelPlacement="outside-left"
                  size="sm"
                  className="ml-2 w-[50%]"
                  radius="none"
                  variant="bordered"
                  value={data ? data.vehicleRateRPM : "-"}
                ></Input>
              </div>
            </div>
            <div className="grid grid-cols-4 text-right gap-1 font-calibri text-inputTxt font-bold">
              <div className=" flex flex-grow-0 m-1 items-center mt-5 font-calibri  ">
                <span className="ml-1 w-[41%] ">NO. of Axles</span>
                <Select
                  disabled={data?.VehicleNumberOfAxle === ""}
                  labelPlacement="outside-left"
                  data-testid="NoOfAxles"
                  className="ml-2 w-[50%]"
                  radius="none"
                  size="sm"
                  name="center"
                  aria-label="center"
                  variant="bordered"
                  placeholder=""
                  value={data ? data.VehicleNumberOfAxle : "-"}
                >
                  <SelectItem className="text-[10px]" key={""}>
                    {data?.vehicleNumberOfAxle}
                  </SelectItem>
                </Select>
              </div>
              <div className=" flex flex-grow-0 m-1 items-center mt-5 font-calibri  ">
                <span className="ml-1 w-[35%] ">Wheel Span</span>
                <Input
                  disabled={data?.vehicleWheelSpan === ""}
                  placeholder=""
                  data-testid="wheelSpan"
                  labelPlacement="outside-left"
                  size="sm"
                  className="ml-2 w-[50%]"
                  radius="none"
                  variant="bordered"
                  value={data ? data.vehicleWheelSpan : "-"}
                ></Input>
              </div>
              <div className="flex m-1 items-center mt-5 font-calibri   ">
                <span className="ml-1 w-[36%] ">PGVW (t)</span>
                <Input
                  disabled={data?.vehiclePgvw === ""}
                  placeholder=""
                  data-testid="pgvw"
                  labelPlacement="outside-left"
                  size="sm"
                  className="ml-2 w-[50%]"
                  radius="none"
                  variant="bordered"
                  value={data ? data.vehiclePgvw : "-"}
                ></Input>
              </div>

              <div className=" flex flex-grow-0 m-1 items-center mt-5 font-calibri  ">
                <span className="ml-1 w-[40%] ">Drive</span>
                <Select
                  labelPlacement="outside-left"
                  data-testid="drive"
                  className="ml-2 w-[50%]"
                  radius="none"
                  size="sm"
                  name="center"
                  aria-label="center"
                  variant="bordered"
                  placeholder=""
                >
                  <SelectItem className="text-[10px]" key={""}>
                    1
                  </SelectItem>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-2 text-right gap-1 font-calibri text-inputTxt font-bold">
              <div className=" flex flex-grow-0 m-1 items-center mt-5 font-calibri  ">
                <span className="ml-1 w-[40%] ">Axle (t)</span>
                <Input
                  disabled={data?.vehicleNumberOfAxle === ""}
                  placeholder=" "
                  data-testid="axlet"
                  labelPlacement=""
                  size="sm"
                  className="ml-2 w-[60%]"
                  radius="none"
                  variant="bordered"
                  value={data ? data.vehicleNumberOfAxle : "-"}
                ></Input>
              </div>
              <div className=" flex flex-grow-0 m-1 items-center mt-5 font-calibri  ">
                <span className="ml-1 w-[20%] ">Axle(t)</span>
                <Input
                  disabled={data?.vehicleNumberOfAxle === ""}
                  placeholder=""
                  data-testid="axlet"
                  labelPlacement=""
                  size="sm"
                  className="ml-2 w-[60%]"
                  radius="none"
                  variant="bordered"
                  value={data ? data.vehicleNumberOfAxle : "-"}
                ></Input>
              </div>
            </div>

            <div className="grid grid-cols-4 text-right gap-1 font-calibri text-inputTxt font-bold">
              <div className=" flex flex-grow-0 m-1 items-center mt-5 font-calibri  ">
                <span className="ml-1 w-[42%] ">Is Tricycle</span>
                <Select
                  disabled
                  labelPlacement="outside-left"
                  data-testid="isTricycle"
                  className="ml-1 w-[50%]"
                  radius="none"
                  size="sm"
                  name="center"
                  aria-label="center"
                  variant="bordered"
                  placeholder=""
                >
                  <SelectItem className="text-[10px]" key={""}>
                    1
                  </SelectItem>
                </Select>
              </div>
              <div className=" flex flex-grow-0 m-1 items-center mt-5 font-calibri  ">
                <span className="ml-1 w-[36%] ">Tricycle Tread</span>
                <Input
                  disabled={data?.nodata === ""}
                  placeholder=""
                  data-testid="tricycleTread"
                  labelPlacement="outside-left"
                  size="sm"
                  className="ml-2 w-[50%]"
                  radius="none"
                  variant="bordered"
                  value={data ? data.nodata : "-"}
                ></Input>
              </div>
              <div className="flex m-1 items-center mt-5 font-calibri   ">
                <span className="ml-1 w-[37%] ">Wheelbase</span>
                <Input
                  disabled={data?.nodata === ""}
                  placeholder=""
                  data-testid="wheelBase"
                  labelPlacement="outside-left"
                  size="sm"
                  className="ml-2 w-[50%]"
                  radius="none"
                  variant="bordered"
                  value={data ? data.nodata : "-"}
                ></Input>
              </div>

              <div className=" flex flex-grow-0 m-1 items-center mt-5 font-calibri  ">
                <span className="ml-1 w-[40%] ">Hybird Vehicle</span>
                <Checkbox className="ml-1" radius="none"></Checkbox>
              </div>
            </div>
            <div className="grid grid-cols-2 text-right gap-1 font-calibri text-inputTxt font-bold">
              <div className="flex flex-row justify-center m-1 items-center mt-5 font-calibri w-[100%]  ">
                <span className="ml-1 w-[47%] ">CSA 1</span>
                <Input
                  disabled={data?.nodata === ""}
                  placeholder=""
                  data-testid="csa1"
                  labelPlacement=""
                  size="sm"
                  className="ml-2 w-[30%]"
                  radius="none"
                  variant="bordered"
                  value={data ? data.nodata : "-"}
                ></Input>
                <Input
                  disabled={data?.nodata === ""}
                  placeholder=""
                  data-testid="csa1"
                  labelPlacement=""
                  size="sm"
                  className="ml-2 w-[40%]"
                  radius="none"
                  variant="bordered"
                  value={data ? data.nodata : "-"}
                ></Input>
              </div>

              <div className="flex flex-row justify-center m-1 items-center mt-5 font-calibri w-[100%]  ">
                <span className="mr-2 w-[13%]">CSA 2</span>
                <Input
                  disabled={data?.nodata === ""}
                  placeholder=""
                  data-testid="csa2"
                  labelPlacement=""
                  size="sm"
                  className="w-[30%]"
                  radius="none"
                  variant="bordered"
                  value={data ? data.nodata : "-"}
                ></Input>
                <Input
                  disabled={data?.vehicleChasisNumber === ""}
                  placeholder=""
                  data-testid="csa2"
                  labelPlacement=""
                  size="sm"
                  className="ml-1 w-[40%]"
                  radius="none"
                  variant="bordered"
                  value={data ? data.vehicleChasisNumber : "-"}
                ></Input>
              </div>
            </div>
          </div>
          <ModalFooter className=" justify-center  ">
            <Button
              className=" bg-tropicalrainforest text-white font-calibri  mr-4 "
              variant="light"
              radius="none"
              size="sm"
            >
              Save
            </Button>
            <Button
              className=" border-2 bg-white border-greyBorder font-calibri  "
              radius="none"
              size="sm"
              onClick={handleClose}
              data-testid="Quit"
            >
              Quit
            </Button>
          </ModalFooter>
        </>
      </ModalContent>
    </Modal>
  );
}
VehiclePopup.propTypes = {
  VehiclePopup: PropTypes.string,
  closeVehiclePopup: PropTypes.func,
};
export default VehiclePopup;
