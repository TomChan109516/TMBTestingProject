import {
  Button,
  Input,
  Select,
  SelectItem,
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
} from "@nextui-org/react";
import React, { ChangeEvent, useRef, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { addAttachment } from "./service/vehicleAttachment.service";
import { ClockHour4, FileText } from "tabler-icons-react";

import {
  saveSubmissionDate,
  saveCentre,
  saveDescription,
  saveAttachment,
  saveAdditionalmessage,
} from "../attachment/state/attachmentSlice";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import { ICentres } from "../login/model/loginModel";

function AttachmentPopup(props) {
  const dispatch = useDispatch();
  const { showAttachmentPopup } = props;
  const handleClose = () => {
    props.closeAttachmentPopup(false);
  };
  const examCentres = useSelector((state : { login : { centres : ICentres }}) => state.login.centres);
  const [examCentre, setExamCentre] = useState(examCentres.length > 0 ? examCentres[0].centerId : []);
  const [submissionDateTime, setSubmissionDateTime] = useState<string>(new Date());
  const [description, setDescription] = useState<string>("");
  const [additionalMessage, setAdditionalMessage] = useState<string>("");
  const [attachment, setAttachment] = useState<string>("");
  const handleChangeExamCenter = async (
    event: ChangeEvent<HTMLSelectElement>
  ) => {
    setExamCentre(event.target.value);
  };

  const [file, setFile] = useState<File>();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const handleUploadClick = () => {
    inputRef.current?.click();
  };
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    setFile(e.target.files[0]);
    setAttachment(e.target.value);
  };

  const handleRequestDateChanged = (newValue: React.SetStateAction<Date>) => {
    setDateValue(newValue);
    props.updateDate(newValue);
  };

  const handlesave = async () => {
    console.log("selecteddate", submissionDateTime, description, attachment);
    dispatch(saveSubmissionDate(submissionDateTime));
    dispatch(saveCentre(examCentre));
    dispatch(saveDescription(description));
    dispatch(saveAttachment(attachment));
    dispatch(saveAdditionalmessage(additionalMessage));
    const formData = new FormData();
    formData.append("AttachmentFile", file);
    const data = {
      AppointmentNumber: "202304150529",
      ChassisNumber: "LMPS47294C206434",
      CentreCode: examCentre,
      SubmissionDateTime: submissionDateTime,
      CreatedDate: "2023-10-27T06:21:18.779Z",
      ModifiedDate: "2023-10-27T06:21:18.779Z",
      SubmittedBy: "ravikrishna",
      Description: description,
      AdditionalMessage: additionalMessage,
      AttachmentFor: file.name,
    };
    console.log("data", data);
    for (let key in data) {
      formData.append(key, data[key]);
    }

    await addAttachment(formData);
    props.closeAttachmentPopup(false);
  };

  return (
    <>
      <div className="w-[100%]">
        <Modal
          size="2xl"
          isOpen={showAttachmentPopup}
          onClose={handleClose}
          classNames={{
            body: "py-6",
            backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
            closeButton: "mt-6 hover:bg-white/5 active:bg-white/20",
          }}
        >
          <ModalContent>
            <>
              <ModalBody>
                <div>
                  <div className="flex">
                    <div className="flex-initial text-[#00AF8F] p-[10px] ml-[-15px] font-bold text-md">
                      Attachment General Information
                    </div>
                    <div className="flex-end text-[#000000]    text-sm "></div>
                  </div>
                  <div className="mt-2">
                    <div>
                      <h1>
                        <h5 className="absolute -top-2 start-3 pl-[10px] pr-[10px] text-sm/[13px] text-[#00AF8F]">
                          Attachment Generl Information
                        </h5>

                        <div className="grid grid-cols-2 w-fix mt-[10px] ml-[6px] -mb-[10px]">
                          <div className="grid grid-rows-4 grid-flow-col  whitespace-nowrap">
                            <div className="text-sm font-bold   flex flex-row  thikness">
                              <div className="grid grid-cols-4 items-center">
                                <div className="grid col-span-2">
                                  Submission Date Time
                                </div>
                                <div className="grid col-span-2 ml-[8px] items-center  ">
                                  <div className="inline-flex">
                                    {" "}
                                    <ClockHour4
                                      size={20}
                                      strokeWidth={2}
                                      color={"lightgray"}
                                    />
                                    <input
                                      className="w-[120px] h-6 rounded"
                                      type="datetime-local"
                                      value={submissionDateTime}
                                      onChange={(e) =>
                                        setSubmissionDateTime(e.target.value)
                                      }
                                      startContent={
                                        <ClockHour4 size={10} color="gray" />
                                      }
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="text-sm font-bold mr-5  flex flex-row gap-2 thikness">
                              <div className="grid grid-cols-4 items-center">
                                <div className="grid col-span-2">
                                  Description
                                </div>
                                <div className="grid col-span-2 mr-40 items-center">
                                  <Input
                                    value={description}
                                    onChange={(e) =>
                                      setDescription(e.target.value)
                                    }
                                    variant="bordered"
                                    className="flex flex-row gap-8 ml-[14px] justify-center w-[140px]  "
                                    radius="sm"
                                    size="sm"
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="text-sm font-bold mr-5  flex flex-row gap-2 thikness">
                              <div className="grid grid-cols-4 items-center">
                                <div className="grid col-span-2">
                                  Attachment
                                </div>
                                <div className="grid col-span-1 items-center flex-row gap-1 justify-start w-full mr-20">
                                  <button
                                    className="bg-[#00AF8F] rounded text-white ml-[14px] w-[70px] h-[40px] "
                                    onClick={handleUploadClick}
                                  >
                                    Upload
                                  </button>

                                  {file && (
                                    <div>
                                      <span>
                                        <FileText size={20} color="black" />
                                      </span>
                                      <span>{file.name}</span>
                                    </div>
                                  )}

                                  <input
                                    type="file"
                                    ref={inputRef}
                                    onChange={handleFileChange}
                                    style={{ display: "none" }}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="grid grid-rows-4 grid-flow-col  gap-2 thikness mt-[5px]  ">
                            <div className="text-sm font-bold mr-5  flex flex-row gap-2 thikness">
                              <div className="grid grid-cols-2 items-center gap-2">
                                <div className="grid  w-full">Centre</div>
                                <div className="w-full -mr-[5px] justify-items-end">
                                  <Select
                                    labelPlacement="outside-left"
                                    className="w-[142px] text-[10px] pt-0 pb-0"
                                    radius="sm"
                                    size="sm"
                                    name="center"
                                    value={examCentre}
                                    aria-label="center"
                                    variant="bordered"
                                    onChange={(e) => {
                                      handleChangeExamCenter(e);
                                    }}
                                  >
                                    {examCentres?.map((center) => (
                                      <SelectItem
                                        key={center.centerId}
                                        value={center.centerId}
                                        className="text-[10px]"
                                      >
                                        {center.centerId}
                                      </SelectItem>
                                    ))}
                                  </Select>
                                </div>
                              </div>
                            </div>
                            <div className="text-sm font-bold mr-5 flex flex-row gap-2 thikness">
                              <div className="grid grid-cols-4 items-center">
                                <div className="grid col-span-2">
                                  Additional Message
                                </div>
                                <div className="grid col-span-2  items-center">
                                  <Input
                                    variant="bordered"
                                    className="rounded flex flex-row gap-6  justify-end "
                                    radius="sm"
                                    size="sm"
                                    value={additionalMessage}
                                    onChange={(e) =>
                                      setAdditionalMessage(e.target.value)
                                    }
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-row gap-2"></div>
                          </div>
                        </div>
                      </h1>
                    </div>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button
                  className="bg-[#ffffff] rounded"
                  variant="bordered"
                  type="submit"
                  onClick={handleClose}
                >
                  Cancel
                </Button>
                <Button
                  className="bg-[#00AF8F] rounded text-white"
                  type="submit"
                  onClick={handlesave}
                >
                  Save
                </Button>
              </ModalFooter>
            </>
          </ModalContent>
        </Modal>
      </div>
    </>
  );
}
AttachmentPopup.propTypes = {
  showAttachmentPopup: PropTypes.bool,
  closeAttachmentPopup: PropTypes.func,
};

export default AttachmentPopup;
