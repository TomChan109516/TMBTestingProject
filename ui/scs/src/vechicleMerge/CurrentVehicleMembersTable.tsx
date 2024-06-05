import React from"react";
import { Button, RadioGroup,Radio, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";
import { Search } from "tabler-icons-react";





export default function CurrentVehicleMembersTable(){
    return(
        <>
        <div className="mt-[px]">
            <p>1 recoders  found</p>
            <div className="text-left bg-[#007f62] text-white p-1" >Vehicle</div>
            <Table radius="none" shadow="sm" classNames={{ wrapper: "p-0" }} >
                <TableHeader className=" bg-[#A0D9C1] text-[#00AF8F] text-[11px] text-center font-bold">
                    <TableColumn className=" first:rounded-sm bg-[#A0D9C1] text-[#00AF8F] text-[11px]text-center font-bold border-1 border-white">
                        <RadioGroup>
                        <Radio
                        name="selectRadiobox"
                        value="someValue"
                        size="sm"
                       />
                       </RadioGroup> 
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
                    <TableColumn className="  last:rounded-sm bg-[#A0D9C1] text-[#00AF8F] text-[11px]text-center font-bold border-1 border-white" children={undefined}>
                                        </TableColumn>
                    
                </TableHeader>
                <TableBody>
                    
                    <TableRow>
                        <TableCell className="border-1  border-greyBorder p-[5px]  text-center">
                        <RadioGroup>
                        <Radio
                        name="selectRadiobox"
                        value="someValue"
                        size="md"
                        classNames={{
                            wrapper:
                              "group-data-[selected=true]:bg-[#00AF8F] group-data-[selected=true]:border-[#00Af8F] text-xs font-[Calibri]",
                              control:'bg-white',
                              base:'border-[#00AF8F]',
                          }}
                       />
                       </RadioGroup></TableCell>
                        <TableCell className="border-1  border-greyBorder p-[5px]  text-center text-[11px]  ">
                            001
                        </TableCell>
                        <TableCell className="border-1  border-greyBorder p-[5px]  text-center ">
                        {""}
                        </TableCell>
                        <TableCell className="border-1  border-greyBorder p-[5px]  text-center">
                         FU0726                        </TableCell>
                        <TableCell className="border-1  border-greyBorder p-[5px]  text-center">
                            ABCD12346                        </TableCell>
                        <TableCell className="border-1  border-greyBorder p-[5px]  text-center">
                        TO-TOYOTA
                        </TableCell>
                        <TableCell className="border-1  border-greyBorder p-[5px]  text-center">
                            {""}
                        </TableCell>
                        <TableCell className="border-1  border-greyBorder p-[5px]  text-center">
                            {""}
                        </TableCell>
                        <TableCell className="border-1  border-greyBorder p-[5px]  text-center">
                            {""}
                        </TableCell>
                        <TableCell className="border-1  border-greyBorder p-[5px]  text-center">
                        <Search
                                            size={25}
                                            color="white"
                                            className="bg-[#00AF8F] rounded-sm mt-[10px]"
                                            //onClick={() => { navigate('/SpecialEventAppointments') }}
                                        />

                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="border-1  border-greyBorder p-[5px]  text-center">
                        <RadioGroup>
                        <Radio
                        name="selectRadiobox"
                        value="someValue"
                        size="md"
                       />
                       </RadioGroup></TableCell>
                        <TableCell className="border-1  border-greyBorder p-[5px]  text-center text-[11px]  ">
                            001
                        </TableCell>
                        <TableCell className="border-1  border-greyBorder p-[5px]  text-center ">
                        {""}
                        </TableCell>
                        <TableCell className="border-1  border-greyBorder p-[5px]  text-center">
                         FU0726                        </TableCell>
                        <TableCell className="border-1  border-greyBorder p-[5px]  text-center">
                            ABCD12346                        </TableCell>
                        <TableCell className="border-1  border-greyBorder p-[5px]  text-center">
                        TO-TOYOTA
                        </TableCell>
                        <TableCell className="border-1  border-greyBorder p-[5px]  text-center">
                            {""}
                        </TableCell>
                        <TableCell className="border-1  border-greyBorder p-[5px]  text-center">
                            {""}
                        </TableCell>
                        <TableCell className="border-1  border-greyBorder p-[5px]  text-center">
                            {""}
                        </TableCell>
                        <TableCell className="border-1  border-greyBorder p-[5px]  text-center">
                        <Search
                                            size={25}
                                            color="white"
                                            className="bg-[#00AF8F] rounded-sm mt-[10px]"
                                            //onClick={() => { navigate('/SpecialEventAppointments') }}
                                        />

                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="border-1  border-greyBorder p-[5px]  text-center">
                        <RadioGroup>
                        <Radio
                        name="selectRadiobox"
                        value="someValue"
                        size="md"
                       />
                       </RadioGroup></TableCell>
                        <TableCell className="border-1  border-greyBorder p-[5px]  text-center text-[11px]  ">
                            001
                        </TableCell>
                        <TableCell className="border-1  border-greyBorder p-[5px]  text-center ">
                        {""}
                        </TableCell>
                        <TableCell className="border-1  border-greyBorder p-[5px]  text-center">
                         FU0726                        </TableCell>
                        <TableCell className="border-1  border-greyBorder p-[5px]  text-center">
                            ABCD12346                        </TableCell>
                        <TableCell className="border-1  border-greyBorder p-[5px]  text-center">
                        TO-TOYOTA
                        </TableCell>
                        <TableCell className="border-1  border-greyBorder p-[5px]  text-center">
                            {""}
                        </TableCell>
                        <TableCell className="border-1  border-greyBorder p-[5px]  text-center">
                            {""}
                        </TableCell>
                        <TableCell className="border-1  border-greyBorder p-[5px]  text-center">
                            {""}
                        </TableCell>
                        <TableCell className="border-1  border-greyBorder p-[5px]  text-center">
                        <Search
                                            size={25}
                                            color="white"
                                            className="bg-[#00AF8F] rounded-sm mt-[10px]"
                                            //onClick={() => { navigate('/SpecialEventAppointments') }}
                                        />

                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="border-1  border-greyBorder p-[5px]  text-center">
                        <RadioGroup>
                        <Radio
                        name="selectRadiobox"
                        value="someValue"
                        size="md"
                       />
                       </RadioGroup></TableCell>
                        <TableCell className="border-1  border-greyBorder p-[5px]  text-center text-[11px]  ">
                            001
                        </TableCell>
                        <TableCell className="border-1  border-greyBorder p-[5px]  text-center text-[11px]  ">
                        {""}
                        </TableCell>
                        <TableCell className="border-1  border-greyBorder p-[5px]  text-center text-[11px] ">
                         FU0726                        </TableCell>
                        <TableCell className="border-1  border-greyBorder p-[5px]  text-center text-[11px] ">
                            ABCD12346                        </TableCell>
                        <TableCell className="border-1  border-greyBorder p-[5px]  text-center text-[11px] ">
                        TO-TOYOTA
                        </TableCell>
                        <TableCell className="border-1  border-greyBorder p-[5px]  text-center text-[11px] ">
                            {""}
                        </TableCell>
                        <TableCell className="border-1  border-greyBorder p-[5px]  text-center text-[11px] ">
                            {""}
                        </TableCell>
                        <TableCell className="border-1  border-greyBorder p-[5px]  text-center text-[11px] ">
                            {""}
                        </TableCell>
                        <TableCell className="border-1  border-greyBorder p-[5px]  text-center text-[11px] ">
                        <Search
                                            size={25}
                                            color="white"
                                            className="bg-[#00AF8F] rounded-sm mt-[10px]"
                                            //onClick={() => { navigate('/SpecialEventAppointments') }}
                                        />

                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="border-1  border-greyBorder p-[5px]  text-center">
                        <RadioGroup>
                        <Radio
                        name="selectRadiobox"
                        value="someValue"
                        size="md"
                       />
                       </RadioGroup></TableCell>
                        <TableCell className="border-1  border-greyBorder p-[5px]  text-center text-[11px]  ">
                            001
                        </TableCell>
                        <TableCell className="border-1  border-greyBorder p-[5px]  text-center ">
                        {""}
                        </TableCell>
                        <TableCell className="border-1  border-greyBorder p-[5px]  text-center">
                         FU0726                        </TableCell>
                        <TableCell className="border-1  border-greyBorder p-[5px]  text-center">
                            ABCD12346                        </TableCell>
                        <TableCell className="border-1  border-greyBorder p-[5px]  text-center">
                        TO-TOYOTA
                        </TableCell>
                        <TableCell className="border-1  border-greyBorder p-[5px]  text-center">
                            {""}
                        </TableCell>
                        <TableCell className="border-1  border-greyBorder p-[5px]  text-center">
                            {""}
                        </TableCell>
                        <TableCell className="border-1  border-greyBorder p-[5px]  text-center">
                            {""}
                        </TableCell>
                        <TableCell className="border-1  border-greyBorder p-[5px]  text-center">
                        <Search
                                            size={25}
                                            color="white"
                                            className="bg-[#00AF8F] rounded-sm mt-[10px]"
                                            //onClick={() => { navigate('/SpecialEventAppointments') }}
                                        />

                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            <div className="flex justify-end pb-[10px]  font-bold gap-4 m-[5px] ">
            <Button
              type="submit"
              className="bg-[#FFFFFF]"
              size="sm"
              radius="sm"
              variant="bordered"
              
            >

              Cancle
            </Button>
            
            <Button
              type="submit"
              className="bg-[#00AF8F] text-[#FFFFFF]"
              size="sm"
              radius="sm"
              variant="bordered"
            
            >
            Unmerge Vehicles
            </Button>
          </div>        </div>

        </>
    )
}