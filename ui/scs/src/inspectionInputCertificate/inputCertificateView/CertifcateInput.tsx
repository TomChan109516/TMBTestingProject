import { Checkbox,  CheckboxGroup, Input } from "@nextui-org/react";
import React, { useState } from "react";
import { CalendarEvent, Search } from "tabler-icons-react";
import DatePicker from "react-datepicker";
import { ChangeOfVehicleParticularsPopup } from "./ChangeOfVehicleParticularsPopup";


export default function CertificateInput() {
    const [
        showChangeOfVehicleParticularsPopup,
        setChangeOfVehicleParticularsPopup,
      ] = useState(false);
      
    
      const handleChangeOfVehicleParticularsPopup = () => {
        setChangeOfVehicleParticularsPopup(true);
      };
    

    
    return(
        <>
        <div className="mr-1 mt-5 ml-1">
              <h1>
                <h5 className="absolute -top  start-3 font-[Calibri]  pl-[10px] pr-[10px] text-md text-[#00AF8F] ">
                  Certification
                </h5>
                <div className=" m-3   border-[#d1d2d6] border-[2px] solid rounded-sm">
                  <div className="flex items-center ">
                    <div className="   items-center ml-2">
                      <CheckboxGroup radius="none" size="sm">
                        <Checkbox
                          classNames={{
                            wrapper: "after:bg-[#00af8f] before:bg-[#e5e7eb]",
                          }}
                        ></Checkbox>
                      </CheckboxGroup>
                    </div>
                    <div className="ml-2 text-sm font-[Calibri] text-black font-bold">
                      General pass
                    </div>
                    <div className="flex  items- center ml-10">
                      <div className="ml-8">
                        <div className=" mt-4  mr-4  text-sm  font-[Calibri] text-black font-bold ">
                          Certificate No.
                        </div>
                      </div>
                      <div className=" w-[150px] mt-3">
                        <Input
                          isDisabled={true}
                          id="standard-basic"
                          variant="bordered"
                          size="sm"
                          radius="none"
                          className=" mb-2  bg-[#e5e7eb] "
                          style={{ background: "#e5e7eb" }}
                        />
                      </div>
                      <div className="flex items-center ml-[10px]">
                        <div className="ml-6">
                          <div className="  text-sm font-[Calibri]  mt-3 mb-3 ml-9 mr-4  text-black font-bold ">
                            Issue Date
                          </div>
                        </div>
                        <div className=" inline-flex  border-[lightgray] bg-[#e5e7eb]  w-[150px] ml-6  h-8">
                          <CalendarEvent color="grey" size="23" />
                          <DatePicker
                            className="text-[10px]  font-[Calibri] bg-[#e5e7eb]  selection:border-none "
                            style={{ background: "#e5e7eb" }}
                            //selected={renewaldateValues}
                            //onChange={handleRequestRenewalDateChanged}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center ml-10 ">
                      <div className="ml-8">
                        <div className="  text-sm font-[Calibri] mt-2 mb-3  ml-[10px] mr-4 text-[13px] text-black font-bold ">
                          HandOver Date
                        </div>
                      </div>
                      <div className="   inline-flex   border-[lightgray] bg-[#e5e7eb]  mr-7 w-[150px] ml-5  mr-5 h-8">
                        <CalendarEvent color="grey" size="23" />
                        <DatePicker
                          className="text-[12px]  font-[Calibri] bg-[#e5e7eb] "
                          style={{ background: "#e5e7eb" }}
                          //selected={renewaldateValues}
                          //onChange={handleRequestRenewalDateChanged}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" m-3  bg-[#f0fdfa] border-[#d1d2d6] border-[2px] solid rounded-sm">
                  <div className="flex items- center">
                    <div className="flex flex-row items-center ml-2">
                      <CheckboxGroup radius="none" size="sm">
                        <Checkbox
                          classNames={{
                            wrapper: "after:bg-[#00af8f] before:bg-[#e5e7eb]",
                          }}
                        ></Checkbox>
                      </CheckboxGroup>
                    </div>
                    <div className="ml-1  mt-4 text-sm font-[Calibri] text-black font-bold">
                      TD89 COR
                    </div>
                    <div className="flex  items- center ml-10">
                      <div className="ml-10">
                        <div className=" mt-4 ml-2 mr-5 text-sm  font-[Calibri] text-black font-bold ">
                          Certificate No.
                        </div>
                      </div>
                      <div className=" w-[150px] mt-3">
                        <Input
                          isDisabled={true}
                          id="standard-basic"
                          variant="bordered"
                          size="sm"
                          radius="none"
                          className=" mb-2 bg-[#e5e7eb]"
                          style={{ background: "#e5e7eb" }}
                        />
                      </div>

                      <div className="flex items-center ml-[10px]">
                        <div className="ml-5">
                          <div className="  text-sm font-[Calibri] mt-3 mb-3 ml-10 mr-4 text-[13px] text-black font-bold ">
                            Issue Date
                          </div>
                        </div>
                        <div className=" inline-flex   border-[lightgray] bg-[#e5e7eb]  w-[150px] ml-6  h-8">
                          <CalendarEvent color="grey" size="23" />
                          <DatePicker
                            className="text-[10px]  font-[Calibri] bg-[#e5e7eb]  selection:border-none "
                            style={{ background: "#e5e7eb" }}
                            //selected={renewaldateValues}
                            //onChange={handleRequestRenewalDateChanged}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center ml-10 ">
                      <div className="ml-8">
                        <div className="  text-sm font-[Calibri] mt-2 mb-3  ml-[10px] mr-4 text-[13px] text-black font-bold ">
                          HandOver Date
                        </div>
                      </div>
                      <div className="   inline-flex  border-[lightgray] bg-[#e5e7eb]  mr-7 w-[150px] ml-6  mr-5 h-8">
                        <CalendarEvent color="grey" size="23" />
                        <DatePicker
                          className="text-[12px]  font-[Calibri]  bg-[#e5e7eb] selection:border-none "
                          style={{ background: "#e5e7eb" }}
                          //selected={renewaldateValues}
                          //onChange={handleRequestRenewalDateChanged}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" m-3  border-[#d1d2d6] border-[2px] solid rounded-sm">
                  <div className="flex items- center">
                    <div className="flex flex-row items-center ml-2">
                      <CheckboxGroup radius="none" size="sm">
                        <Checkbox
                          classNames={{
                            wrapper: "after:bg-[#00af8f] before:bg-[#e5e7eb]",
                          }}
                        ></Checkbox>
                      </CheckboxGroup>
                    </div>
                    <div className="ml-1  mt-3 text-sm font-[Calibri] text-black font-bold">
                      {" "}
                      TD559{" "}
                      <span className=" inline-flex  ">
                        <Search
                          size="20"
                          color="white"
                          className="bg-[#00AF8F] rounded-sm cursor-pointer"
                          onClick={handleChangeOfVehicleParticularsPopup}
                        />
                      </span>
                    </div>
                    <div className="flex  items- center ml-10">
                      <div className="ml-9">
                        <div className=" mt-4  ml-3 mr-4 text-sm font-[Calibri] text-black font-bold ">
                          Certificate No.
                        </div>
                      </div>

                      <div className=" w-[150px] mt-3">
                        <Input
                          isDisabled={true}
                          id="standard-basic"
                          variant="bordered"
                          size="sm"
                          radius="none"
                          className=" mb-2 bg-[#e5e7eb] "
                          style={{ background: "#e5e7eb" }}
                        />
                      </div>
                      <div className="flex items-center ml-[10px]">
                        <div className="ml-6">
                          <div className="  text-sm font-[Calibri] mt-3 mb-3 ml-10 mr-4 text-[13px] text-black font-bold ">
                            Issue Date
                          </div>
                        </div>
                        <div className=" inline-flex   bg-[#e5e7eb] border-[lightgray]  w-[150px] ml-6  h-8">
                          <CalendarEvent color="grey" size="23" />
                          <DatePicker
                            className="text-[10px]  font-[Calibri] bg-[#e5e7eb]  selection:border-none "
                            //selected={renewaldateValues}
                            //onChange={handleRequestRenewalDateChanged}
                            style={{ background: "#e5e7eb" }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center ml-10 ">
                      <div className="ml-8">
                        <div className="  text-sm font-[Calibri] mt-2 mb-3  ml-[10px] mr-4 text-[13px] text-black font-bold ">
                          HandOver Date
                        </div>
                      </div>
                      <div className="   inline-flex bg-[#e5e7eb] border-[lightgray]  mr-7 w-[150px] ml-5  mr-5 h-8">
                        <CalendarEvent color="grey" size="23" />
                        <DatePicker
                          className="text-[12px]  font-[Calibri] bg-[#e5e7eb]  selection:border-none "
                          //selected={renewaldateValues}
                          //onChange={handleRequestRenewalDateChanged}
                          style={{ background: "#e5e7eb" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" m-3  border-[#d1d2d6] border-[2px] solid rounded-sm">
                  <div className="flex items- center">
                    <div className="flex flex-row items-center ml-2">
                      <CheckboxGroup radius="none" size="sm">
                        <Checkbox
                          classNames={{
                            wrapper: "after:bg-[#00af8f] before:bg-[#e5e7eb]",
                          }}
                        ></Checkbox>
                      </CheckboxGroup>
                    </div>
                    <div className="ml-1  mt-4 text-sm font-[Calibri] text-black font-bold">
                      VE2
                    </div>
                    <div className="flex  items- center ml-10">
                      <div className="ml-11">
                        <div className=" mt-4  ml-10 mr-4 text-sm font-[Calibri] text-black font-bold ">
                          Certificate No.
                        </div>
                      </div>
                      <div className=" w-[150px] mt-3">
                        <Input
                          isDisabled={true}
                          id="standard-basic"
                          variant="bordered"
                          size="sm"
                          radius="none"
                          className=" mb-2 bg-[#e5e7eb] "
                          style={{ background: "#e5e7eb" }}
                        />
                      </div>
                      <div className="flex items-center ml-[10px]">
                        <div className="ml-7">
                          <div className="  text-sm font-[Calibri] mt-3 mb-3 ml-10 mr-4 text-[13px] text-black font-bold ">
                            Issue Date
                          </div>
                        </div>
                        <div className=" inline-flex   border-[lightgray] bg-[#e5e7eb] w-[150px] ml-6  h-8">
                          <CalendarEvent color="grey" size="23" />
                          <DatePicker
                            className="text-[10px]  font-[Calibri] bg-[#e5e7eb]  selection:border-none "
                            //selected={renewaldateValues}
                            //onChange={handleRequestRenewalDateChanged}
                            style={{ background: "#e5e7eb" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" m-3 border-[#d1d2d6] border-[2px] solid rounded-sm">
                  <div className="flex items- center">
                    <div className="flex items-center ml-2">
                      <CheckboxGroup radius="none" size="sm">
                        <Checkbox
                          classNames={{
                            wrapper: "after:bg-[#00af8f] before:bg-[#e5e7eb]",
                          }}
                        ></Checkbox>
                      </CheckboxGroup>
                    </div>
                    <div className="ml-1  mt-4 text-sm font-[Calibri] text-black font-bold">
                      {" "}
                      VE13{" "}
                    </div>
                    <div className="flex  items- center ml-10">
                      <div className="ml-11">
                        <div className=" mt-4  ml-9  mr-4 text-sm font-[Calibri] text-black font-bold ">
                          Certificate No.
                        </div>
                      </div>
                      <div className=" w-[150px] mt-3">
                        <Input
                          isDisabled={true}
                          id="standard-basic"
                          variant="bordered"
                          size="sm"
                          radius="none"
                          className=" mb-2 bg-[#e5e7eb] "
                          style={{ background: "#e5e7eb" }}
                        />
                      </div>

                      <div className="flex items-center ml-[10px]">
                        <div className="ml-6">
                          <div className="  text-sm font-[Calibri] mt-3 mb-3 ml-10 mr-4 text-[13px] text-black font-bold ">
                            Issue Date
                          </div>
                        </div>
                        <div className=" inline-flex border-[lightgray] bg-[#e5e7eb] w-[150px] ml-6  h-8">
                          <CalendarEvent color="grey" size="23" />
                          <DatePicker
                            className="text-[10px]  font-[Calibri] bg-[#e5e7eb]  selection:border-none "
                            //selected={renewaldateValues}
                            //onChange={handleRequestRenewalDateChanged}
                            style={{ background: "#e5e7eb" }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center ml-10 ">
                      <div className="ml-8">
                        <div className="  text-sm  font-[Calibri] mt-2 mb-3  ml-[10px] mr-4 text-[13px] text-black font-bold ">
                          HandOver Date
                        </div>
                      </div>
                      <div className="   inline-flex   border-[lightgray] bg-[#e5e7eb] mr-7 w-[150px] ml-5  mr-5 h-8">
                        <CalendarEvent color="grey" size="23" />
                        <DatePicker
                          className="text-[12px]  font-[Calibri] bg-[#e5e7eb]   selection:border-none "
                          //selected={renewaldateValues}
                          //onChange={handleRequestRenewalDateChanged}
                          style={{ background: "#e5e7eb" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </h1>
            </div>
            {showChangeOfVehicleParticularsPopup && (
                <ChangeOfVehicleParticularsPopup
                  showChangeOfVehicleParticularsPopup={
                    showChangeOfVehicleParticularsPopup
                  }
                  closeChangeOfVehicleParticularsPopup={
                    setChangeOfVehicleParticularsPopup
                  }
                ></ChangeOfVehicleParticularsPopup>
              )}
              </>
        
    )
}