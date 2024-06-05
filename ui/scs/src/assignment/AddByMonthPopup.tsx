import {  Table,TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";
import React, { useState } from "react";



const datesOfMonth=[
    {id:1,
    
    dates:
    [
    {},
    {},
    {},
    {},
    {id:1, date:"01/12/2023"}]

   },
    {id:2,
    
    dates:
    [
    {id:1, date:"01/12/2023"},
    {id:2, date:"07/12/2023"},
    {id:3, date:"12/12/2023"},
    {id:4, date:"17/12/2023"},
    {id:5, date:"22/12/2023"}]}]

//    },
//     {id:1,
//     day:"Mon",
//     dates:
//     [
//     {id:1, date:"01/12/2023"},
//     {id:1, date:"07/12/2023"},
//     {id:1, date:"12/12/2023"},
//     {id:1, date:"17/12/2023"},
//     {id:1, date:"22/12/2023"},
//     {id:1, date:"27/12/2023"},]

//    },
//     {id:1,
//     day:"Mon",
//     dates:
//     [
//     {id:1, date:"01/12/2023"},
//     {id:1, date:"07/12/2023"},
//     {id:1, date:"12/12/2023"},
//     {id:1, date:"17/12/2023"},
//     {id:1, date:"22/12/2023"},
//     {id:1, date:"27/12/2023"},]

//    },
//     {id:1,
//     day:"Mon",
//     dates:
//     [
//     {id:1, date:"01/12/2023"},
//     {id:1, date:"07/12/2023"},
//     {id:1, date:"12/12/2023"},
//     {id:1, date:"17/12/2023"},
//     {id:1, date:"22/12/2023"},
//     {id:1, date:"27/12/2023"},]

//    },
//     {id:1,
//     day:"Mon",
//     dates:
//     [
//     {id:1, date:"01/12/2023"},
//     {id:1, date:"07/12/2023"},
//     {id:1, date:"12/12/2023"},
//     {id:1, date:"17/12/2023"},
//     {id:1, date:"22/12/2023"},
//     {id:1, date:"27/12/2023"},]

//    },
//     {id:1,
//     day:"Mon",
//     dates:
//     [
//     {id:1, date:"01/12/2023"},
//     {id:1, date:"07/12/2023"},
//     {id:1, date:"12/12/2023"},
//     {id:1, date:"17/12/2023"},
//     {id:1, date:"22/12/2023"},
//     {id:1, date:"27/12/2023"},]

//    },




export default function AddByMonthPopup(){
    const[monthDates,setMonthDates]=useState(datesOfMonth)


    return(
        <div className="mt-[10px]" >
          <Table radius="none"  className=" ">
        <TableHeader className=" bg-[#A0D9C1] text-[#00AF8F] text-sm  text-center font-bold">
          <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold border-1 border-white first:rounded-sm ">
            Mon
            <div className="text-[red]">
                <h2>Sat</h2>
            </div>
          </TableColumn>

          <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold border-1 border-white">
            Tues
            <div className="text-[red]">
                <h2>Sun</h2>
            </div>
          </TableColumn>
          <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold border-1 border-white">
            Wed
          </TableColumn>
          <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold border-1 border-white">
          Thur
          </TableColumn>
          <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold border-1 border-white">
            Fri
          </TableColumn>
          
        </TableHeader>
        <TableBody>
            
        {monthDates.map((data) => (
                            <TableRow className=" border-1 border-[#A0D9C1] text-left">
                                <TableCell className="border-1 border-[#eff1f0] ">{data.dates.date}</TableCell>
                                <TableCell className="border-1 border-[#eff1f0]">{data.dates.date}</TableCell>
                                <TableCell className="border-1 border-[#eff1f0]">{data.dates.date}</TableCell>
                                <TableCell className="border-1 border-[#eff1f0]">{data.dates.date}</TableCell>
                                <TableCell className="border-1 border-[#eff1f0]">{data.dates.date}</TableCell>
                            </TableRow>
                        ))}
          
        </TableBody>
      </Table>    
                        </div>
    )
}