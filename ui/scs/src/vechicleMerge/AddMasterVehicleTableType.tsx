import React from "react";
import { Button, RadioGroup,Radio, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";
import { Search } from "tabler-icons-react";


export default function AddMasterVechicleTableType(){
    
        return(
        
            <div className="m-[10px]" > 
                
                <div className="text-left bg-[#00AF8F] text-white text-[12px] p-1" >Vehicle</div>
                    <Table radius="none" shadow="sm" classNames={{ wrapper: "p-0  overflow-y-auto h-40" }}>
                        <TableHeader className=" bg-[#A0D9C1] text-[#00AF8F] text-[11px]  text-center font-bold">
                        <TableColumn className="bg-[#A0D9C1] text-[#00AF8F]  text-center font-bold border-1 border-white  first:rounded-sm">
                            <RadioGroup>
                            <Radio
                            name="selectRadiobox"
                            value="someValue"
                            size="sm"
                           />
                           </RadioGroup> 
                        </TableColumn>
                         <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-[11px] text-center font-bold border-1 border-white">
                            Type
                        </TableColumn>
                         <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-[11px] text-center font-bold border-1 border-white">
                            Class
                        </TableColumn>
                        <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-[11px] text-center font-bold border-1 border-white">
                            Vehicle ID
                        </TableColumn>
                        <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-[11px] text-center font-bold border-1 border-white">
                            Reg.Mark
                        </TableColumn>
                        <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-[11px] text-center font-bold border-1 border-white">
                            Chassis No
                        </TableColumn>
                        <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-[11px] text-center font-bold border-1 border-white">
                            Mark
                        </TableColumn>
                        <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-[11px] text-center font-bold border-1 border-white">
                            C&E NO
                        </TableColumn>
                        <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-[11px] text-center font-bold border-1 border-white">
                            Doc.No
                        </TableColumn>
                        <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-[11px] text-center font-bold border-1 border-white">
                            T.A NO
                        </TableColumn>
                        <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-[11px]  last:rounded-smfont-bold border-1 border-white  last:rounded-sm" children={undefined}>
                                            </TableColumn>
                        
                    </TableHeader>
                    <TableBody>
                        
                        <TableRow>
                            <TableCell className="border-1  border-greyBorder p-[13px]  text-center">
                            <RadioGroup className=" text-center">
                            <Radio
                            name="selectRadiobox"
                            value="someValue"
                            size="sm"
                            className=""
                           
                           />
                           </RadioGroup></TableCell>
                            <TableCell className="border-1  border-greyBorder p-[5px]  text-center  text-[11px] ">
                                Vaild
                            </TableCell>
                            <TableCell className="border-1  border-greyBorder p-[5px]  text-center  text-[11px] ">
                                014
                            </TableCell>
                            <TableCell className="border-1  border-greyBorder p-[5px]  text-center  text-[11px]">
                            002767300
                            </TableCell>
                            <TableCell className="border-1  border-greyBorder p-[5px]  text-center text-[11px]">
                                          {}        </TableCell>
                            <TableCell className="border-1  border-greyBorder p-[5px]  text-center text-[11px]">
                                AB71R34233Z                      </TableCell>
                                <TableCell className="border-1  border-greyBorder p-[5px]  text-center text-[11px]">
                            H20
                            </TableCell>
                            <TableCell className="border-1  border-greyBorder p-[5px]  text-center text-[11px]">
                                {""}
                            </TableCell>
                            <TableCell className="border-1  border-greyBorder p-[5px]  text-center text-[11px]">
                                {""}
                            </TableCell>
                            <TableCell className="border-1  border-greyBorder p-[5px]  text-center text-[11px]">
                                {""}
                            </TableCell>
                            
                            <TableCell className="border-1  border-greyBorder p-[5px]  text-center text-[11px] ">
                            <Search
                                            size={18}
                                            color="white"
                                            className="bg-[#00AF8F] rounded-sm mb-[10px]"
                                          
                                        />
    
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="border-1  border-greyBorder p-[13px]  text-center text-[11px]">
                            <RadioGroup>
                            <Radio
                            name="selectRadiobox"
                            value="someValue"
                            size="sm"
                           />
                           </RadioGroup></TableCell>
                            <TableCell className="border-1  border-greyBorder p-[5px]  text-center text-[11px] ">
                                Vaild
                            </TableCell>
                            <TableCell className="border-1  border-greyBorder p-[5px]  text-center text-[11px] ">
                                014
                            </TableCell>
                            <TableCell className="border-1  border-greyBorder p-[5px]  text-center  text-[11px]">
                            002767300
                            </TableCell>
                            <TableCell className="border-1  border-greyBorder p-[5px]  text-center  text-[11px]">
                                          {""}        </TableCell>
                            <TableCell className="border-1  border-greyBorder p-[5px]  text-center  text-[11px]">
                                AB71R34233Z                      </TableCell>
                            <TableCell className="border-1  border-greyBorder p-[5px]  text-center  text-[11px]">
                            H20
                            </TableCell>
                            <TableCell className="border-1  border-greyBorder p-[5px]  text-center  text-[11px]">
                                005020-11-001
                            </TableCell>
                            <TableCell className="border-1  border-greyBorder p-[5px]  text-center  text-[11px]">
                                {""}
                            </TableCell>
                            <TableCell className="border-1  border-greyBorder p-[5px]  text-center  text-[11px]">
                                {""}
                            </TableCell>
                            
                            <TableCell className="border-1  border-greyBorder p-[5px]  text-center  text-[11px]">
                            <Search
                                            size={18}
                                            color="white"
                                            className="bg-[#00AF8F] rounded-sm mb-[10px]"
                                          
                                        />
    
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="border-1  border-greyBorder p-[13px]   text-center">
                            <RadioGroup >
                            <Radio
                            name="selectRadiobox"
                            value="someValue"
                            size="sm"
                        
                    
                           />
                           </RadioGroup></TableCell>
                            <TableCell className="border-1  border-greyBorder p-[5px]  text-center  text-[11px] ">
                                Vaild
                            </TableCell>
                            <TableCell className="border-1  border-greyBorder p-[5px]  text-center  text-[11px] ">
                                014
                            </TableCell>
                            <TableCell className="border-1  border-greyBorder p-[5px]  text-center  text-[11px]">
                            002767300
                            </TableCell>
                            <TableCell className="border-1  border-greyBorder p-[5px]  text-center  text-[11px]">
                                          {""}        </TableCell>
                            <TableCell className="border-1  border-greyBorder p-[5px]  text-center  text-[11px]">
                                AB71R34233Z                      </TableCell>
                            <TableCell className="border-1  border-greyBorder p-[5px]  text-center  text-[11px]">
                            H20
                            </TableCell>
                            <TableCell className="border-1  border-greyBorder p-[5px]  text-center  text-[11px]">
                                005020-11-001
                            </TableCell>
                            <TableCell className="border-1  border-greyBorder p-[5px]  text-center  text-[11px]">
                                {""}
                            </TableCell>
                            <TableCell className="border-1  border-greyBorder p-[5px]  text-center  text-[11px]">
                                {""}
                            </TableCell>
                            
                            <TableCell className="border-1  border-greyBorder p-[5px]  text-center  text-[11px]">
                            <Search
                                            size={18}
                                            color="white"
                                            className="bg-[#00AF8F] rounded-sm mb-[10px]"
                                          
                                        />
    
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="border-1  border-greyBorder p-[13px]  text-center">
                            <RadioGroup>
                            <Radio
                            name="selectRadiobox"
                            value="someValue"
                            size="sm"
                           />
                           </RadioGroup></TableCell>
                            <TableCell className="border-1  border-greyBorder p-[5px]  text-center  text-[11px] ">
                                Vaild
                            </TableCell>
                            <TableCell className="border-1  border-greyBorder p-[5px]  text-center  text-[11px]">
                                014
                            </TableCell>
                            <TableCell className="border-1  border-greyBorder p-[5px]  text-center  text-[11px]">
                            002767300
                            </TableCell>
                            <TableCell className="border-1  border-greyBorder p-[5px]  text-center  text-[11px]">
                                          {""}         </TableCell>
                            <TableCell className="border-1  border-greyBorder p-[5px]  text-center  text-[11px]">
                                AB71R34233Z                      </TableCell>
                            <TableCell className="border-1  border-greyBorder p-[5px]  text-center  text-[11px]">
                            H20
                            </TableCell>
                            <TableCell className="border-1  border-greyBorder p-[5px]  text-center  text-[11px]">
                                005020-11-001
                            </TableCell>
                            <TableCell className="border-1  border-greyBorder p-[5px]  text-center  text-[11px]">
                                {""}
                            </TableCell>
                            <TableCell className="border-1  border-greyBorder p-[5px]  text-center  text-[11px]">
                                {""}
                            </TableCell>
                            
                            <TableCell className="border-1  border-greyBorder p-[5px]  text-center  text-[11px]">
                            <Search
                                            size={18}
                                            color="white"
                                            className="bg-[#00AF8F] rounded-sm mb-[10px]"
                                          
                                        />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="border-1  border-greyBorder p-[13px]  text-center  text-[11px]">
                            <RadioGroup>
                            <Radio
                            name="selectRadiobox"
                            value="someValue"
                            size="sm"
                            classNames={{
                                wrapper:
                                  "group-data-[selected=true]:bg-[#00AF8F] group-data-[selected=true]:border-[#00Af8F] text-xs font-[Calibri]",
                                  control:'bg-white',
                                  base:'border-[#00AF8F]',
                              }}
                           />
                           </RadioGroup></TableCell>
                            <TableCell className="border-1  border-greyBorder p-[5px]  text-center  text-[11px] ">
                                Vaild
                            </TableCell>
                            <TableCell className="border-1  border-greyBorder p-[5px]  text-center  text-[11px] ">
                                014
                            </TableCell>
                            <TableCell className="border-1  border-greyBorder p-[5px]  text-center  text-[11px]">
                            002767300
                            </TableCell>
                            <TableCell className="border-1  border-greyBorder p-[5px]  text-center  text-[11px]">
                                          {""}        </TableCell>
                            <TableCell className="border-1  border-greyBorder p-[5px]  text-center  text-[11px]">
                                AB71R34233Z                      </TableCell>
                            <TableCell className="border-1  border-greyBorder p-[5px]  text-center  text-[11px]">
                            H20
                            </TableCell>
                            <TableCell className="border-1  border-greyBorder p-[5px]  text-center  text-[11px]">
                                005020-11-001
                            </TableCell>
                            <TableCell className="border-1  border-greyBorder p-[5px]  text-center  text-[11px]">
                                {""}
                            </TableCell>
                            <TableCell className="border-1  border-greyBorder p-[5px]  text-center  text-[11px]">
                                {""}
                            </TableCell>
                            
                            <TableCell className="border-1  border-greyBorder p-[5px]  text-center " >
                            <Search
                                            size={18}
                                            color="white"
                                            className="bg-[#00AF8F] rounded-sm mb-[10px]"
                                          
                                        />
    
                            </TableCell>
                        </TableRow>
                       
                    </TableBody>
                </Table>
             
              
              
                  </div>
       
    )
}