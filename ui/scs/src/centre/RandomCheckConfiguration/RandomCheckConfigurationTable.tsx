import React, { useState } from "react";
import { CirclePlus, CircleX, Edit } from "tabler-icons-react";
import { Checkbox } from "@nextui-org/react";
import AddVehicleClassAndExamCodePopup from "../examinationSchedule/AddVehicleClassAndExamCodePopup";
import DeleteExaminationSchedulePopup from "../DeleteExaminationSchedulePopup";
import RandomCheckEditPopUp from "./RandomCheckEditPopUp";

export default RandomCheckConfigurationTable;
function RandomCheckConfigurationTable({ checkFunc }) {
  const [showRandomCheckEditPopUp, setShowRandomCheckEditPopUp] = useState(false);
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

  const [
    showDeleteExaminationSchedulePopup,
    setDeleteExaminationSchedulePopup,
  ] = useState(false);

  const handleDeleteExaminationSchedulePopup = () => {
    setDeleteExaminationSchedulePopup(true);
  };

  const closeDeleteExaminationSchedulePopup = (val) => {
    setDeleteExaminationSchedulePopup(val);
  };

  const onCheckboxChange = (e) => {
    checkFunc(e.target.checked);
  };

  const handleRandomCheckEditPopup = () => {
    setShowRandomCheckEditPopUp(true);
  };

  return (
    <>
      <div>
        <div className="h-[100%]  mt-3 ">
          <h1 className="h-[100%  ]    mr-2 ml-2  ">
            <div className="-mt-[px] mr-1 ml-1">
              <table className="w-full text-xs text-left rtl:text-right  dark:text-gray-400  mb- focus:border-gray-200 mb-2 mt-2">
                <thead className="text-xs text-gray-700 uppercase bg-[#A0D9C1] dark:bg-gray-700 dark:text-gray-400 border h-[20px]">
                  <tr className="bg-white dark:bg-gray-800  border ">
                    <th
                      scope="col"
                      className="px-1 py-1 border  text-[#00AF8F] bg-[#A0D9C1] font-bold  "
                    >
                      <Checkbox
                        classNames={{ wrapper: "after:bg-[#00AF8F]  " }}
                        size="sm"
                        radius="none"
                        
                      />
                    </th>
                    <th
                      scope="col"
                      className="px-1  border   text-[#00AF8F] bg-[#A0D9C1] font-bold"
                    >
                      Edit
                    </th>
                    <th
                      scope="col"
                      className="px-1  border w-[400px]  text-[#00AF8F] bg-[#A0D9C1] font-bold  "
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-  border  text-[#00AF8F] bg-[#A0D9C1] font-bold  "
                    >
                      Percentage
                    </th>
                    <th
                      scope="col"
                      className=" px-1 w-[200px]  border border-gray-200   text-[#00AF8F] bg-[#A0D9C1] font-bold "
                    >
                      Min Draw Number
                    </th>
                    <th
                      scope="col"
                      className="px-1 border  text-[#00AF8F] bg-[#A0D9C1] font-bold  "
                    >
                      Check Type
                    </th>
                    <th
                      scope="col"
                      className="px-1 w-[200px] border  text-[#00AF8F] bg-[#A0D9C1] font-bold  "
                    >
                      Vehicle Class
                    </th>
                    <th
                      scope="col"
                      className="px-1  border w-[500px]  text-[#00AF8F] bg-[#A0D9C1] font-bold  "
                    >
                      Manual Attribute Name
                    </th>
                    <th
                      scope="col"
                      className="px-1 border w-[250px]   text-[#00AF8F] bg-[#A0D9C1] font-bold  "
                    >
                      Exam Code
                    </th>
                    <th
                      scope="col"
                    
                      className="  border bg-[#A0D9C1] text-[#00AF8F]  "
                    ></th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="">
                    <td rowSpan={2} className=" border w-[10px]  ">
                      <Checkbox
                        classNames={{ wrapper: "after:bg-[#00AF8F]  " }}
                        size="sm"
                        radius="none"
                        onChange={(e) => onCheckboxChange(e)}
                      />
                    </td>
                    <td rowSpan={2} className=" border w-[40px] text-center ">
                      <Edit
                        size={18}
                        strokeWidth={2}
                        className="bg-[#00AF8F] text-white rounded-sm"
                        onClick={handleRandomCheckEditPopup}
                      />
                    </td>
                    <td rowSpan={2} className=" border w-[120px]  ">
                      Engine No check
                    </td>
                    <td rowSpan={2} className=" border w-[80px]  ">
                      10%
                    </td>

                    <td rowSpan={2} className=" w-[160px]  border ">
                      1
                    </td>
                    <td rowSpan={2} className=" w-[120px]  border ">
                      Normal
                    </td>
                    <td className=" w-[140px]  ">All</td>
                    <td className="px-6 py-4  border "></td>
                    <td className=" w-[180px] border ">All</td>
                    <td className="  border ">
                      <CircleX
                        size={25}
                        color="red"
                        className="relative  left-[6px]"
                        onClick={handleDeleteExaminationSchedulePopup}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4  border "></td>
                    <td className="px-6 py-4  border "></td>
                    <td className="px-6 py-4  border "></td>

                    <td className="px-6 py-4  border relative  left-[-18px] ">
                      <CirclePlus
                        size={25}
                        strokeWidth={3}
                        color="green"
                        onClick={handleAddVehicleClassAndExamCodePopup}
                      />
                    </td>
                  </tr>
                  <tr className="">
                    <td scope="row" rowSpan={2} className=" border w-1  ">
                      <Checkbox
                        classNames={{ wrapper: "after:bg-[#00AF8F]  " }}
                        size="sm"
                        radius="none"
                        onChange={(e) => onCheckboxChange(e)}
                      />
                    </td>
                    <td rowSpan={2} className=" w-[40px]  border ">
                      <Edit
                        size={20}
                        strokeWidth={2}
                        className="bg-[#00AF8F] text-white rounded-sm"
                      />
                    </td>
                    <td rowSpan={2} className=" w-[120px]  border ">
                      Spot check
                    </td>
                    <td rowSpan={2} className=" w-[80px]  border ">
                      5%
                    </td>
                    <td rowSpan={2} className=" w-[160px]  border ">
                      1
                    </td>
                    <td rowSpan={2} className=" w-[120px]  border ">
                      Normal
                    </td>
                    <td className=" w-[140px] ">All</td>
                    <td className="px-6 py-4  border "></td>
                    <td className=" w-[200px] border ">All</td>
                    <td className="  border ">
                      <CircleX
                        size={25}
                        color="red"
                        className="relative  left-[6px]"
                        onClick={handleDeleteExaminationSchedulePopup}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4  border "></td>
                    <td className="px-6 py-4  border "></td>
                    <td className="px-6 py-4  border "></td>
                    <td className="px-6 py-4  border ">
                      <CirclePlus
                        size={25}
                        strokeWidth={3}
                        color="green"
                        className="relative  left-[-18px]"
                        onClick={handleAddVehicleClassAndExamCodePopup}
                      />
                    </td>
                  </tr>
                  <tr className=" border ">
                    <td scope="row" rowSpan={2} className=" border w-1  ">
                      <Checkbox
                        classNames={{ wrapper: "after:bg-[#00AF8F]  " }}
                        size="sm"
                        radius="none"
                        onChange={(e) => onCheckboxChange(e)}
                      />
                    </td>
                    <td rowSpan={2} className=" w-[40px]  border ">
                      <Edit
                        size={20}
                        strokeWidth={2}
                        className="bg-[#00AF8F] text-white rounded-sm"
                      />
                    </td>
                    <td rowSpan={2} className=" w-[100px]  border ">
                      Dyno Test
                    </td>
                    <td rowSpan={2} className=" w-[80px]  border ">
                      50%
                    </td>
                    <td rowSpan={2} className=" w-[160px]  border ">
                      5
                    </td>
                    <td rowSpan={2} className=" w-[160px]  border ">
                      Dyno
                    </td>
                    <td className=" w-[140px]  ">All</td>
                    <td className="px-6 py-4  border "></td>
                    <td className=" w-[180px] border ">All</td>
                    <td className="  border ">
                      <CircleX
                        size={25}
                        color="red"
                        className="relative  left-[6px]"
                        onClick={handleDeleteExaminationSchedulePopup}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-left w-[180px] border  "></td>
                    <td className="px-6 py-4  border "></td>
                    <td className="px-6 py-4  border "></td>
                    <td className="px-6 py-4  border ">
                      <CirclePlus
                        size={25}
                        strokeWidth={3}
                        color="green"
                        className="relative  left-[-18px]"
                        onClick={handleAddVehicleClassAndExamCodePopup}
                      />
                    </td>
                  </tr>
                  <tr className="  ">
                    <td scope="row" rowSpan={2} className=" border w-1 ">
                      <Checkbox
                        classNames={{ wrapper: "after:bg-[#00AF8F]  " }}
                        size="sm"
                        radius="none"
                        onChange={(e) => onCheckboxChange(e)}
                      />
                    </td>
                    <td rowSpan={2} className=" w-[40px]  border ">
                      <Edit
                        size={20}
                        strokeWidth={2}
                        className="bg-[#00AF8F] text-white rounded-sm"
                      />
                    </td>
                    <td rowSpan={2} className=" w-[100px]  border ">
                    Taxi Meter 9km Check
                    </td>
                    <td rowSpan={2} className=" w-[80px]  border ">
                      10%
                    </td>
                    <td rowSpan={2} className=" w-[160px]  border ">
                      1
                    </td>
                    <td rowSpan={2} className=" w-[160px]  border ">
                      Normal
                    </td>
                    {/* <td className=" w-[140px]  ">All</td>
                    <td className="px-6 py-4  border "></td>
                    <td className=" w-[180px] border ">All</td>
                    
                      <CircleX
                        size={25}
                        color="red"
                        className="relative  left-[6px]"
                        onClick={handleDeleteExaminationSchedulePopup}
                      />
                     */}
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-left w-[180px] border  "></td>
                    <td className="px-6 py-4  border "></td>
                    <td className="px-6 py-4   border "></td>
                    <td className="px-6 py-4  border ">
                      <CirclePlus
                        size={25}
                        strokeWidth={3}
                        color="green"
                        className="relative  left-[-18px]"
                        onClick={handleAddVehicleClassAndExamCodePopup}
                      />
                    </td>
                  </tr>
                </tbody>
                
              </table>
            </div>
          </h1>
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
      {showRandomCheckEditPopUp && (
        <RandomCheckEditPopUp
          showRandomCheckEditPopUp={showRandomCheckEditPopUp}
          setShowRandomCheckEditPopUp={setShowRandomCheckEditPopUp}
        />
      )}
      {showDeleteExaminationSchedulePopup && (
        <DeleteExaminationSchedulePopup
          showConfirmPopup={showDeleteExaminationSchedulePopup}
          setShowConfirmPopup={closeDeleteExaminationSchedulePopup}
        ></DeleteExaminationSchedulePopup>
      )}
    </>
  );
}
