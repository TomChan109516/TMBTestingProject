import { Button, Input } from "@nextui-org/react";
import React  from "react";


import "react-datepicker/dist/react-datepicker.css";

import SystemVehicleAttributeSearchTable from "./SystemVehicleAttributeSearchTable";


function SystemVehicleAttributeSearch() {
   
   
    return (
        <div>
            <div className="ml-1 h-[200px]">
                <div className="flex items-left text-[#0a923d] p-[10px]  font-bold text-md">
                  System{">"} Vehicle Attribute
                </div>
                <div className="mr-1">
                    <h1>
                        <h5 className="absolute -top mt-2 start-3 pl-[10px] pr-[10px] text-sm/[12px] text-[#00AF8F]">
                            Searching Criteria
                        </h5>
                        <div className="grid grid-cols-2  mt-[15px] ">
                            <div className="flex flex-row items-center mt-2">
                                <div className="w-[20%] text-left text-sm/[13px]  ml-2 font-bold first-letter:">Attribute Name</div>
                                < div className=" w-4/5 mt-1">
                                    <Input
                                        id="standard-basic"
                                        variant="bordered"
                                        size="sm"
                                        className=" rounded-sm  ml-1 mt-1"
                                        
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-end mb-2 mr-1">
                            <Button
                                className={`bg-[#ffffff] text-[black] rounded-sm ml-1`}//white: '#fff'
                                variant="bordered"
                                size="sm"
                            // onClick={restFunc}
                            >
                                Reset
                            </Button>
                            <Button
                                className={`bg-[#00AF8F] text-white rounded-sm ml-1`}
                                variant="bordered"
                                size="sm"
                                type="submit"
                            // onClick={searchdataHandler}
                            >
                                Search
                            </Button>
                        </div>
                    </h1>
                     <div className="flex justify-start mb-2 mt-2 mr-1">
                           
                            <Button
                                className={`bg-[#00AF8F] text-white rounded-sm ml-1`}
                                variant="bordered"
                                size="sm"
                                type="submit"
                            // onClick={searchdataHandler}
                            >
             Add Vehicle Attribute
                            </Button>
                       </div>
                </div>
                <div className="mt-">
                <SystemVehicleAttributeSearchTable/>
                </div>
            </div>
                   </div>
    );
}

export default SystemVehicleAttributeSearch;


