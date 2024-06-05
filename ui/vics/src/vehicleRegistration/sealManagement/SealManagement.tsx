import React from "react";
import PastSealRecordTable from "./PastSealRecordTable";
import NewSealAssignTable from "./NewSealAssignTable";
import { Button } from "@nextui-org/react";
const fakeBarcodeAPi = "https://barcodeapi.org/api/auto/105044";

const SealManagement = () => {
  return (
    <div className=" text-popupHeading">
      <div className="flex gap-8 text-popupHeading justify-end mr-24 mt-2 font-bold">
        <div className="flex ">
          <h3 className=" mr-2">Need inspection:</h3>{" "}
          <span className=" text-persianGreen"> Yes</span>
        </div>
        <div className="flex">
          <h3 className="mr-2">Submitted: </h3>{" "}
          <span className=" text-red"> No</span>
        </div>
      </div>

      <div className=" grid grid-cols-3 gap-8 font-calibri font-bold -mb-4 mt-8">
        <h3>Vel.Reg.Mark.Barcode</h3>
        <h3>Past Seal records</h3>
        <h3>New Seal Assign</h3>
      </div>
      <div className=" grid grid-cols-3 mt-3 place-content-stretch gap-8">
        <div className="">
          <h5 className="h-[160px] flex justify-center mt-1">
            <img src={fakeBarcodeAPi} alt="" />
          </h5>
          <div className="flex flex-col justify-center align-middle w-[50%] mt-4 mx-auto">
            <Button
              className=" bg-persianGreen text-sm text-white rounded-sm mb-6"
              radius="none"
            >
              Upload data to computer
            </Button>
            <Button
              className=" bg-persianGreen text-sm text-white rounded-sm"
              radius="none"
            >
              Download data to HTT
            </Button>
          </div>
        </div>

        <div>
          <PastSealRecordTable />
        </div>
        <div>
          <NewSealAssignTable />
        </div>
      </div>

      <div className=" flex mt-8 justify-center align-middle">
        <div>
          <Button
            className=" bg-persianGreen text-sm text-white rounded-sm"
            radius="none"
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SealManagement;
