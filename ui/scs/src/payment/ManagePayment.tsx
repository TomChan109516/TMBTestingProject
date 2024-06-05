import { Button, Input, Checkbox, CheckboxGroup } from "@nextui-org/react";
import React, { useState } from "react";
import ManagePaymentTable from "./ManagePaymentTable";
import { CalendarEvent } from "tabler-icons-react";
import DatePicker from "react-datepicker";
import ManagePayTogetherPopup from "./ManagePayTogetherPopup";

function ManagePayment({ check, checkFunc }) {
  const [fromDate, setFromDate] = useState(new Date());
  const onCheckboxChange = (e) => {
    checkFunc(e.target.checked);
  };
  const handleFromDateChanged = (newValue: React.SetStateAction<Date>) => {
    setFromDate(newValue);
  };

  const [PayTogetherColor, setPayTogetherColor] = useState<boolean>(false);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handlePayTogetherColor = () => {
    setIsOpen(true);
  };

  const [showManagePayTogetherPopup, setshowManagePayTogetherPopup] =
    useState(false);

  const handleManagePayTogetherPopup = () => {
    setshowManagePayTogetherPopup(true);
  };
   


  return (
    <>
      <div className="pt-[5px]">
        <div className="flex">
          <div className="flex-initial text-[#0a923d] p-[10px] ml-[15px] font-bold text-sm">
            Manage Payment
          </div>
        </div>
        <div>
          <div className="mt-[10px] ml-2 mr-2">
            <h1>
              <h5 className="absolute -top-2 start-3 pl-[10px] pr-[10px] text-sm/[13px] text-[#00af8f]">
                Filter
              </h5>
              <div className="grid grid-cols-6 gap-4">
                <div className="col-span-4 ">
                  <div className="text-[10.5px] font-bold flex flex-row  ">
                    <div className="grid grid-rows-4 mt-2 h-[150px] grid-flow-col whitespace-nowrap w-1/2">
                      <div className="flex flex-row  pt-[15px] w-[100%]">
                        <div className="ml-2 text-left text-[13px] font-bold mt-[5px] w-[30%]">
                          <span className="text-[red] mr-1">*</span>
                          Date
                        </div>
                        <div className="inline-flex border-2 border-solid border-[lightgray] w-[62%] ml-5  h-8">
                          <CalendarEvent color="grey" size="23" />
                          <DatePicker
                            name="fromDate"
                            selected={fromDate}
                            onChange={handleFromDateChanged}
                            className="text-[12px]   selection:border-none mt-1"
                          />
                        </div>
                      </div>
                      <div className="flex flex-row  pt-[15px] w-[100%]">
                        <div className="ml-2  text-left  text-[13px] font-bold mt-[5px] w-[26.5%]">
                          Appointment No.
                        </div>
                        <div className="w-[90%] pl-8">
                          <Input
                            variant="bordered"
                            radius="none"
                            name="regMark"
                            size="sm"
                            maxLength={10}
                          />
                        </div>
                      </div>
                      <div className="flex flex-row  pt-[15px] w-[100%]">
                        <div className="ml-2 text-left  text-[13px] font-bold mt-[5px] w-[30%]">
                          Reg. Mark{" "}
                        </div>

                        <div className="w-[80%] pl-8">
                          <Input
                            variant="bordered"
                            radius="none"
                            name="regMark"
                            size="sm"
                            maxLength={10}
                          />
                        </div>
                      </div>
                      <div className="flex flex-row  pt-[15px] w-[100%]">
                        <div className="ml-2  text-left  text-[13px] font-bold mt-[5px] w-[30%]">
                          Remark
                        </div>

                        <div className="w-[80%] pl-8">
                          <Input
                            variant="bordered"
                            radius="none"
                            name="regMark"
                            size="sm"
                            maxLength={10}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="w-[25%] pl-1 ml-[30px] mt-2">
                      <div className="flex flex-row  pt-[15px]">
                        <div className="text-[13px] w-[20%] font-bold mt-[5px] ml-1 mb-1">
                          Center
                        </div>
                        <div className=" mt-[5px] flex flex-row ml-3 ">
                          <CheckboxGroup>
                            <Checkbox
                              name="selectCheckbox"
                              radius="none"
                              size="sm"
                              classNames={{ wrapper: "after:bg-[#00af8f]" }}
                              onChange={(e) => onCheckboxChange(e)}
                              isSelected={check}
                            />
                          </CheckboxGroup>
                          <div className=" flex flex-row  text-[13px] font-bold  w-[20%]">
                            All
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row row-span-2 ">
                        <div className="box-border h-[100px] w-40  border-2  border-greyBorder">
                          <div className=" mt-[5px] flex flex-row ml-2 ">
                            <CheckboxGroup>
                              <Checkbox
                                name="selectCheckbox"
                                radius="none"
                                size="sm"
                                classNames={{ wrapper: "after:bg-[#00af8f]" }}
                                onChange={(e) => onCheckboxChange(e)}
                                isSelected={check}
                              />
                            </CheckboxGroup>
                            <div className=" flex flex-row  text-[13px] font-bold  w-[20%]">
                              TY1
                            </div>
                            <CheckboxGroup className="ml-4">
                              <Checkbox
                                name="selectCheckbox"
                                radius="none"
                                size="sm"
                                classNames={{ wrapper: "after:bg-[#00af8f]" }}
                                onChange={(e) => onCheckboxChange(e)}
                                isSelected={check}
                              />
                            </CheckboxGroup>
                            <div className=" flex flex-row  text-[13px] font-bold  w-[20%]">
                              TY2
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-[25%] pl-1 ml-[10px] mt-2">
                      <div className="flex flex-row  pt-[15px]">
                        <div className="text-[13px] w-[20%] font-bold mt-[5px] ml-1 mb-1">
                          Status
                        </div>
                        <div className=" mt-[5px] flex flex-row ml-3 ">
                          <CheckboxGroup>
                            <Checkbox
                              name="selectCheckbox"
                              radius="none"
                              size="sm"
                              classNames={{ wrapper: "after:bg-[#00af8f]" }}
                              onChange={(e) => onCheckboxChange(e)}
                              isSelected={check}
                            />
                          </CheckboxGroup>
                          <div className=" flex flex-row  text-[13px] font-bold  w-[20%]">
                            All
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row row-span-2 ">
                        <div className="box-border h-[100px] w-40 border-2  border-greyBorder">
                          <div className=" mt-[5px] flex flex-row ml-2 ">
                            <CheckboxGroup>
                              <Checkbox
                                name="selectCheckbox"
                                radius="none"
                                size="sm"
                                classNames={{ wrapper: "after:bg-[#00af8f]" }}
                                onChange={(e) => onCheckboxChange(e)}
                                isSelected={check}
                              />
                            </CheckboxGroup>
                            <div className=" flex flex-row  text-[13px] font-bold  w-[20%]">
                              Completed
                            </div>
                          </div>
                          <div className=" mt-[10px] flex flex-row ml-2 ">
                            <CheckboxGroup>
                              <Checkbox
                                name="selectCheckbox"
                                radius="none"
                                size="sm"
                                classNames={{ wrapper: "after:bg-[#00af8f]" }}
                                onChange={(e) => onCheckboxChange(e)}
                                isSelected={check}
                              />
                            </CheckboxGroup>
                            <div className=" flex flex-row  text-[13px] font-bold  w-[20%]">
                              Pending
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-[25%] pl-1 ml-[10px] mt-2">
                      <div className="flex flex-row  pt-[15px]">
                        <div className="text-[13px] w-[20%] font-bold mt-[5px] ml-1 mb-1">
                          Method
                        </div>
                        <div className=" mt-[6px] flex flex-row ml-5">
                          <CheckboxGroup>
                            <Checkbox
                              name="selectCheckbox"
                              radius="none"
                              size="sm"
                              classNames={{ wrapper: "after:bg-[#00af8f]" }}
                              onChange={(e) => onCheckboxChange(e)}
                              isSelected={check}
                            />
                          </CheckboxGroup>
                          <div className=" flex flex-row  text-[13px] font-bold  w-[20%]">
                            All
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row row-span-2 ">
                        <div className="box-border h-[100px] w-40 border-2  border-greyBorder overflow-x-hidden">
                          <div className=" mt-[5px] flex flex-row ml-2 ">
                            <CheckboxGroup>
                              <Checkbox
                                name="selectCheckbox"
                                radius="none"
                                size="sm"
                                classNames={{ wrapper: "after:bg-[#00af8f]" }}
                                onChange={(e) => onCheckboxChange(e)}
                                isSelected={check}
                              />
                            </CheckboxGroup>
                            <div className=" flex flex-row  text-[13px] font-bold  w-[20%]">
                              Cash
                            </div>
                          </div>
                          <div className=" mt-[10px] flex flex-row ml-2 ">
                            <CheckboxGroup>
                              <Checkbox
                                name="selectCheckbox"
                                radius="none"
                                size="sm"
                                classNames={{ wrapper: "after:bg-[#00af8f]" }}
                                onChange={(e) => onCheckboxChange(e)}
                                isSelected={check}
                              />
                            </CheckboxGroup>
                            <div className=" flex flex-row  text-[13px] font-bold  w-[20%]">
                              Cheque
                            </div>
                          </div>
                          <div className=" mt-[10px] flex flex-row ml-2 ">
                            <CheckboxGroup>
                              <Checkbox
                                name="selectCheckbox"
                                radius="none"
                                size="sm"
                                classNames={{ wrapper: "after:bg-[#00af8f]" }}
                                onChange={(e) => onCheckboxChange(e)}
                                isSelected={check}
                              />
                            </CheckboxGroup>
                            <div className=" flex flex-row  text-[13px] font-bold  w-[20%]">
                              ECheque
                            </div>
                          </div>
                          <div className=" mt-[13px] flex flex-row ml-2 ">
                            <CheckboxGroup>
                              <Checkbox
                                name="selectCheckbox"
                                radius="none"
                                size="sm"
                                classNames={{ wrapper: "after:bg-[#00af8f]" }}
                                onChange={(e) => onCheckboxChange(e)}
                                isSelected={check}
                              />
                            </CheckboxGroup>
                            <div className=" flex flex-row  text-[13px] font-bold  w-[20%]">
                              Cheque
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="..."></div>
              </div>
              <div className="flex justify-end mb-2  mr-1">
                <Button
                  className={`bg-[#00af8f] text-white rounded-sm ml-1`}
                  variant="bordered"
                  size="sm"
                  type="submit"
                >
                  Search
                </Button>
              </div>
            </h1>
          </div>
          <div className="flex justify-end mb-2  mr-1">
            <Button
              className=" mt-2 text-[#ffffff] bg-[#cacece] mr-2 float-left border-solid border-1 rounded fond-bold h-[25px]"
              variant="bordered"
              type="submit"
              size="sm"
              style={{ backgroundColor: PayTogetherColor ? "#00af8f" : "" }}
              disabled={!PayTogetherColor}
              onChange={handlePayTogetherColor}
              onClick={handleManagePayTogetherPopup}
            >
              PayTogether
            </Button>
          </div>

          <ManagePaymentTable
            checkFunc={setPayTogetherColor}
            check={PayTogetherColor}
          />

          <div className="flex justify-end mb-2  mr-1">
            <Button
              className=" mt-2 text-[#ffffff] bg-[#cacece] mr-2 float-left border-solid border-1 rounded fond-bold h-[25px]"
              variant="bordered"
              type="submit"
              size="sm"
              style={{ backgroundColor: PayTogetherColor ? "#00af8f" : "" }}
              disabled={!PayTogetherColor}
              onChange={handlePayTogetherColor}
              onClick={handleManagePayTogetherPopup}
            >
              PayTogether
            </Button>
          </div>
        </div>
      </div>
      {showManagePayTogetherPopup && (
        <ManagePayTogetherPopup
          showManagePayTogetherPopup={showManagePayTogetherPopup}
          setManagePayTogetherPopup={setshowManagePayTogetherPopup}
        ></ManagePayTogetherPopup>
      )}
    </>
  );
}
export default ManagePayment;
