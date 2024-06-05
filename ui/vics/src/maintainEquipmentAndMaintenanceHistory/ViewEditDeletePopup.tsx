import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  SelectItem,
  Select
} from "@nextui-org/react";
import { X } from "tabler-icons-react";
import { useSelector } from "react-redux";

function ViewEditDeletePopup(props) {
  const { ModifyData, setViewEditDeletePopup } = props

  const userName = useSelector((state: { login: { userID: string } }) => state.login.userID);

  const [summaryData, setSummaryData] = useState([
    {
      id: 1,
      "maintenance_date": "22-11-2025 -24-12-2025",
      "created_data": "22/11/2025",
      "added_by": "Admin",
      "remarks": "Regular Maintanance"
    },
    {
      id: 2,
      "maintenance_date": "22/11/2025 -24/12-2025",
      "created_data": "22/11/2025",
      "added_by": "Admin",
      "remarks": "Regular Maintanance"
    },
    {
      id: 3,
      "maintenance_date": "22/11/2025 -24/12-2025",
      "created_data": "22/11/2025",
      "added_by": "Admin",
      "remarks": "Regular Maintanance"
    },
    {
      id: 4,
      "maintenance_date": "22/11/2025 -24/12-2025",
      "created_data": "22/11/2025",
      "added_by": "Admin",
      "remarks": "Regular Maintanance"
    },
    {
      id: 5,
      "maintenance_date": "22/11/2025 -24/12-2025",
      "created_data": "22/11/2025",
      "added_by": "Admin",
      "remarks": "Regular Maintanance"
    },
    {
      id: 6,
      "maintenance_date": "22/11/2025 -24/12-2025",
      "created_data": "22/11/2025",
      "added_by": "Admin",
      "remarks": "Error Found"
    }
  ]);
  const [newData, setNewData] = useState({
    id: summaryData.length + 2,
    "maintenance_start_date": "22/11/2025",
    "maintenance_end_date": '22/11/2025',
    "start_maintenance_time": "AM",
    "end_maintenance_time": "PM",
    "created_data": new Date(),
    "added_by": userName,
    "remarks": ""
  })

  const handleClose = () => {
    setViewEditDeletePopup(false);
  };

  const handleDelete = (id: number) => {
    const newData = summaryData.filter((data) => data.id !== id)
    setSummaryData(newData)
  }

  const handleOnChange = (e) => {
    setNewData({
      ...newData,
      [e.target.name]: e.target.value
    })
  }

  const addNewDataIntoSummary = () => {
    const date_object = newData.created_data
    const strat_date = new Date(newData.maintenance_start_date).toLocaleDateString('en-GB');
    const end_date = new Date(newData.maintenance_end_date).toLocaleDateString('en-GB');
    const newDataList = [...summaryData, {
      id: newData.id,
      maintenance_date: `${strat_date} ${newData.start_maintenance_time} - ${end_date} ${newData.end_maintenance_time}`,
      created_data: date_object.getDate() + '/' + (date_object.getMonth() + 1) + '/' + date_object.getFullYear(),
      added_by: newData.added_by,
      remarks: newData.remarks
    }]
    setSummaryData(newDataList)
  }

  return (
    <div>
      <Modal
        size="4xl"
        isOpen={true}
        onClose={handleClose}
        isDismissable={false}
      >
        <ModalContent className="">
          {() => (
            <>
              <ModalHeader className="flex flex-col text-black font-calibri font-bold  bg-lightGreen text-center justify-center text-popupHeading gap-1">
                Edit Equipment Schedule
              </ModalHeader>
              <ModalBody>
                <div className="flex flex-col justify-center  font-bold text-innerInputTxt">
                  <div className="flex flex-row justify-center items-center p-1 ml-6">
                    <label className="mr-2">Equipment ID </label>
                    <Input
                      radius="none"
                      labelPlacement="outside-left"
                      size="sm"
                      className="w-[160px] inline-block border-greyBorder "
                      variant="bordered"
                      value={ModifyData ? ModifyData.id : ''}
                    ></Input>
                  </div>
                  <div className="flex flex-row justify-center items-center p-1">
                    <label className="mr-2">Equipment Name </label>
                    <Input
                      radius="none"
                      labelPlacement="outside-left"
                      size="sm"
                      className="w-[160px] inline-block border-greyBorder "
                      variant="bordered"
                      value={ModifyData ? ModifyData.equipmentName : ''}
                    ></Input>
                  </div>
                  <div className="flex flex-row justify-center items-center p-1">
                    <label className="mr-2">Equipment Status </label>
                    <Input
                      radius="none"
                      labelPlacement="outside-left"
                      size="sm"
                      className={ModifyData ? (ModifyData.status === "I" ? "w-[160px] inline-block border-greyBorder text-persianGreen" : "w-[160px] inline-block border-greyBorder") : ''}
                      variant="bordered"
                      value={ModifyData ? (ModifyData.status === "I" ? "In-Service" : "Under-Repair") : ''}
                    ></Input>
                  </div>
                  <div className=" border-b-2  border-dotted   mt-4  opacity-25 w-[100%] "></div>
                </div>
                <div className="w-[100%]">
                  <Table
                    isHeaderSticky
                    radius="none"
                    shadow="sm"
                    classNames={{ wrapper: "p-0 ", base: "max-h-[200px]", table: "min-h-[300px]", }}
                  >
                    <TableHeader>
                      <TableColumn className="bg-darkgreen text-white text-center text-sm font-bold first:rounded-none last:rounded-none">
                        ID
                      </TableColumn>
                      <TableColumn className="bg-darkgreen text-white text-center text-sm font-bold ">
                        Maintenance Date
                      </TableColumn>
                      <TableColumn className="bg-darkgreen text-white text-center text-sm font-bold ">
                        Created Date
                      </TableColumn>
                      <TableColumn className="bg-darkgreen text-white text-center text-sm font-bold ">
                        Added by
                      </TableColumn>
                      <TableColumn className="bg-darkgreen text-white text-center text-sm font-bold  first:rounded-none last:rounded-none">
                        Remarks
                      </TableColumn>
                    </TableHeader>
                    <TableBody>
                      {summaryData.map((details) => {
                        return (
                          <TableRow
                            key={details.id}
                            data-testid={details.id}
                            className="even:bg-lightblue odd:bg-fadedwhite font-calibri text-center"
                          >
                            <TableCell className="font-calibri font-bold text-sm text-center">
                              {details.id}
                            </TableCell>
                            <TableCell className="font-calibri font-bold text-sm text-center">
                              {details.maintenance_date}
                            </TableCell>
                            <TableCell className="font-calibri font-bold text-sm text-center">
                              {details.created_data}
                            </TableCell>
                            <TableCell className="text-centerfont-calibri font-bold text-sm">
                              {details.added_by}
                            </TableCell>
                            <TableCell className="text-center font-calibri font-bold text-sm flex flex-row justify-between">
                              <span className="truncate hover:text-clip">{details.remarks}</span>
                              <X className="bg-white border-[gray] border-1 rounded-xl text-[gray] mt-1 mr-[2px] ml-2" size="18" data-testid="delete-icon" onClick={() => handleDelete(details.id)} />
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </div>
                <div className="font-bold text-innerInputTxt">Add Scheduled Maintenance</div>
                <div className="flex flex-row justify-start">
                  <div className="flex flex-row  items-center ml-2 ">
                    <label className="w-[210px] text-innerInputTxt mr-2">Maintenance Date<br></br>(Start-Inclusive)</label>
                    <Input
                      radius="none"
                      labelPlacement="outside-left"
                      size="sm"
                      className=" inline-block border-greyBorder "
                      variant="bordered"
                      type="date"
                      data-testid="maintenance_start"
                      name="maintenance_start_date"
                      value={newData.maintenance_start_date}
                      onChange={(e) => handleOnChange(e)}
                    ></Input>
                    <Select
                      labelPlacement="outside-left"
                      className="ml-2 w-[40%]"
                      radius="none"
                      value="AM"
                      variant="bordered"
                      size="sm"
                      key="AM"
                      name="start_maintenance_time"
                      data-testid="start_maintenance_time"
                      defaultSelectedKeys={["AM"]}
                      onChange={(e) => handleOnChange(e)}
                    >
                      <SelectItem key="AM" value="AM" className="tex-[10px]">
                        AM
                      </SelectItem>
                      <SelectItem key="PM" value="PM" className="tex-[10px]">
                        PM
                      </SelectItem>
                    </Select>
                  </div>
                  <div className="flex flex-row items-center ml-4">
                    <label className="w-[210px] text-innerInputTxt mr-2">Maintenance Date<br></br>(End-Inclusive)</label>
                    <Input
                      radius="none"
                      labelPlacement="outside-left"
                      size="sm"
                      className=" inline-block border-greyBorder "
                      variant="bordered"
                      type="date"
                      name="maintenance_end_date"
                      data-testid="maintenance_end_date"
                      value={newData.maintenance_end_date}
                      onChange={(e) => handleOnChange(e)}
                    ></Input>
                    <Select
                      key="PM"
                      labelPlacement="outside-left"
                      className="ml-2 w-[40%]"
                      variant="bordered"
                      radius="none"
                      size="sm"
                      defaultSelectedKeys={["PM"]}
                      name="end_maintenance_time"
                      data-testid="end_maintenance_time"
                      onChange={(e) => handleOnChange(e)}
                    >
                      <SelectItem key="AM" value="AM" className="tex-[10px]">
                        AM
                      </SelectItem>
                      <SelectItem key="PM" value="PM" className="tex-[10px]">
                        PM
                      </SelectItem>
                    </Select>

                  </div>
                </div>
                <div className="flex flex-row justify-start items-center">
                  <label className="text-innerInputTxt ml-2 mr-2">Remarks</label>
                  <Input
                    radius="none"
                    labelPlacement="outside-left"
                    size="sm"
                    className=" inline-block border-greyBorder ml-14"
                    variant="bordered"
                    name="remarks"
                    data-testid="remarks"
                    value={newData.remarks}
                    onChange={(e) => handleOnChange(e)}
                  ></Input>
                  <div>
                    <Button
                      className="text-white h-8 bg-tropicalrainforest border-[#e0dede] rounded-sm ml-6"
                      radius="none"
                      name="AddToSchedule"
                      aria-label="AddToSchedule"
                      data-testid="AddToSchedule"
                      onClick={addNewDataIntoSummary}
                    >Add to Schedule</Button>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter className="justify-center mb-8 ml-16 ">
                <Button
                  className="text-white h-6 font-bold bg-tropicalrainforest border-[#e0dede] rounded-sm mr-6"
                  radius="none"
                  name="Save"
                  aria-label="Save"
                >
                  Save
                </Button>
                <Button
                  className="text-black font-calibri h-6 font-bold bg-white border-1 border-[#e0dede] ml-0 mr-10 rounded-sm"
                  radius="none"
                  onClick={handleClose}
                >
                  Cancel
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}

export default ViewEditDeletePopup;