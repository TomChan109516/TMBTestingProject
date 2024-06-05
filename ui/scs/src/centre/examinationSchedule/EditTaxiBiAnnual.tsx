import React, { useState } from "react";
import {
  Button,
  Input,
  Select,
  SelectItem,
  Selection,
} from "@nextui-org/react";
import { useNavigate } from "react-router";

function EditTaxiBiAnnual() {
  const navigate = useNavigate();
  const [description, setDescription] = useState<string>("");

  const handleDescriptionChange = () => {};

  return (
    <div className="border-1.5 ml-2 mr-2 mb-2">
      <div>
        <div>
          <h5 className="text-left pl-[10px] text-[#00AF8F]">
            Edit Schedule Information
          </h5>
        </div>

        <div className="grid grid-cols-2 mb-2">
          <div className="grid grid-col-2 grid-flow-row whitespace-nowrap">
            <div className="flex flex-row mt-[10px] ml-[20px]">
              <div className="text-sm text-black font-bold text-left w-[270px] ">
                Annual Inspection Month
              </div>
              <div className="text-sm text-right ml-[40px] ">
                {"09/2023"}
              </div>
            </div>
            <div className="flex flex-row mt-[10px] ml-[20px]">
              <div className="text-sm text-black font-bold text-left w-[270px]">
                Bi-annual Inspection Month
              </div>
              <div className="text-sm text-right ml-[40px] ">
                {"12/2023"}
              </div>
            </div>
            <div className="flex flex-row mt-[10px] ml-[20px]">
              <div className="text-sm text-black font-bold text-left w-[270px]">
                Level
              </div>
              <div className="text-sm text-right ml-[40px] ">
                {"Level 0 (AM: 48, PM: 38, Total: 1978)"}
              </div>
            </div>
            <div className="flex flex-row mt-[10px] ml-[20px]">
              <div className="text-sm text-black font-bold text-left w-[270px]">
                Change Level
              </div>
              <div className="w-[230px] text-right ml-[40px]">
                    <Select
                      labelPlacement="outside-left"
                      radius="none"
                      variant="bordered"
                      size="sm"
                      placeholder="(Unchanged)"
                      // value={appointmentStatus}
                      // onChange={handleChangeStatus}
                    >
                      <SelectItem key="Booked" value="Booked">
                        Level A
                      </SelectItem>
                      <SelectItem key="Draft" value="Draft">
                        Level B
                      </SelectItem>
                      <SelectItem key="Rescheduled" value="Rescheduled">
                        Level C
                      </SelectItem>
                    </Select>
                  </div>
            </div>
          </div>
          <div className="grid grid-col-2 grid-flow-row whitespace-nowrap">
            <div className="flex flex-row mt-[15px]">
              <div className="text-sm text-black font-bold text-left w-[270px]">
                Current No. of AI Appointment
              </div>
              <div className="text-sm text-right ml-[30px]">{"0"}</div>
            </div>
            <div className="flex flex-row mt-[15px]">
              <div className="text-sm text-black font-bold text-left w-[270px]">
                No. of Working Days
              </div>
              <div className="text-sm text-right ml-[30px]">{"23"}</div>
            </div>
            <div className="flex flex-row mt-[15px]">
              <div className="text-sm text-black font-bold text-left w-[270px]">
                Description
              </div>
              <div className="text-right ml-[30px] w-[295px]">
                <Input
                  radius="none"
                  variant="bordered"
                  size="sm"
                  value={description}
                  onChange={handleDescriptionChange}
                />
              </div>
            </div>
            <div className="flex flex-row justify-end mt-[15px] pb-[10px] mr-9">
              <Button
                radius="sm"
                size="sm"
                type="reset"
                className="bg-white text-[black] border border-solid border-greyBorder rounded"
              >
                Cancel
              </Button>
              <Button
                type="button"
                radius="md"
                size="sm"
                className="ml-[5px] bg-[#00AF8F] text-white rounded"
              >
                Continue
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditTaxiBiAnnual;
