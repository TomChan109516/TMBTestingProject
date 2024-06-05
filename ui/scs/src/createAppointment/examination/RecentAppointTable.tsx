import React, { useEffect, useState } from "react";
import {
  Chip,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
  getKeyValue,
  Button,
} from "@nextui-org/react";
import { useSelector } from "react-redux";
import RecentAppointPopup from "./RecentAppointPopUp";
import dayjs from "dayjs";

export default function RecentAppointTable({recentAppointments}) {
  const [page, setPage] = React.useState(1);
  const rowsPerPage = 10;
  const [showRecentAppointPopup, setshowRecentAppointPopup] = useState(false);
  const [showApiError, setShowApiError] = useState(false);

  const pages = Math.ceil(recentAppointments?.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return recentAppointments?.slice(start, end);
  }, [page, recentAppointments]);

  const handleOpenRecentPopup = async () => {
    setshowRecentAppointPopup(true);
  };

  const closeRecentAppointPopup = (val) => {
    setshowRecentAppointPopup(val);
  };
  useEffect(() => {
    if (recentAppointments.length === 0) {
      setShowApiError(true);
    }
  }, [recentAppointments]);

  return (
    <div className="mt-2 ml-1 mr-1">
      <Table
        radius="none"
        aria-label="Example table with client side pagination"
        bottomContent={
          <div className="flex w-full justify-center pt-0">
            {recentAppointments?.length > 10 ? (
              <Pagination
                isCompact
                showControls
                showShadow
                classNames={{
                  wrapper:
                    "gap-0 overflow-visible h-8  rounded-none border border-divider",
                  item: "w-8 h-8 text-sm rounded-none",
                  prev: "h-8 rounded-none",
                  next: " h-8 rounded-none",
                  cursor:
                    "bg-gradient-to-b shadow-lg from-[#00AF8F] to-[#00AF8F] rounded-none  text-white font-bold h-8  ",
                }}
                page={page}
                total={pages}
                onChange={(page) => setPage(page)}
              />
            ) : (
              ""
            )}
          </div>
        }
        classNames={{
          wrapper: "p-0",
        }}
      >
        <TableHeader className="text-[10px] text-left font-bold">
          <TableColumn
            className="bg-[#A0D9C1] text-[#00AF8F] font-calibri first:rounded-none "
            key="appointmentDate"
            data-testid="Appoint"
          >
            Appoint. Date
          </TableColumn>
          <TableColumn
            className="bg-[#A0D9C1] text-[#00AF8F] font-calibri"
            key="exam"
            data-testid="Exam"
          >
            Exam
          </TableColumn>
          <TableColumn
            className="bg-[#A0D9C1] text-[#00AF8F] font-calibri"
            key="centre"
            data-testid="Center"
          >
            Center
          </TableColumn>
          <TableColumn
            className="bg-[#A0D9C1] text-[#00AF8F] font-calibri"
            key="result"
            data-testid="Result"
          >
            Result
          </TableColumn>
          <TableColumn
            className="bg-[#A0D9C1] text-[#00AF8F] font-calibri "
            key="freeOfCharge"
            data-testid="FOC"
          >
            FOC
          </TableColumn>
          <TableColumn
            className="bg-[#A0D9C1] text-[#00AF8F] font-calibri last:rounded-none "
            key="button"
            children={undefined}
          ></TableColumn>
        </TableHeader>
        <TableBody items={items}>
          {(item) => (
            <TableRow key={item.appointmentDate}>
              {(columnKey) => (
                <TableCell className="text-[10px] text-left bg-[#faf7f7] pb-[1px] pt-0">
                  {columnKey === "button" ? (
                    <Button
                      size="sm"
                      className="w-[20%] pt-[0px] pb-[0px] bg-[#00AF8F] text-white"
                      onClick={handleOpenRecentPopup}
                    >
                      Detail
                    </Button>
                  ) : columnKey === "appointmentDate" ? (
                    dayjs(item.appointmentDate).format("DD/MM/YYYY")
                  ) : (
                    <span>{getKeyValue(item, columnKey)}</span>
                  )}
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
      {showRecentAppointPopup && (
        <RecentAppointPopup
          showRecentAppointPopup={showRecentAppointPopup}
          closeRecentAppointPopup={closeRecentAppointPopup}
        ></RecentAppointPopup>
      )}
    </div>
  );
}
