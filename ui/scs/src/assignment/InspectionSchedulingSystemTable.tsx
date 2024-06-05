import React from "react";
import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    Checkbox,
    CheckboxGroup,

} from "@nextui-org/react";

export default function InspectionSchedulingSystemTable({
    check,
    checkFunc,
}) {
    const handleSelectAll = (e) => {
        checkFunc(e.target.checked);
    };
    const onCheckboxChange = (e) => {
        checkFunc(e.target.checked);
    };
    return (
        <div className="mt-[30px]">
            <Table radius="none" shadow="sm" classNames={{ wrapper: "p-0" }} >
                <TableHeader className=" bg-[#A0D9C1] text-[#00AF8F] text-sm  text-center font-bold">
                    <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold border-1 border-white first:rounded-none">
                        <CheckboxGroup>
                            <Checkbox
                                name="selectCheckbox"
                                radius="none"
                                size="sm"
                                classNames={{ wrapper: "after:bg-[#00AF8F]" }}
                                onChange={(e) => onCheckboxChange(e)}
                                isSelected={check}
                            />
                        </CheckboxGroup>
                    </TableColumn>

                    <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold border-1 border-white">
                        Centre
                    </TableColumn>
                    <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold border-1 border-white">
                        Date
                    </TableColumn>
                    <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold border-1 border-white">
                        Name
                    </TableColumn>
                    <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold border-1 border-white">
                        Session
                    </TableColumn>
                    <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold border-1 border-white">
                        Type
                    </TableColumn>
                    <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold border-1 border-white">
                        Remark
                    </TableColumn>
                    <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold border-1 border-white last:rounded-sm">

                    </TableColumn>
                </TableHeader>
                <TableBody>
                    <TableRow
                        className={`bg-[#FFFFFF] 
                             `}
                    >
                        <TableCell className="border-1 border-white">
                            {/* <CheckboxGroup>
                                <Checkbox
                                    name="selectCheckbox"
                                    radius="none"
                                    size="sm"
                                    classNames={{ wrapper: "after:bg-[#00AF8F]" }}
                                    onChange={(e) => onCheckboxChange(e)}
                                    isSelected={check}
                                />
                            </CheckboxGroup> */}
                        </TableCell>
                        <TableCell className="border-1 border-white">
                            { }
                        </TableCell>
                        <TableCell className="border-1 border-white" children={undefined}>

                        </TableCell>
                        <TableCell className="border-1 border-white">

                        </TableCell>
                        <TableCell className="border-1 border-white">

                        </TableCell>
                        <TableCell className="border-1 border-white">
                            { }
                        </TableCell>
                        <TableCell className="border-1 border-white">
                            { }
                        </TableCell>

                        <TableCell className="border-1 border-white">

                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    );
}
