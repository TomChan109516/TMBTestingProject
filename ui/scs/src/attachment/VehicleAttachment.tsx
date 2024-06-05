import { CircleX, Download, Search } from "tabler-icons-react";
import {
  Card,
  CardBody,
  Input,
  Tab,
  Tabs,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  RadioGroup,
  Radio,
  Button,
  Chip,
} from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import React, { useCallback, useEffect, useState } from "react";
import AttachmentPopup from "./AddAttachmentPopup";
import AppointmentPopup from "./AppointmentPopup";
import { saveLoader } from "../login/state/loginSlice";
import {
  axiosPostDownload,
  getVehicleAttachment,
} from "./service/vehicleAttachment.service";
import {
  saveAttachments,
  saveGeneralAttachment,
  saveVehicleId,
  setDownloadFile,
} from "./state/attachmentSlice";
import GeneralAttachmentPopup from "./GeneralAttachment";
import DeleteRecordPopUp from "./DeleteRecordPopUp";
import { useNavigate } from "react-router";
import { DOWNLOAD_ATTACHMENTFILE } from "../constants/urlConstants";
function VehicleAttachment() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selected, setSelected] = React.useState("Vehicle");
  const [showAttachmentPopup, setshowAttachmentPopup] = useState(false);
  const [showAppointmentPopup, setShowAppointmentPopup] = useState(false);
  const [showApiError, setShowApiError] = useState<boolean>(false);
  const [apiErrorData, setApiErrorData] = useState<string>("");
  const [showDeleteRecordPopUp, setDeleteRecordPopUp] = useState(false);
  const [checked, setChecked] = useState(false);

  const { attachments } = useSelector((state) => state.attachment);
  const vehicleAttach = useSelector(
    (state) => state.enquiryAppointment.enquiryVehicleInfo
  );
  const appointmentInfo = useSelector(
    (state) => state.enquiryAppointment.enquiryAppointmentInfo
  );
  const attachmentPopup = useSelector(
    (state) => state.attachment.submissionDateTime
  );
  const attachDescription = useSelector(
    (state) => state.attachment.description
  );
  const appointmentNumber = useSelector(
    (state) => state.attachment.selectedAppointment
  );
  const [showGeneralAttachmentPopup, setGeneralAttachmentPopup] =
    useState(false);
  const downloadFiles = useSelector((state) => state.attachment.downloadFile);
  // const [downloadFile, setDownloadfile] = useState(false);

  const handleDeleteRecordPopup = (item) => {
    setDeleteRecordPopUp(true);
    dispatch(saveGeneralAttachment(item));
  };

  const handleExpandAttachmentPopup = () => {
    setshowAttachmentPopup(true);
  };
  const handleGeneralAttachmentPopup = (item) => {
    setGeneralAttachmentPopup(true);
    dispatch(saveGeneralAttachment(item));
  };
  const handleExpandAppointmentPopup = () => {
    setShowAppointmentPopup(true);
  };

  const closeAttachmentPopup = (val) => {
    setshowAttachmentPopup(val);
  };

  const handleCheck = () => {
    setChecked((current) => !current);
  };

  const validOptions = ["Vehicle", "Associated to inspection"];
  const isInvalid = !validOptions.includes(selected);

  const params = {
    chassisNumber: vehicleAttach.chassisNumber,
    appointmentNumber: appointmentInfo.appointmentNumber,
  };
  const handleVehicleParticular = () => {
    dispatch(saveVehicleId(vehicleAttach.vehicleId));
    navigate(`/vehicleDetail/${vehicleAttach.vehicleId}`);
  };

  const vehicleAttachment = useCallback(async () => {
    try {
      dispatch(saveLoader(true));
      const response = await getVehicleAttachment(params);
      dispatch(saveAttachments(response));
      dispatch(saveLoader(false));
    } catch (error) {
      setShowApiError(true);
      dispatch(saveLoader(false));
      if (!error.response) {
        setShowApiError(true);
        setApiErrorData("Server Error");
      } else {
        if (error.response.status === 401) {
          setApiErrorData(error.message);
        } else if (error.response.status === 500) {
          setApiErrorData("500 - Internal Error");
        } else {
          setApiErrorData(error.response.status);
        }
      }
    }
  }, [dispatch]);

  useEffect(() => {
    vehicleAttachment();
  }, [vehicleAttachment]);

  const handleDownload = () => {
    // const fileContent='Helo, World!';
    // const file=new Blob([fileContent], {
    //   type:'text/plain;charset=utf-8'
    // })
    try {
      dispatch(saveLoader(true));
      const response = axiosPostDownload(DOWNLOAD_ATTACHMENTFILE);
      dispatch(downloadFile(response));
      dispatch(saveLoader(false));
    } catch (error) {
      setShowApiError(true);
      dispatch(saveLoader(false));
    }
  };

  return (
    <>
      <div>
        <div className="flex">
          <div className="flex-initial text-[#0a923d] p-[10px] ml-[5px] font-bold text-[13px]">
            Data {">"} Vehicle Attachment (Valid)
          </div>
        </div>
        <div className="w-[100%] p-[5px] pl-5  mt-[5px] ">
          <h1>
            <h5 className="absolute -top-2 start-3 pl-[10px] pr-[10px]  text-[#00AF8F] text-[12px]">
              Vehicle Particulars
            </h5>
            <div className="w-[100%]  ">
              <div className="grid grid-cols-5  gap-x-20  mt-[15px]  text-[12px]">
                <div className="grid grid-cols-2 gap-2  ">
                  <div className="w-full text-centre ">
                    <b className=" ">Reg. No. </b>
                  </div>
                  <div className=" flex  text-start "></div>
                </div>
                <div className="grid grid-cols-2 gap-3   ">
                  <div className="w-full text-start ">
                    <b className="">Reg Mark</b>
                  </div>
                  <div className="w-full text-left ">
                    {vehicleAttach.regMark}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="w-full text-center ">
                    <b className="w-full  ">T.A. No.</b>
                  </div>
                  <div className="w-full text-left  gap-3  ">
                    {vehicleAttach.taNumber}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3  ">
                  <div className="w-full text-start ">
                    {" "}
                    <b>Float Name</b>
                  </div>
                  <div className="text-start">{vehicleAttach.floatName}</div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div
                    className="grid col-span-2  gap-3"
                    onClick={handleVehicleParticular}
                  >
                    <Search
                      size={20}
                      color="white"
                      className="bg-[#00AF8F] rounded-sm"
                    />
                  </div>
                  <div> </div>
                </div>
              </div>
              <div className="grid grid-cols-5 gap-x-20  mb-[5px] text-[12px] ">
                <div className="grid grid-cols-2 gap-3  ">
                  <div className="w-full text-center ml-[5px]  ">
                    <b className="  ">Vehicle ID</b>
                  </div>
                  <div className="w-full text-left ">
                    {vehicleAttach.vehicleId}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3  ">
                  <div className="w-full text-start  ">
                    <b>Vehicle Class</b>
                  </div>
                  <div className="w-full text-left ">
                    {vehicleAttach.vehicleClassId}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 ">
                  <div className="w-full text-right  ">
                    <b className=" ">Chassis No.</b>
                  </div>
                  <div className="w-full text-left ">
                    {vehicleAttach.chassisNumber}
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3  ">
                  <div className="w-full text-start ">
                    {" "}
                    <b className=" ">C&E No.</b>
                  </div>
                  <div className="w-full text-start  col-span-2 ml-[35px]">
                    {vehicleAttach.ceNumber}
                  </div>
                </div>
              </div>
            </div>
          </h1>
        </div>
        <div className="w-[100%] p-[5px] pl-5 mt-[5px] ">
          <table className="w-[100%] text-[13px] text-[#d3dbd5] ">
            <thead>
              <tr>
                <th className="border border-slate-300 ...">
                  <div className="flex w-full flex-col">
                    <Tabs
                      aria-label="Tabs colors"
                      radius="none"
                      classNames={{
                        tabContent:
                          "group-data-[selected=true]:bg-[#00AF8F] group-data-[selected=true]:text-white  px-1 py-1 ",
                        tab: "max-w-fit px-0 h-5",
                      }}
                    >
                      <Tab key="SCS Attachment" title="SCS Attachment ">
                        <Card className="w-[100%] h-[100%] " radius="none">
                          <CardBody>
                            <h1>
                              <h5 className="absolute -top-2 start-3 pl-[10px] pr-[10px] text-[12px] text-[#00AF8F]">
                                Search Criteria
                              </h5>
                              <div className="grid grid-cols-7 gap-2 mt-[5px] min-h-[30px] max-h-[50px] h-[45px] w-[100%] text-[12px] ">
                                <div className=" ml-[29px]  mt-[8px]  font-bold">
                                  Association
                                </div>

                                <div className="grid col-span-4 gap-2 text-[12px] font-bold  text-start mt-[5px]">
                                  <RadioGroup
                                    orientation="horizontal"
                                    value={selected}
                                    onValueChange={setSelected}
                                    color="success"
                                  >
                                    <Radio value="Vehicle" color="success">
                                      <div className="text-[12px]">
                                        All Attachment associated to this
                                        vehicle
                                      </div>
                                    </Radio>

                                    <div className="grid gap-2 col-span-2   ml-[100px] ">
                                      <Radio
                                        value="Associated to inspection"
                                        color="success"
                                      >
                                        <div className="text-[12px]">
                                          Associated to inspection
                                        </div>
                                      </Radio>
                                    </div>
                                  </RadioGroup>
                                </div>
                                <div className="grid gap-2  col-span-2  justify-end ">
                                  <div className="grid grid-cols-2 gap-3 ">
                                    <div>
                                      <Input
                                        type="text"
                                        size="sm"
                                        variant="bordered"
                                        className="flex flex-row gap-2 justify-start w-full mt-[5px] "
                                        radius="sm"
                                        value={appointmentNumber}
                                      />
                                    </div>


                                    <div>
                                      <div className="flex flex-row gap-1 justify-start w-full">
                                        <button

                                          onClick={handleExpandAppointmentPopup}
                                        >
                                          {" "}
                                          <Search
                                            size={20}
                                            color="white"
                                            className="bg-[#00AF8F] rounded-sm mt-[10px]"
                                          />
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </h1>
                          </CardBody>
                          <div className="flex flex-row gap-1 justify-end w-full p-0 ">
                            <Button
                              className="bg-[#00AF8F] font-bold text-white h-[30px] rounded  mb-[2px] mr-[20px] "
                              type="submit"
                              data-testid="handleExpandAttachmentPopup"
                              onClick={handleExpandAttachmentPopup}
                            >
                              Add Attachment
                            </Button>
                          </div>
                          <Table radius="none" shadow="sm" className="mt-2">
                            <TableHeader className=" bg-[#A0D9C1] text-[#00AF8F] text-sm  text-leftfont-bold">
                              <TableColumn className="bg-[#A0D9C1] text-[#00AF8F]  text-left font-bold first:rounded-none  "></TableColumn>
                              <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-left font-bold border-1 border-white w-[200px] " >
                                File
                              </TableColumn>
                              <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-left font-bold border-1 border-white w-[200px]">
                                Description
                              </TableColumn>
                              <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-left font-bold border-1 border-white w-[200px]">
                                Appoinment No.
                              </TableColumn>
                              <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-left font-bold border-1 border-white">
                                Description
                              </TableColumn>
                              <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-left font-bold border-1 border-white w-[200px] last:rounded-none">
                                Centre
                              </TableColumn>
                              <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-left font-bold border-1 border-white w-[200px] last:rounded-none">
                                Date
                              </TableColumn>
                              <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-left font-bold border-1 border-white w-[200px] last:rounded-none">
                                Submitted By
                              </TableColumn>
                              <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-left font-bold border-1 border-white w-[80px] last:rounded-none">
                              </TableColumn>
                            </TableHeader>
                            <TableBody>
                              {attachments.map((item) => {
                                return (
                                  <TableRow
                                  >
                                    <TableCell className="border-1 border-white text-sm text-left  width-[20px]">
                                      <Download
                                        size={25}
                                        color="#40bf47"
                                        value={downloadFiles}
                                        onClick={item.file}
                                      />
                                    </TableCell>
                                    <TableCell className="border-1 border-white text-sm text-left  width-[20px]">
                                      {item.file}
                                    </TableCell>
                                    <TableCell className="border-1 border-white text-sm text-left ">
                                      {item.description}
                                    </TableCell>
                                    <TableCell className="border-1 border-white text-sm text-left ">
                                      {item.appointmentNumber}{" "}
                                    </TableCell>
                                    <TableCell className="border-1 border-white text-sm text-left ">

                                    </TableCell>
                                    <TableCell className="border-1 border-white text-sm text-left ">

                                      {item.centreCode}{" "}
                                    </TableCell>
                                    <TableCell className="border-1 border-white text-sm text-left ">
                                      {item.data}{" "}
                                    </TableCell>
                                    <TableCell className="border-1 border-white text-sm text-left ">
                                      {item.submittedBy}{" "}
                                    </TableCell>
                                    <TableCell className="border-1 border-white text-sm text-left">
                                      <div className="flex">
                                        <Search
                                          size={20}
                                          color="white"
                                          className="bg-[#00AF8F] rounded-sm mt-[10px]"
                                          onClick={() => {
                                            handleGeneralAttachmentPopup(item);
                                          }}
                                        />
                                        <CircleX
                                          size={25}
                                          color="red"
                                          className=" rounded-sm ml-2 mt-[8px]"
                                          onClick={() => {
                                            handleDeleteRecordPopup(item);
                                          }}
                                        />
                                      </div>
                                    </TableCell>
                                  </TableRow>
                                );
                              })}
                            </TableBody>
                          </Table>
                        </Card>
                      </Tab>
                      <Tab key="VICS Attachment" title="VICS Attachment ">
                        <Card className="w-[100%] h-[100%]  " radius="none">
                          <CardBody className="w-[100%] h-[100%]   ">
                            <h1>
                              <h5 className="absolute -top-2 start-3 pl-[10px] pr-[10px] text-[12px] text-[#00AF8F]">
                                VICS Attachment
                              </h5>
                              <div className="grid grid-cols-7 gap-2 mt-[5px] min-h-[30px] max-h-[50px] h-[45px] w-[100%] text-[12px] ">
                                <div className=" ml-[29px]  mt-[8px]  font-bold">
                                  Association
                                </div>
                                <div className="grid col-span-4 gap-2 text-[12px] font-bold  text-start mt-[5px]">
                                  <RadioGroup
                                    orientation="horizontal"
                                    value={selected}
                                    onValueChange={setSelected}
                                    color="success"
                                  >
                                    <Radio value="Vehicle" color="success">
                                      <div className="text-[12px]">
                                        All Attachment associated to this
                                        vehicle
                                      </div>
                                    </Radio>
                                    <div className="grid gap-2 col-span-2   ml-[100px] ">
                                      <Radio
                                        value="Associated to inspection"
                                        color="success"
                                      >
                                        <div className="text-[12px]">
                                          Associated to inspection
                                        </div>
                                      </Radio>
                                    </div>
                                  </RadioGroup>
                                </div>
                                <div className="grid gap-2  col-span-2  justify-end ">
                                  <div className="grid grid-cols-2 gap-3 ">
                                    <div>
                                      <Input
                                        type="text"
                                        size="sm"
                                        variant="bordered"
                                        className="flex flex-row gap-2 justify-start w-full mt-[5px] "
                                        radius="sm"
                                        value={appointmentNumber}
                                      />
                                    </div>
                                    {/* )} */}

                                    <div>
                                      <div className="flex flex-row gap-1 justify-start w-full">
                                        <button
                                          //  disabled={!checked}
                                          //  checked={true}
                                          onClick={handleExpandAppointmentPopup}
                                        >
                                          {" "}
                                          <Search
                                            size={20}
                                            color="white"
                                            className="bg-[#00AF8F] rounded-sm mt-[10px]"
                                          />
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </h1>
                          </CardBody>
                          <div className="flex flex-row gap-1 justify-end w-full"></div>
                          <div className="w-[100%]  ">
                            <Table radius="none" shadow="sm" className="mt-2">
                              <TableHeader className=" bg-[#A0D9C1] text-[#00AF8F] text-sm  text-leftfont-bold">
                                <TableColumn className="bg-[#A0D9C1] text-[#00AF8F]  text-left font-bold first:rounded-none  "></TableColumn>
                                <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-left font-bold border-1 border-white w-[200px] " >
                                  File
                                </TableColumn>
                                <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-left font-bold border-1 border-white w-[200px]">
                                  Description
                                </TableColumn>
                                <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-left font-bold border-1 border-white w-[200px]">
                                  Appoinment No.
                                </TableColumn>
                                <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-left font-bold border-1 border-white">
                                  Description
                                </TableColumn>
                                <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-left font-bold border-1 border-white w-[200px] last:rounded-none">
                                  Centre
                                </TableColumn>
                                <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-left font-bold border-1 border-white w-[200px] last:rounded-none">
                                  Date
                                </TableColumn>
                                <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-left font-bold border-1 border-white w-[200px] last:rounded-none">
                                  Submitted By
                                </TableColumn>
                                <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-left font-bold border-1 border-white w-[80px] last:rounded-none">
                                </TableColumn>
                              </TableHeader>
                              <TableBody>
                                {attachments.map((item) => {
                                  return (
                                    <TableRow
                                    >
                                      <TableCell className="border-1 border-white text-sm text-left  width-[20px]">
                                        <Download
                                          size={25}
                                          color="#40bf47"
                                          value={downloadFiles}
                                          onClick={item.file}
                                        />
                                      </TableCell>
                                      <TableCell className="border-1 border-white text-sm text-left  width-[20px]">
                                        {item.file}
                                      </TableCell>
                                      <TableCell className="border-1 border-white text-sm text-left ">
                                        {item.description}
                                      </TableCell>
                                      <TableCell className="border-1 border-white text-sm text-left ">
                                        {item.appointmentNumber}{" "}
                                      </TableCell>
                                      <TableCell className="border-1 border-white text-sm text-left ">
                                      </TableCell>
                                      <TableCell className="border-1 border-white text-sm text-left ">
                                        {item.centreCode}{" "}
                                      </TableCell>
                                      <TableCell className="border-1 border-white text-sm text-left ">
                                        {item.data}{" "}
                                      </TableCell>
                                      <TableCell className="border-1 border-white text-sm text-left ">
                                        {item.submittedBy}{" "}
                                      </TableCell>
                                      <TableCell className="border-1 border-white text-sm text-left">
                                        <div className="flex">
                                          <Search
                                            size={20}
                                            color="white"
                                            className="bg-[#00AF8F] rounded-sm mt-[10px]"
                                            onClick={() => {
                                              handleGeneralAttachmentPopup(item);
                                            }}
                                          />
                                          <CircleX
                                            size={25}
                                            color="red"
                                            className=" rounded-sm ml-2 mt-[8px]"
                                            onClick={() => {
                                              handleDeleteRecordPopup(item);
                                            }}
                                          />
                                        </div>
                                      </TableCell>
                                    </TableRow>
                                  );
                                })}
                              </TableBody>
                            </Table>
                          </div>
                        </Card>
                      </Tab>
                    </Tabs>
                  </div>
                </th>
              </tr>
            </thead>
          </table>
        </div>
        {showApiError === true ? (
          <div className="flex transition-timing-function: cubic-bezier(0.4, 0, 1, 1) p-4 justify-center ...">
            <div>
              <Chip color="default" radius="full">
                <div className="text-center">{apiErrorData}</div>
              </Chip>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>

      {showAttachmentPopup && (
        <AttachmentPopup
          showAttachmentPopup={showAttachmentPopup}
          closeAttachmentPopup={closeAttachmentPopup}
        ></AttachmentPopup>
      )}
      {showGeneralAttachmentPopup && (
        <GeneralAttachmentPopup
          showGeneralAttachmentPopup={showGeneralAttachmentPopup}
          setGeneralAttachmentPopup={setGeneralAttachmentPopup}
        ></GeneralAttachmentPopup>
      )}

      {showAppointmentPopup && (
        <AppointmentPopup
          showAppointmentPopup={showAppointmentPopup}
          setShowAppointmentPopup={setShowAppointmentPopup}
        />
      )}
      {showDeleteRecordPopUp && (
        <DeleteRecordPopUp
          showDeleteRecordPopUp={showDeleteRecordPopUp}
          setDeleteRecordPopUp={setDeleteRecordPopUp}
        ></DeleteRecordPopUp>
      )}
    </>
  );
}

export default VehicleAttachment;
