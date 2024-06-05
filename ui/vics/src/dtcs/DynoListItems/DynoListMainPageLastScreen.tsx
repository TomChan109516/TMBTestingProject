import {
  Switch,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tabs,
  cn,
} from "@nextui-org/react";
import React from "react";
function DynoListMainPageLastScreen() {
  return (
    <div className="ml-12 mt-8 mb-10 mr-7 ">
      <div className="flex flex-col items-start">
        <div className="font-bold mb-2">
          <p> Dyno Room Control -Dyno Room 1</p>
        </div>

        <div className="flex items-center mb-2 mt-5">
          <span className="font-bold mr-2">Station Open/Close:</span>
          <Switch
            name="switch"
            size="sm"
            startContent={<p>Open</p>}
            endContent={<p>Close</p>}
            classNames={{
              wrapper:
                "h-[24px] bg-limeGreen overflow-visible group-data-[selected=true]:bg-persianGreen w-[80px] ml-8",
              thumb: cn(
                "w-5 h-5 shadow-md",
                "group-data-[hover=true]:border-primary",
                "group-data-[selected=true]:ml-12",
                "group-data-[pressed=true]:w-7",
                "group-data-[selected]:group-data-[pressed]:ml-4"
              ),
            }}
            value="switch"
            defaultSelected
          />
        </div>

        <div>
          <div className="mt-2">
            <Tabs
              aria-label="Tabs colors"
              radius="none"
              classNames={{
                tabContent:
                  "group-data-[selected=true]:bg-persianGreen  group-data-[selected=true]:text-white text-white  px-7 py-7 bg-[gray]",
                tab: "max-w-fit px-0 h-5   text-center  bg-[gray]  mt-1 ",
                tabList: "justify-content: flex-start",
              }}
            >
              <Tab key="Dyno Workload List" title="Dyno Workload List">
                <div className=""></div>
              </Tab>
              <Tab key="Dyno Draw List" title="Dyno Draw List">
                <div className="">{/* <AppNumberScreenTable /> */}</div>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>

      <Table radius="none" shadow="sm" classNames={{ wrapper: "p-0 " }}>
        <TableHeader>
          <TableColumn
            className="bg-darkgreen text-white text-center text-sm font-bold border-1 border-white first:rounded-none last:rounded-none"
            children="undefined"
          ></TableColumn>
          <TableColumn className="bg-darkgreen text-white text-center text-sm font-bold border-1 border-white first:rounded-none last:rounded-none">
            Dyno Room
          </TableColumn>
          <TableColumn className="bg-darkgreen text-white text-center text-sm font-bold border-1 border-white first:rounded-none last:rounded-none">
            Appt Number
          </TableColumn>
          <TableColumn className="bg-darkgreen text-white text-center text-sm font-bold border-1 border-white first:rounded-none last:rounded-none">
            Vehicle Class
          </TableColumn>
          <TableColumn className="bg-darkgreen text-white text-center text-sm font-bold border-1 border-white first:rounded-none last:rounded-none">
            Reg.Mark
          </TableColumn>
          <TableColumn className="bg-darkgreen text-white text-center text-sm font-bold border-1 border-white first:rounded-none last:rounded-none">
            Lane No.
          </TableColumn>
          <TableColumn className="bg-darkgreen text-white text-center text-sm font-bold border-1 border-white first:rounded-none last:rounded-none">
            Print Dyno Chit
          </TableColumn>
          <TableColumn className="bg-darkgreen text-white text-center text-sm font-bold border-1 border-white first:rounded-none last:rounded-none">
            Test Item
          </TableColumn>
          <TableColumn className="bg-darkgreen text-white text-center text-sm font-bold border-1 border-white first:rounded-none last:rounded-none">
            Status
          </TableColumn>
        </TableHeader>
        <TableBody emptyContent={"No Match Record Found."}>
          <TableRow>
            <TableCell>{}</TableCell>
            <TableCell>{}</TableCell>
            <TableCell>{}</TableCell>
            <TableCell>{}</TableCell>
            <TableCell>No Match Record Found</TableCell>
            <TableCell>{}</TableCell>
            <TableCell>{}</TableCell>
            <TableCell>{}</TableCell>
            <TableCell>{}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

export default DynoListMainPageLastScreen;
