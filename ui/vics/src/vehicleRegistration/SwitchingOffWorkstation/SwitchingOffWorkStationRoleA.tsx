import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { FaCarAlt } from "react-icons/fa";
import { IconArrowBadgeRight } from "@tabler/icons-react";
import SwitchingOffWorkStationRoleB from "./SwitchingOffWorkStationRoleB";

const tableData = [
  {
    id: "01",
    loading_status: "Operation",
    stationA: "",
    stationB: "",
    stationC: "",
    stationD: "",
    stationE: "",
    status: "",
  },
  {
    id: "02",
    loading_status: "Reg. Mark",
    stationA: "",
    stationB: "",
    stationC: "",
    stationD: "",
    stationE: "",
    status: "",
  },
  {
    id: "03",
    loading_status: "Appoint. No",
    stationA: "",
    stationB: "",
    stationC: "",
    stationD: "",
    stationE: "",
    status: "",
  },
  {
    id: "04",
    loading_status: "Option (ON/OFF)",
    stationA: "",
    stationB: "",
    stationC: "",
    stationD: "",
    stationE: "",
    status: "",
  },
  {
    id: "05",
    loading_status: "",
    stationA: "",
    stationB: "",
    stationC: "",
    stationD: "",
    stationE: "",
    status: "",
  },
  {
    id: "06",
    loading_status: "",
    stationA: "",
    stationB: "",
    stationC: "",
    stationD: "",
    stationE: "",
    status: "",
  },
];

function SwitchingOffWorkStationRoleA() {
  
  const handleStationA = (id) => {
    switch (id) {
      case "01":
        return (
          <div className="flex items-center justify-center ">
            <Button
              radius="none"
              size="sm"
              className="bg-darkPink ml-1 h-6 "
            >
              STOP
            </Button>{" "}
            <Button
              radius="none"
              size="sm"
              className="bg-lightGreenButton ml-1 h-6"
            >
              GO
            </Button>
          </div>
        );
      case "02":
        return (
          <div className="flex justify-end ">
            {" "}
           
            <Button size="sm" className="flex justify-end bg-white border-1 boder-darkCyan ml-1 text-start h-6">
              <IconArrowBadgeRight stroke={2} className="bg-cyan" />
            </Button>
          </div>
        );
      case "03":
        return "";
      case "04":
        return (
          <div className="flex items-center justify-center ">
            <div className=" grid grid-cols-1 justify-items-center ">
              <div>ART</div>
              <div className="w-[18px] h-[18px] bg-darkLime rounded-full mt-[1px]" />
            </div>
            <div className=" grid grid-cols-1 justify-items-center ml-2 ">
              <div>VPT</div>
              <div className="flex w-[18px] h-[18px] bg-darkLime rounded-full mt-[1px]" />
            </div>
            <div className=" grid grid-cols-1 justify-items-center ml-2 ">
              <div>TMB</div>
              <div className="w-[18px] h-[18px] bg-darkLime rounded-full mt-[1px]" />
            </div>
          </div>
        );
      case "05":
        return (
          <div className="flex items-center justify-center ">
            {" "}
            <Button
              size="sm"
              radius="none"
              className="bg-tropicalrainforest ml-1 text-white h-6"
            >
              Clear Station
            </Button>
          </div>
        );
    }
  };
  const handleStationB = (id) => {
    switch (id) {
      case "01":
        return (
          <div className="flex items-center justify-center ">
            <Button
              radius="none"
              size="sm"
              className="bg-darkPink ml-1 h-6 "
            >
              STOP
            </Button>{" "}
            <Button
              radius="none"
              size="sm"
              className="bg-lightGreenButton ml-1 h-6"
            >
              GO
            </Button>
          </div>
        );
      case "02":
        return (
          <div className="flex justify-end  ">
            {" "}
            <span>AAA</span>
            <span >
            <Button size="sm" className="flex justify-end bg-white border-1 ml-1 text-end h-6">
              <IconArrowBadgeRight stroke={2} className="bg-cyan" />
            </Button>
            </span> 
          </div>
        );
      case "03":
        return (
          "41202200001"
        );
      case "04":
        return (
          <div className="flex items-center justify-center ">
          <div className=" grid grid-cols-1 justify-items-center  ">
            <div>ART</div>
            <div className="w-[18px] h-[18px] bg-darkLime rounded-full mt-[1px]" />
          </div>
          <div className=" grid grid-cols-1 ml-2 justify-items-center  ">
            <div>VPT</div>
            <div className="flex w-[18px] h-[18px] bg-darkLime rounded-full mt-[1px]" />
          </div>
          <div className=" grid grid-cols-1 ml-2 justify-items-center  ">
            <div>TMB</div>
            <div className="w-[18px] h-[18px] bg-darkLime rounded-full mt-[1px]" />
          </div>
          <div className=" grid grid-cols-1 ml-2 justify-items-center  ">
            <div>Alt.IRS</div>
            <div className="w-[18px] h-[18px] bg-lightOrange rounded-full mt-[1px]" />
          </div>
        </div>
        );
      case "05":
        return (
          <div className="flex items-center justify-center ">
            {" "}
            <Button
              size="sm"
              radius="none"
              className="bg-tropicalrainforest ml-1 text-white h-6"
            >
              Clear Station
            </Button>
          </div>
        );
    }
  };
  const handleStationC = (id) => {
    switch (id) {
      case "01":
        return (
          <div className="flex items-center justify-center ">
            <Button
              radius="none"
              size="sm"
              className="bg-red ml-1 h-6 "
            >
              STOP
            </Button>{" "}
            <Button
              radius="none"
              size="sm"
              className="bg-lightGreen2 ml-1 h-6"
            >
              GO
            </Button>
          </div>
        );
      case "02":
        return (
          <div className="flex justify-end  ">
            {" "}
            <span>BBB</span>
            <span >
            <Button size="sm" className="flex justify-end bg-white border-1 ml-1 text-end h-6">
              <IconArrowBadgeRight stroke={2} className="bg-cyan" />
            </Button>
            </span> 
          </div>
        );
      case "03":
        return (
          "41202200001"
        );
      case "04":
        return (
          <div className="flex items-center justify-center ">
          <div className=" grid grid-cols-1 justify-items-center  ">
            <div>ART</div>
            <div className="w-[18px] h-[18px] bg-darkLime rounded-full mt-[1px]" />
          </div>
          <div className=" grid grid-cols-1 ml-2 justify-items-center  ">
            <div>VPT</div>
            <div className="flex w-[18px] h-[18px] bg-darkLime rounded-full mt-[1px]" />
          </div>
          <div className=" grid grid-cols-1 ml-2 justify-items-center  ">
            <div>TMB</div>
            <div className="w-[18px] h-[18px] bg-darkLime rounded-full mt-[1px]" />
          </div>
          <div className=" grid grid-cols-1 ml-2 justify-items-center  ">
            <div>Alt.IRS</div>
            <div className="w-[18px] h-[18px] bg-navGrey rounded-full mt-[1px]" />
          </div>
        </div>
        );
      case "05":
        return (
          <div className="flex items-center justify-center ">
            {" "}
            <Button
              size="sm"
              radius="none"
              className="bg-tropicalrainforest ml-1 text-white h-6"
            >
              Clear Station
            </Button>
          </div>
        );
    }
  };
  const handleStationD = (id) => {
    switch (id) {
      case "01":
        return (
          <div className="flex items-center justify-center ">
            <Button
              radius="none"
              size="sm"
              className="bg-red ml-1 h-6 "
            >
              STOP
            </Button>{" "}
            <Button
              radius="none"
              size="sm"
              className="bg-lightGreen2  ml-1 h-6"
            >
              GO
            </Button>
          </div>
        );
      case "02":
        return (
          <div className="flex justify-end  ">
            {" "}
            <span>CCC</span>
            <span >
            <Button size="sm" className="flex justify-end bg-white border-1 ml-1 text-end h-6">
              <IconArrowBadgeRight stroke={2} className="bg-cyan" />
            </Button>
            </span> 
          </div>
        );
      case "03":
        return (
          "41202200001"
        );
      case "04":
        return (
          <div className="flex items-center justify-center ">
          <div className=" grid grid-cols-1 justify-items-center  ">
            <div>ART</div>
            <div className="w-[18px] h-[18px] bg-darkLime rounded-full mt-[1px]" />
          </div>
          <div className=" grid grid-cols-1 ml-2 justify-items-center ">
            <div>VPT</div>
            <div className="flex w-[18px] h-[18px] bg-darkLime rounded-full mt-[1px]" />
          </div>
          <div className=" grid grid-cols-1 ml-2 justify-items-center ">
            <div>TMB</div>
            <div className="w-[18px] h-[18px] bg-darkLime rounded-full mt-[1px]" />
          </div>
          <div className=" grid grid-cols-1 ml-2 justify-items-center ">
            <div>Alt.IRS</div>
            <div className="w-[18px] h-[18px] bg-navGrey rounded-full mt-[1px]" />
          </div>
        </div>
        );
      case "05":
        return (
          <div className="flex items-center justify-center ">
            {" "}
            <Button
              size="sm"
              radius="none"
              className="bg-tropicalrainforest ml-1 text-white h-6"
            >
              Clear Station
            </Button>
          </div>
        );
    }
  };
  const handleStationE = (id) => {
    switch (id) {
      case "01":
        return (
         ""
        );
      case "02":
        return (
        "105044"
        );
      case "03":
        return (
          "41202200001"
        );
      case "04":
        return (
        ''
        );
      case "05":
        return (
          <div className="flex items-center justify-center ">
            {" "}
            <Button
              size="sm"
              radius="none"
              className="bg-tropicalrainforest ml-1 text-white h-6"
            >
              Clear Station
            </Button>
          </div>
        );
    }
  };
  return (
    <div>
      <Table radius="none" shadow="sm" classNames={{ wrapper: "p-0 " }}>
        <TableHeader className="h-4 flex flex-grow items-center justify-center ">
          <TableColumn className="bg-darkgreen border-1  flex flex-row items-center justify-center text-white text-center text-sm font-bold first:rounded-none last:rounded-none">
            <div className="flex items-center ">Loading Status</div>
          </TableColumn>
          <TableColumn className="bg-darkgreen border-1  text-white text-center text-sm font-bold ">
            <div className="flex items-center justify-center ">
              <FaCarAlt className="mr-1" /> Station A{" "}
              <Button size="sm" className="bg-lightGreenButton ml-1 h-6">
                ON
              </Button>
            </div>
          </TableColumn>
          <TableColumn className="bg-darkgreen border-1 text-white text-center text-sm font-bold ">
            <div className="flex items-center justify-center ">
              <FaCarAlt className="mr-1" /> Station B{" "}
              <Button size="sm" className="bg-lightGreenButton ml-1 w-[1%] h-6">
                ON
              </Button>
            </div>
          </TableColumn>
          <TableColumn className="bg-darkgreen border-1  text-white items-center text-center text-sm font-bold ">
            <div className="flex items-center justify-center ">
              <FaCarAlt className="mr-1  " /> Station C{" "}
              <Button size="sm" className="bg-lightGreenButton ml-1 h-6">
                ON
              </Button>
            </div>
          </TableColumn>
          <TableColumn className="bg-darkgreen border-1   text-white text-center text-sm font-bold ">
            <div className="flex items-center justify-center ">
              <FaCarAlt style={{ color: "red" }} className="mr-1  " /> Station D{" "}
              <Button size="sm" className="bg-lightGreenButton ml-1 h-6">
                ON
              </Button>
            </div>
          </TableColumn>
          <TableColumn className="bg-darkgreen  border-1  text-white text-center text-sm font-bold ">
            <div className="flex items-center justify-center "> Station E</div>
          </TableColumn>
          <TableColumn
            className="bg-darkgreen border-1 text-white text-center text-sm font-bold "
            children={undefined}
          ></TableColumn>
        </TableHeader>
        <TableBody>
          {tableData.map((details) => {
            return (
              <TableRow
                key={details.id}
                className="even:bg-[#e7fbf6] odd:bg-[#f9ffff] font-calibri text-center"
              >
                <TableCell className={details.id==="05"?" font-calibri font-bold w-[18%]  text-sm border-1 border-greyBorder   text-center": "bg-tropicalrainforest font-calibri font-bold w-[18%]  text-sm border-1 border-greyBorder   text-center "}>
                  <div className="flex justify-between text-white px-4">
                    {details.id === "05" ? (
                      <Button
                        radius="none"
                        size="md"
                        className="bg-tropicalrainforest border-2 text-white h-7"
                      >
                        Clear Lane
                      </Button>
                    ) : (
                      details.loading_status
                    )}
                  </div>
                </TableCell>
                <TableCell className={ details.id==="06"? "font-calibri bg-tropicalrainforest font-bold w-[2%] text-sm border-1 border-greyBorder" : "font-calibri font-bold w-[2%] text-sm border-1 border-greyBorder   "}>
                  {handleStationA(details.id)}
                </TableCell>
                <TableCell className={ details.id==="06"? "font-calibri bg-tropicalrainforest font-bold w-[2%] text-sm border-1 border-greyBorder" : "font-calibri font-bold w-[2%] text-sm border-1 border-greyBorder   "}>
                  {handleStationB(details.id)}
                </TableCell>
                <TableCell className={ details.id==="06"? "font-calibri bg-tropicalrainforest font-bold w-[2%] text-sm border-1 border-greyBorder" : "font-calibri font-bold w-[2%] text-sm border-1 border-greyBorder   "}>
                {handleStationC(details.id)}
                </TableCell>
                <TableCell className={ details.id==="06"? "font-calibri bg-tropicalrainforest font-bold w-[2%] text-sm border-1 border-greyBorder" : "font-calibri font-bold w-[2%] text-sm border-1 border-greyBorder   "}>
                {handleStationD(details.id)}
                </TableCell>
                <TableCell className={ details.id==="06"? "font-calibri bg-tropicalrainforest font-bold w-[14%] text-sm border-1 border-greyBorder" : "font-calibri font-bold w-[14%] text-sm border-1 border-greyBorder   "}>
                {handleStationE(details.id)}
                </TableCell>

                <TableCell className={ details.id==="06"? "font-calibri bg-tropicalrainforest font-bold text-sm border-1 border-greyBorder" : "font-calibri font-bold text-sm border-1 border-greyBorder   "}>
                  {details.status}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <SwitchingOffWorkStationRoleB />
    </div>
  );
}

export default SwitchingOffWorkStationRoleA;
