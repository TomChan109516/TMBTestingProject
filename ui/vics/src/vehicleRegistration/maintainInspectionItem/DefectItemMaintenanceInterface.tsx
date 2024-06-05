import React, { useState } from "react";
import { Button, Input } from "@nextui-org/react";
import MaintainInspectionTabData from "./MaintainInspectionTabData";
import AddModifyDefectPopup from "./AddModifyDefectPopup";

function DefectItemMaintenanceInterface() {
  const [showPopup, setShowPopup] = useState("");
  return (
    <div>
      <div className="flex justify-start text-inputTxt ml-9 font-calibri font-bold mt-4 ">
        Defect Code Maintenance
      </div>
      <div className="flex  flex-row justify-end ml-20 ">
        <div className="flex justify-end ">
          <span className="ml-2 w-[5%] ">ID</span>
          <Input
            size="sm"
            className="ml-3 w-[40%] h-6 mr-4"
            classNames={{ inputWrapper: " min-h-unit-6 h-unit-6 " }}
            radius="none"
            variant="bordered"
            placeholder=""
          ></Input>
        </div>
        <div className="flex justify-end">
          {" "}
          <span className="ml-2 w-[25%] ">Test Type</span>
          <Input
            size="sm"
            className="ml-3 w-[40%] h-6 mr-4"
            classNames={{ inputWrapper: " min-h-unit-6 h-unit-6 " }}
            radius="none"
            variant="bordered"
            placeholder=""
          ></Input>
        </div>
        <div className="flex justify-end">
          {" "}
          <span className="ml-2 w-[15%] ">Name</span>
          <Input
            size="sm"
            className="ml-3 w-[30%] h-6 mr-4"
            classNames={{ inputWrapper: " min-h-unit-6 h-unit-6 " }}
            radius="none"
            variant="bordered"
            placeholder=""
          ></Input>
          <Button
            className="bg-tropicalrainforest h-6 mr-8 "
            size="sm"
            radius="none"
          >
            Search
          </Button>
        </div>
      </div>
      <div className="flex justify-start ml-8">
        <Button
          radius="none"
          size="sm"
          className="bg-tropicalrainforest h-6 mr-2 text-white"
          onClick={() => {
            setShowPopup("add");
          }}
        >
          Add
        </Button>
        <Button
          radius="none"
          size="sm"
          className="bg-tropicalrainforest h-6 mr-2 text-white"
          onClick={() => {
            setShowPopup("export");
          }}
        >
          Export
        </Button>
        <Button
          radius="none"
          size="sm"
          className="bg-tropicalrainforest h-6 text-white"
          onClick={() => {
            setShowPopup("import");
          }}
        >
          Import
        </Button>
      </div>
      <div className="flex justify-end font-calibri font-bold text-inputTxt mr-20">
        Display Language:
      </div>
      <MaintainInspectionTabData />
      {showPopup && showPopup === "add" ? (
        <AddModifyDefectPopup
          onClose={() => {
            setShowPopup("");
          }}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default DefectItemMaintenanceInterface;
