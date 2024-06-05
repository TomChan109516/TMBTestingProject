import React from "react";
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, Spinner } from "@nextui-org/react";
import { Search } from "tabler-icons-react";
//import { useNavigate } from "react-router-dom";




export default function CurrentMasterVehicleTableType() {

    return (

        <div className="" >

            <div className="text-left bg-[#007f62] text-white p-1 text-[12px]" >Current Master Vehicle</div>

            <Table radius="none" shadow="sm" classNames={{ wrapper: "p-0 overflow-y-auto h-20 " }}>

                <TableHeader className=" bg-[#A0D9C1] text-[#00AF8F] text-[11px] text-center font-bold  ">
                    <TableColumn className="bg-[#A0D9C1] text-[#00AF8F]  text-center font-bold border-1 border-white first:rounded-sm">

                    </TableColumn>
                    <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-[11px]  text-center font-bold border-1 border-white">
                        Type
                    </TableColumn>
                    <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-[11px]  text-center font-bold border-1 border-white">
                        Class
                    </TableColumn>
                    <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-[11px]  text-center font-bold border-1 border-white">
                        Vehicle ID
                    </TableColumn>
                    <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-[11px]  text-center font-bold border-1 border-white">
                        Reg.Mark
                    </TableColumn>
                    <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-[11px]  text-center font-bold border-1 border-white">
                        Chassis No
                    </TableColumn>
                    <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-[11px]  text-center font-bold border-1 border-white">
                        Mark
                    </TableColumn>
                    <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-[11px]  text-center font-bold border-1 border-white">
                        C&E NO
                    </TableColumn>
                    <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-[11px]  text-center font-bold border-1 border-white">
                        Doc.No
                    </TableColumn>
                    <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-[11px]  text-center font-bold border-1 border-white last:rounded-sm">
                        T.A NO
                    </TableColumn>


                </TableHeader>

                <TableBody className="">

                    <TableRow >
                        <TableCell className="border-1  border-greyBorder p-[5px]  text-center">
                            <Search
                                size={18}
                                color="white"
                                className="bg-[#00AF8F] rounded-sm ml-[5px]"

                            /></TableCell>
                        <TableCell className="border-1  border-greyBorder p-[5px]  text-center  text-[11px] ">
                            Vaild
                        </TableCell>
                        <TableCell className="border-1  border-greyBorder p-[5px]  text-center  text-[11px] ">
                            014
                        </TableCell>

                        <TableCell className="border-1  border-greyBorder p-[5px]  text-center  text-[11px] ">
                            002767300
                        </TableCell>
                        <TableCell className="border-1  border-greyBorder p-[5px]  text-center text-[11px] ">
                            { }        </TableCell>
                        <TableCell className="border-1  border-greyBorder p-[5px]  text-center text-[11px] ">
                            AB71R34233Z                      </TableCell>
                        <TableCell className="border-1  border-greyBorder p-[5px]  text-center  text-[11px]">
                            H20
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


                    </TableRow>
                    <TableRow >
                        <TableCell className="border-1  border-greyBorder p-[5px]  text-center text-[11px]">
                            <Search
                                size={18}
                                color="white"
                                className="bg-[#00AF8F] rounded-sm ml-[5px]"

                            /></TableCell>
                        <TableCell className="border-1  border-greyBorder p-[5px]  text-center  text-[11px] ">
                            Vaild
                        </TableCell>
                        <TableCell className="border-1  border-greyBorder p-[5px]  text-center  text-[11px] ">
                            014
                        </TableCell>

                        <TableCell className="border-1  border-greyBorder p-[5px]  text-center  text-[11px] ">
                            002767300
                        </TableCell>
                        <TableCell className="border-1  border-greyBorder p-[5px]  text-center text-[11px] ">
                            { }        </TableCell>
                        <TableCell className="border-1  border-greyBorder p-[5px]  text-center text-[11px] ">
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


                    </TableRow>
                    <TableRow >
                        <TableCell className="border-1  border-greyBorder p-[5px]  text-center text-[11px]">
                            <Search
                                size={18}
                                color="white"
                                className="bg-[#00AF8F] rounded-sm ml-[5px]"

                            /></TableCell>
                        <TableCell className="border-1  border-greyBorder p-[5px]  text-center  text-[11px] ">
                            Vaild
                        </TableCell>
                        <TableCell className="border-1  border-greyBorder p-[5px]  text-center  text-[11px] ">
                            014
                        </TableCell>

                        <TableCell className="border-1  border-greyBorder p-[5px]  text-center  text-[11px] ">
                            002767300
                        </TableCell>
                        <TableCell className="border-1  border-greyBorder p-[5px]  text-center text-[11px]">
                            { }        </TableCell>
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


                    </TableRow>
                    <TableRow >
                        <TableCell className="border-1  border-greyBorder p-[5px]  text-center">
                            <Search
                                size={18}
                                color="white"
                                className="bg-[#00AF8F] rounded-sm ml-[5px]"

                            /></TableCell>
                        <TableCell className="border-1  border-greyBorder p-[5px]  text-center  text-[11px] ">
                            Vaild
                        </TableCell>
                        <TableCell className="border-1  border-greyBorder p-[5px]  text-center  text-[11px] ">
                            014
                        </TableCell>

                        <TableCell className="border-1  border-greyBorder p-[5px]  text-center  text-[11px] ">
                            002767300
                        </TableCell>
                        <TableCell className="border-1  border-greyBorder p-[5px]  text-center text-[11px]">
                            { }        </TableCell>
                        <TableCell className="border-1  border-greyBorder p-[5px]  text-center text-[11px]">
                            AB71R34233Z                      </TableCell>
                        <TableCell className="border-1  border-greyBorder p-[5px]  text-center text-[11px]">
                            H20
                        </TableCell>
                        <TableCell className="border-1  border-greyBorder p-[5px]  text-center text-[11px]">
                            {""}
                        </TableCell>
                        <TableCell className="border-1  border-greyBorder p-[5px]  text-center text-[11px] ">
                            {""}
                        </TableCell>
                        <TableCell className="border-1  border-greyBorder p-[5px]  text-center text-[11px]">
                            {""}
                        </TableCell>


                    </TableRow>
                    <TableRow >
                        <TableCell className="border-1  border-greyBorder p-[5px]  text-center text-[11px]">
                            <Search
                                size={18}
                                color="white"
                                className="bg-[#00AF8F] rounded-sm ml-[5px]"

                            /></TableCell>
                        <TableCell className="border-1  border-greyBorder p-[5px]  text-center  text-[11px] ">
                            Vaild
                        </TableCell>
                        <TableCell className="border-1  border-greyBorder p-[5px]  text-center  text-[11px] ">
                            014
                        </TableCell>

                        <TableCell className="border-1  border-greyBorder p-[5px]  text-center  text-[11px] ">
                            002767300
                        </TableCell>
                        <TableCell className="border-1  border-greyBorder p-[5px]  text-center text-[11px]">
                            { }        </TableCell>
                        <TableCell className="border-1  border-greyBorder p-[5px]  text-center  text-[11px]">
                            AB71R34233Z                      </TableCell>
                        <TableCell className="border-1  border-greyBorder p-[5px]  text-center text-[11px] ">
                            H20
                        </TableCell>
                        <TableCell className="border-1  border-greyBorder p-[5px]  text-center  text-[11px]">
                            {""}
                        </TableCell>
                        <TableCell className="border-1  border-greyBorder p-[5px]  text-center text-[11px]">
                            {""}
                        </TableCell>
                        <TableCell className="border-1  border-greyBorder p-[5px]  text-center text-[11px] ">
                            {""}
                        </TableCell>

                    </TableRow>
                    <TableRow >
                        <TableCell className="border-1  border-greyBorder p-[5px]  text-center">
                            <Search
                                size={18}
                                color="white"
                                className="bg-[#00AF8F] rounded-sm ml-[5px]"

                            /></TableCell>
                        <TableCell className="border-1  border-greyBorder p-[5px]  text-center  text-[11px] ">
                            Vaild
                        </TableCell>
                        <TableCell className="border-1  border-greyBorder p-[5px]  text-center  text-[11px] ">
                            014
                        </TableCell>

                        <TableCell className="border-1  border-greyBorder p-[5px]  text-center  text-[11px] ">
                            002767300
                        </TableCell>
                        <TableCell className="border-1  border-greyBorder p-[5px]  text-center text-[11px] ">
                            { }        </TableCell>
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
                        <TableCell className="border-1  border-greyBorder p-[5px]  text-center text-[11px] ">
                            {""}
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    )
}

