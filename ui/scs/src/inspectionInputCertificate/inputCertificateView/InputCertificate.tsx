import React, { useState } from "react";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/react";
import InputCertificateSearch from "./InputCertificateSearch";


export default function InputCertificate(){
    // const [showInputCertificateSearch, setInputCertificateSearch] = useState(false);
    // const handleInputSearch = () => {
    //     setInputCertificateSearch(true);
    //   };

    return(
        <div>
        <div className="ml-1 h-[180px]">
                <div className="flex items-left text-[#007f62] p-[10px]  font-bold text-sm font-[Calibri]">
                  Input Certificate
                </div>
                <div className="mr-1">
                    <h1>
                        <h5 className="absolute -top mt-1 start-3 pl-[10px] pr-[10px] text-sm font-[Calibri] text-[#00af8f]">
                            Searching Criteria
                        </h5>
                        <div className="grid grid-cols-2   p-5 ">
                            <div className="flex flex-row items-center mt-2">
                                <div className="w-[20%] text-left text-sm  font-[Calibri] ml-2 font-bold first-letter:">Appointment No.</div>
                                < div className=" w[250px] mt-1 rounded">
                                    <Input
                                    placeholder="11202300490"
                                        id="standard-basic"
                                        variant="bordered"
                                        size="sm"
                                        radius="none"
                                        className=" ml-1 mt-1"
                                        
                                    />
                                </div>
                            </div>
                            
                        </div>
                        <div className="flex justify-end mb-2 mr-1">
                           <Button
                                className={`bg-[#00af8f] text-white  font-bold border rounded-sm ml-1`}
                                variant="bordered"
                                size="sm"
                                type="submit"
                           //onClick={handleInputSearch}
                            >
                                Search
                            </Button>
                            
                            </div>
                        </h1>
                        </div>
                        </div>
                         <InputCertificateSearch/>
                        </div>
        
    )
}