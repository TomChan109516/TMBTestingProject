import React, { useState } from "react";
import {
  Pagination,
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { Search } from "tabler-icons-react";
import { useNavigate } from "react-router-dom";

function CreateAppointmentTable({vehicleDetails}) {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const[pageSize,setPageSize]=useState("10")
  const handleSearch=(selected)=>{
    navigate(`/examination?vehicleId=${selected}`)
  }

  return (
    <div className="ml-1 mr-1">
      <Table radius="none" shadow="sm" classNames={{ wrapper: "p-0" }}>
        <TableHeader className=" bg-[#A0D9C1] text-[#009B77]  font-[Calibri]  text-sm  text-center font-bold">
          <TableColumn className=" first:rounded-sm bg-[#A0D9C1] text-[#009B77]  font-[Calibri]  text-sm   text-center font-bold border-1 border-white">
            {""}
          </TableColumn>
          <TableColumn className="bg-[#A0D9C1]  font-[Calibri]  text-sm text-[#009B77]    text-left    font-bold border-1 border-white">
            VALID/Non-VALID
          </TableColumn>
          <TableColumn className="bg-[#A0D9C1] text-[#009B77]  font-[Calibri]  text-sm   text-left    font-bold border-1 border-white">
            Class
          </TableColumn>
          <TableColumn className="bg-[#A0D9C1] text-[#009B77]     text-left  font-[Calibri]  text-sm font-bold border-1 border-white">
            Vehicle ID
          </TableColumn>
          <TableColumn className="bg-[#A0D9C1] text-[#009B77]    text-left   font-[Calibri]  text-sm font-bold border-1 border-white">
            Reg.Mark
          </TableColumn>
          <TableColumn className="bg-[#A0D9C1] text-[#009B77]     text-left   font-[Calibri]  text-sm font-bold border-1 border-white">
            Chassis No.
          </TableColumn>
          <TableColumn className="bg-[#A0D9C1] text-[#009B77]     text-left   font-[Calibri]  text-sm font-bold border-1 border-white">
            Make
          </TableColumn>
          <TableColumn className="bg-[#A0D9C1] text-[#009B77]  font-[Calibri]   text-left   text-sm font-bold border-1 border-white">
            C&E No.
          </TableColumn>
          <TableColumn className="bg-[#A0D9C1] text-[#009B77]  font-[Calibri]    text-left     text-sm font-bold border-1 border-white">
            Doc. NO
          </TableColumn>
          <TableColumn className="bg-[#A0D9C1] text-[#009B77]  font-[Calibri]     text-left    text-sm font-bold border-1 border-white">
            T.A. No
          </TableColumn>
          <TableColumn className="last:rounded-sm bg-[#A0D9C1] text-[#009B77]  font-[Calibri]  text-sm   text-left  font-bold border-1 border-white">
            Master/Child
          </TableColumn>
        </TableHeader>
        <TableBody>
          {vehicleDetails?.slice((page - 1) * parseInt(pageSize), page * parseInt(pageSize)).map((details) => {
            return (
              <TableRow key={details.vehicleId}>
                <TableCell className="border-1  border-greyBorder p-[6px]  text-center">
                    <Search
                      size={18}
                      data-testid="search"
                      className="bg-[#00AF8F] text-white rounded-sm ml-2"
                      onClick={() => handleSearch(details.vehicleId)}
                    />
                </TableCell>
                <TableCell data-testid="vaild" className="border-1  font-[Calibri]  text-sm border-greyBorder  text-left">
                  {details.vehicleRecordTypeCode}
                </TableCell>
                <TableCell data-testid="class" className="border-1  border-greyBorder font-[Calibri]  text-sm   text-left  ">
                  {details.vehicleClassCode}
                </TableCell>
                <TableCell data-testid="vehicleid" className="border-1  border-greyBorder   text-left   font-[Calibri]  text-sm ">
                  {details.vehicleId}
                </TableCell>
                <TableCell data-testid="RegMark" className="border-1  border-greyBorder  text-left  font-[Calibri]  text-sm">
                  {details.vehicleRegMarkNumber}
                </TableCell>
                <TableCell data-testid="chassisno" className="border-1  border-greyBorder  text-left  font-[Calibri]  text-sm">
                  {details.vehicleChasisNumber}
                </TableCell>
                <TableCell data-testid="Make" className="border-1  border-greyBorder   text-left  font-[Calibri]  text-sm">
                  {details.vehicleMakeId}
                </TableCell>
                <TableCell data-testid="ceNo" className="border-1  border-greyBorder  text-left  font-[Calibri]  text-sm">
                  {details.cERefNumber}
                </TableCell>
                <TableCell data-testid="docno" className="border-1  border-greyBorder   text-left  font-[Calibri]  text-sm">
                  {details.vehicleRegistrationDocumentTransactionNumber}
                </TableCell>
                <TableCell data-testid="TaNo" className="border-1  border-greyBorder   text-left  font-[Calibri]  text-sm">
                  {details.vehicleTypeApprovalNumber}
                </TableCell>
                <TableCell data-testid="master" className="border-1  border-greyBorder  text-left  font-[Calibri]  text-sm">
                  {details.masterChild}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
{vehicleDetails?.length>10 &&  (<div className="flex flex-row mt-2 ">
        <div className="ml-1 font-[Calibri] text-sm mt-2 font-bold">
          Showing 1 to {page} of {vehicleDetails.length} rows
        </div>
        <div className="ml-2 w-[80px] ">
          <Select
            labelPlacement="outside-left"
            radius="none"
            size="sm"
            name="pageSize"
            value={pageSize}
            onChange={(e) => setPageSize(e.target.value)}
            aria-label="center"
            variant="bordered"
          >
            <SelectItem key="10" value="10">10 </SelectItem>
            <SelectItem key="20" value="20">20 </SelectItem>
            <SelectItem key="30" value="30">30 </SelectItem>
            <SelectItem key="40" value="40">40 </SelectItem>
            <SelectItem key="50" value="50">50 </SelectItem>
          </Select>
        </div>
        <span className=" flex ml-2 mt-2 font-[Calibri] text-sm font-bold">
          rows per page
        </span>

        <div className="ml-[10%] mt-2">
          <Pagination
            showControls
            boundaries={20}
            siblings={2}
            data-testid="pagination"
            page={page}
            total={Math.ceil(vehicleDetails.length / pageSize)}
            onChange={(page) =>  setPage(page) }
            classNames={{
              wrapper: "overflow-visible h-8  rounded-none ",
              item: "w-8 h-8 text-small rounded-none bg-transparent ",
              prev: "rounded-none",
              next: "rounded-none",
              cursor:
                "bg-gradient-to-r shadow-lg from-[#009b77] to-[#009b77] rounded-none  text-white font-bold h-7 ",
            }}
            initialPage={page}
          />
        </div>
      </div>)}
    </div>
  );
}
export default CreateAppointmentTable;