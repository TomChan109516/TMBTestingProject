import { Button, Checkbox, CheckboxGroup } from "@nextui-org/react";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SelectVtPersonPopUp from "../../assign/SelectVtPersonPopUp";

function StaffScheduleLandingPage() {
  const [checkedList, setCheckedList] = useState([]);
  const [checkedList1, setCheckedList1] = useState([]);
  const [checkBoxSpaces, setCheckBoxSpaces] = useState("");
  const navigate = useNavigate();
  const [showVtPersonPopup, setShowVtPersonPopup] = useState(false);
  const [mveData, setMvedata] = useState([
    "Person",
    "PerSon",
    "PeRson",
    "PerSon1",
    "PerSon1",
    "PeRson1",
    "Person2",
    "PerSon2",
    "PeRson2",
    "Person3",
    "PerSon3",
    "PeRson3",
  ]);
  const [vtData, setVtdata] = useState([
    "Person",
    "PerSon",
    "PeRson",
    "PerSon1",
    "PerSon1",
    "PeRson1",
    "Person2",
    "PerSon2",
    "PeRson2",
    "Person3",
    "PerSon3",
    "PeRson3",
  ]);

  const vtPerson = () => {
    setShowVtPersonPopup(true);
  };

  const handleChangesMVE = async (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked === true) {
      setCheckedList([...checkedList, event.target.value]);
    } else {
      setCheckedList(
        checkedList.filter((obj) => {
          return obj !== event.target.value;
        })
      );
    }
  };
  const handleChangesVT = async (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked === true) {
      setCheckedList1([...checkedList1, event.target.value]);
    } else {
      setCheckedList1(
        checkedList1.filter((obj) => {
          return obj !== event.target.value;
        })
      );
    }
  };
  return (
    <div>
      <div className="flex items-left text-[#007F62] p-[10px]  font-bold text-sm">
        Assignment {">"} Staff Schedule
      </div>
      <div className="text-sm text-left bg-[#82da9440] pt-2 pl-2 mb-2">
        Session:WD
      </div>
      <div>
        <div className="text-left bg-[#A0D9C1] flex flex-row text-[#008636] text-sm ml-1 mr-1 h-[36px] rounded-sm">
          <div className=" p-2">
            <span className="ml-1 font-bold">MVE</span>
            <span className="ml-5">
              Total : <span className="font-bold">0</span>
            </span>
            <span className="ml-5">
              WD : <span className="font-bold">0</span>
            </span>
            <span className="ml-5">
              AM : <span className="font-bold">0</span>
            </span>
            <span className="ml-5">
              PM : <span className="font-bold">0</span>
            </span>
          </div>
          <div className="absolute right-[6px] mt-[3px]">
            <Button
              size="sm"
              radius="none"
              variant="flat"
              className="bg-[#00AF8F] text-[#ffff]"
            >
              Secondment
            </Button>
          </div>
        </div>
        <div className="ml-1 mr-1 h-14 border-solid border-[2px] border-[#00AF8F]">
          <CheckboxGroup
            color="success"
            value={checkedList}
            classNames={{
              wrapper: " text-white grid grid-cols-8 max-w-full pt-4 ml-1 ",
            }}
          >
            {checkBoxSpaces}
            {mveData.map((data, index) => {
              return (
                <Checkbox
                  key={index}
                  radius="none"
                  size="sm"
                  value={data}
                  className="pt-0"
                  onChange={handleChangesMVE}
                  classNames={{
                    wrapper:
                      "after:bg-[#00AF8F] text-white rounded-sm text-xs",
                    // base:' even:ml-5 relative'
                  }}
                >
                  {data}
                </Checkbox>
              );
            })}
          </CheckboxGroup>
        </div>
      </div>
      <div>
        <div className="text-left text-[#008636] flex bg-[#A0D9C1] h-[36px] text-sm ml-1 mr-1 mt-20 rounded-sm">
          <div className="p-2">
            <span className="ml-1 "> VT</span>
            <span className="ml-5 ">
              Total: <span className="font-bold">0</span>
            </span>
            <span className="ml-5 ">
              WD : <span className="font-bold">0</span>
            </span>
            <span className="ml-5 ">
              AM : <span className="font-bold">0</span>
            </span>
            <span className="ml-5 ">
              PM : <span className="font-bold">0</span>
            </span>
          </div>
          <div className="absolute right-[6px] mt-[3px]">
            <Button
              size="sm"
              radius="none"
              variant="flat"
              className="bg-[#00AF8F] text-[#ffff] rounded-sm"
              onClick={vtPerson}
            >
              Secondment
            </Button>
            {showVtPersonPopup && (
          <SelectVtPersonPopUp
          showVtPersonPopup={showVtPersonPopup}
          setShowVtPersonPopup={setShowVtPersonPopup}
            title="VtPerson"
          />
        )}
          </div>
        </div>
        <div className="ml-1 mr-1 h-14 border-[2px] border-[#00AF8F]">
          <CheckboxGroup
            value={checkedList1}
            classNames={{
              wrapper: "text-white grid grid-cols-8  max-w-full pt-4 ml-1",
            }}
          >
            {mveData.map((data, index) => {
              return (
                <Checkbox
                  key={index}
                  radius="none"
                  size="sm"
                  value={data}
                  className="pt-0"
                  onChange={handleChangesVT}
                  classNames={{
                    wrapper:
                      "after:bg-[#00AF8F] text-white rounded-sm text-xs",
                  }}
                >
                  {data}
                </Checkbox>
              );
            })}
          </CheckboxGroup>
        </div>
      </div>
      <div className="justify-end ml-1 mr-1 mt-[80px]">
        <div className="float-left">
          <Button
            size="sm"
            radius="none"
            variant="bordered"
            className="bg-[#FFFF] font-bold rounded-sm"
            onClick={() => navigate(-1)}
          >
            Back
          </Button>
          <Button
            size="sm"
            radius="none"
            variant="shadow"
            className="bg-[#00AF8F] text-white font-bold ml-1 rounded-sm"
            onClick={() => navigate("/inspectionSchedulingSystem")}
          >
            Leave Assignment
          </Button>
        </div>
        <div className=" float-right">
          <Button
            size="sm"
            radius="none"
            variant="shadow"
            className="bg-[#00AF8F] text-white font-bold rounded-sm"
            onClick={() => navigate("/LaneConfiguration")}
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
}

export default StaffScheduleLandingPage;
