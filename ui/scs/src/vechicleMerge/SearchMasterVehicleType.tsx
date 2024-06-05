import {
    Button,
    Checkbox,
    Input,
    Select,
    SelectItem,


} from "@nextui-org/react";
import React  from "react";



function SearchMasterVehicleType() {

    
    return (
        <>
            <div>
              
                    
                    <div className="mr-1">
                        <h1>
                            <h5 className="absolute -top mt-2 start-3 pl-[10px] pr-[10px] text-sm/[13px] text-[#00AF8F]">
                                Link Search
                            </h5>
                            <div className="grid grid-cols-5 gap-2">
                <div className="col-span-4 ">
                  <div className="text-[10.5px] font-bold flex flex-row  ">
                    <div className="grid grid-rows-6 mt-2 h-[200px] grid-flow-col whitespace-nowrap w-4/5 ml-[40px]">
                      <div className="flex flex-row  pt-[15px] w-[100%]">
                        <div className="ml-2  text-left  text-[13px] font-bold mt-[5px] w-[26.5%]">
                          Vehicle Id
                        </div>
                        <div className="w-[90%] pl-8 ">
                          <Input
                            variant="bordered"
                            radius="none"
                            name="regMark"
                            size="sm"
                            maxLength={10}
                          />
                        </div>
                      </div>
                      <div className="flex flex-row  pt-[15px] w-[100%] mt-[3px]">
                        <div className="ml-2  text-left  text-[13px] font-bold mt-[5px] w-[26.5%]">
                          Chassis No.
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
                      <div className="flex flex-row  pt-[15px] w-[100%] mt-[5px] ">
                        <div className="ml-2  text-left  text-[13px] font-bold mt-[5px] w-[25.5%]">
                          Vehicle Class
                        </div>

                        <div className="w-[68%] mt-[px] ml-5">
                          <Select
                            labelPlacement="outside-left"
                            size="sm"
                            radius="none"
                            name="lane"
                            variant="bordered"
                          >
                            <SelectItem >
                            1
                            </SelectItem>

                          </Select>
                        </div>
                      </div>
                      <div className="flex flex-row  pt-[15px] w-[100%] mt-[7px] ">
                        <div className="ml-2  text-left  text-[13px] font-bold mt-[5px] w-[26.5%]">
                          Make
                        </div>

                        <div className="w-[71%] mt-[px]  ml-5">
                          <Select
                            labelPlacement="outside-left"
                            size="sm"
                            radius="none"
                            name="lane"
                            variant="bordered"
                          >
                            <SelectItem >
                            1
                            </SelectItem>

                          </Select>
                        </div>
                      </div>
                      <div className="flex flex-row  pt-[15px] w-[100%] mt-[10px]">
                        <div className="ml-2  text-left  text-[13px] font-bold mt-[5px] w-[26.5%]">
                          Doc. No.
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
                      <div className="flex flex-row  pt-[15px] w-[100%] mt-[13px]">
                                  <div className="ml-2  text-left  text-[13px] font-bold mt-[5px] w-[25.5%]">
                                    Vehicle Type
                                  </div>
                                  <div className="w-[80%] pl-7">
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
                    <div className="grid grid-rows-6 mt-2 h-[200px] grid-flow-col whitespace-nowrap w-4/5 ml-[70px]">
                      <div className="flex flex-row  pt-[15px] w-[100%]">
                        <div className="ml-2  text-left  text-[13px] font-bold mt-[5px] w-[26.5%]">
                          Reg. Mark
                        </div>
                        <div className="w-[90%] pl-8 ">
                          <Input
                            variant="bordered"
                            radius="none"
                            name="regMark"
                            size="sm"
                            maxLength={10}
                          />
                        </div>
                      </div>
                      <div className="flex flex-row  pt-[15px] w-[100%] mt-[2px]">
                        <div className="ml-2  text-left  text-[13px] font-bold mt-[5px] w-[26.5%]">
                          Length
                        </div>
                        <div className="w-[80%] pl-8  text-[11px] font-bold ">
                        <p>
                          
                      <Checkbox
                        size="md"
                        // isSelected={checked}
                        classNames={{ wrapper: "after:bg-[#00AF8F] mt-1 text-sm " }}
                        // onChange={handleCheck}
                        radius="sm"
                      />
                      Compare alphanumeric characters only
                    </p>
                        </div>
                      </div>
                      <div className="flex flex-row  pt-[15px] w-[100%] mt-[5px] ">
                        <div className="ml-2  text-left  text-[13px] font-bold mt-[5px] w-[25.5%]">
                          Sub-Class
                        </div>

                        <div className="w-[68%] mt-[px] ml-5">
                          <Select
                            labelPlacement="outside-left"
                            size="sm"
                            radius="none"
                            name="lane"
                            variant="bordered"
                          >
                            <SelectItem >
                           1
                            </SelectItem>

                          </Select>
                        </div>
                      </div>
                      <div className="flex flex-row  pt-[15px] w-[100%] mt-[7px] ">
                        <div className="ml-2  text-left  text-[13px] font-bold mt-[5px] w-[26.5%]">
                          C&E No.
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
                      <div className="flex flex-row  pt-[15px] w-[100%] mt-[10px]">
                        <div className="ml-2  text-left  text-[13px] font-bold mt-[5px] w-[26.5%]">
                          T.A No.
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

                    </div>


                  </div>
                </div>
                <div className="..."></div>

              </div>
                            <div className="flex justify-end mb-2 mr-1">
                                <Button
                                    className={`bg-[#ffffff] text-[black] rounded-sm ml-1`}
                                    variant="bordered"
                                    size="sm"
                                >
                                    Reset
                                </Button>
                                <Button
                                    className={`bg-[#00AF8F] text-white rounded-sm ml-1`}
                                    variant="bordered"
                                    size="sm"
                                    type="submit"
                                >
                                    Search
                                </Button>

                            </div>
                        </h1>
                    </div>
              
               
            </div>
        </>
    );
}
export default SearchMasterVehicleType;