import {
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Table,
  RadioGroup,
  Radio,
} from "@nextui-org/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Edit, Search } from "tabler-icons-react";

function VehicleExaminationInfoTable() {
  const navigate =useNavigate();
  return (
    <>
      <div className="mt-1">
        <div className="text-left bg-[#00AF8F] text-white ">Vehicle</div>
        <Table radius="none" shadow="sm" classNames={{ wrapper: "p-0" }}>
          <TableHeader className=" bg-[#A0D9C1] text-[#00af8f] text-sm  text-left font-bold h-10px">
            <TableColumn
              className="bg-[#A0D9C1] text-[#00af8f] text-sm text-left font-bold border-1 border-white first:rounded-none"
              children={undefined}
            ></TableColumn>
            <TableColumn className="bg-[#A0D9C1] text-[#00af8f] text-sm text-left font-bold border-1 border-white">
              Sub Class
            </TableColumn>
            <TableColumn className="bg-[#A0D9C1] text-[#00af8f] text-sm text-left font-bold border-1 border-white">
              Doc. No.
            </TableColumn>
            <TableColumn className="bg-[#A0D9C1] text-[#00af8f] text-sm text-left font-bold border-1 border-white">
              Chassis No.
            </TableColumn>
            <TableColumn className="bg-[#A0D9C1] text-[#00af8f] text-sm text-left font-bold border-1 border-white">
              Make
            </TableColumn>
            <TableColumn className="bg-[#A0D9C1] text-[#00af8f] text-sm text-left font-bold border-1 border-white">
              Permit No.
            </TableColumn>
            <TableColumn className="bg-[#A0D9C1] text-[#00af8f] text-sm text-left font-bold border-1 border-white">
              VV No.
            </TableColumn>
            <TableColumn className="bg-[#A0D9C1] text-[#00af8f] text-sm text-left font-bold border-1 border-white">
              Engine No
            </TableColumn>
            <TableColumn
              className="bg-[#A0D9C1] text-[#00af8f] text-sm text-left font-bold border-1 border-white last:rounded-sm"
              children={undefined}
            ></TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow className="h-[30px]">
              <TableCell className="border-1  border-greyBorder p-[5px]  text-left ">
                <RadioGroup color="success">
                  <Radio value="abc" color="success"></Radio>
                </RadioGroup>
              </TableCell>
              <TableCell
                className="border-1  border-greyBorder p-[5px]  text-left "
                children={undefined}
              ></TableCell>
              <TableCell className="border-1  border-greyBorder p-[5px]  text-left ">
                KF99999999
              </TableCell>
              <TableCell
                className="border-1   border-greyBorder p-[5px]  text-left "
                children={undefined}
              ></TableCell>
              <TableCell
                className="border-1  border-greyBorder p-[5px]  text-left "
                children={undefined}
              ></TableCell>
              <TableCell
                className="border-1  border-greyBorder p-[5px]  text-left "
                children={undefined}
              ></TableCell>
              <TableCell
                className="border-1  border-greyBorder p-[5px]  text-left "
                children={undefined}
              ></TableCell>
              <TableCell
                className="border-1  border-greyBorder p-[5px]  text-left "
                children={undefined}
              ></TableCell>

              <TableCell
                className="border-1  border-greyBorder p-[5px]  text-left "
                children={undefined}
              >
                <div className="flex">
                  <Search
                    size={20}
                    color="white"
                    className="bg-[#00AF8F] rounded-sm mt-[10px]"
                    onClick={()=>navigate('/MPVVehicleInformation')}
                  />
                  <Edit
                    size="20"
                    color="white"
                    className="bg-[#00AF8F] rounded-sm ml-2 mt-[10px]"
                  />
                </div>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="border-1  border-greyBorder p-[5px]  text-left ">
                <RadioGroup color="success">
                  <Radio value="abc" color="success"></Radio>
                </RadioGroup>
              </TableCell>
              <TableCell
                className="border-1  border-greyBorder p-[5px]  text-left "
                children={undefined}
              ></TableCell>
              <TableCell className="border-1  border-greyBorder p-[5px]  text-left ">
                TINKER BELL DRIVE&TRAILER UNIT
              </TableCell>
              <TableCell className="border-1   border-greyBorder p-[5px]  text-left ">
                HKDL/VIN#5146650
              </TableCell>
              <TableCell
                className="border-1  border-greyBorder p-[5px]  text-left "
                children={undefined}
              ></TableCell>
              <TableCell
                className="border-1  border-greyBorder p-[5px]  text-left "
                children={undefined}
              ></TableCell>
              <TableCell
                className="border-1  border-greyBorder p-[5px]  text-left "
                children={undefined}
              ></TableCell>
              <TableCell
                className="border-1  border-greyBorder p-[5px]  text-left "
                children={undefined}
              ></TableCell>
              <TableCell
                className="border-1  border-greyBorder p-[5px]  text-left "
                children={undefined}
              >
                <div className="flex">
                  <Search
                    size={20}
                    color="white"
                    className="bg-[#00AF8F] rounded-sm mt-[10px]"
                    onClick={()=>navigate('/MPVVehicleInformation')}
                  />
                  <Edit
                    size="20"
                    color="white"
                    className="bg-[#00AF8F] rounded-sm ml-2 mt-[10px]"
                  />
                </div>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="border-1  border-greyBorder p-[5px]  text-left ">
                <RadioGroup color="success">
                  <Radio value="abc" color="success"></Radio>
                </RadioGroup>
              </TableCell>
              <TableCell
                className="border-1  border-greyBorder p-[5px]  text-left "
                children={undefined}
              ></TableCell>
              <TableCell className="border-1  border-greyBorder p-[5px]  text-left ">
                DJ MACK DRIVE (& TRAILER)
              </TableCell>
              <TableCell className="border-1   border-greyBorder p-[5px]  text-left ">
                HKDL/VIN#514651(+514652)
              </TableCell>
              <TableCell
                className="border-1  border-greyBorder p-[5px]  text-left "
                children={undefined}
              ></TableCell>
              <TableCell
                className="border-1  border-greyBorder p-[5px]  text-left "
                children={undefined}
              ></TableCell>
              <TableCell
                className="border-1  border-greyBorder p-[5px]  text-left "
                children={undefined}
              ></TableCell>
              <TableCell
                className="border-1  border-greyBorder p-[5px]  text-left "
                children={undefined}
              ></TableCell>
              <TableCell
                className="border-1  border-greyBorder p-[5px]  text-left "
                children={undefined}
              >
                <div className="flex">
                  <Search
                    size={20}
                    color="white"
                    className="bg-[#00AF8F] rounded-sm mt-[10px]"
                    onClick={()=>navigate('/MPVVehicleInformation')}
                  />
                  <Edit
                    size="20"
                    color="white"
                    className="bg-[#00AF8F] rounded-sm ml-2 mt-[10px]"
                  />
                </div>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="border-1  border-greyBorder p-[5px]  text-left ">
                <RadioGroup color="success">
                  <Radio value="abc" color="success"></Radio>
                </RadioGroup>
              </TableCell>
              <TableCell
                className="border-1  border-greyBorder p-[5px]  text-left "
                children={undefined}
              ></TableCell>
              <TableCell className="border-1  border-greyBorder p-[5px]  text-left ">
                MONSTERS DRIVE
              </TableCell>
              <TableCell className="border-1   border-greyBorder p-[5px]  text-left ">
                HKDL/VIN#514653
              </TableCell>
              <TableCell
                className="border-1  border-greyBorder p-[5px]  text-left "
                children={undefined}
              ></TableCell>
              <TableCell
                className="border-1  border-greyBorder p-[5px]  text-left "
                children={undefined}
              ></TableCell>
              <TableCell
                className="border-1  border-greyBorder p-[5px]  text-left "
                children={undefined}
              ></TableCell>
              <TableCell
                className="border-1  border-greyBorder p-[5px]  text-left  "
                children={undefined}
              ></TableCell>
              <TableCell
                className="border-1  border-greyBorder p-[5px]  text-left "
                children={undefined}
              >
                <div className="flex">
                  <Search
                    size={20}
                    color="white"
                    className="bg-[#00AF8F] rounded-sm mt-[10px]"
                    onClick={()=>navigate('/MPVVehicleInformation')}
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
      </div>
    </>
  );
}
export default VehicleExaminationInfoTable;
