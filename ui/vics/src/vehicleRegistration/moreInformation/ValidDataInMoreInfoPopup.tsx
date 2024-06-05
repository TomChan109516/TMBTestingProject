import { Button } from "@nextui-org/react";
import React from "react";

const ValidDataInMoreInfoPopup = ({handleClose}) => {
  const validDataList1 = [
    { id: 1, name: "Vehicle Type", value: "" },
    { id: 2, name: "Ref. No.", value: "" },
    { id: 3, name: "Status Code", value: "" },
    { id: 4, name: "Rated Power(kW)", value: "" },
    { id: 5, name: "Vehicle Class", value: "" },
    { id: 6, name: "Vehicle ID", value: "" },
    { id: 7, name: "Weight Code", value: "" },
    { id: 8, name: "PGV Weight", value: "" },
    { id: 9, name: "Chassis No.", value: "" },
    { id: 10, name: "Engine No.", value: "" },
    { id: 11, name: "PCV Weight", value: "" },
    { id: 12, name: "LUG Weight", value: "" },
    { id: 13, name: "Doc. No.", value: "" },
    { id: 14, name: "T.A. No.", value: "" },
    { id: 15, name: "Axle1", value: "" },
    { id: 16, name: "Axle2", value: "" },
    { id: 17, name: "Reg. Mark", value: "" },
    { id: 18, name: "Country Code", value: "" },
    { id: 19, name: "Axle3", value: "" },
    { id: 20, name: "Axle4", value: "" },
    { id: 21, name: "Make", value: "" },
    { id: 22, name: "Model", value: "" },
    { id: 23, name: "Axle5", value: "" },
    { id: 24, name: "Axle6", value: "" },
    { id: 25, name: "Model Code", value: "" },
    { id: 26, name: "Body Type", value: "" },
    { id: 27, name: "Axle7", value: "" },
    { id: 28, name: "", value: "" },
    { id: 29, name: "Manu. Year", value: "" },
    { id: 30, name: "First Reg.Date", value: "" },
    { id: 31, name: "Lantanu Vehicle", value: "" },
    { id: 32, name: "Private Road Vehicle", value: "" },
    { id: 33, name: "Licence Expiry", value: "" },
    { id: 34, name: "VICO", value: "" },
    { id: 35, name: "Hybrid Vehicle", value: "" },
    { id: 36, name: "Left Hand Steering", value: "" },
    { id: 37, name: "Engine Type", value: "" },
    { id: 38, name: "Engine Size", value: "" },
    { id: 39, name: "PVRM", value: "" },
    { id: 40, name: "Displayed Reg. Mark", value: "" },
    { id: 41, name: "C&E No.", value: "" },
    { id: 42, name: "Reg. Doc. No.", value: "" },
    { id: 43, name: "PVRM Line1", value: "" },
    { id: 44, name: "PVRM Line2", value: "" },
    { id: 45, name: "Permit", value: "" },
    { id: 46, name: "Renewal Date", value: "" },
    { id: 47, name: "Primary Color", value: "" },
    { id: 48, name: "Secondary Color", value: "" },
    { id: 49, name: "Ad Approval Date", value: "" },
    { id: 50, name: "Renewal Date", value: "" },
    { id: 51, name: "Type Size(Front)", value: "" },
    { id: 52, name: "Type Size(Rear)", value: "" },
    { id: 53, name: "Seat Capacity L:U:S:", value: "" },
    { id: 54, name: "Last Update", value: "" },
    { id: 55, name: "Size(H)", value: "" },
    { id: 56, name: "Size(L)", value: "" },
    { id: 57, name: "Cancel Reason", value: "" },
    { id: 58, name: "Insp. Order", value: "" },
    { id: 59, name: "Size(W)", value: "" },
  ];

  return (
    <div className="font-bold">
      <div className="mb-3 text-innerInputTxt text-lightCyan ">
        Vehicle Particulars
      </div>
      <div className="grid grid-cols-4 grid-flow-row gap-2">
        {validDataList1.map((data) => (
          <div key={data.id} className="flex" data-testid="data-item">
            <div className="w-[100px] text-right">{data.name}</div>
            <div className="w-[140px]">{data.value}</div>
          </div>
        ))}
      </div>

      <div className="flex flex-row items-center justify-center mb-2 mt-2">
        <Button
          className="m-1 bg-persianGreen text-white font-bold "
          radius="none"
        >
          Synchronize Data
        </Button>
        <Button
          className="m-1 bg-white border-1 border-greyBorder text-black font-bold"
          radius="none"
          onClick={handleClose}
                  >
          Quit
        </Button>
      </div>
    </div>
  );
};

export default ValidDataInMoreInfoPopup;
