import {
    Button,
    RadioGroup,
    Radio,
    Table,
    TableBody,
    TableCell,
    TableColumn,
    TableHeader,
    TableRow
} from "@nextui-org/react";
import { Edit, Search } from "tabler-icons-react";
import React from "react";
import { theme } from "../common/themes/themeConfig";
import { useNavigate } from "react-router-dom";


function SearchSpecialEventTable() {
    const navigate = useNavigate();
    return (
        <div>
            <div className=" ml-2 mr-2 ">
                <div className={`text-left bg-[${theme?.colors?.persianGreen}] text-white p-2`}> Special Event </div>
                <Table radius="none" shadow="sm" classNames={{ wrapper: "p-0" }}>
                    <TableHeader className={` bg-[#A0D9C1] text-[${theme?.colors?.persianGreen}] text-sm  text-center font-bold `}>
                        <TableColumn className={`bg-[#A0D9C1] text-[${theme?.colors?.persianGreen}]  w-[2%] text-sm text-center font-bold`}>
                        </TableColumn>
                        <TableColumn className={`bg-[#A0D9C1] text-[${theme?.colors?.persianGreen}] w-[5%] text-sm text-center font-bold`}>
                            Event Id
                        </TableColumn>
                        <TableColumn className={`bg-[#A0D9C1] text-[${theme?.colors?.persianGreen}] text-sm text-center font-bold`}>
                            Centre
                        </TableColumn>
                        <TableColumn className={`bg-[#A0D9C1] text-[${theme?.colors?.persianGreen}]  w-[50%] text-sm text-center font-bold`}>
                            Event Period
                        </TableColumn>
                        <TableColumn className={`bg-[#A0D9C1] text-[${theme?.colors?.persianGreen}] text-sm text-center font-bold`}>
                            Descrption
                        </TableColumn>
                        <TableColumn className={`bg-[#A0D9C1] text-[${theme?.colors?.persianGreen}] w-[100%]  text-sm text-center font-bold`}>
                            Affected Appt
                        </TableColumn>
                        <TableColumn className={`bg-[#A0D9C1] text-[${theme?.colors?.persianGreen}] text-sm text-center font-bold`}>
                        </TableColumn>
                    </TableHeader>
                    <TableBody>
                        <TableRow  >
                            <TableCell className="border-1 border-white">
                                <RadioGroup color="success">
                                    <Radio
                                        value="abc"
                                        color="success"
                                    >
                                    </Radio>
                                </RadioGroup>
                            </TableCell >
                            <TableCell >SKC</TableCell>
                            <TableCell> Regular</TableCell>
                            <TableCell>  10/07/2019 - 10/07/2021</TableCell>
                            <TableCell> ADDSLOT  </TableCell>
                            <TableCell>11/11</TableCell>
                            <TableCell>
                                <div className="flex">
                                    <Search
                                        size={20}
                                        color="white"
                                        className="bg-[#00AF8F] rounded-sm mt-[10px]"
                                        onClick={() => { navigate('/SpecialEventAppointments') }}
                                    />
                                    <Edit
                                        size="20"
                                        color="white"
                                        className="bg-[#00AF8F] rounded-sm ml-2 mt-[10px]"
                                    />
                                </div>
                            </TableCell>
                        </TableRow>

                        <TableRow  >
                            <TableCell>
                                <RadioGroup color="success">
                                    <Radio
                                        value="abc"
                                        color="success"
                                    >
                                    </Radio>
                                </RadioGroup>
                            </TableCell>
                            <TableCell > TY2 </TableCell>
                            <TableCell> Regular</TableCell>
                            <TableCell >  10/07/2019 - 10/07/2021</TableCell>
                            <TableCell> ADDSLOT </TableCell>
                            <TableCell>0/0</TableCell>
                            <TableCell>
                                <div className="flex">
                                    <Search
                                        size={20}
                                        color="white"
                                        className="bg-[#00AF8F] rounded-sm mt-[10px]"
                                    />
                                    <Edit
                                        size="20"
                                        color="white"
                                        className="bg-[#00AF8F] rounded-sm ml-2 mt-[10px]"
                                    />
                                </div>
                            </TableCell>
                        </TableRow>

                    </TableBody>
                </Table>
            </div >
            <div className="float-left mt-5">
                <Button
                    className={`bg-[#00AF8F] text-white rounded ml-1`}
                    variant="bordered"
                    onClick={() => { navigate('/createSpecialEvent') }}
                >
                    New Event
                </Button>

                <Button
                    className={`bg-[#ffffff] text-[${theme?.colors?.white}] rounded ml-1`}//white: '#fff'
                    variant="bordered"
                    type="submit"
                >
                    Delete
                </Button>
            </div>
        </div>
    );
}
export default SearchSpecialEventTable;
