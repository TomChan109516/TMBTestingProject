import {
  Button,
  Select,
  SelectItem,
  Textarea,
  useDisclosure,
} from "@nextui-org/react";
import {
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  Input,
} from "@nextui-org/react";
import React, { ChangeEvent, useCallback, useEffect, useState } from "react";
import { CalendarEvent } from "tabler-icons-react";
import DatePicker from "react-datepicker";
import { getCenters } from "../login/service/login.service";
import { saveLoader } from "../login/state/loginSlice";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

type CentreData = {
  centerId: string;
  centerName: string;
};

export default function SelectPersoneLeavePopup(props) {
  const open = props.SelectPersoneLeavePopup;
  const router = useNavigate();
  const navigate = useNavigate();
  const { showSelectPersoneLeavePopup, setShowSelectPersoneLeavePopup } = props;

  const handleClose = () => {
    setShowSelectPersoneLeavePopup(false);
    navigate("/inspectionSchedulingSystem");
  };

  //   const { addInspectionPopup, setAddInspectionPopup } = props;
  //   const handleClose = () => {
  //     setAddInspectionPopup(false);
  //   };
  const dispatch = useDispatch();
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const [centreData, setCenterData] = useState<CentreData[]>([]);
  const [centerId, setCenterId] = useState<Set<string>>(new Set([]));
  const [showApiError, setShowApiError] = useState<boolean>(false);
  const [apiErrorData, setApiErrorData] = useState<string>("");

  const handleFromDateChanged = (newValue: React.SetStateAction<Date>) => {
    setFromDate(newValue);
  };
  const handleToDateChanged = (newValue: React.SetStateAction<Date>) => {
    setToDate(newValue);
  };

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleCenterData = async (event: ChangeEvent<HTMLSelectElement>) => {
    setCenterId(new Set(event.target.value.split(",")));
  };

  const loadCentres = useCallback(async () => {
    try {
      dispatch(saveLoader(true));
      const response = await getCenters();
      setCenterData(response);

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
    loadCentres();
  }, [loadCentres]);
  return (
    <div>
      <Modal
        isOpen={showSelectPersoneLeavePopup}
        onClose={handleClose}
        size="xl"
        classNames={{
          base: "rounded-sm",
          body: "py-4",
          backdrop: "bg-[#292f46]/40 backdrop-opacity-40",
          closeButton: " hover:bg-white/5 active:bg-white/10",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <div className="flex">
                  <div className="flex-initial text-[#00AF8F] mb-1 font-bold text-sm">
                    Select Person
                  </div>
                </div>
                <div>
                  <div className="flex flex-row  ">
                    <span className="text-[#ff3e3e] text-[12px] mr-1 font-bold">
                      *
                    </span>
                    <span className="text-xs text-black font-bold text-left mt-[3   px] w-[30px]">
                      Center
                    </span>
                    <span className="text-xs w-[40%] text-black text-left ml-8 ">
                      <Select
                        labelPlacement="outside-left"
                        radius="none"
                        size="sm"
                        name="center"
                        aria-label="center"
                        variant="bordered"
                        placeholder="Select"
                        selectedKeys={centerId}
                        onChange={(e) => {
                          handleCenterData(e);
                        }}
                        className="w-[400px] bg-white "
                      >
                        {centreData?.map((center) => (
                          <SelectItem
                            key={center?.centerId}
                            value={center.centerId}
                            className="text-xs"
                          >
                            {center?.centerId}
                          </SelectItem>
                        ))}
                      </Select>
                    </span>
                  </div>
                </div>

                <div className=" ...">
                  <div className="flex flex-row w-[100%]">
                    <span className="text-[#ff3e3e] text-[12px] mr-1 font-bold">
                      *
                    </span>
                    <span className="text-xs text-black font-bold text-left  mt-1 w-[30px]">
                      Date
                    </span>
                    <span className="text-xs w-[70%] text-black text-left ml-8 ">
                      <div className=" flex flex-row  ">
                        <div className="inline-flex border border-solid border-[lightgray] w-[52%]  h-8">
                          <CalendarEvent color="grey" size="30" />
                          <DatePicker
                            name="fromDate"
                            selected={fromDate}
                            onChange={handleFromDateChanged}
                            className="text-[12px]  w-[170px] selection:border-none mt-2"
                          />
                        </div>
                        <div className="w-[10%] ml-[3px] mt-2"> To </div>
                        <div className=" inline-flex border border-solid border-[lightgray] w-[52%]    h-8">
                          <CalendarEvent color="grey" size="30" />
                          <DatePicker
                            name="toDate"
                            selected={toDate}
                            onChange={handleToDateChanged}
                            className="text-[12px]  w-[170px] selection:border-none mt-2"
                          />
                        </div>
                      </div>
                    </span>
                  </div>
                </div>
                <div>
                  <div className="flex flex-row w-[100%]">
                    <span className="text-[#ff3e3e] text-[12px] mr-1 font-bold">
                      *
                    </span>
                    <span className="text-xs text-black font-bold text-left mt-1 w-[30px]">
                      Name
                    </span>
                    <span className="text-xs w-[60%] text-black text-left ml-8 ">
                      <Select
                        labelPlacement="outside-left"
                        radius="none"
                        size="sm"
                        name="center"
                        aria-label="center"
                        variant="bordered"
                        placeholder="Select"
                        className="w-[400px] bg-white "
                      >
                        <SelectItem className="text-xs"></SelectItem>
                      </Select>
                    </span>
                  </div>
                </div>
                <div className="...">
                  <div className="flex flex-col-2  ... w-[100%]">
                    <span className="text-[#ff3e3e] text-[12px] mr-1 font-bold">
                      *
                    </span>
                    <span className="text-xs  text-black font-bold text-left mt-1 w-[30px]">
                      Session
                    </span>
                    <span className="text-xs w-[60%] text-black text-left ml-8">
                      <Select
                        labelPlacement="outside-left"
                        radius="none"
                        size="sm"
                        name="center"
                        aria-label="center"
                        variant="bordered"
                        placeholder="Select"
                        className="w-[400px] bg-white "
                      >
                        <SelectItem className="text-xs"></SelectItem>
                      </Select>
                    </span>
                  </div>
                </div>

                <div className="...">
                  <div className="flex flex-row w-[100%]">
                    <span className="text-[#ff3e3e] text-[12px] mr-1 font-bold">
                      *
                    </span>
                    <span className="text-xs text-black font-bold text-left mt-1  w-[30px]">
                      Type
                    </span>
                    <span className="text-xs w-[60%] text-black text-left ml-8">
                      <Select
                        labelPlacement="outside-left"
                        radius="none"
                        size="sm"
                        name="center"
                        aria-label="center"
                        variant="bordered"
                        placeholder="Select"
                        className="w-[400px] bg-white "
                      >
                        <SelectItem className="text-xs"></SelectItem>
                      </Select>
                    </span>
                  </div>
                </div>
                <div className="flex flex-row w-[100%]">
                  <span className="text-[#ff3e3e] text-[12px] mr-1 font-bold">
                    *
                  </span>
                  <span className="text-xs text-black font-bold text-left mt-1 w-[30px]">
                    remark
                  </span>
                  <span className="text-xs w-[76%] text-black text-left ml-8 flex flex-row basis-1/2  border-[2px] border-[#00AF8F] rounded-sm ">
                    <Textarea
                      radius="none"
                      classNames={{
                        input:
                          "resize-y  min-h-[40px]  w-[800px] hover: border-transparent",
                      }}
                    />
                  </span>
                </div>
              </ModalBody>
              <ModalFooter className="mb-2">
                <Button
                  className="bg-[#ffffff] rounded-sm ml-2 font-bold text-xs "
                  variant="bordered"
                  type="submit"
                  size="sm"
                  radius="none"
                  onPress={onClose}
                >
                  Cancel
                </Button>
                <Button
                  className=" bg-[#00AF8F] text-white rounded-sm ml-1 mr-1 font-bold text-xs"
                  variant="bordered"
                  type="submit"
                  size="sm"
                  radius="none"
                  onPress={onClose}
                >
                  Save
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
SelectPersoneLeavePopup.propTypes = {
  showSelectPersoneLeavePopup: PropTypes.bool,
  setShowSelectPersoneLeavePopup: PropTypes.func,
  title: PropTypes.string,
  handleApi: PropTypes.func,
};
