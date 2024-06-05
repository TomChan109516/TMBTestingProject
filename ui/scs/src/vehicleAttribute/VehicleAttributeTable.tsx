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
// import { useDispatch, useSelector } from "react-redux";
// import { Check } from "tabler-icons-react";

export default function VehicleAttributeTable({
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
        <div className="mt-[10px]">
            <div className="text-left bg-[#00AF8F] text-white p-2">Attribute</div>
            <Table radius="none" shadow="sm" classNames={{ wrapper: "p-0" }} >
                <TableHeader className=" bg-[#A0D9C1] text-[#00AF8F] text-sm  text-center font-bold">
                    <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold border-1 border-white">
                        <CheckboxGroup>
                            <Checkbox
                                name="selectCheckbox"
                                radius="none"
                                size="sm"
                                classNames={{
                                    wrapper: "before:bg-[#FFFFFF] after:bg-[#00AF8F]",
                                }}
                                isSelected={check}
                                onChange={(e) => handleSelectAll(e)}
                            />
                        </CheckboxGroup>
                    </TableColumn>
                    <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold border-1 border-white">
                        Attribute
                    </TableColumn>
                    <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold border-1 border-white">
                        Vehicle ID
                    </TableColumn>
                    <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold border-1 border-white">
                        Reg.Mark
                    </TableColumn>
                    <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold border-1 border-white">
                        chassis No.
                    </TableColumn>
                    <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold border-1 border-white">
                        Class
                    </TableColumn>
                    <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold border-1 border-white">
                        Engine
                    </TableColumn>
                    <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold border-1 border-white">
                        Make
                    </TableColumn>
                    <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold border-1 border-white">
                        Model
                    </TableColumn>
                    <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold border-1 border-white">
                        T.A No.
                    </TableColumn>
                    <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold border-1 border-white">
                        Remark
                    </TableColumn>
                </TableHeader>
                <TableBody>
                    
                    <TableRow
                    >
                        <TableCell className="border-1 border-white">
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
                        </TableCell>
                        <TableCell className="border-1 border-white">
                            Test1
                        </TableCell>
                        <TableCell className="border-1 border-white">
                            001528871
                        </TableCell>
                        <TableCell className="border-1 border-white">
                            NX831
                        </TableCell>
                        <TableCell className="border-1 border-white">
                            LMPS47294C20643
                        </TableCell>
                        <TableCell className="border-1 border-white">
                            001
                        </TableCell>
                        <TableCell className="border-1 border-white">
                            0
                        </TableCell>
                        <TableCell className="border-1 border-white">
                            BE
                        </TableCell>
                        <TableCell className="border-1 border-white">
                            CIVIC Si
                        </TableCell>
                        <TableCell className="border-1 border-white">

                        </TableCell>
                        <TableCell className="border-1 border-white">{ }</TableCell>
                    </TableRow>
                    <TableRow
                    >
                        <TableCell className="border-1 border-white">
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
                        </TableCell>
                        <TableCell className="border-1 border-white">
                            Test1
                        </TableCell>
                        <TableCell className="border-1 border-white">
                            001528871
                        </TableCell>
                        <TableCell className="border-1 border-white">
                            NX831
                        </TableCell>
                        <TableCell className="border-1 border-white">
                            LMPS47294C20643
                        </TableCell>
                        <TableCell className="border-1 border-white">
                            001
                        </TableCell>
                        <TableCell className="border-1 border-white">
                            0
                        </TableCell>
                        <TableCell className="border-1 border-white">
                            BE
                        </TableCell>
                        <TableCell className="border-1 border-white">
                            CIVIC Si
                        </TableCell>
                        <TableCell className="border-1 border-white">

                        </TableCell>
                        <TableCell className="border-1 border-white">{ }</TableCell>
                    </TableRow>
                    <TableRow
                    >
                        <TableCell className="border-1 border-white">
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
                        </TableCell>
                        <TableCell className="border-1 border-white">
                            Test1
                        </TableCell>
                        <TableCell className="border-1 border-white">
                            001528871
                        </TableCell>
                        <TableCell className="border-1 border-white">
                            NX831
                        </TableCell>
                        <TableCell className="border-1 border-white">
                            LMPS47294C20643
                        </TableCell>
                        <TableCell className="border-1 border-white">
                            001
                        </TableCell>
                        <TableCell className="border-1 border-white">
                            0
                        </TableCell>
                        <TableCell className="border-1 border-white">
                            BE
                        </TableCell>
                        <TableCell className="border-1 border-white">
                            CIVIC Si
                        </TableCell>
                        <TableCell className="border-1 border-white">

                        </TableCell>
                        <TableCell className="border-1 border-white">{ }</TableCell>
                    </TableRow>

                </TableBody>
            </Table>
        </div>
    );
}
