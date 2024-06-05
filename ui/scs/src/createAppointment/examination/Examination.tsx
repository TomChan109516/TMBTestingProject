import React, { useEffect, useMemo, useState, ChangeEvent } from "react";
import {
  Select,
  SelectItem,
  CheckboxGroup,
  Checkbox,
  Pagination,
} from "@nextui-org/react";
import { CalendarEvent, ArrowsMaximize } from "tabler-icons-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from "react-redux";
import { saveLoader } from "../../login/state/loginSlice";
import { saveExaminationCodes } from "../state/createAppointmentSlice";
import PrimaryCodesPopup from "./PrimaryCodesPopup";
import SupplementaryPopup from "./SupplementaryPopup";
import { ICentres } from "../../login/model/loginModel";
import { getCentersAll, getExamCodes } from "./services/examinationService";
import { IExamCodeDetails } from "../model/createAppointmentSliceModel";

const Examination = (props) => {
  const { updateCentre, updateCentreId, updateInspectionTypeIds } = props;
  const dispatch = useDispatch();
  const [dateValue, setDateValue] = useState(new Date());
  const status = "pass";
  const [selectedPrimaryCodes, setSelectedPrimaryCodes] = useState<string[]>(
    []
  );
  const [primaryCodes, setPrimaryCodes] = useState<IExamCodeDetails[]>([]);
  const [supplementaryCodes, setSupplementaryCodes] = useState<IExamCodeDetails[]>([]);
  const [checkedList, setCheckedList] = useState<string[]>([]);
  const [examFees, setExamFees] = useState<string[]>([]);
  const [examCentre, setExamCentre] = useState("");
  const [inspectionTypeIdsPrimary, setInspectionTypeIdsPrimary] = useState<
    string[]
  >([]);
  const [examCentreData, setExamCentreData] = useState("");
  const [centerData, setCenterData] = useState<ICentres[]>([]);
  const [showSupplementaryCodePopup, setShowSupplementaryCodePopup] =
    useState<boolean>(false);
  const [showPrimaryCodePopup, setShowPrimaryCodePopup] =
    useState<boolean>(false);
  const [primaryCurrentPage, setPrimaryCurrentPage] = useState(1);
  const [supplementaryCurrentPage, setSupplementaryCurrentPage] = useState(1);

  const pageSize = 10;
  useMemo(() => {
    if (updateCentre) {
      updateCentre(examCentre);
    }
    if (updateCentreId) {
      updateCentreId(examCentreData);
    }
    if (updateInspectionTypeIds) {
      updateInspectionTypeIds(inspectionTypeIdsPrimary);
    }
  }, [examCentre, examCentreData, dateValue, inspectionTypeIdsPrimary]);

  const primaryStartIndex = (primaryCurrentPage - 1) * pageSize;
  const primaryendIndex = primaryStartIndex + pageSize;
  const primaryVisibleData = primaryCodes.slice(
    primaryStartIndex,
    primaryendIndex
  );
  const supplementaryStartIndex = (supplementaryCurrentPage - 1) * pageSize;
  const supplementaryendIndex = supplementaryStartIndex + pageSize;
  const supplementaryVisibleData = supplementaryCodes.slice(
    supplementaryStartIndex,
    supplementaryendIndex
  );

  const onPrimaryPageChange = (page) => {
    setPrimaryCurrentPage(page);
  };
  const onSupplementaryPageChange = (page) => {
    setSupplementaryCurrentPage(page);
  };

  const handleChangeExamCenter = async (
    event: ChangeEvent<HTMLSelectElement>
  ) => {
    setExamCentreData(event.target.value);
    const centre = centerData?.find((center) => {
      if (center.centreId === event.target.value) {
        return center.centreCode;
      }
    });
    console.log(centre, "centerName");
    setExamCentre(centre?.centreCode ?? "");
    setSelectedPrimaryCodes([]);
  };
  const params = {
    status: "All",
  };

  const loadCentres = async () => {
    try {
      dispatch(saveLoader(true));
      const response = await getCentersAll(params);
      console.log("res", response);
      setCenterData(response.centres);
      dispatch(saveLoader(false));
    } catch (error) {
      dispatch(saveLoader(false));
    }
  };
  useEffect(() => {
    loadCentres();
  }, []);

  const loadExamCodes = async () => {
    try {
      dispatch(saveLoader(true));
      const response = await getExamCodes(examCentreData);
      setPrimaryCodes(
        response.examCodeDetails.filter((item) => item.ExamClass === "Primary")
      );
      dispatch(saveExaminationCodes(response));
      // ( examCentre=== 'CTB' && status !== "pass") ? setPrimaryCodes(response.primary.filter(item => item.examCode === '08R')): setPrimaryCodes(response.primary);
      // setSupplementaryCodes(response.supplementary);
      setSupplementaryCodes(
        response.examCodeDetails.filter(
          (item) => item.ExamClass === "Supplementary"
        )
      );
      clearData();
      dispatch(saveLoader(false));
    } catch (error) {
      dispatch(saveLoader(false));
    }
  };

  useEffect(() => {
    if (examCentreData !== "" && examCentreData != null) {
      loadExamCodes();
    }
  }, [examCentreData]);
  const handleChangePrimaryExamCode = async (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const data = event.target.value.split(",")[0];
    const selectedCode = primaryCodes.filter(
      (item) => item?.ExamCode === data
    )[0];
    const inspectionTypeId = selectedCode?.InspectionTypeId;
    const examFee = selectedCode?.examFee;
    setExamFees((prev) => [...prev, selectedCode?.examFee]);
    if (event.target.checked === true) {
      setSelectedPrimaryCodes((prev) => [...prev, event.target.value]);
      setInspectionTypeIdsPrimary((prev) => [...prev, inspectionTypeId]);
      props.updatePrimaryCode((prev) => [...prev, data]);
      props.updateExamFee(
        examFees.length > 1 ? examFees.sort((a, b) => Number(b) - Number(a))[0] : Number(examFee)
      );
    } else {
      setSelectedPrimaryCodes((prev) =>
        prev.filter((code) => code !== event.target.value)
      );
      setInspectionTypeIdsPrimary((prev) =>
        prev.filter((id) => id !== inspectionTypeId)
      );
      props.updatePrimaryCode((prev) => prev.filter((code) => code !== data));
      props.updateExamFee("");
    }
  };
  const handleExpandPrimaryCodes = () => {
    setShowPrimaryCodePopup(true);
  };
  const closePrimExmPopup = (val) => {
    setShowPrimaryCodePopup(val);
  };
  const handleClickClearAll = (opt) => {
    if (opt === "prim") {
      setSelectedPrimaryCodes([]);
      setInspectionTypeIdsPrimary([]);
    } else if (opt === "supp") {
      setCheckedList([]);
      setInspectionTypeIdsPrimary([]);
    } else {
      setSelectedPrimaryCodes([]);
      setCheckedList([]);
      setInspectionTypeIdsPrimary([]);
    }
  };
  const clearData = () => {
    setCheckedList([]);
    setSelectedPrimaryCodes([]);
  };
  const handleRequestDateChanged = (newValue: React.SetStateAction<Date>) => {
    setDateValue(newValue);
    props.updateDate(newValue);
  };
  const handleExpandSupplementaryCodes = () => {
    setShowSupplementaryCodePopup(true);
  };

  const closeSuppExmPopup = (val) => {
    setShowSupplementaryCodePopup(val);
  };
  const handleChangeSecondayExamCode = async (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const data = event.target.value.split(",")[0];
    const selectedCode = supplementaryCodes.filter(
      (item) => item?.ExamCode === data
    )[0];
    const inspectionTypeId = selectedCode?.InspectionTypeId;
    const examFee = selectedCode?.examFee;
    setExamFees((prev) => [...prev, selectedCode?.examFee]);
    if (event.target.checked === true) {
      setCheckedList((prev) => [...prev, event.target.value]);
      setInspectionTypeIdsPrimary((prev) => [...prev, inspectionTypeId]);
      props.updateSuppCode((prev) => [...prev, event.target.value]);
      props.updateExamFee(examFees.length > 1 ? examFees.sort((a, b) => Number(b) - Number(a))[0] : Number(examFee)
      );
    } else {
      setCheckedList((prev) =>
        prev.filter((code) => code !== event.target.value)
      );
      setInspectionTypeIdsPrimary((prev) =>
        prev.filter((id) => id !== inspectionTypeId)
      );
      props.updateSuppCode((prev) =>
        prev.filter((code) => code !== event.target.value)
      );
      props.updateExamFee(examFees.length > 1 ? examFees.sort((a, b) => Number(b) - Number(a))[0] : Number(examFee));
    }
  };
  console.log('inspectionTypeId', inspectionTypeIdsPrimary);
  console.log(`primary`, selectedPrimaryCodes);

  return (
    <div>
      <div className="text-left bg-[#007F62] text-white text-[13px] pb-3 pl-2 h-5">
        Examination
      </div>
      <div>
        <div className="grid md:grid-col-2 xs:grid-col-2 sm:grid-col-2 grid-flow-col  pb-0">
          <div className="text-xs mt-[5px] text-left ml-3 font-calibri font-bold">
            Center
          </div>
          <div>
            <Select
              labelPlacement="outside-left"
              placeholder="Center"
              className="w-[180px] text-[10px] pt-0 pb-0"
              size="sm"
              selectedKeys={[examCentreData]}
              value={examCentreData}
              name="center"
              aria-label="center"
              variant="bordered"
              onChange={(e) => {
                handleChangeExamCenter(e);
              }}
              radius="none"
            >
              {centerData.map((center) => (
                <SelectItem
                  key={center.centreId}
                  value={center.centreId}
                  className="text-[10px]"
                >
                  {center.centreCode}
                </SelectItem>
              ))}
            </Select>
          </div>
          <div className="text-xs mt-[5px] font-calibri font-bold">
            {" "}
            1st Request On
          </div>
          <div className="flex border border-solid border-[lightgray] mr-2 ">
            <CalendarEvent color="lightgray" size="25" className="ml-0" />
            <DatePicker
              minDate={new Date()}
              className="text-[10px] p-[4px] h-8 w-full"
              selected={dateValue}
              onChange={handleRequestDateChanged}
            // startContent={
            //   <CalendarEvent color="black" size="20" className="ml-3" />
            // }
            />
          </div>
        </div>
        <div className="grid grid-col-2 grid-flow-col pt-[0.5px] pb-0">
          <div className="text-xs text-left ml-[13px] font-calibri font-bold">
            Primary Exam
          </div>
          <div className="text-xs text-right font-calibri font-bold">
            Supplementary Exam
          </div>
          <div className="text-xs text-right font-calibri mt-[2px] mb-[1px] mr-2">
            <button
              className="border-solid border-[gray] border-1"
              onClick={handleClickClearAll}
            >
              Clear All
            </button>
          </div>
        </div>
        <div className="grid grid-col-2 grid-flow-col border border-[lightgray] pt-1 ml-2 h-[130px] w-[97%]">
          <div className="text-xs h-[128px] max-w-[300px] w-[300px] pl-3 overflow-y-auto overflow-x-hidden border-solid border-[gray] border-r-1">
            {selectedPrimaryCodes.length > 0 && (
              <div className=" border-solid border-[gray] border-b-1 pt-1 pb-1">
                <CheckboxGroup
                  size="sm"
                  radius="none"
                  classNames={{
                    wrapper: "selection:bg-[#00AF8F] text-[#00AF8F] pb-0",
                  }}
                  value={selectedPrimaryCodes}
                  onChange={(e) => {
                    handleChangePrimaryExamCode(e);
                  }}
                >
                  {selectedPrimaryCodes.map((data, index) => {
                    return (
                      <Checkbox
                        size="sm"
                        radius="none"
                        key={index}
                        value={data}
                        className="pb-1 pt-1"
                        isSelected={data[index]}
                        classNames={{
                          wrapper:
                            "after:bg-[#00AF8F] text-white rounded-sm text-xs ",
                          label: "pb-0",
                        }}
                      >
                        <div className="text-[10px] uppercase text-[#00Af8F] text-left">
                          {data}
                        </div>
                      </Checkbox>
                    );
                  })}
                </CheckboxGroup>
              </div>
            )}
            <CheckboxGroup
              className="text-[10px]"
              value={selectedPrimaryCodes}
              classNames={{ wrapper: "after:bg-[#00AF8F] text-white" }}
              size="sm"
            >
              {primaryVisibleData.length > 0 ? (
                primaryVisibleData.map((exam) => (
                  <Checkbox
                    size="sm"
                    radius="none"
                    classNames={{
                      wrapper: "after:bg-[#00AF8F] text-white",
                    }}
                    key={exam?.ExamCode}
                    value={exam?.ExamCode + "," + exam?.InspectionTypeName}
                    onChange={(e) => {
                      handleChangePrimaryExamCode(e);
                    }}
                    className="pb-0"
                  >
                    <div className="text-[10px] uppercase pt-0  text-left">
                      {exam?.ExamCode + " " + exam?.InspectionTypeName}
                    </div>
                  </Checkbox>
                ))
              ) : (
                <p className="font-calibri text-sm text-black text-left">
                  No Data
                </p>
              )}
            </CheckboxGroup>
          </div>
          <div className="text-[10px] h-[130px] max-w-[300px] w-[300px] pl-3  overflow-y-auto overflow-x-hidden">
            <CheckboxGroup
              className={supplementaryVisibleData?.length > 0 ? "pt-2" : ""}
              radius="none"
              value={checkedList}
              classNames={{ wrapper: "after:bg-[#00AF8F]" }}
            >
              {supplementaryVisibleData.length > 0 ? (
                supplementaryVisibleData.map((supplementaryExam, index) => (
                  <Checkbox
                    size="sm"
                    radius="none"
                    key={index}
                    value={supplementaryExam?.ExamCode}
                    className="pt-0"
                    classNames={{ wrapper: "after:bg-[#00AF8F]" }}
                    onChange={handleChangeSecondayExamCode}
                  >
                    <div className="text-[10px] uppercase pt-0 text-left">
                      {supplementaryExam?.ExamCode +
                        " " +
                        supplementaryExam?.InspectionTypeName}
                    </div>
                  </Checkbox>
                ))
              ) : (
                <p className="font-calibri text-sm text-black pt-0 text-left">
                  No Data
                </p>
              )}
            </CheckboxGroup>
          </div>
        </div>
        <div>
          <div className="flex">
            <div className="flex-initial w-[50%]">
              <div className="flex ml-2">
                <div className="flex-initial w-[30px]">
                  <ArrowsMaximize
                    className="pt-2"
                    data-testid="handleExpandPrimaryCodes"
                    onClick={handleExpandPrimaryCodes}
                  ></ArrowsMaximize>
                </div>
                <div className="flex-initial w-[300px] mt-1">
                  {primaryCodes.length === 10 ? (
                    <Pagination
                      showControls
                      // loop
                      total={Math.ceil(primaryCodes.length / pageSize)}
                      page={primaryCurrentPage}
                      onChange={onPrimaryPageChange}
                      classNames={{
                        wrapper:
                          "gap-0 overflow-visible h-7 rounded border border-divider rounded-none mt-1",
                        item: "h-7 text-sm rounded-none bg-transparent rounded-none",
                        prev: "h-7 rounded-none",
                        next: "h-7 rounded-none",
                        cursor:
                          "bg-[#00AF8F]  h-7  shadow-lg from-default-500 to-default-800 dark:from-default-300 dark:to-default-100 text-white font-bold rounded-none",
                      }}
                    />
                  ) : (
                    ""
                  )}
                </div>
                <div className="flex-initial w-[100px] text-[12px] pt-2">
                  Selected:{selectedPrimaryCodes.length}
                </div>
              </div>
            </div>
            <div className="flex-initial w-[50%]">
              <div className="flex ml-2">
                <div className="flex-initial w-[30px]">
                  <ArrowsMaximize
                    className="pt-2"
                    data-testid="handleExpandPrimaryCodes"
                    onClick={handleExpandSupplementaryCodes}
                  ></ArrowsMaximize>
                </div>
                <div className="flex-initial w-[300px] mt-1">
                  {supplementaryCodes.length === 10 ? (
                    <Pagination
                      showControls
                      loop
                      total={Math.ceil(supplementaryCodes.length / pageSize)}
                      page={supplementaryCurrentPage}
                      onChange={onSupplementaryPageChange}
                      classNames={{
                        wrapper:
                          "gap-0 overflow-visible h-7 rounded border border-divider rounded-none",
                        item: " h-7 text-small rounded-none bg-transparent",
                        prev: "h-7 rounded-none",
                        next: "h-7 rounded-none",
                        cursor:
                          "bg-[#00AF8F] h-7 shadow-lg from-default-500 to-default-800 dark:from-default-300 dark:to-default-100 text-white font-bold rounded-none",
                      }}
                    />
                  ) : (
                    ""
                  )}
                </div>
                <div className="flex-initial w-[100px] text-[12px] pt-2">
                  Selected:{checkedList.length}{" "}
                </div>
              </div>
            </div>
          </div>
          {showPrimaryCodePopup && (
            <PrimaryCodesPopup
              showPrimaryCodePopup={showPrimaryCodePopup}
              primaryExamCodes={primaryCodes}
              selectedPrimaryCodes={selectedPrimaryCodes}
              closePrimExmPopup={closePrimExmPopup}
              handleClickClearAll={handleClickClearAll}
              handleChangePrimaryExamCode={handleChangePrimaryExamCode}
            ></PrimaryCodesPopup>
          )}
          {showSupplementaryCodePopup && (
            <SupplementaryPopup
              showSupplementaryCodePopup={showSupplementaryCodePopup}
              supplementaryExamCodes={supplementaryCodes}
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
export default Examination;
