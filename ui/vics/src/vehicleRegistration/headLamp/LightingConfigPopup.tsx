import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalBody,
  Button,
  Select,
  SelectItem,
  Checkbox,
} from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import { saveLoader } from "../../login/state/loginSlice";
import {
  getHeadlampConfig,
  headLampTestConfiguration,
} from "./service/headlamp.service";

function LightingConfigPopup(props) {
  const dispatch = useDispatch();
  const appointmentDetails = useSelector((state: any) => state.data.regdata);
  const appointmentDetailsLength = Object.keys(appointmentDetails).length;

  const initialParamstate = {
    inspectionId: appointmentDetails?.inspectionId,
    numHeadLamp: "",
    mainBeamAdjustable: "",
    headlightMeasuringMethod: "",
    steeringPosition: "",
    leftMainLamp: "",
    rightMainLamp: "",
    userId: "Admin",
  };

  const testConfigPlaceholder = {
    numHeadLamp: "",
    mainBeamAdjustable: "",
    headlightMeasuringMethod: "",
    steeringPosition: "",
  };

  const [headlampData, setHeadlampData] = useState();
  const [numHeadLamp, setNumHeadLamp] = useState<any[]>(["1", "2", "3"]);
  const [mainBeamAdjustable, setMainBeamAdjustable] = useState<any[]>([
    "Yes",
    "No",
  ]);
  const [headlightMeasuringMethod, setHeadlightMeasuringMethod] = useState<
    any[]
  >(["Default", "Manual", "Automatic"]);
  const [steeringPosition, setSteeringPosition] = useState<any[]>([
    "Left",
    "Right",
  ]);
  const [leftMainLamp, setLeftMainLamp] = useState<boolean>();
  const [rightMainLamp, setRightMainLamp] = useState<boolean>();
  const [params, setParams] = useState(initialParamstate);
  const [placeholder, setPlaceholder] = useState(testConfigPlaceholder);

  const handleClose = () => {
    props.closePopup(false);
    props.HeadlampPopUp(false);
    props.LightingConfigPopup(false);
  };

  useEffect(() => {
    if (appointmentDetailsLength !== 0) {
      GetheadlampData();
    } else {
      setHeadlampData(undefined);
    }
  }, [appointmentDetails, appointmentDetailsLength]);

  const GetheadlampData = async () => {
    try {
      dispatch(saveLoader(true));
      const response = await getHeadlampConfig(appointmentDetails.inspectionId);
      setPlaceholder((prev) => ({
        ...prev,
        numHeadLamp: response?.numHeadLamp,
        mainBeamAdjustable: response?.mainBeamAdjustable,
        headlightMeasuringMethod: response?.headlightMeasuringMethod,
        steeringPosition: response?.steeringPosition,
      }));

      setRightMainLamp(response.rightMainLamp);
      setLeftMainLamp(response.leftMainLamp);
      setParams((prev) => ({
        ...prev,
        numHeadLamp: response?.numHeadLamp,
        mainBeamAdjustable: response?.mainBeamAdjustable,
        headlightMeasuringMethod: response?.headlightMeasuringMethod,
        steeringPosition: response?.steeringPosition,
        leftMainLamp: response?.leftMainLamp,
        rightMainLamp: response?.leftMainLamp,
      }));
      dispatch(saveLoader(false));
    } catch (AxiosError) {
      dispatch(saveLoader(false));
    }
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    switch (event.target.name) {
      case "numHeadLamp":
        setParams({
          ...params,
          [event.target.name]: numHeadLamp[event.target.value],
        });
        break;
      case "mainBeamAdjustable":
        setParams({
          ...params,
          [event.target.name]: mainBeamAdjustable[event.target.value],
        });
        break;
      case "headlightMeasuringMethod":
        setParams({
          ...params,
          [event.target.name]: headlightMeasuringMethod[event.target.value],
        });
        break;
      case "steeringPosition":
        setParams({
          ...params,
          [event.target.name]: steeringPosition[event.target.value],
        });
        break;
      default:
        setParams({ ...params, [event.target.name]: event.target.value });
    }
  };

  const handleSave = async () => {
    try {
      dispatch(saveLoader(true));
      const response = await headLampTestConfiguration(params);
      setParams(initialParamstate);
      dispatch(saveLoader(false));
      handleClose();
    } catch (error) {
      dispatch(saveLoader(false));
    }
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
                Lighting Config
              </div>
              <>
                <ModalBody>
                  <div className="grid grid-cols-3 text-right gap-1 text-inputTxt">
                    <div className=" flex flex-grow-0 m-1 items-center mt-5 font-calibri font-bold ">
                      <span className="ml-1 w-[40%] ">No.of HeadLamp</span>
                      <Select
                        labelPlacement="outside-left"
                        size="sm"
                        className="ml-2 w-[50%]"
                        radius="none"
                        variant="bordered"
                        name="numHeadLamp"
                        //selectedKeys={placeholder?.numHeadLamp}
                        placeholder={placeholder.numHeadLamp}
                        value={params.numHeadLamp}
                        onChange={(e) => {
                          handleChange(e);
                        }}
                      >
                        {numHeadLamp.map((hl, index) => (
                          <SelectItem key={index} value={hl}>
                            {hl}
                          </SelectItem>
                        ))}
                      </Select>
                    </div>
                    <div className=" flex flex-grow-0 m-1 items-center mt-5 font-calibri font-bold mr-20">
                      <span className="ml- w-[50%] ">Main Beam Adjustable</span>
                      <Select
                        labelPlacement="outside-left"
                        size="sm"
                        className="ml-2 w-[50%]"
                        radius="none"
                        variant="bordered"
                        name="mainBeamAdjustable"
                        placeholder={placeholder?.mainBeamAdjustable}
                        value={params.mainBeamAdjustable}
                        onChange={(e) => {
                          handleChange(e);
                        }}
                      >
                        {mainBeamAdjustable.map((mb, index) => (
                          <SelectItem key={index} value={mb}>
                            {mb}
                          </SelectItem>
                        ))}
                      </Select>
                    </div>
                    <div className="flex m-1 items-center mt-5 font-calibri  font-bold  ">
                      <span className="ml- w-[50%] ">
                        Headlight Measuring Method
                      </span>
                      <Select
                        labelPlacement="outside-left"
                        size="sm"
                        className="ml-2 w-[50%]"
                        radius="none"
                        variant="bordered"
                        name="headlightMeasuringMethod"
                        placeholder={placeholder?.headlightMeasuringMethod}
                        value={params.headlightMeasuringMethod}
                        onChange={(e) => {
                          handleChange(e);
                        }}
                      >
                        {headlightMeasuringMethod.map((hl, index) => (
                          <SelectItem key={index} value={hl}>
                            {hl}
                          </SelectItem>
                        ))}
                      </Select>
                    </div>
                    <div className="flex m-1 items-center mt-5 font-calibri  font-bold ">
                      <span className="ml-1 w-[40%] ">Steering Position</span>
                      <Select
                        labelPlacement="outside-left"
                        size="sm"
                        className="ml-2 w-[50%]"
                        radius="none"
                        variant="bordered"
                        name="steeringPosition"
                        placeholder={placeholder.steeringPosition}
                        value={params.steeringPosition}
                        onChange={(e) => {
                          handleChange(e);
                        }}
                      >
                        {steeringPosition.map((hl, index) => (
                          <SelectItem key={index} value={hl}>
                            {hl}
                          </SelectItem>
                        ))}
                      </Select>
                    </div>
                  </div>
                  <div className="flex p-3 pl-12">
                    <div className="flex flex-col-4  ...">
                      <span className="text-[12px] text-black font-bold text-left mt-[-4px] w-[10px]">
                        <Checkbox
                          isSelected={leftMainLamp}
                          name="leftMainLamp"
                          onValueChange={setLeftMainLamp}
                          onChange={(e) => {
                            setParams((prev) => ({
                              ...prev,
                              [e.target.name]: e.target.checked,
                            }));
                          }}
                          radius="none"
                        ></Checkbox>
                      </span>
                      <span className="text-[12px] text-black font-bold text-left ml-4  mt-[-3px]">
                        Left Main Lamp
                      </span>
                    </div>

                    <div className="flex flex-col-2 pl-40 ...">
                      <span className="text-[12px] text-black font-bold text-left mt-[-4px] w-[10px]">
                        <Checkbox
                          isSelected={rightMainLamp}
                          name="rightMainLamp"
                          onValueChange={setRightMainLamp}
                          onChange={(e) => {
                            setParams((prev) => ({
                              ...prev,
                              [e.target.name]: e.target.checked,
                            }));
                          }}
                          radius="none"
                        ></Checkbox>
                      </span>
                      <span className="text-[12px] text-black font-bold text-left ml-4  mt-[-3px]">
                        Right Main Lamp
                      </span>
                    </div>
                  </div>
                </ModalBody>
                <div className="flex justify-center mb-8  ">
                  <Button
                    className={`bg-[#009b77] text-[white] font-bold rounded-sm `}
                    variant="bordered"
                    size="sm"
                    onClick={handleSave}
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
export default LightingConfigPopup;
