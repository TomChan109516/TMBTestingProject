import { Button, Input } from "@nextui-org/react"
import React, { useState, ChangeEvent } from "react"
import { SystemConfigTable } from "./SystemConfigTable";

export const MaintainSysConfig = () => {
    const [sysId, setSysId] = useState<string>("");
    const [sysDesc, setSysDesc] = useState<string>("");

    const handleSysId = (event: ChangeEvent<HTMLInputElement>) => {
        setSysId(event.target.value);
    };
    const handleSysDesc = (event: ChangeEvent<HTMLInputElement>) => {
        setSysDesc(event.target.value);
    };
    const resetFields = () => {
        setSysId("");
        setSysDesc("");
    };
    return (
        <>
            <div className="p-[5px] ml-1 mt-[10px]">
                <div className="flex flex-initial text-[#0a923d] p-[2px]  font-bold text-sm">
                    System {">"} System Configuration
                </div>
            </div>
            <div className="mt-[10px] ml-2 mr-2 ">
                <h1>
                    <h5 className="absolute-top-2 start-3 pl-[10px] pr-[10px] text-[16px] text-[#00AF8F] font-[Calibri]">
                        Searching Criteria
                    </h5>
                    <div className="grid grid-rows-1 grid-flow-col whitespace-nowrap  p-5 pb-1.5">
                        <div className="flex flex-row w-full flex-wrap md:flex-nowrap gap-4">
                            <div className="ml-1 mr-4 text-md font-bold font-[Calibri] mt-[5px] ">
                                System Config ID{" "}
                            </div>
                            <Input variant="bordered"
                                size="sm"
                                radius="none"
                                name="sysConfigID"
                                value={sysId}
                                classNames={{ inputWrapper: "min-h-unit-6 h-7 rounded-sm" }}
                                type="text"
                                onChange={handleSysId}
                                aria-describedby="outlined-weight-helper-text" />
                            <div className="ml-2 text-md font-bold font-[Calibri] mt-[5px] ">
                                System Config Description{" "}
                            </div>
                            <Input variant="bordered"
                                size="sm"
                                radius="none"
                                name="sysConfigDesc"
                                value={sysDesc}
                                classNames={{ inputWrapper: "min-h-unit-6 h-7 rounded-sm" }}
                                type="text"
                                aria-describedby="outlined-weight-helper-text"
                                onChange={handleSysDesc} />
                        </div>
                    </div>
                    <div className="flex justify-end mb-2 mt-0 mr-2 font-[Calibri] ">
                        <Button
                            radius="none"
                            size="sm"
                            type="reset"
                            className="bg-white text-black border border-solid border-greyBorder rounded-[3px]  min-w-unit-12 text-[13px] font-bold px-1 py-1 mr-1"
                            onClick={() => {
                                resetFields();
                            }}>Reset</Button>
                        <Button
                            type="button"
                            radius="none"
                            size="sm"
                            className="rounded-[3px]  min-w-unit-16 bg-[#00AF8F] text-white font-bold text-md text-[13px] px-1 py-1">Search</Button>
                    </div>
                </h1>
            </div>
            <div>
                <SystemConfigTable />
            </div>
        </>
    );
}
export default MaintainSysConfig;


