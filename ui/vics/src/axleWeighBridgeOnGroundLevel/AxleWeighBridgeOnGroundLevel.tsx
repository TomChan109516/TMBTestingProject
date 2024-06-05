import {
  Button,
  Input,
  Radio,
  RadioGroup,
  Select,
  SelectItem,
  Textarea,
} from "@nextui-org/react";
import AppointmentLayout from "../vehicleRegistration/registration/Appointment";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import React, { useState } from "react";
import TextArea from "../common/components/TextArea";
import ResultAndSubmit from "../common/components/ResultAndSubmit";
import { useDispatch } from "react-redux";
import { setisAccepted } from "../vehicleRegistration/submissionConfirmation/state/SubmissionConfirmationSlice";

function AxleWeighBridgeOnGroundLevel() {

  const [showPopup, setShowPopup] = useState(false);
  const [selectedRadio, setSelectedRadio] = useState("");
  const [isBtnDisable, setIsBtnDisable] = useState(false);
  const [tabName, setTabName] = useState("Brake Test Lane");

  const handleClick = () => {
    setShowPopup(true);
  };

  const dispatch = useDispatch();

  const onRadioButtonChange = (value: string) => {
    dispatch(setisAccepted({ [tabName]: { isAccepted: false } }));
    setSelectedRadio(value);
  };

  return (
    <>
      <div className="mt-3">
      
        <div className="font-bold text-[13px]">
          <AppointmentLayout heading="Axle Weigh Bridge On Ground Level" />
        </div>

        <div className="flex w-[100%]">
          <h1 className="border-white w-[20%] text-[13px] mt-3 text-left font-bold text-sm ml-2 ">
            Axle Weight{" "}
          </h1>
          <div className="flex  items-stretch  md:w-[90%]  gap-y-0 mr-11 items-right">
            <Table
              radius="none"
              className="bg-white flex ml-[31px] font-calibri"
              shadow="none"
            >
              <TableHeader className=" bg-persianGreen  font-[Calibir]  text-center  font-bold text-inputTxt ">
                <TableColumn className=" bg-green font-[Calibir] first:rounded-none last:rounded-none text-sm text-white   text-center  font-bold border-1 border-greyBorder">
                  <div className="text-small">Axle1</div>
                </TableColumn>
                <TableColumn className="bg-green text-white   font-[Calibir]  text-sm   text-center    font-bold border-1 border-greyBorder">
                  <div className="text-small">Axle2</div>
                </TableColumn>
                <TableColumn className="bg-green text-white      text-center  font-[Calibir]  text-sm font-bold border-1 border-greyBorder">
                  <div className="text-small">Axle3</div>
                </TableColumn>
                <TableColumn className="bg-green text-white    text-center  font-[Calibir]  text-sm font-bold border-1 border-greyBorder">
                  <div className="text-small">Axle4</div>
                </TableColumn>
                <TableColumn className=" bg-green font-[Calibir]  first:rounded-none last:rounded-none text-sm text-white    text-center    font-bold border-1 border-greyBorder">
                  <div className="text-small">Axle5</div>
                </TableColumn>
                <TableColumn className=" bg-green font-[Calibir] first:rounded-none last:rounded-none text-sm text-white   text-center  font-bold border-1 border-greyBorder">
                  <div className="text-small">Axle6</div>
                </TableColumn>
                <TableColumn className=" bg-green font-[Calibir] first:rounded-none last:rounded-none text-sm text-white   text-center  font-bold border-1 border-greyBorder">
                  <div className="text-small">Axle7</div>
                </TableColumn>
                <TableColumn className=" bg-green font-[Calibir] first:rounded-none last:rounded-none text-sm text-white   text-center  font-bold border-1 border-greyBorder">
                  <div className="text-small">Axle8</div>
                </TableColumn>
              </TableHeader>
              <TableBody>
                <TableRow
                  key="1"
                  className=" mb-2 bg-white text-innerInputTxt "
                >
                  <TableCell className="h-10 w-1  p-[3px] border-1 border-greyBorder text-inputTxt ">
                    <Input
                      radius="none"
                      labelPlacement="outside-left"
                      size="sm"
                      className="w-[158px]   border-greyBorder bg-white p-1"
                      variant="bordered"
                    />
                  </TableCell>

                  <TableCell className="h-10 w-1 p-[3px] border-1 border-greyBorder text-inputTxt ">
                    <Input
                      radius="none"
                      labelPlacement="outside-left"
                      size="sm"
                      className="w-[158px]   border-greyBorder bg-white p-1"
                      variant="bordered"
                    />
                  </TableCell>
                  <TableCell className="h-10 w-1 p-[3px] border-1 border-greyBorder">
                    <Input
                      radius="none"
                      labelPlacement="outside-left"
                      size="sm"
                      className="w-[158px]   border-greyBorder bg-white p-1"
                      variant="bordered"
                    />
                  </TableCell>

                  <TableCell className="h-10 w-1  p-[3px] border-1 border-greyBorder">
                    <Input
                      radius="none"
                      labelPlacement="outside-left"
                      size="sm"
                      className="w-[158px]   border-greyBorder bg-white p-1"
                      variant="bordered"
                    />
                  </TableCell>
                  <TableCell className="h-10 w-1 p-[3px] border-1 border-greyBorder">
                    <Input
                      radius="none"
                      labelPlacement="outside-left"
                      size="sm"
                      className="w-[158px]   border-greyBorder bg-white p-1"
                      variant="bordered"
                    />
                  </TableCell>
                  <TableCell className="h-10 w-1 p-[3px] border-1 border-greyBorder">
                    <Input
                      radius="none"
                      labelPlacement="outside-left"
                      size="sm"
                      className="w-[158px]   border-greyBorder bg-white p-1"
                      variant="bordered"
                    />
                  </TableCell>
                  <TableCell className="h-10 w-1  p-[3px] border-1 border-greyBorder">
                    <Input
                      radius="none"
                      labelPlacement="outside-left"
                      size="sm"
                      className="w-[158px]   border-greyBorder bg-white p-1"
                      variant="bordered"
                    />
                  </TableCell>
                  <TableCell className="h-10 w-1  p-[3px] border-1 border-greyBorder">
                    <Input
                      radius="none"
                      labelPlacement="outside-left"
                      size="sm"
                      className="w-[158px]   border-greyBorder bg-white p-1"
                      variant="bordered"
                    />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
      <div className=" mb-4">
        <TextArea />
      </div>
      <div className="mb-2">
        <ResultAndSubmit
          selectedRadio={selectedRadio}
          onRadioButtonChange={onRadioButtonChange}
          isBtnDisable={isBtnDisable}
          setIsBtnDisable={setIsBtnDisable}
          showPopup={showPopup}
          setShowPopup={setShowPopup}
          tabName={tabName}
          handleClick={handleClick}
          extraButtons={{
            length: 2,
            buttons: [
              {
                name: "save",
              },
              {
                name: "back",
              },
            ],
          }}
        />
      </div>
    </>
  );
}
export default AxleWeighBridgeOnGroundLevel;
