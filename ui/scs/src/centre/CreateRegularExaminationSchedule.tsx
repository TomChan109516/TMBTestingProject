import { Button } from "@nextui-org/react";
import React, { useState } from "react";
import { Pencil } from "tabler-icons-react";
import CreateRegularExaminationScheduleTable from "./CreateRegularExaminationScheduleTable";
import { useNavigate } from "react-router";
import EditExaminationSchedulePopUp from "./examinationSchedule/EditExaminationSchedule";
import { theme } from "../common/themes/themeConfig";

export default function CreateRegularExaminationSchedule() {
  const navigate = useNavigate();

  const [
    showEditExaminationSchedulePopUp,
    setShowEditExaminationSchedulePopUp,
  ] = useState(false);
  const handleEditExaminationSchedulePopUp = () => {
    setShowEditExaminationSchedulePopUp(true);
  };
  return (
    <div>
      <div className={`text-[${theme?.colors?.persianGreen}] flex items-left p-[10px]  font-bold tmext-s`}>
        Examination Schedule (Regular) {">"}  Detail
      </div>
      <div className="h-[100%]  mt-3 ">
        <h1 className="h-[100px] mr-2 ml-2">
          <h5 className={`text-[${theme?.colors?.persianGreen}] absolute -top-2 start-3 pl-[10px] pr-[10px] text-sm/[13px]`}>
            Schedule Information
          </h5>
          <div className="grid grid-cols-2 gap-2 mt-[12px] text-sm/[13px]  w-[100%]  ">
            <div className="grid grid-rows-2 h-[200 px] grid-flow-col ml-6">
              <div className="flex flex-row items-center">
                <div className="w-[15%] text-left font-bold">Centre</div>
                <div className="w-[75%] ml-[30px]">
                  <div className=" text-left text-sm/[13px]">TY1</div>
                </div>
              </div>
              <div className="flex flex-row items-center mt-4">
                <div className="w-[15%] text-left font-bold">Description</div>
                <div className="w-[75%] ml-[30px]">
                  <div className=" text-left text-sm/[13px]"></div>
                </div>
              </div>
            </div>

            <div className="grid grid-rows-2 h-[200 px] grid-flow-col ">
              <div className="flex flex-row items-center">
                <div className=" text-left font-bold">Effective Period</div>
                <div className="w-[72%] ml-[30px]">
                  <div className=" text-left text-sm/[13px]">
                    10/07/2020-10/07/2021{" "}
                  </div>
                </div>
                <span>
                  <Pencil
                    size={20}
                    strokeWidth={3}
                    color="#FFFFFF"
                    className={`bg-[${theme?.colors?.persianGreen}] rounded-sm`}
                    onClick={handleEditExaminationSchedulePopUp}
                  />
                </span>
              </div>
              <div className="flex flex-row items-center mt-3">
                <div className="w-[16%] text-left font-bold">Last Update</div>
                <div className="w-[75%] ml-[30px]">
                  <div className=" text-left text-sm/[13px] ml-2">
                    10/08/2020
                  </div>
                </div>
              </div>
            </div>
          </div>
        </h1>
      </div>
      <div className="flex justify-between mt-[10px]">
        <div className="justify start ml-2">
          <Button
            radius="none"
            size="sm"
            type="submit"
            className="bg-white text-black border border-solid border-greyBorder rounded-[3px]  min-w-unit-16 text-[13px] font-bold px-1 py-1 mr-1"
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
            className={`bg-[${theme?.colors?.persianGreen}] text-[#FFFFFF] rounded-sm mr-2`}
            size="sm"
          >
            Confirm
          </Button>
        </div>
      </div>
      <CreateRegularExaminationScheduleTable />
      {showEditExaminationSchedulePopUp && (
        <EditExaminationSchedulePopUp
          showEditExaminationSchedulePopUp={showEditExaminationSchedulePopUp}
          closeEditExaminationSchedulePopUp={
            setShowEditExaminationSchedulePopUp
          }
        ></EditExaminationSchedulePopUp>
      )}
    </div>
  );
}
