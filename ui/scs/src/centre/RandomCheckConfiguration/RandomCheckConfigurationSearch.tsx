import React, { useState } from "react";
import { Button, Select, SelectItem } from "@nextui-org/react";
// import { useNavigate } from "react-router";
import RandomCheckConfigurationTable from "./RandomCheckConfigurationTable";
import DeleteExaminationSchedulePopup from "../DeleteExaminationSchedulePopup";
import AddNewConfigPopup from "./AddNewConfigPopup";


export default function RandomCheckConfigurationSearch() {
    const [
    showAddNewConfigPopup,
    setAddNewConfigPopup,
  ] = useState(false);
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

  const handleAddNewConfigPopup = () => {
    setAddNewConfigPopup(true);
  }
  // const navigate = useNavigate();


  const [DeleteColor, setDeleteColor] = useState<boolean>(false);

    const [isOpen, setIsOpen] = useState<boolean>(false);


    const handleDeleteColor = () => {
        setIsOpen(true);
    };
  return (
    <div>
      <div className="flex items-left text-[#00AF8F] p-[10px]  font-bold text-sm">
        RandomCheckConfiguration{">"}Search
      </div>
      <div className="h-[100%]  mt-3 ">
        <h1 className="h-[100px]    mr-2 ml-2  ">
          <h5 className="absolute -top-2 start-3 pl-[10px] pr-[10px] text-sm/[13px] text-[#00AF8F]">
            Searching Criteria
          </h5>
          <div className="grid grid-cols-2 gap-2 mt-[12px] text-sm/[13px] font-bold w-[100%]  ">
            <div className="grid grid-rows-2 h-[200 px] grid-flow-col ml-6">
              <div className="flex flex-row items-center">
                <div className="w-[15%] text-left">Centre</div>
                <div className="w-[1005%] ml-[30px]">
                  <Select
                    labelPlacement="outside-left"
                    radius="none"
                    size="sm"
                    variant="bordered"
                  >
                    <SelectItem key="TY">TY2 </SelectItem>
            
          
                  </Select>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end  font-bold gap-1 mt-[-20px] mr-2 ">
            <Button
              type="reset"
              className="bg-[#FFFFFF] rounded-sm"
              size="sm"
              radius="sm"
              variant="bordered"
            >
              Reset
            </Button>
            <Button
              type="button"
              className="bg-[#00AF8F] text-[#FFFFFF] rounded-sm"
              size="sm"
              radius="sm"

              // onClick={() => { navigate('/RandomCheckConfigurationTable') }}
            >
              Search
            </Button>
          </div>
        </h1>
        <div className="flex justify-between mt-[10px]">
          <div className="justify start ml-2">
            <Button
              className=" bg-white rounded-sm shadow-sm border-greyBorder border-solid font-bold"
              variant="bordered"
              type="submit"
              size="sm"
              style={{ backgroundColor: DeleteColor ? "red" : "" }}
                        disabled={!DeleteColor}
                        onClick={handleDeleteExaminationSchedulePopup}
                        onChange={handleDeleteColor}
            >
              Delete
            </Button>
          </div>
          <div className=" justify-end">
            <Button
              type="button"
              className="bg-[#00AF8F] text-[#FFFFFF] rounded-sm shadow-sm mr-2 font-bold"
              size="sm"
              onClick={handleAddNewConfigPopup}
            >
              Add new Config
            </Button>
          </div>
        </div>
      </div>
      <RandomCheckConfigurationTable
      checkFunc={setDeleteColor}
       />
      
      {showDeleteExaminationSchedulePopup && (
        <DeleteExaminationSchedulePopup
          showConfirmPopup={showDeleteExaminationSchedulePopup}
          setShowConfirmPopup={closeDeleteExaminationSchedulePopup}
        ></DeleteExaminationSchedulePopup>
      )}

{showAddNewConfigPopup && (
        <AddNewConfigPopup
          showAddNewConfigPopup={showAddNewConfigPopup}
          CloseAddNewConfigPopup={setAddNewConfigPopup}
        ></AddNewConfigPopup>
      )}
    </div>
  );
}
