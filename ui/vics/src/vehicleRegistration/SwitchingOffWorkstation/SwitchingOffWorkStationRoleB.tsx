import {
    Pagination,
    Select,
    SelectItem,
    Switch,
    Table,
    TableBody,
    TableCell,
    TableColumn,
    TableHeader,
    TableRow,
    cn,
  } from "@nextui-org/react";
import React from "react";
  const uservalidityPeriodData = [
    {
      id: "01",
      testType: "HT",
      status1:"----",
      status2:"PASS",
      status3:"PASS",
      status4:'PASS',
      status5:'PASS',
      status6:'',
    },
    {
      id: "02",
      testType: "VI",
      status1:"----",
      status2:"PASS",
      status3:"PASS",
      status4:'PASS',
      status5:'PASS',
      status6:'',
    },
    {
      id: "03",
      testType: "Brake",
      status1:"----",
      status2:"----",
      status3:"FAIL",
      status4:'FAIL',
      status5:'PASS',
      status6:'',
    },
    {
      id: "04",
      testType: "Speedometer",
      status1:"----",
      status2:"----",
      status3:"SKIP",
      status4:'SKIP',
      status5:'PASS',
      status6:'',
    
      
    },
    {
      id: "05",
      testType: "SDD",
      status1:"----",
      status2:"----",
      status3:"----",
      status4:'PASS',
      status5:'PASS',
      status6:'',
    },
    {
      id: "06",
      testType: "SLD",
      status1:"----",
      status2:"----",
      status3:"----",
      status4:'----',
      status5:'PASS',
      status6:'',
      
    },
    {
      id: "07",
      testType: "Teximeter",
      status1:"----",
      status2:"----",
      status3:"----",
      status4:'----',
      status5:'PASS',
      status6:'',
    },
    {
      id: "08",
      testType: "UCI",
      status1:"----",
      status2:"----",
      status3:"----",
      status4:'----',
      status5:'PASS',
      status6:'',
    
    },
  ];
  
  function SwitchingOffWorkStationRoleB() {
   
    return (
      <div className="">
        <Table hideHeader={true} radius="none" shadow="sm" classNames={{ wrapper: "p-0 " }}>
          <TableHeader  >
            <TableColumn className="bg-darkgreen border-1 text-white text-center text-sm font-bold first:rounded-none last:rounded-none" children={undefined}>
              
            </TableColumn>
            <TableColumn className="bg-darkgreen border-1  border-greyBorder  text-white text-center text-sm font-bold " children={undefined}>
              
            </TableColumn>
            <TableColumn className="bg-darkgreen border-1  text-white text-center text-sm font-bold " children={undefined}>
              
            </TableColumn>
            <TableColumn className="bg-darkgreen border-1   text-white text-center text-sm font-bold " children={undefined}>
              
            </TableColumn>
            <TableColumn className="bg-darkgreen border-1 text-white text-center text-sm font-bold " children={undefined}>
           
            </TableColumn>
            <TableColumn className="bg-darkgreen border-1 text-white text-center text-sm font-bold " children={undefined}>
           
            </TableColumn>
            <TableColumn className="bg-darkgreen border-1 text-white text-center text-sm font-bold " children={undefined}>
           
            </TableColumn>
          </TableHeader>
          <TableBody>
            {uservalidityPeriodData.map((details) => {
              return (
                <TableRow
                  key={details.id}
                  className="even:bg-[#e7fbf6] odd:bg-[#f9ffff] border-1 border-greyBorder h-6 font-calibri text-center"
                >
                  <TableCell className=" font-calibri font-bold w-[1%]  text-sm    text-center  ">
                  <div className="flex justify-between px-4">
                    {details.testType} <span className=""> <Switch
                        name="switch"
                        size="sm"
                        title='switch'
                        placeholder="Active"
                        onChange={() => {
                        //   handleSwitchChange();
                        }}
                        startContent={
                          <div className="flex justify-center items-center text-white ">
                            Active
                          </div>
                        }
                        endContent={
                          <div className="flex justify-center items-center text-white ">
                            Active
                          </div>
                        }
                        classNames={{
                          wrapper:
                            "h-[24px] bg-tropicalrainforest overflow-visible   group-data-[selected=true]:bg-navGrey w-[80px] ",
                          thumb: cn(
                            "w-5 h-5 shadow-md",
                            "group-data-[hover=true]:border-primary",
                            "group-data-[selected=true]:ml-12",
                            "group-data-[pressed=true]:w-7",
                            "group-data-[selected]:group-data-[pressed]:ml-4"
                          ),
                        }}
                        defaultSelected
                      />
                      </span>
                      </div>

                  </TableCell>
                  <TableCell className=" font-calibri font-bold w-[14%] border-1 border-greyBorder   text-sm    text-center  ">
                    {details.status1}
                  </TableCell>
                  <TableCell className="   text-center w-[14%] border-1 border-greyBorder  font-calibri font-bold text-sm">
                    {details.status2}
                  </TableCell>
                  <TableCell className="   text-center w-[14%] font-calibri border-1 border-greyBorder font-bold text-sm">
                    {details.status3}
                  </TableCell>
                  <TableCell className="   text-center w-[14%] font-calibri border-1 border-greyBorder font-bold text-sm">
                    {details.status4}
                  </TableCell>
                  <TableCell className="   text-center w-[14%]  font-calibri border-1 border-greyBorder font-bold text-sm">
                    {details.status5}
                  </TableCell>
  
                  <TableCell className=" text-center font-calibri border-1 border-greyBorder text-sm" >
                  {details.status6}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    );
  }
  
  export default SwitchingOffWorkStationRoleB;
  