import {
  Button,
  Checkbox,
  NavbarMenu,
  Select,
  SelectItem,
} from "@nextui-org/react";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import { CalendarEvent } from "tabler-icons-react";
import AssignRandomCheckInspectionsTable from "./AssignRandomCheckInspectionsTable";
import DrawNoticePopup from "./DrawNoticePopup";
import { theme } from "../../common/themes/themeConfig";

function AssignRandomCheckInspections() {
  const navigate = useNavigate();
  const [showDrawNoticePopup, setShowDrawNoticePopup] = useState(false);
  const examCodeListData = [
    { id: 1, value: "Wheel Nuts Checks(17%)", isChecked: true },
    { id: 2, value: "Engine Nums(50%)", isChecked: true },
    { id: 3, value: "SLD & EDRD Checks", isChecked: true },
    { id: 4, value: "Taxi Meter 9kms(5%)", isChecked: true },
    { id: 5, value: "Taxi Meter Anti-tempering(5%)", isChecked: true },
    { id: 6, value: "Dyno test(50%)", isChecked: true },
    { id: 7, value: "DYNO(100%)", isChecked: true },
    { id: 7, value: "test(10%)", isChecked: true },
  ];
  const [dateValue, setDateValue] = useState(new Date());
  const [session, setSession] = useState<Set<string>>(new Set([]));
  const [examCodeList, setExamCodeList] = useState(examCodeListData);

  const handleRequestDateChanged = (newValue: React.SetStateAction<Date>) => {
    setDateValue(newValue);
  };
  const handleCheckboxChange = (id: number) => {
    const updatedCheckedList = examCodeList.map((data) => {
      if (data.id === id) {
        data.isChecked = !data.isChecked;
      }
      return data;
    });
    setExamCodeList(updatedCheckedList);
  };

  const handleDrawNotice = () => {
    setShowDrawNoticePopup(true);
  };

  return (
    <div>
      <div className="ml-1">
        <div
          className={`flex items-left text-tropicalRainForest font-[${theme?.fontFamily?.calibri}] font-bold text-sm`}
        >
          Vehicle Random Check {">"} Draw
        </div>
        <div className="mr-1 mt-2">
          <h1>
            <h5
              className={`absolute -top mt-1 start-3 pl-[10px] pr-[10px] text-sm text-[#00AF8F] font-[${theme?.fontFamily?.calibri}]`}
            >
              Vehicle Random Check
            </h5>
            <div>
              <div className="grid grid-cols-3  mt-[15px] mb-1">
                <div className="flex flex-row">
                  <div
                    className={`text-sm mt-1 font-[${theme?.fontFamily?.calibri}] font-bold whitespace-nowrap ml-3`}
                  >
                    Centre
                  </div>
                  <div className="w-full ml-[125px]">
                    <Select
                      isRequired
                      labelPlacement="outside-left"
                      radius="none"
                      size="sm"
                      variant="bordered"
                      name="center"
                      aria-label="center"
                      //className="max-w-xs text-xsfont-[${theme?.fontFamily?.calibri}]"
                      data-testid="select-test"
                    >
                      <SelectItem key="l" value="l">
                        L
                      </SelectItem>
                    </Select>
                  </div>
                </div>
                <div className="flex flex-row -ml-15">
                  <div
                    className={`whitespace-nowrap text-sm mt-1 font-[${theme?.fontFamily?.calibri}] font-bold mr-10 ml-7`}
                  >
                    Exam Date
                  </div>
                  <div
                    className={`mr-3 inline-flex border border-[lightgray] w-[265px] font-[${theme?.fontFamily?.calibri}]`}
                  >
                    <CalendarEvent
                      color="black"
                      size="28"
                      className="text-[gray]"
                    />
                    <DatePicker
                      className={`text-xs w-[245px] h-8 font-[${theme?.fontFamily?.calibri}]`}
                      selected={dateValue}
                      onChange={handleRequestDateChanged}
                    />
                  </div>
                </div>
                <div className="flex flex-row mr-2 -ml-25">
                  <div
                    className={`whitespace-nowrap text-sm mt-1  font-[${theme?.fontFamily?.calibri}] font-bold mr-8 ml-5`}
                  >
                    <span className="text-[red]">*</span>Draw Session
                  </div>
                  <div className=" w-[260px] mr-2 flex-shrink">
                    <Select
                      isRequired
                      labelPlacement="outside-left"
                      radius="none"
                      size="sm"
                      variant="bordered"
                      name="session"
                      selectedKeys={session}
                      onChange={(e) => {
                        setSession(new Set(e.target.value.split(",")));
                      }}
                      aria-label="session"
                      className={`max-w-xs text-xs font-[${theme?.fontFamily?.calibri}]`}
                    >
                      <SelectItem key="AM" value="AM">
                        AM
                      </SelectItem>
                      <SelectItem key="PM" value="PM">
                        PM
                      </SelectItem>
                      <SelectItem key="EV" value="EV">
                        EV
                      </SelectItem>
                      <SelectItem key="AM+PM" value="AM+PM">
                        AM+PM
                      </SelectItem>
                    </Select>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row pt-1 pb-1 ml-3">
              <div
                className={`whitespace-nowrap text-left items-center font-[${theme?.fontFamily?.calibri}] font-bold text-sm mt-2`}
              >
                Random Check Item
              </div>
              <div className="mr-7 ml-6  mt-1 w-full text-start pt-3 pl-2 justify-start justify-items-start align-text-top">
                <h1>
                  <h5
                    className={`absolute-top mt-1 start-3 pl-[9px] pr-[10px] text-sm font-[${theme?.fontFamily?.calibri}] text-[#00AF8F]`}
                  >
                    Select
                  </h5>
                  <div className="flex flex-wrap  overflow-y-scroll h-[70px] p-2">
                    {examCodeList.map((data) => (
                      <Checkbox
                        key={data.id}
                        isSelected={data.isChecked}
                        value={data.value}
                        radius="none"
                        size="sm"
                        classNames={{ wrapper: "after:bg-[#00AF8F]" }}
                        className={`rounded-sm mb-1 text-sm font-[${theme?.fontFamily?.calibri}]  whitespace-nowrap ml-1`}
                        onChange={() => handleCheckboxChange(data.id)}
                      >
                        {data.value}
                      </Checkbox>
                    ))}
                  </div>
                </h1>
              </div>
            </div>
            <div className="flex justify-end">
              <Button
                className={`bg-[#00AF8F] m-1 text-white rounded-sm font-[${theme?.fontFamily?.calibri}] text-sm font-bold`}
                radius="none"
                onClick={handleDrawNotice}
              >
                Draw
              </Button>
            </div>
          </h1>
        </div>
      </div>
      <AssignRandomCheckInspectionsTable />
      <div className="flex justify-start mt-1 ml-1">
        <Button
          className={`m-1 rounded-sm font-[${theme?.fontFamily?.calibri}] text-sm font-bold`}
          radius="none"
          variant="bordered"
          onClick={() => navigate("/workloadlist")}
        >
          WorkLoad List
        </Button>
      </div>
      {showDrawNoticePopup && (
        <DrawNoticePopup
          showDrawNoticePopup={showDrawNoticePopup}
          closeDrawNoticePopup={setShowDrawNoticePopup}
        />
      )}
    </div>
  );
}

export default AssignRandomCheckInspections;
