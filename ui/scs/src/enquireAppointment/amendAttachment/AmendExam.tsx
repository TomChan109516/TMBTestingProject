import PropTypes from "prop-types";
import React, { useEffect, useState, ChangeEvent } from "react";
import {
  Radio,
  RadioGroup,
  CheckboxGroup,
  Checkbox,
  Pagination,
} from "@nextui-org/react";
import "react-datepicker/dist/react-datepicker.css";
import { useSelector, useDispatch } from "react-redux";
import { saveLoader } from "../../login/state/loginSlice";
import { saveExaminationCodes } from "../../createAppointment/state/createAppointmentSlice";
import { GET_EXAM_CODES } from "../../constants/urlConstants";
import { axiosGet } from "../../utils/axiosInstance";
import { ArrowsMaximize } from "tabler-icons-react";
import PrimaryCodesPopup from "../../createAppointment/examination/PrimaryCodesPopup";
import SupplementaryPopup from "../../createAppointment/examination/SupplementaryPopup";
import { ICentres } from "../../login/model/loginModel"

let count = 0;

const AmendExam = (props) => {
  const dispatch = useDispatch();
  const examCentres = useSelector((state : { login : { centres : ICentres }}) => state.login.centres);
  const [selectedPrimaryCodes, setSelectedPrimary] = useState("");
  const { primaryExamCodes, supplementaryExamCodes } = useSelector(
    (state) => state.createAppointment
  );
  const [primarySelected, setPrimarySelected] = useState("");
  const [primaryCodes, setPrimaryCodes] = useState(primaryExamCodes);
  const [secondaryCodes, setSecondaryCodes] = useState(supplementaryExamCodes);
  const [setSecondarySelected] = useState([0]);
  const [checkedList, setCheckedList] = useState([]);
  const [showApiError, setShowApiError] = useState(false);
  const [setApiErrorData] = useState(false);
  const [examCentre] = useState(
    examCentres.length > 0 ? examCentres[0].centerId : []
  );
  const [showSupplementaryCodePopup, setshowSupplementaryCodePopup] =
    useState(false);
  const [code, setCodeOn] = useState("");
  const [showPrimaryCodePopup, setshowPrimaryCodePopup] = useState(false);
  const [primaryCurrentPage, setPrimaryCurrentPage] = useState(1);
  const [secondaryCurrentPage, setSecondaryCurrentPage] = useState(1);

  const pageSize = 10;

  useEffect(() => {
    loadExamCodes();
  }, [examCentre]);

  const primaryStartIndex = (primaryCurrentPage - 1) * pageSize;
  const primaryendIndex = primaryStartIndex + pageSize;
  const primaryVisibleData = primaryCodes.slice(
    primaryStartIndex,
    primaryendIndex
  );
  const secondaryStartIndex = (secondaryCurrentPage - 1) * pageSize;
  const secondaryendIndex = secondaryStartIndex + pageSize;
  const secondaryVisibleData = secondaryCodes.slice(
    secondaryStartIndex,
    secondaryendIndex
  );

  const onPrimaryPageChange = (page) => {
    setPrimaryCurrentPage(page);
  };
  const onSecondaryPageChange = (page) => {
    setSecondaryCurrentPage(page);
  };

  const loadExamCodes = async () => {
    try {
      dispatch(saveLoader(true));
      const response = await axiosGet(GET_EXAM_CODES + examCentre);
      dispatch(saveExaminationCodes(response));
      setPrimaryCodes(response.primary);
      setSecondaryCodes(response.supplementary);
      clearData();
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
        } else if (error.response.status === 400) {
          setApiErrorData("400 - Bad Request");
        } else if (error.response.status === 404) {
          setApiErrorData(
            "404 - Vehicle class API website could not found on their server"
          );
        } else {
          setApiErrorData(error.response.status);
        }
      }
    }
  };

  const handleChangePrimaryExamCode = async (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const data = event.target.value;
    const value = data.split(",");
    if (event.target.checked === true) {
      setPrimarySelected(event.target.value);
      setSelectedPrimary(value[0] + " " + value[1]);
      setPrimaryCodes(
        primaryExamCodes.filter(
          (x) => x.examCode + "," + x.examName !== event.target.value
        )
      );
    }
    setCodeOn(value[0]);
    props.updatePrimaryCode(value[0]);
  };
  const handleExpandPrimaryCodes = () => {
    setshowPrimaryCodePopup(true);
  };
  const closePrimExmPopup = (val) => {
    setshowPrimaryCodePopup(val);
  };
  const handleClickClearAll = (opt) => {
    if (opt === "prim") {
      setPrimaryCodes(primaryExamCodes);
      setPrimarySelected("");
      setSelectedPrimary("");
      setCodeOn("");
    } else if (opt === "supp") {
      count = 0;
      setSecondarySelected(0);
      setCheckedList([]);
    } else {
      setPrimaryCodes(primaryExamCodes);
      setPrimarySelected("");
      setSelectedPrimary("");
      setCodeOn("");
      count = 0;
      setSecondarySelected(0);
      setCheckedList([]);
    }
  };
  const clearData = () => {
    count = 0;
    setCheckedList([]);
    setSelectedPrimary("");
    setPrimarySelected("");
    setCodeOn("");
    setSecondarySelected(0);
  };
  const handleExpandSupplementaryCodes = () => {
    setshowSupplementaryCodePopup(true);
  };

  const closeSuppExmPopup = (val) => {
    setshowSupplementaryCodePopup(val);
  };
  const handleChangeSecondayExamCode = async (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    let arr = [];
    if (event.target.checked === true) {
      arr = [...checkedList, event.target.value];
      setCheckedList([...checkedList, event.target.value]);
      count++;
      const reducedArray = arr.reduce((acc, curr) => `${acc}${curr},`, "");

      props.updateSuppCode(reducedArray);
    } else {
      setCheckedList(
        checkedList.filter((obj) => {
          return obj !== event.target.value;
        })
      );
      props.updateSuppCode(
        arr.filter((obj) => {
          return obj !== event.target.value;
        })
      );
      if (count > 0) {
        count--;
      } else {
        count = 0;
      }
    }
    setSecondarySelected(count);
  };

  return (
    <div className="w-[580px] border border-[lightgray]">
      {/* {appointInformation.appointmentNumber === "" ||
        appointInformation.appointmentNumber === undefined ? (
          <div className="flex transition-timing-function: cubic-bezier(0.4, 0, 1, 1) p-2 ...">
            <div>
              <Chip color="default" radius="full">
                <div className="text-center">Network not reachable</div>
              </Chip>
            </div>
          </div>
        ) : ( */}
      <div>
        <div className="grid grid-col-2 grid-flow-col pt-[0.5px] pb-0">
          <div className="text-[11px] font-bold text-left ml-2 ">
            Primary Exam
          </div>
          <div className="text-[11px] font-bold text-left ml-10">
            Supplementary Exam
          </div>
        </div>
        <div className="grid grid-col-2 grid-flow-col pt-1 h-[80px] w-[98%]">
          <div className="text-[9px] h-[80px] max-w-[300px] w-[260px] pl-1 ml-1.5 overflow-y-auto overflow-x-hidden border border-[lightgray]">
            {selectedPrimaryCodes.length > 0 && (
              <div>
                <RadioGroup
                  color="success"
                  value={selectedPrimaryCodes}
                  onChange={(e) => {
                    handleChangePrimaryExamCode(e);
                  }}
                >
                  <Radio size="sm" value={selectedPrimaryCodes}>
                    <div className="text-[9px] uppercase text-[#00AF8F] text-left">
                      {selectedPrimaryCodes}
                    </div>
                  </Radio>
                </RadioGroup>
              </div>
            )}
            <RadioGroup
              color="success"
              className="pt-2 text-[9px]"
              value={selectedPrimaryCodes}
              size="sm"
            >
              {primaryVisibleData.map((exam) => (
                <Radio
                  size="sm"
                  className="pt-0"
                  key={exam.examCode}
                  value={exam.examCode + "," + exam.examName}
                  onChange={(e) => {
                    handleChangePrimaryExamCode(e);
                  }}
                >
                  <div className="text-[9px] uppercase pt-0  text-left">
                    {exam.examCode + " " + exam.examName}
                  </div>
                </Radio>
              ))}
            </RadioGroup>
          </div>
          <div className="text-[9px] h-[80px] max-w-[300px] w-[300px] pl-5 ml-1.5 overflow-y-auto overflow-x-hidden border border-[lightgray]">
            <CheckboxGroup
              className="pt-2"
              value={checkedList}
              classNames={{ wrapper: "after:bg-[#00AF8F] text-white" }}
            >
              {secondaryVisibleData.map((secondaryExam) => (
                <Checkbox
                  size="sm"
                  value={secondaryExam.examCode}
                  className="pt-0"
                  classNames={{ wrapper: "after:bg-[#00AF8F]" }}
                  onChange={handleChangeSecondayExamCode}
                >
                  <div className="text-[9px] uppercase pt-0 text-left">
                    {secondaryExam.examCode + " " + secondaryExam.examName}
                  </div>
                </Checkbox>
              ))}
            </CheckboxGroup>
          </div>
        </div>
        <div>
          <div className="flex">
            <div className="flex-initial w-[50%]">
              <div className="flex ">
                <div className="flex-initial w-[30px]">
                  <ArrowsMaximize
                    size="20"
                    className="pt-2"
                    data-testid="handleExpandPrimaryCodes"
                    onClick={handleExpandPrimaryCodes}
                  ></ArrowsMaximize>
                </div>
                <div className="flex-initial w-[250px]">
                  {primaryCodes.length >= 10 ? (
                    <Pagination
                      showControls
                      loop
                      total={Math.ceil(primaryCodes.length / pageSize)}
                      page={primaryCurrentPage}
                      onChange={onPrimaryPageChange}
                      classNames={{
                        wrapper:
                          "gap-0 overflow-visible h-8 rounded border border-divider",
                        item: "w-8 h-8 text-small rounded-none bg-transparent",
                        cursor:
                          "bg-[#00AF8F] shadow-lg from-default-500 to-default-800 dark:from-default-300 dark:to-default-100 text-white font-bold",
                      }}
                    />
                  ) : (
                    ""
                  )}
                </div>
                <div className="flex-initial w-[100px] text-[9px] pt-3">
                  Selected:{code}
                </div>
              </div>
            </div>
            <div className="flex-initial w-[50%] -ml-3">
              <div className="flex">
                <div className="flex-initial w-[30px]">
                  <ArrowsMaximize
                    size="20"
                    className="pt-2"
                    data-testid="handleExpandPrimaryCodes"
                    onClick={handleExpandSupplementaryCodes}
                  ></ArrowsMaximize>
                </div>
                <div className="flex-initial w-[300px]">
                  {secondaryCodes.length >= 10 ? (
                    <Pagination
                      showControls
                      loop
                      total={Math.ceil(secondaryCodes.length / pageSize)}
                      page={secondaryCurrentPage}
                      onChange={onSecondaryPageChange}
                      classNames={{
                        wrapper:
                          "gap-0 overflow-visible h-8 rounded border border-divider",
                        item: "w-8 h-8 text-small rounded-none bg-transparent",
                        cursor:
                          "bg-[#00AF8F] shadow-lg from-default-500 to-default-800 dark:from-default-300 dark:to-default-100 text-white font-bold",
                      }}
                    />
                  ) : (
                    ""
                  )}
                </div>
                <div className="flex-initial w-[100px] text-[9px] pt-3">
                  Selected:{checkedList.length}{" "}
                </div>
              </div>
            </div>
          </div>
          {showPrimaryCodePopup && (
            <PrimaryCodesPopup
              showPrimaryCodePopup={showPrimaryCodePopup}
              primaryExamCodes={primaryExamCodes}
              primarySelected={primarySelected}
              closePrimExmPopup={closePrimExmPopup}
              handleClickClearAll={handleClickClearAll}
              handleChangePrimaryExamCode={handleChangePrimaryExamCode}
            ></PrimaryCodesPopup>
          )}
          {showSupplementaryCodePopup && (
            <SupplementaryPopup
              showSupplementaryCodePopup={showSupplementaryCodePopup}
              supplementaryExamCodes={supplementaryExamCodes}
              closeSupplemantaryExmPopup={closeSuppExmPopup}
              handleChangeSecondayExamCode={handleChangeSecondayExamCode}
              handleClickClearAll={handleClickClearAll}
              checkedList={checkedList}
            ></SupplementaryPopup>
          )}
        </div>
      </div>
    </div>
  );
};

AmendExam.propTypes = {
  updatePrimaryCode: PropTypes.func,
  updateSuppCode: PropTypes.func,
};
export default AmendExam;

AmendExam.propTypes = {
  updatePrimaryCode: PropTypes.func,
  updateSuppCode: PropTypes.func,
};
