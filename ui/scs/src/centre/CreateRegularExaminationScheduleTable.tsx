import React, { useState } from "react";
import { Button, Input, Select, SelectItem, Switch } from "@nextui-org/react";
import { CirclePlus, CircleX } from "tabler-icons-react";
import { useNavigate } from "react-router";
import AddVehicleClassAndExamCodePopup from "./examinationSchedule/AddVehicleClassAndExamCodePopup";

function CreateRegularExaminationScheduleTable() {
  const navigate = useNavigate();

  const [
    showAddVehicleClassAndExamCodePopup,
    setAddVehicleClassAndExamCodePopup,
  ] = useState(false);
  const handleAddVehicleClassAndExamCodePopup = () => {
    setAddVehicleClassAndExamCodePopup(true);
  };
  const closeAddVehicleClassAndExamCodePopup = (val) => {
    setAddVehicleClassAndExamCodePopup(val);
  };
  return (
    <>
      <div>
        <div className="h-[100%]  mt-3 ">
          <h1 className="h-[100%  ]    mr-2 ml-2  ">
            <div className="grid grid-cols-4 gap-2 mt-[12px] text-sm/[13px] font-bold w-[100%]  ">
              <div className="grid grid-rows-2 h-[200 px] grid-flow-col ml-6">
                <div className="flex flex-row items-center">
                  <div className="w-[30%] text-left">Wednesday</div>
                  <div className="w-[60%] ml-[10px]">
                    <Select
                      labelPlacement="outside-left"
                      radius="none"
                      size="sm"
                      name="center"
                      aria-label="center"
                      variant="bordered"
                      placeholder="Select"
                    >
                      <SelectItem key={""}></SelectItem>
                    </Select>
                  </div>
                </div>
              </div>
              <div className="grid grid-rows-1 grid-flow-col">
                <div className="flex flex-row ">
                  <div className="w-[40%] text-left items-cente mt-2">
                    Physical Lane
                  </div>

                  <div className="w-[55%] ml-[5px] ">
                    <Select
                      labelPlacement="outside-left"
                      radius="none"
                      size="sm"
                      name="center"
                      aria-label="center"
                      variant="bordered"
                      placeholder="Select"
                    >
                      <SelectItem key={""}></SelectItem>
                    </Select>
                  </div>
                </div>
              </div>
              <div className="grid grid-rows-1 ">
                <div className="flex flex-row ">
                  <div className="w-[40%] text-left items-cente mt-2">
                    Virtual Lane
                  </div>

                  <div className="w-[55%] ml-[5px] ">
                    <Select
                      labelPlacement="outside-left"
                      radius="none"
                      size="sm"
                      name="center"
                      aria-label="center"
                      variant="bordered"
                      placeholder="Select"
                    >
                      <SelectItem key={""}></SelectItem>
                    </Select>
                  </div>
                </div>
              </div>
              <div className="grid grid-rows-1 ">
                <div className="flex flex-row ">
                  <div className="w-[40%] text-center text-[#00AF8F] mt-2">
                    21
                  </div>
                </div>
              </div>
            </div>
            <div className="-mt-[15px] mr-1 ml-1">
              <table className="w-full text-xs text-left rtl:text-right  dark:text-gray-400   focus:border-gray-200 ">
                <thead className="text-xs text-gray-700 uppercase bg-[#A0D9C1] dark:bg-gray-700 dark:text-gray-400 border h-[20px]">
                  <tr className="bg-white dark:bg-gray-800  border ">
                    <th
                      scope="col"
                      className="w-[20px]  border border-gray-200   text-[#00AF8F] bg-[#A0D9C1] font-bold "
                    >
                      Session
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 border  text-[#00AF8F] bg-[#A0D9C1] font-bold  "
                    >
                      Timeslot
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 border  text-[#00AF8F] bg-[#A0D9C1] font-bold  "
                    >
                      Quota
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 border  text-[#00AF8F] bg-[#A0D9C1] font-bold  "
                    >
                      Reserve Quota
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 border  text-[#00AF8F] bg-[#A0D9C1] font-bold  "
                    >
                      Vehicle Class
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3  text-[#00AF8F] bg-[#A0D9C1] font-bold "
                    >
                      Exam Code
                    </th>
                    <th scope="col" colSpan={2} className=" bg-[#A0D9C1] "></th>
                  </tr>
                </thead>
                <tbody>
                  <tr className=" border w-1 h-2">
                    <td rowSpan={2} className=" border w-[120px]  ">
                      AM1
                    </td>
                    <td rowSpan={2} className=" w-[120px]  border ">
                      08:45-9-00
                    </td>
                    <td rowSpan={2} className="w-[140px] border ">
                      <Input
                        id="standard-basic"
                        variant="bordered"
                        size="sm"
                        className="w-[80px] rounded-sm ml-1 mt-1"
                        value={"10"}
                      />
                    </td>
                    <td rowSpan={2} className="w-[140px] border ">
                      <Input
                        id="standard-basic"
                        variant="bordered"
                        size="sm"
                        className="w-[80px] rounded-sm ml-1 mt-1"
                        value={"0"}
                      />
                    </td>
                    <td className="px-6 py-4 text-left border ">030</td>

                    <td className="px-6 py-4  border ">008</td>
                    <td className=" w-[80px] border ">
                      <CircleX
                        size={25}
                        color="red"
                        className="relative  left-[21px]"
                      />
                    </td>
                    <td rowSpan={2} className="px-6 py-4  border w-[80px]">
                      <Switch defaultSelected color="success" size="sm" />
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4  border "></td>
                    <td className="px-6 py-4  border "></td>
                    <td className="px-6 py-4  border ">
                      <CirclePlus
                        size={25}
                        strokeWidth={3}
                        color="green"
                        onClick={handleAddVehicleClassAndExamCodePopup}
                      />
                    </td>
                  </tr>
                  <tr className=" border ">
                    <td className=" border h-3">AM1</td>
                    <td className=" w-[120px]  border ">09:00-10:00</td>
                    <td className="w-[140px] border ">
                      <Input
                        id="standard-basic"
                        variant="bordered"
                        size="sm"
                        className="w-[80px] rounded-sm ml-1 mt-1"
                        value={"0"}
                      />
                    </td>
                    <td className="w-[140px] border ">
                      <Input
                        id="standard-basic"
                        variant="bordered"
                        size="sm"
                        className="w-[80px] rounded-sm ml-1 mt-1"
                        value={"0"}
                      />
                    </td>{" "}
                    <td className="px-6 py-4  border "></td>
                    <td className="px-6 py-4  border "></td>
                    <td className="px-6 py-4  border ">
                      <CirclePlus size={25} strokeWidth={3} color="green" />
                    </td>
                    <td className="px-6 py-4  border ">
                      <Switch defaultSelected color="success" size="sm" />
                    </td>
                  </tr>
                  <tr>
                    <td className=" border h-3 ">AM1</td>
                    <td className=" w-[120px]  border ">10:00-11:00</td>
                    <td className="w-[140px] border ">
                      <Input
                        id="standard-basic"
                        variant="bordered"
                        size="sm"
                        className="w-[80px] rounded-sm ml-1 mt-1"
                        value={"0"}
                      />
                    </td>
                    <td className="w-[140px] border ">
                      <Input
                        id="standard-basic"
                        variant="bordered"
                        size="sm"
                        className="w-[80px] rounded-sm ml-1 mt-1"
                        value={"0"}
                      />
                    </td>
                    <td className="px-6 py-4  border "></td>
                    <td className="px-6 py-4  border "></td>
                    <td className="px-6 py-4  border ">
                      <CirclePlus size={25} strokeWidth={3} color="green" />
                    </td>
                    <td className="px-6 py-4  border ">
                      <Switch defaultSelected color="success" size="sm" />
                    </td>
                  </tr>
                  <tr>
                    <td className=" border h-3 ">AM2</td>
                    <td className=" w-[120px]  border ">11:00-12:00</td>
                    <td className="w-[140px] border ">
                      <Input
                        id="standard-basic"
                        variant="bordered"
                        size="sm"
                        className="w-[80px] rounded-sm ml-1 mt-1"
                        value={"0"}
                      />
                    </td>
                    <td className="w-[140px] border ">
                      <Input
                        id="standard-basic"
                        variant="bordered"
                        size="sm"
                        className="w-[80px] rounded-sm ml-1 mt-1"
                        value={"0"}
                      />
                    </td>
                    <td className="px-6 py-4 text-right  border "></td>
                    <td className="px-6 py-4  border "></td>
                    <td className="px-6 py-4  border ">
                      <CirclePlus size={25} strokeWidth={3} color="green" />
                    </td>
                    <td className="px-6 py-4  border ">
                      <Switch defaultSelected color="success" size="sm" />
                    </td>
                  </tr>
                  <tr>
                    <td className=" border h-3 ">AM2</td>
                    <td className=" w-[120px]  border ">12:00-13:00</td>
                    <td className="w-[140px] border ">
                      <Input
                        id="standard-basic"
                        variant="bordered"
                        size="sm"
                        className="w-[80px] rounded-sm ml-1 mt-1"
                        value={"0"}
                      />
                    </td>
                    <td className="w-[140px] border ">
                      <Input
                        id="standard-basic"
                        variant="bordered"
                        size="sm"
                        className="w-[80px] rounded-sm ml-1 mt-1"
                        value={"0"}
                      />
                    </td>
                    <td className="px-6 py-4 text-right  border "></td>
                    <td className="px-6 py-4  border "></td>
                    <td className="px-6 py-4  border ">
                      <CirclePlus size={25} strokeWidth={3} color="green" />
                    </td>
                    <td className="px-6 py-4  border ">
                      <Switch defaultSelected color="success" size="sm" />
                    </td>
                  </tr>
                  <tr>
                    <td className=" border h-3 ">AM2</td>
                    <td className=" w-[120px]  border ">13:00-14:00</td>
                    <td className="w-[140px] border ">
                      <Input
                        id="standard-basic"
                        variant="bordered"
                        size="sm"
                        className="w-[80px] rounded-sm ml-1 mt-1"
                        value={"0"}
                      />
                    </td>
                    <td className="w-[140px] border ">
                      <Input
                        id="standard-basic"
                        variant="bordered"
                        size="sm"
                        className="w-[80px] rounded-sm ml-1 mt-1"
                        value={"0"}
                      />
                    </td>
                    <td className="px-6 py-4 text-right  border "></td>
                    <td className="px-6 py-4  border "></td>
                    <td className="px-6 py-4  border ">
                      <CirclePlus size={25} strokeWidth={3} color="green" />
                    </td>
                    <td className="px-6 py-4  border ">
                      <Switch defaultSelected color="success" size="sm" />
                    </td>
                  </tr>
                  <tr>
                    <td className=" border h-3 ">PM1</td>
                    <td className=" w-[120px]  border ">14:00-15:00</td>
                    <td className="w-[140px] border ">
                      <Input
                        id="standard-basic"
                        variant="bordered"
                        size="sm"
                        className="w-[80px] rounded-sm ml-1 mt-1"
                        value={"0"}
                      />
                    </td>
                    <td className="w-[140px] border ">
                      <Input
                        id="standard-basic"
                        variant="bordered"
                        size="sm"
                        className="w-[80px] rounded-sm ml-1 mt-1"
                        value={"0"}
                      />
                    </td>
                    <td className="px-6 py-4 text-right  border "></td>
                    <td className="px-6 py-4  border "></td>
                    <td className="px-6 py-4  border ">
                      <CirclePlus size={25} strokeWidth={3} color="green" />
                    </td>
                    <td className="px-6 py-4  border ">
                      <Switch defaultSelected color="success" size="sm" />
                    </td>
                  </tr>
                  <tr>
                    <td className=" border h-3 ">PM1</td>
                    <td className=" w-[120px]  border ">15:00-16:00</td>
                    <td className="w-[140px] border ">
                      <Input
                        id="standard-basic"
                        variant="bordered"
                        size="sm"
                        className="w-[80px] rounded-sm ml-1 mt-1"
                        value={"0"}
                      />
                    </td>
                    <td className="w-[140px] border ">
                      <Input
                        id="standard-basic"
                        variant="bordered"
                        size="sm"
                        className="w-[80px] rounded-sm ml-1 mt-1"
                        value={"0"}
                      />
                    </td>
                    <td className="px-6 py-4 text-right  border "></td>
                    <td className="px-6 py-4  border "></td>
                    <td className="px-6 py-4  border ">
                      <CirclePlus size={25} strokeWidth={3} color="green" />
                    </td>
                    <td className="px-6 py-4  border ">
                      <Switch defaultSelected color="success" size="sm" />
                    </td>
                  </tr>
                  <tr className=" border w-1 h-2">
                    <td scope="row" rowSpan={2} className=" border w-1  ">
                      PM2
                    </td>
                    <td rowSpan={2} className=" w-[120px]  border ">
                      16:00-17:00
                    </td>
                    <td rowSpan={2} className="w-[140px] border ">
                      <Input
                        id="standard-basic"
                        variant="bordered"
                        size="sm"
                        className="w-[80px] rounded-sm ml-1 mt-1"
                        value={"10"}
                      />
                    </td>
                    <td rowSpan={2} className="w-[140px] border ">
                      <Input
                        id="standard-basic"
                        variant="bordered"
                        size="sm"
                        className="w-[80px] rounded-sm ml-1 mt-1"
                        value={"0"}
                      />
                    </td>
                    <td className="px-6 py-4 text-left  border ">030</td>

                    <td className="px-6 py-4 text-left  border ">008</td>
                    <td className="px-6 py-4  border ">
                      <CirclePlus size={25} strokeWidth={3} color="green" />
                    </td>
                    <td rowSpan={2} className="px-6 py-4  border ">
                      <Switch defaultSelected color="success" size="sm" />
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4  border ">020</td>
                    <td className="px-6 py-4  border ">008</td>
                    <td className="px-6 py-4  border ">
                      <CirclePlus size={25} strokeWidth={3} color="green" />
                    </td>
                  </tr>
                  <tr className=" border ">
                    <td scope="row" rowSpan={2} className=" border w-1  ">
                      PM2
                    </td>
                    <td rowSpan={2} className=" w-[120px]  border ">
                      17:00-18:00
                    </td>
                    <td rowSpan={2} className="  border ">
                      <Input
                        id="standard-basic"
                        variant="bordered"
                        size="sm"
                        className="w-[80px] rounded-sm ml-1 mt-1"
                        value={"0"}
                      />
                    </td>
                    <td rowSpan={2} className=" border ">
                      <Input
                        id="standard-basic"
                        variant="bordered"
                        size="sm"
                        className="w-[80px] rounded-sm ml-1 mt-1"
                        value={"0"}
                      />
                    </td>
                    <td className="px-6 py-4 text-left  border ">030</td>

                    <td className="px-6 py-4 text-left  border ">008</td>
                    <td className="px-6 py-4  border ">
                      <CircleX size={25} color="red" />
                    </td>
                    <td rowSpan={2} className="px-6 py-4  border ">
                      <Switch defaultSelected color="success" size="sm" />
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4  border "></td>
                    <td className="px-6 py-4  border "></td>
                    <td className="px-6 py-4  border ">
                      <CircleX size={25} color="red" />
                    </td>
                  </tr>
                  <tr className=" border ">
                    <td scope="row" className=" border w-1  ">
                      PM2
                    </td>
                    <td className=" w-[120px]  border ">18:00-19:00</td>
                    <td className="w-[140px] border ">
                      <Input
                        id="standard-basic"
                        variant="bordered"
                        size="sm"
                        className="w-[80px] rounded-sm ml-1 mt-1"
                        value={"0"}
                      />
                    </td>
                    <td className="w-[140px] border ">
                      <Input
                        id="standard-basic"
                        variant="bordered"
                        size="sm"
                        className="w-[80px] rounded-sm ml-1 mt-1"
                        value={"0"}
                      />
                    </td>
                    <td className="px-6 py-4  border "></td>
                    <td className="px-6 py-4  border "></td>
                    <td className="px-6 py-4  border ">
                      <CirclePlus size={25} strokeWidth={3} color="green" />
                    </td>
                    <td className="px-6 py-4  border ">
                      <Switch defaultSelected color="success" size="sm" />
                    </td>
                  </tr>
                  <tr>
                    <td scope="row" className=" border w-1  ">
                      PM2
                    </td>
                    <td className=" w-[120px]  border ">19:00-20:00</td>
                    <td className="w-[140px] border ">
                      <Input
                        id="standard-basic"
                        variant="bordered"
                        size="sm"
                        className="w-[80px] rounded-sm ml-1 mt-1"
                        value={"0"}
                      />
                    </td>
                    <td className="w-[140px] border ">
                      <Input
                        id="standard-basic"
                        variant="bordered"
                        size="sm"
                        className="w-[80px] rounded-sm ml-1 mt-1"
                        value={"0"}
                      />
                    </td>
                    <td className="px-6 py-4  border "></td>
                    <td className="px-6 py-4  border "></td>
                    <td className="px-6 py-4  border ">
                      <CirclePlus size={25} strokeWidth={3} color="green" />
                    </td>
                    <td className="px-6 py-4  border ">
                      <Switch defaultSelected color="success" size="sm" />
                    </td>
                  </tr>
                  <tr>
                    <td scope="row" className=" border w-1  ">
                      PM2
                    </td>
                    <td className=" w-[120px]  border ">20:00-21:00</td>
                    <td className="w-[140px] border ">
                      <Input
                        id="standard-basic"
                        variant="bordered"
                        size="sm"
                        className="w-[80px] rounded-sm ml-1 mt-1"
                        value={"0"}
                      />
                    </td>
                    <td className="w-[140px] border ">
                      <Input
                        id="standard-basic"
                        variant="bordered"
                        size="sm"
                        className="w-[80px] rounded-sm ml-1 mt-1"
                        value={"0"}
                      />
                    </td>
                    <td className="px-6 py-4 text-right  border "></td>
                    <td className="px-6 py-4  border "></td>
                    <td className="px-6 py-4  border ">
                      <CirclePlus size={25} strokeWidth={3} color="green" />
                    </td>
                    <td className="px-6 py-4  border ">
                      <Switch defaultSelected color="success" size="sm" />
                    </td>
                  </tr>
                  <tr>
                    <td scope="row" className=" border w-1  ">
                      PM2
                    </td>
                    <td className=" w-[120px]  border ">21:00-22:00</td>
                    <td className="w-[140px] border ">
                      <Input
                        id="standard-basic"
                        variant="bordered"
                        size="sm"
                        className="w-[80px] rounded-sm ml-1 mt-1"
                        value={"0"}
                      />
                    </td>
                    <td className="w-[140px] border ">
                      <Input
                        id="standard-basic"
                        variant="bordered"
                        size="sm"
                        className="w-[80px] rounded-sm ml-1 mt-1"
                        value={"0"}
                      />
                    </td>
                    <td className="px-6 py-4 text-right  border "></td>
                    <td className="px-6 py-4  border "></td>
                    <td className="px-6 py-4  border ">
                      <CirclePlus size={25} strokeWidth={3} color="green" />
                    </td>
                    <td className="px-6 py-4  border ">
                      <Switch defaultSelected color="success" size="sm" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </h1>
          <div className="flex justify-between mt-[10px]">
            <div className="justify start ml-2  mb-3">
              <Button
                className="bg-[#ffffff] rounded-sm "
                variant="bordered"
                type="submit"
                size="sm"
                onClick={() => {
                  navigate("/overrideexamschedule?type=Regular");
                }}
              >
                Back
              </Button>
            </div>
            <div className=" justify-end">
              <Button
                type="button"
                className="bg-[#00AF8F] text-[#FFFFFF] rounded-sm mr-2"
                size="sm"
              >
                Confirm
              </Button>
            </div>
          </div>
        </div>
      </div>
      {showAddVehicleClassAndExamCodePopup && (
        <AddVehicleClassAndExamCodePopup
          showAddVehicleClassAndExamCodePopup={
            showAddVehicleClassAndExamCodePopup
          }
          closeAddVehicleClassAndExamCodePopup={
            closeAddVehicleClassAndExamCodePopup
          }
        ></AddVehicleClassAndExamCodePopup>
      )}
    </>
  );
}

export default CreateRegularExaminationScheduleTable;
