import React, { useState } from "react";
import { Button,  Checkbox, Input, Textarea, Select, SelectItem   } from "@nextui-org/react";
import UpdateOverallPublicHolidayPopup from "./UpdateOverallPublicHolidayPopup";
import {theme} from '../../common/themes/themeConfig'

const ManageCentre = () => {
  const [centerState, setCenterState] = useState("");
  const [uploadOverallPublicHolidayPopup, setUploadOverallPublicHolidayPopup] = useState(false);
  return (
    <div>
      <div className={`flex items-left text-[${theme?.colors?.tropicalRainForest}] p-lt-[10px] font-[${theme?.fontFamily?.calibri}] font-bold ml-2 text-sm`}>
        Manage Centre
      </div>
      <div className="mt-3">
        <h1 className="h-[100px] mr-1 ml-1">
          <h5 className={`absolute -top-2 start-3 pl-[10px] pr-[10px] text-sm/[13px] text-[${theme?.colors?.persianGreen}]`}>
            Searching Criteria
          </h5>
          <div className="flex justify-start mt-5">
              <div className={`text-sm font-[${theme?.fontFamily?.calibri}] text-[${theme?.colors?.black}] text-center font-bold ml-4 mt-1`}>
                Centre ID
              </div>
              <div className="w-[220px] ml-[104px]">
                <Select
                  radius="none"
                  size="sm"
                  labelPlacement="outside-left"
                  variant="bordered"
                  name="centre"
                  data-testid="centreId"
                  value={centerState}
                  selectedKeys={[centerState]}
                  onChange={(e) => {
                    setCenterState(e.target.value);
                  }}
                >
                  <SelectItem key="l">L</SelectItem>
                </Select>
              </div>
            <div className="flex flex-row justify-evenly w-[40%]">
              <div>
                <Button
                  radius="none"
                  size="sm"
                  className={`bg-[${theme?.colors?.persianGreen}] text-white text-sm font-[${theme?.fontFamily?.calibri}] h-7 w-[150px] font-bold rounded-sm`}
                >
                  Create New Centre
                </Button>
              </div>
              <div>
                <Button
                  radius="none"
                  size="sm"
                  className={`bg-[${theme?.colors?.persianGreen}] text-white text-sm font-[${theme?.fontFamily?.calibri}] h-7 font-bold rounded-sm w-[160px]`}
                  onPress={()=>setUploadOverallPublicHolidayPopup(true)}
                >
                  Update Public Holidays
                </Button>
              </div>
            </div>
          </div>
        </h1>
        <h1 className="mr-1 ml-1 mt-2 mb-2 h-[525px]">
          <h5 className={`absolute -top-2 start-3 pl-[10px] pr-[10px] text-sm/[13px] text-[${theme?.colors?.persianGreen}]`}>
            Centre Information
          </h5>
          <div className="grid grid-cols-2 mt-2 p-0">
            <div className="flex flex-col flex-wrap ">
              <div className="flex flex-row ml-4 mt-1">
                <div className={`text-sm font-[${theme?.fontFamily?.calibri}] text-[${theme?.colors?.black}] font-bold whitespace-nowrap mt-1`}>
                  Centre ID
                </div>
                <div className="w-full ml-[100px] mr-5">
                  <Input
                    name="centreId"
                    radius="none"
                    variant="bordered"
                    size="sm"
                    classNames={{ inputWrapper: "min-h-unit-6 h-8 rounded-sm" }}
                    // value={laneId}
                    // onChange={(e) => { setLaneId(e.target.value) }}
                  />
                </div>
              </div>
              <div className="flex flex-row ml-4 mt-1 ">
                <div className={`text-sm font-[${theme?.fontFamily?.calibri}] text-[${theme?.colors?.black}] font-bold whitespace-nowrap mt-1`}>
                  Address (ENG)
                </div>
                <div className="w-full ml-[71px] mr-5">
                <Textarea
                      radius="none"
                      size="sm"
                      variant="bordered"
                      classNames={{
                        input:
                          "h-[100px]  hover:border-transparent",
                          helperWrapper:'p-0',
                          label:'p-0',
                      }}
                      />
                </div>
              </div>
              <div className="flex flex-row ml-4 mt-1">
                <div className={`text-sm font-[${theme?.fontFamily?.calibri}] text-[${theme?.colors?.black}] font-bold whitespace-nowrap mt-1`}>
                  Address (氣)
                </div>
                <div className="w-full ml-[82px] mr-5">
                <Textarea
                      radius="none"
                      size="sm"
                      variant="bordered"
                      classNames={{
                        input:
                          "h-[100px]  hover:border-transparent",
                          helperWrapper:'p-0',
                          label:'p-0',
                      }}
                      />
                </div>
              </div>
              <div className="flex flex-row ml-4 mt-1">
                <div className={`text-sm font-[${theme?.fontFamily?.calibri}] text-[${theme?.colors?.black}] font-bold whitespace-nowrap mt-1`}>
                  Address (氣)
                </div>
                <div className="w-full ml-[82px] mr-5 p-0">
                      <Textarea
                      radius="none"
                      size="sm"
                      variant="bordered"
                      classNames={{
                        input:
                          "h-[100px]  hover:border-transparent",
                          helperWrapper:'p-0',
                          label:'p-0'
                      }}
                      />
                </div>
              </div>
              <div className="flex flex-row ml-4 mt-1">
                <div className={`text-sm font-[${theme?.fontFamily?.calibri}] text-[${theme?.colors?.black}] font-bold whitespace-nowrap mt-1`}>
                  Contact Information #1
                </div>
                <div className="w-full ml-5 mr-5">
                  <Input
                    name="contactInfo1"
                    radius="none"
                    variant="bordered"
                    size="sm"
                    classNames={{ inputWrapper: "min-h-unit-6 h-8 rounded-sm" }}
                  />
                </div>
              </div>
              <div className="flex flex-row ml-4 mt-1">
                <div className={`text-sm font-[${theme?.fontFamily?.calibri}] text-[${theme?.colors?.black}] font-bold whitespace-nowrap mt-1`}>
                  Phone No. #1
                </div>
                <div className="w-full ml-[77px] mr-5">
                  <Input
                    name="phoneNo1"
                    radius="none"
                    variant="bordered"
                    size="sm"
                    classNames={{ inputWrapper: "min-h-unit-6 h-8 rounded-sm" }}
                  />
                </div>
              </div>
              <div className="flex flex-row ml-4 mt-1">
                <div className={`text-sm font-[${theme?.fontFamily?.calibri}] text-[${theme?.colors?.black}] font-bold whitespace-nowrap mt-1`}>
                  Contact Information #2
                </div>
                <div className="w-full ml-5 mr-5">
                  <Input
                    name="contactInfo2"
                    radius="none"
                    variant="bordered"
                    size="sm"
                  />
                </div>
              </div>
              <div className="flex flex-row ml-4 mt-1">
                <div className={`text-sm font-[${theme?.fontFamily?.calibri}] text-[${theme?.colors?.black}] font-bold whitespace-nowrap mt-1`}>
                  Phone No. #2
                </div>
                <div className="w-full ml-[77px] mr-5">
                  <Input
                    name="phoneNo2"
                    radius="none"
                    variant="bordered"
                    size="sm"
                    classNames={{ inputWrapper: "min-h-unit-6 h-8 rounded-sm" }}
                  />
                </div>
              </div>
              <div className="flex flex-row ml-4 mt-1">
                <div className={`text-sm font-[${theme?.fontFamily?.calibri}] text-[${theme?.colors?.black}] font-bold whitespace-nowrap mt-1`}>
                  Fax No.
                </div>
                <div className="w-full ml-28 mr-5">
                  <Input
                    name="faxNo"
                    radius="none"
                    variant="bordered"
                    size="sm"
                    classNames={{ inputWrapper: "min-h-unit-6 h-8 rounded-sm" }}
                  />
                </div>
              </div>
              <div className="flex flex-row ml-4 mt-1">
                <div className={`text-sm font-[${theme?.fontFamily?.calibri}] text-[${theme?.colors?.black}] font-bold whitespace-nowrap mt-1`}>
                  Email Address
                </div>
                <div className="w-full ml-[73px] mr-5">
                  <Input
                    name="email"
                    radius="none"
                    variant="bordered"
                    size="sm"
                    classNames={{ inputWrapper: "min-h-unit-6 h-8 rounded-sm" }}
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-rows-10 h-[500px]">
              <div className={`text-sm text-left font-[${theme?.fontFamily?.calibri}] text-[${theme?.colors?.black}] font-bold mt-1`}>Operating Hours</div>
              <div className="flex flex-row">
                <div className={`text-sm font-[${theme?.fontFamily?.calibri}] text-[${theme?.colors?.black}] font-bold flex-grow mt-1`}>Start</div>
                <div className={`text-sm font-[${theme?.fontFamily?.calibri}] text-[${theme?.colors?.black}] font-bold flex-grow mt-1`}>End</div>
                <div className={`text-sm font-[${theme?.fontFamily?.calibri}] text-[${theme?.colors?.black}] font-bold mr-4 mt-1`}>Active</div>
              </div>
              <div className="flex justify-evenly">
                <div className={`text-left text-sm font-[${theme?.fontFamily?.calibri}] text-[${theme?.colors?.black}] font-bold w-2/5 mt-1`}>Monday</div>
                <div className="w-full">
                  <Select
                    labelPlacement="outside-left"
                    name="timeSlot"
                    radius="none"
                    size="sm"
                    variant="bordered"
                  >
                    <SelectItem key="09:00" value="09:00">
                      09:00
                    </SelectItem>
                  </Select>
                </div>
                <div className={`ml-2 mr-2 text-sm font-bold font-[${theme?.fontFamily?.calibri}] text-[${theme?.colors?.black}] mt-1`}>to</div>
                <div className="w-full">
                  <Select
                    labelPlacement="outside-left"
                    name="timeSlot"
                    radius="none"
                    size="sm"
                    variant="bordered"
                  >
                    <SelectItem key="09:00" value="09:00">
                      09:00
                    </SelectItem>
                  </Select>
                </div>
                <div className="ml-5 mr-4 mt-1">
                  <Checkbox radius="none" size="lg" classNames={{wrapper:`text-[black] after:bg-transparent`}} />
                </div>
              </div>
              <div className="flex justify-evenly">
                <div className={`text-left text-sm font-[${theme?.fontFamily?.calibri}] text-[${theme?.colors?.black}] font-bold mt-1 w-2/5`}>Tuesday</div>
                <div className="w-full">
                  <Select
                    labelPlacement="outside-left"
                    name="timeSlot"
                    radius="none"
                    size="sm"
                    variant="bordered"
                  >
                    <SelectItem key="09:00" value="09:00">
                      09:00
                    </SelectItem>
                  </Select>
                </div>
                <div className={`ml-2 mr-2 mt-1 text-sm font-bold font-[${theme?.fontFamily?.calibri}] text-[${theme?.colors?.black}]`}>to</div>
                <div className="w-full">
                  <Select
                    labelPlacement="outside-left"
                    name="timeSlot"
                    radius="none"
                    size="sm"
                    variant="bordered"
                  >
                    <SelectItem key="09:00" value="09:00">
                      09:00
                    </SelectItem>
                  </Select>
                </div>
                <div className="ml-5 mr-4 mt-1">
                <Checkbox radius="none" size="lg" classNames={{wrapper:`text-[black] after:bg-transparent`}} />
                </div>
              </div>
              <div className="flex justify-evenly">
                <div className={`text-left text-sm font-[${theme?.fontFamily?.calibri}] text-[${theme?.colors?.black}] font-bold mt-1 w-2/5`}>Wednesday</div>
                <div className="w-full">
                  <Select
                    labelPlacement="outside-left"
                    name="timeSlot"
                    radius="none"
                    size="sm"
                    variant="bordered"
                  >
                    <SelectItem key="09:00" value="09:00">
                      09:00
                    </SelectItem>
                  </Select>
                </div>
                <div className={`ml-2 mr-2 mt-1 text-sm font-bold font-[${theme?.fontFamily?.calibri}] text-[${theme?.colors?.black}]`}>to</div>
                <div className="w-full">
                  <Select
                    labelPlacement="outside-left"
                    name="timeSlot"
                    radius="none"
                    size="sm"
                    variant="bordered"
                  >
                    <SelectItem key="09:00" value="09:00">
                      09:00
                    </SelectItem>
                  </Select>
                </div>
                <div className="ml-5 mr-4 mt-1">
                <Checkbox radius="none" size="lg" classNames={{wrapper:`text-[black] after:bg-transparent`}} />
                </div>
              </div>
              <div className="flex flex-row">
                <div className={`text-left text-sm font-[${theme?.fontFamily?.calibri}] text-[${theme?.colors?.black}] font-bold mt-1 w-2/5`}>Thursday</div>
                <div className="w-full">
                  <Select
                    labelPlacement="outside-left"
                    name="timeSlot"
                    radius="none"
                    size="sm"
                    variant="bordered"
                  >
                    <SelectItem key="09:00" value="09:00">
                      09:00
                    </SelectItem>
                  </Select>
                </div>
                <div className={`ml-2 mr-2 mt-1 text-sm font-bold font-[${theme?.fontFamily?.calibri}] text-[${theme?.colors?.black}]`}>to</div>
                <div className="w-full">
                  <Select
                    labelPlacement="outside-left"
                    name="timeSlot"
                    radius="none"
                    size="sm"
                    variant="bordered"
                  >
                    <SelectItem key="09:00" value="09:00">
                      09:00
                    </SelectItem>
                  </Select>
                </div>
                <div className="ml-5 mr-4 mt-1">
                <Checkbox radius="none" size="lg" classNames={{wrapper:`text-[black] after:bg-transparent`}} />
                </div>
              </div>
              <div className="flex flex-row">
                <div className={`text-left text-sm font-[${theme?.fontFamily?.calibri}] text-[${theme?.colors?.black}] font-bold mt-1 w-2/5`}>Friday</div>
                <div className="w-full">
                  <Select
                    labelPlacement="outside-left"
                    name="timeSlot"
                    radius="none"
                    size="sm"
                    variant="bordered"
                  >
                    <SelectItem key="09:00" value="09:00">
                      09:00
                    </SelectItem>
                  </Select>
                </div>
                <div className={`ml-2 mr-2 mt-1 text-sm font-bold font-[${theme?.fontFamily?.calibri}] text-[${theme?.colors?.black}]`}>to</div>
                <div className="w-full">
                  <Select
                    labelPlacement="outside-left"
                    name="timeSlot"
                    radius="none"
                    size="sm"
                    variant="bordered"
                  >
                    <SelectItem key="09:00" value="09:00">
                      09:00
                    </SelectItem>
                  </Select>
                </div>
                <div className="ml-5 mr-4 mt-1">
                <Checkbox radius="none" size="lg" classNames={{wrapper:`text-[black] after:bg-transparent`}} />
                </div>
              </div>
              <div className="flex flex-row">
                <div className={`text-left text-sm font-[${theme?.fontFamily?.calibri}] text-[${theme?.colors?.black}] font-bold mt-1 w-2/5`}>Saturday</div>
                <div className="w-full">
                  <Select
                    labelPlacement="outside-left"
                    name="timeSlot"
                    radius="none"
                    size="sm"
                    variant="bordered"
                  >
                    <SelectItem key="09:00" value="09:00">
                      09:00
                    </SelectItem>
                  </Select>
                </div>
                <div className={`ml-2 mr-2 mt-1 text-sm font-bold font-[${theme?.fontFamily?.calibri}] text-[${theme?.colors?.black}]`}>to</div>
                <div className="w-full">
                  <Select
                    labelPlacement="outside-left"
                    name="timeSlot"
                    radius="none"
                    size="sm"
                    variant="bordered"
                  >
                    <SelectItem key="09:00" value="09:00">
                      09:00
                    </SelectItem>
                  </Select>
                </div>
                <div className="ml-5 mr-4 mt-1">
                <Checkbox radius="none" size="lg" classNames={{wrapper:`text-[black] after:bg-transparent`}} />
                </div>
              </div>
              <div className="flex flex-row">
                <div className={`text-left text-sm font-[${theme?.fontFamily?.calibri}] text-[${theme?.colors?.black}] font-bold mt-1 w-2/5`}>Sunday</div>
                <div className="w-full">
                  <Select
                    labelPlacement="outside-left"
                    name="timeSlot"
                    radius="none"
                    size="sm"
                    variant="bordered"
                  >
                    <SelectItem key="09:00" value="09:00">
                      09:00
                    </SelectItem>
                  </Select>
                </div>
                <div className={`ml-2 mr-2 mt-1 text-sm font-bold font-[${theme?.fontFamily?.calibri}] text-[${theme?.colors?.black}]`}>to</div>
                <div className="w-full">
                  <Select
                    labelPlacement="outside-left"
                    name="timeSlot"
                    radius="none"
                    size="sm"
                    variant="bordered"
                  >
                    <SelectItem key="09:00" value="09:00">
                      09:00
                    </SelectItem>
                  </Select>
                </div>
                <div className="ml-5 mr-4 mt-1">
                <Checkbox radius="none" size="lg" classNames={{wrapper:`text-[black] after:bg-transparent`}} />
                </div>
              </div>
              <div className="flex justify-end mt-[14px] mr-6">
                <div>
                <Button
                  radius="none"
                  size="sm"
                  className={`bg-[${theme?.colors?.persianGreen}] text-white text-sm font-[${theme?.fontFamily?.calibri}] font-bold h-7 w-[410px] rounded-sm`}
                >
                  Update Centre Public Holiday
                </Button>
                </div>

              </div>  
 
            <div className="flex justify-end mt-11 mr-6">
                <div>
                  <Button
                    radius="none"
                    size="sm"
                    className={`text-sm font-[${theme?.fontFamily?.calibri}] font-bold h-7 w-[195px] border border-solid border-[${theme?.colors?.greyBorder}] bg-transparent rounded-sm`}
                  >
                    Cancel
                  </Button>
                </div>
                <div>
                  <Button
                    radius="none"
                    size="sm"
                    className={`bg-[${theme?.colors?.persianGreen}] text-white text-sm font-[${theme?.fontFamily?.calibri}] font-bold ml-4 h-7 w-[195px] rounded-sm`}
                  >
                    Save
                  </Button>
                </div>
              </div>  
            </div>
          </div>

        </h1>
      </div>
      {
        uploadOverallPublicHolidayPopup && (
          <UpdateOverallPublicHolidayPopup uploadOverallPublicHolidayPopup={uploadOverallPublicHolidayPopup} setUploadOverallPublicHolidayPopup={setUploadOverallPublicHolidayPopup} />
        )
      }
    </div>
  );
};

export default ManageCentre;
