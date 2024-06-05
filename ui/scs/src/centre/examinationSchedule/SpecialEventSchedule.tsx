import {
  Button,
  Checkbox,
  Input,
  Select,
  SelectItem,
  TableColumn,
  TableHeader,
} from "@nextui-org/react";
import React, { useState } from "react";
import { Pencil } from "tabler-icons-react";
import "react-datepicker/dist/react-datepicker.css";
import SpecialEventScheduleTable from "./SpcialEventScheduleTable";
import AddScheduleSetting from "../AddSchedulingSetting";
import { useNavigate } from "react-router-dom";

function SpecialEventSchedule() {
  const [inspectiondate, setInspectionDate] = useState(new Date());
  const [AddSchedulePopup, setAddSchedulePopup] = useState(false);

  const navigate = useNavigate();
  const handleFromDateChanged = (newValue: React.SetStateAction<Date>) => {
    setInspectionDate(newValue);
  };
  const addScheduleSettingBtn = () => {
    setAddSchedulePopup(true);
  };
  const closeAddScheduleSettingBtn = () => {
    setAddSchedulePopup(false);
  };

  return (
    <>
      <div className="h-[500px] ml-1">
        <div className="flex items-left text-[#0a923d] p-[10px]  font-bold text-md">
          Special Event {">"} Schedule
        </div>
        <div className="mr-1">
          <h1>
            <h5 className="absolute -top mt-2 start-3 pl-[10px] pr-[10px] text-sm/[13px] text-[#00AF8F]">
              Event Information
            </h5>

            <div className="grid grid-cols-2  mt-[15px] ">
              <div className="grid grid-rows-3 h-[400 px] grid-flow-col ml-6">
                <div className="flex flex-row items-center mt-2 text-small">
                  <div className="w-[40%] text-left font-bold ">Event ID</div>
                  <div className="inline-flex  w-[40%]  h-8 "> Test Event</div>
                </div>
                <div className=" mt-2  flex flex-row text-small ">
                  <div className="w-[40%] text-left font-bold  "> Center</div>
                  <div className="inline-flex  W-[40%] h-8 ">TY2</div>
                </div>

                <div className=" flex flex-row text-small  ">
                  <div className="font-bold mt-1"> Reschedule Period </div>
                  <div className="inline-flex  W-[40%] ml-[19%] h-8 ">
                    18/09/2023 -24/09/2023
                  </div>
                </div>
              </div>

              <div className="justify-evenly">
                <div className="grid grid-rows-3 h-[400 px]">
                  <div className="flex flex-row mt-2 text-small">
                    <div className="w-[40%] justify-end font-bold mt-2 -ml-2  ">
                      {" "}
                      Description
                    </div>
                    <div className=" w-[40%] mt-3 -ml-[40px]"> </div>
                    <div className="flex justify-end">
                      <Pencil
                        size={20}
                        color="white"
                        className="bg-[#00AF8F] rounded-sm mt-[10px] ml-[140px]"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row mt-3 text-small  ">
                    <div className="w-[40%] justify-end font-bold mr-4  ">
                      {" "}
                      Event Period
                    </div>
                    <div className=" w-[60%]   ">
                      17/09/2023 00:00 17/09/2023 23:00{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </h1>
        </div>
        <div className="justify-end mt-1 ml-1">
          <div className="float-left">
            <Button
              className={`bg-[white] text-[black] shadow-sm rounded-sm `}
              variant="bordered"
              size="sm"
              type="submit"
              onClick={() => {
                navigate(-1);
              }}
            >
              Back
            </Button>

            <Button
              className={`bg-[#00AF8F] text-white shadow-sm rounded-sm ml-1`}
              variant="bordered"
              size="sm"
              type="submit"
              onClick={addScheduleSettingBtn}
            >
              Add
            </Button>
          </div>
          <Button
            className={`bg-[orange] text-white shadow-sm rounded-sm float-right mr-1 `}
            variant="bordered"
            size="sm"
            type="submit"
          >
            Confirm
          </Button>
        </div>
        <div className="">
          <SpecialEventScheduleTable />
        </div>
      </div>
      {AddSchedulePopup && (
          <AddScheduleSetting
          AddSchedulePopup={AddSchedulePopup}
            closeAddScheduleSettingBtn={closeAddScheduleSettingBtn}
          ></AddScheduleSetting>
        )}
    </>
    
  );
}

export default SpecialEventSchedule;
