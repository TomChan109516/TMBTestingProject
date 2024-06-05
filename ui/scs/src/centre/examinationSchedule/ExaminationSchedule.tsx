import {
  Button,
  Input,
  Pagination,
  RadioGroup,
  Radio,
  Select,
  SelectItem,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { Printer, Search } from "tabler-icons-react";
import React, { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { theme } from "../../common/themes/themeConfig";
// import { useSelector } from "react-redux";
import dayjs from "dayjs";
import { useDispatch } from "react-redux";
import { saveSelectedExam } from "./state/centerSlice";

function ExaminationSchedule() {
  const navigate = useNavigate();
  // const  examScheduleResponse = useSelector((state) => state.center.searchExaminationData);
  const [pageSize, setPageSize] = useState(5);
  const [page, setPage] = useState(1);
  const [selectedExam, setSelectedExam] = useState('');
  const [selectedRow, setSelectedRow] = useState({});
  const dispatch = useDispatch();
  const handlePageSize = (e: ChangeEvent<HTMLSelectElement>) => {
    setPageSize(Number(e.target.value));
    setPage(1);
  } 
  const handleGoto = (e: ChangeEvent<HTMLInputElement>) => {
    setPage(Number(e.target.value));
  }
  const examScheduleResponse=[
    {
    visExamScheduleKey: 1,
    centerId: 1,
    examScheduleTypeCode: "Regular",
    examScheduleBeginDate: "2021-12-12",
    examScheduleEndDate: "2022-01-15",
    examScheduleDescription: 120,
    examScheduleLastUpdate: "Venue 1",
  },
    {
    visExamScheduleKey: 2,
    centerId: 1,
    examScheduleTypeCode: "Override",
    examScheduleBeginDate: "2021-12-12",
    examScheduleEndDate: "2022-01-15",
    examScheduleDescription: 120,
    examScheduleLastUpdate: "Venue 1",
  },
    {
    visExamScheduleKey: 3,
    centerId: 1,
    examScheduleTypeCode: "Bi-annual",
    examScheduleBeginDate: "2021-12-12",
    examScheduleEndDate: "2022-01-15",
    examScheduleDescription: 120,
    examScheduleLastUpdate: "Venue 1",
  },
    {
    visExamScheduleKey: 4,
    centerId: 1,
    examScheduleTypeCode: "Regular",
    examScheduleBeginDate: "2021-12-12",
    examScheduleEndDate: "2022-01-15",
    examScheduleDescription: 120,
    examScheduleLastUpdate: "Venue 1",
  },
    {
    visExamScheduleKey: 5,
    centerId: 1,
    examScheduleTypeCode: "Override",
    examScheduleBeginDate: "2021-12-12",
    examScheduleEndDate: "2022-01-15",
    examScheduleDescription: 120,
    examScheduleLastUpdate: "Venue 1",
  },
    {
    visExamScheduleKey: 6,
    centerId: 1,
    examScheduleTypeCode: "Bi-annual",
    examScheduleBeginDate: "2021-12-12",
    examScheduleEndDate: "2022-01-15",
    examScheduleDescription: 120,
    examScheduleLastUpdate: "Venue 1",
  },
    {
    visExamScheduleKey: 7,
    centerId: 1,
    examScheduleTypeCode: "Regular",
    examScheduleBeginDate: "2021-12-12",
    examScheduleEndDate: "2022-01-15",
    examScheduleDescription: 120,
    examScheduleLastUpdate: "Venue 1",
  },
    {
    visExamScheduleKey: 8,
    centerId: 1,
    examScheduleTypeCode: "Override",
    examScheduleBeginDate: "2021-12-12",
    examScheduleEndDate: "2022-01-15",
    examScheduleDescription: 120,
    examScheduleLastUpdate: "Venue 1",
  },
    {
    visExamScheduleKey: 9,
    centerId: 1,
    examScheduleTypeCode: "Bi-annual",
    examScheduleBeginDate: "2021-12-12",
    examScheduleEndDate: "2022-01-15",
    examScheduleDescription: 120,
    examScheduleLastUpdate: "Venue 1",
  },
    {
    visExamScheduleKey: 10,
    centerId: 1,
    examScheduleTypeCode: "Regular",
    examScheduleBeginDate: "2021-12-12",
    examScheduleEndDate: "2022-01-15",
    examScheduleDescription: 120,
    examScheduleLastUpdate: "Venue 1",
  },
    {
    visExamScheduleKey: 11,
    centerId: 1,
    examScheduleTypeCode: "Override",
    examScheduleBeginDate: "2021-12-12",
    examScheduleEndDate: "2022-01-15",
    examScheduleDescription: 120,
    examScheduleLastUpdate: "Venue 1",
  },
    {
    visExamScheduleKey: 12,
    centerId: 1,
    examScheduleTypeCode: "Bi-annual",
    examScheduleBeginDate: "2021-12-12",
    examScheduleEndDate: "2022-01-15",
    examScheduleDescription: 120,
    examScheduleLastUpdate: "Venue 1",
  },
    {
    visExamScheduleKey: 13,
    centerId: 1,
    examScheduleTypeCode: "Regular",
    examScheduleBeginDate: "2021-12-12",
    examScheduleEndDate: "2022-01-15",
    examScheduleDescription: 120,
    examScheduleLastUpdate: "Venue 1",
  },
    {
    visExamScheduleKey: 14,
    centerId: 1,
    examScheduleTypeCode: "Override",
    examScheduleBeginDate: "2021-12-12",
    examScheduleEndDate: "2022-01-15",
    examScheduleDescription: 120,
    examScheduleLastUpdate: "Venue 1",
  },
    {
    visExamScheduleKey: 15,
    centerId: 1,
    examScheduleTypeCode: "Bi-annual",
    examScheduleBeginDate: "2021-12-12",
    examScheduleEndDate: "2022-01-15",
    examScheduleDescription: 120,
    examScheduleLastUpdate: "Venue 1",
  },
    {
    visExamScheduleKey: 16,
    centerId: 1,
    examScheduleTypeCode: "Override",
    examScheduleBeginDate: "2021-12-12",
    examScheduleEndDate: "2022-01-15",
    examScheduleDescription: 120,
    examScheduleLastUpdate: "Venue 1",
  },
    {
    visExamScheduleKey: 17,
    centerId: 1,
    examScheduleTypeCode: "Regular",
    examScheduleBeginDate: "2021-12-12",
    examScheduleEndDate: "2022-01-15",
    examScheduleDescription: 120,
    examScheduleLastUpdate: "Venue 1",
  },
    {
    visExamScheduleKey: 19,
    centerId: 1,
    examScheduleTypeCode: "Override",
    examScheduleBeginDate: "2021-12-12",
    examScheduleEndDate: "2022-01-15",
    examScheduleDescription: 120,
    examScheduleLastUpdate: "Venue 1",
  },
    {
    visExamScheduleKey: 20,
    centerId: 1,
    examScheduleTypeCode: "Regular",
    examScheduleBeginDate: "2021-12-12",
    examScheduleEndDate: "2022-01-15",
    examScheduleDescription: 120,
    examScheduleLastUpdate: "Venue 1",
  },
    {
    visExamScheduleKey: 21,
    centerId: 1,
    examScheduleTypeCode: "Override",
    examScheduleBeginDate: "2021-12-12",
    examScheduleEndDate: "2022-01-15",
    examScheduleDescription: 120,
    examScheduleLastUpdate: "Venue 1",
  },
    {
    visExamScheduleKey: 22,
    centerId: 1,
    examScheduleTypeCode: "Override",
    examScheduleBeginDate: "2021-12-12",
    examScheduleEndDate: "2022-01-15",
    examScheduleDescription: 120,
    examScheduleLastUpdate: "Venue 1",
  },
    {
    visExamScheduleKey: 23,
    centerId: 1,
    examScheduleTypeCode: "Override",
    examScheduleBeginDate: "2021-12-12",
    examScheduleEndDate: "2022-01-15",
    examScheduleDescription: 120,
    examScheduleLastUpdate: "Venue 1",
  },
    {
    visExamScheduleKey: 24,
    centerId: 1,
    examScheduleTypeCode: "Override",
    examScheduleBeginDate: "2021-12-12",
    examScheduleEndDate: "2022-01-15",
    examScheduleDescription: 120,
    examScheduleLastUpdate: "Venue 1",
  },
    {
    visExamScheduleKey: 25,
    centerId: 1,
    examScheduleTypeCode: "Regular",
    examScheduleBeginDate: "2021-12-12",
    examScheduleEndDate: "2022-01-15",
    examScheduleDescription: 120,
    examScheduleLastUpdate: "Venue 1",
  },
]
// const [page, setPage] = useState(examScheduleResponse.length?1:0);
const handleSelection=(e: ChangeEvent<HTMLInputElement>)=>{
  const {value}=e.target;
  const selected = examScheduleResponse.find(row => row.visExamScheduleKey.toString() === value);
  setSelectedRow(selected ?? {});
  dispatch(saveSelectedExam(selected));
}

  return (
    <div>
      <div className=" ml-2 mr-2 ">                                                                                                                                                                                                                                                                                                                                                               
        <div
          className={`text-left bg-[#007F62] text-white text-sm font-[Calibri] font-bold p-2`}
        >
          Examination Schedule
        </div>
        <Table radius="none" shadow="sm" classNames={{ wrapper: "p-0 text-sm" }}>
          <TableHeader
            className={` bg-[#A0D9C1] text-[#00AF8F]  text-sm  text-center  font-[Calibri] font-bold`}
          >
            <TableColumn
              className={`bg-[#A0D9C1] text-[#00AF8F] first:rounded-none w-[2%] text-sm   text-center font-[Calibri] font-bold`}
            >
              {""}
            </TableColumn>
            <TableColumn
              className={`bg-[#A0D9C1] text-[#00AF8F] w-[5%] text-sm  text-center font-[Calibri] font-bold`}
            >
              Center
            </TableColumn>
            <TableColumn
              className={`bg-[#A0D9C1] text-[#00AF8F] text-sm w-[10%]  text-center font-[Calibri] font-bold`}
            >
              Type
            </TableColumn>
            <TableColumn
              className={`bg-[#A0D9C1] text-[#00AF8F]  w-[50%] text-sm  text-center font-[Calibri] font-bold`}
            >
              Effective Period
            </TableColumn>
            <TableColumn
              className={`bg-[#A0D9C1] text-[#00AF8F] text-sm  text-center font-[Calibri] font-bold`}
            >
              Action
            </TableColumn>
            <TableColumn
              className={`bg-[#A0D9C1] text-[#00AF8F] w-[100%]  text-sm text-center font-[Calibri] font-bold`}
            >
              Descrption
            </TableColumn>
            <TableColumn
              className={`bg-[#A0D9C1] text-[#00AF8F] text-sm  text-center font-[Calibri] font-bold`}
            >
              Last Updated
            </TableColumn>
            <TableColumn
              className={`bg-[#A0D9C1] text-[#00AF8F] last:rounded-none text-sm text-center font-[Calibri] font-bold`} children={undefined}            >{}</TableColumn>
          </TableHeader>
          <TableBody>
             {/* .slice((page - 1) * rowsPerPage, page * rowsPerPage) */}
            {examScheduleResponse?.slice((page - 1) * pageSize, page * pageSize).map((item) => {
              return <TableRow key={item.visExamScheduleKey}>
                <TableCell>
                  <RadioGroup value={selectedExam} onValueChange={setSelectedExam}  color="success">
                    <Radio size="sm" classNames={{
                              wrapper:
                                "group-data-[selected=true]:bg-[#00AF8F] group-data-[selected=true]:border-[#00Af8F] text-sm font-[Calibri]",
                                control:'bg-white',
                                base:'border-[#00AF8F]',
                            }}
                            value={item.visExamScheduleKey.toString()} onChange={(e)=>handleSelection(e)}></Radio>
                  </RadioGroup>
                </TableCell>
                <TableCell className=" font-[Calibri] text-sm"> {item.centerId}</TableCell>
                <TableCell className=" font-[Calibri] text-sm"> {item.examScheduleTypeCode}</TableCell>
                <TableCell className=" font-[Calibri] text-sm">
                  {" "}
                  {dayjs(item.examScheduleBeginDate).format('DD/MM/YYYY')} - {dayjs(item.examScheduleEndDate).format('DD/MM/YYYY')}
                </TableCell>
                <TableCell>
                  {item.examScheduleTypeCode ==='Override' && (<Switch
                    defaultSelected
                    size="sm"
                    aria-label="Action"
                    classNames={{
                       wrapper:"group-data-[selected=true]:bg-[#00AF8F] group:data-[pressed=true]:bg-[#00AF8F]"
                    }}
                  />)}
                </TableCell>
                <TableCell className=" font-[Calibri] text-sm">{item.examScheduleDescription}</TableCell>
                <TableCell className=" font-[Calibri] text-sm">{dayjs(item.examScheduleLastUpdate).format('DD/MM/YYYY')}</TableCell>
                <TableCell>
                  <div className="flex">
                    <Search
                      size={20}
                      color="white"
                      className="bg-[#00AF8F] rounded-sm"
                    />

             {item?.examScheduleTypeCode === 'Regular' && (<Printer
                      size="20"
                      color="white"
                      className="bg-[#00AF8F] rounded-sm ml-2"
                    />)}
                  </div>
                </TableCell>
              </TableRow>;
            })}
          </TableBody>
        </Table>
      </div>

      <div className="flex flex-row mt-2 ">
        <div className="ml-1 mt-2 text-sm font-[Calibri] ">Total-{examScheduleResponse?.length}</div>
        <div className="ml-2 w-[80px] ">
          <Select
            labelPlacement="outside-left"
            radius="none"
            size="sm"
            name="center"
            aria-label="center"
            variant="bordered"
            className=" font-[Calibri] text-sm"
            defaultSelectedKeys={"5"}
            value={pageSize}
            onChange={handlePageSize}
          >
            <SelectItem key="5" value={5}> 5</SelectItem>
            <SelectItem key="10" value={10}> 10</SelectItem>
            <SelectItem key="15" value={15}> 15</SelectItem>
          </Select>
        </div>

        <div className="ml-2">
          <Pagination
            isCompact
            showControls={true}
            loop
            siblings={1}
            // showShadow
            // pageSize={pageSize}
            boundaries={1}
            total={Math.ceil(examScheduleResponse.length / pageSize)}
            page={page}
            onChange={(page) =>  setPage(page) }
            classNames={{
              wrapper:
                "gap-0 overflow-visible h-8  rounded-none border border-divider",
              item: "w-8 h-8 text-sm rounded-none",
              prev: "h-8 rounded-none",
              next: "h-8 rounded-none",
              cursor:
                "bg-gradient-to-b shadow-lg from-[#00AF8F] to-[#00AF8F] rounded-none  text-white font-[Calibri] font-bold h-8  ",
            }}
          />
        </div>
        <div className="w-[60px] ml-2 text-sm font-[Calibri] mt-1"> Go to </div>
        <div className="w-10">
          <Input
            className="flex-row font-[Calibri] text-sm"
            size="sm"
            radius="none"
            variant="bordered"
            value={page.toString()}
            onChange={handleGoto}
          />
        </div>
      </div>
      <div className="float-left mt-4 ml-1">
        <Button
          className="bg-[#00AF8F] rounded text-white font-[Calibri] font-bold text-sm "
          size="sm"
          radius="none"
          onClick={() => { navigate('/overrideexamschedule?type=Regular') }}
        >
          Create Regular
        </Button>

        <Button
          className={`bg-[#00AF8F] text-white font-[Calibri] font-bold  rounded ml-1 text-sm`}
          size="sm"
          radius="none"
          onClick={() => { navigate('/taxibischedule') }}
        >
          Create Bi-annual
        </Button>
        <Button
          className={`bg-[#00AF8F] text-[white] font-[Calibri] font-bold border  rounded ml-1 text-sm`}
          variant="bordered"
          size="sm"
          radius="none"
          onClick={() => {
            navigate("/overrideexamschedule/?type=Override");
          }}
        >
          Override
        </Button>

        <Button
          className={`bg-[#ffffff] text-[${theme?.colors?.white}] font-[Calibri] font-bold border border-[lightgray]  rounded ml-1 text-sm`} //white: '#fff'
          variant="bordered"
          size="sm"
          radius="none"
          type="submit"
        >
          Copy
        </Button>

        <Button
          className={`bg-[#ffffff] rounded font-[Calibri] font-bold border border-[lightgray]  ml-1 text-sm`}
          variant="flat"
          size="sm"
          radius="none"
          type="submit"
        >
          Delete
        </Button>
      </div>
    </div>
  );
}
export default ExaminationSchedule;