import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../login/Login";
import ExamMainPage from "../createAppointment/examination/ExaminationLayout";
import VehicleParticular from "../createAppointment/examination/VehicleParticulars";
import CreateAppointmentLanding from "../createAppointment/CreateAppointmentlandingPage";
import VehicleAttachment from "../attachment/VehicleAttachment";
import ExamTimeSlot from "../examinationTimeSlot/ExamTimeSlotLanding";
import EnquiryAppointmentLandingPage from "../enquireAppointment/EnquiryAppointmentLandingPage";
import AppointmentConfirmLandingPage from "../createAppointment/appointmentConfirmation/AppointmentConfirmLandingPage";
import AmendAttachment from "../enquireAppointment/amendAttachment/AmendAttachment";
import EnquiryAppointmentDetail from "../enquireAppointment/appointmentDetail/EnquiryAppointmentDetail";
import RescheduleAppointmentLandingPage from "../enquireAppointment/rescheduleAppontment/RescheduleAppointmentLandingPage";
import RescheduleConfirmLandingPage from "../enquireAppointment/rescheduleConfirmation/RescheduleConfirmLandingPage";
import AppointHistoryDetails from "../enquireAppointment/appointmentDetail/AppointmentHistroyDetail";
import SearchVehicle from "../searchVehicle/SearchVehicle";
import VehicleDetail from "../viewVehicleDetail/ViewVehicleLayout";
import MpvVehicle from "../viewVehicleDetail/MpvVehicle";
import AmendMpvVehicle from "../viewVehicleDetail/AmendMpvVehicle";
import NewVillageVehicle from "../vehicle/NewVillageVehicle";
import VehicleWatchlist from "../vehicle/vehicleWatchList/VehicleWatchlist";
import AmendVillageVehicle from "../vehicle/AmendVillageVehicle";
import AmendNonValidVehicle from "../vehicle/AmendNonValidVehicle";
import NonValidVehicle from "../viewVehicleDetail/NonValidVehicle";
import AddVehicleWatchlistData from "../vehicle/vehicleWatchList/AddVehicleWatchlistData";
import SearchInspectionLanes from "../centre/SearchInspectionLanes";
import AddWatchList from "../vehicle/vehicleWatchList/AddWatchList";
import InspectionLaneTableData from "../centre/InspectionLaneTableData";
import OverrideExamSchedule from "../centre/examinationSchedule/OverrideExamSchedule";
import ExaminationScheduleData from "../centre/examinationSchedule/ExaminationScheduleData";
import CreateRegularExaminationSchedule from "../centre/CreateRegularExaminationSchedule";
import CreateRegularExaminationScheduleTable from "../centre/CreateRegularExaminationScheduleTable";
import AddVehicleClassAndExamCodePopup from "../centre/examinationSchedule/AddVehicleClassAndExamCodePopup";
import TaxiBiSchedule from "../centre/examinationSchedule/TaxiBiSchedule";
import SpecialEventSchedule from "../centre/examinationSchedule/SpecialEventSchedule";
import CreateSpecialEvent from "../centre/examinationSchedule/CreateSpecialEvent";
import SearchSpecialEvent from "../centre/SearchSpecialEvent";
import SearchSpecialEventTable from "../centre/SearchSpecialEventTable";
import SpecialEventAppointments from "../centre/SpecialEventAppointments";
import OverrideDetail from "../centre/examinationSchedule/OverrideDetail";
import EditTaxiBiAnnual from "../centre/examinationSchedule/EditTaxiBiAnnual";
import TaxiBiAnnualDetail from "../centre/examinationSchedule/TaxiBiAnnualDetail";
import RandomCheckConfigurationSearch from "../centre/RandomCheckConfiguration/RandomCheckConfigurationSearch";
import RandomCheckConfigurationTable from "../centre/RandomCheckConfiguration/RandomCheckConfigurationTable";
import InspectionSchedulingSystem from "../assignment/InspectionSchedulingSystem";
import InspectionSchedulingSystemTable from "../assignment/InspectionSchedulingSystemTable";
import SelectPersoneLeavePopup from "../assignment/SelectPersoneLeavePopup";
import LaneConfiguration from "../assignment/LaneConfiguration";
import ConfirmDrawPopup from "../assignment/ConfirmDrawPopup";
import ResetAssignmentPopup from "../centre/ResetAssignmentPopup";
import SearchCentre from "../assignment/staffAssignment/SearchCentre";
import StaffAssignment from "../assignment/staffAssignment/StaffAssignment";
import ExamCodeMaintenance from "../examCodeMaintenance/ExamCodeMaintenance";
import SystemVehicleAttributeSearch from "../systemVehicleAttribute/SystemVehicleAttributeSearch";
import VehicleAttributeSearch from "../vehicleAttribute/VehicleAttributeSearch";
import StaffScheduleLandingPage from "../assignment/staffAssignment/StaffScheduleLandingPage";
import SelectVtPersonPopUp from "../assign/SelectVtPersonPopUp";
import AssignRandomCheckInspections from "../centre/randomCheck/AssignRandomCheckInspections";
import AssignRandomCheckInspectionsTable from "../centre/randomCheck/AssignRandomCheckInspectionsTable";
import MaintainVehicleAttribute from "../maintainVehicleAttribute9g/MaintainVehicleAttribute9g";
import ManagePayment from "../payment/ManagePayment";
import RolePriviliges from "../system/role and priviliges/RolePriviliges";
import ViewMasterVechiclepoup from "../vechicleMerge/ViewMasterVechiclepopup";
import SelectPopup from "../vechicleMerge/SelectPopup";
import VehicleMergeLinkSearch from "../vechicleMerge/VehicleMergeLinkSearch";
import ManagePayTogetherPopup from "../payment/ManagePayTogetherPopup";
import SearchUserAccount from "../system/userAccount/SearchUserAccount";
import UserDetail from "../system/userAccount/UserDetail";
import WorkLoadList from "../inspection/workloadList/WorkLoadList";
import MpvWorkloadList from "../inspection/vv-mpv/MpvWorkloadList";
import InspectionEnquiryLandingPage from "../inspection/inspectionEnquiry/InspectionEnquiryLandingPage";
import AddMasterVehicleTable from "../vechicleMerge/AddMasterVehcileTable";
import MergeVehicleInformationPopup from "../vechicleMerge/MergeVehicleInformationPopup";
import CurrentMasterVehicleTableType from "../vechicleMerge/CurrentMasterVehicleTableType";
import TabMasterVehicle from "../vechicleMerge/TabMasterVehicle";
import AddMasterVehicleTableType from "../vechicleMerge/AddMasterVehicleTableType";
import VehicleMergeNotesAndAlert from "../vechicleMerge/VehicleMergeNotesAndAlert";
import ViewLinkedVehicleListPopUp from "../vechicleMerge/ViewLinkedVehicleLisPopUpt";
import VehicleExaminationInfoSearch from "../inspection/vv-mpv/VehicleExaminationInfoSearch ";
import MPVVehicleInpectionInformation from "../inspection/vv-mpv/MPVVehicleInspectionInformation";
import OverallResult from "../inspection/vv-mpv/OverallResult";
import PoliceReport from "../report/PoliceReport";
import MPVVehicleInspectionInformation from "../inspection/MPVVehicleInspectionInformation";
import InputCertificate from "../inspectionInputCertificate/inputCertificateView/InputCertificate";
import InputCertificateSearch from "../inspectionInputCertificate/inputCertificateView/InputCertificateSearch";
import PaymentReport from "../payment/PaymentReport";
import EnbMaintenance  from "../system/ENB/EnbMaintenance";
import ManagementReport from "../report/ManagementReport";
import VehicleExaminationResult from "../report/VehicleExaminationResult";
import TaxiBiAppointmentLetterPreprint from "../createAppointment/taxiBIAppointment/TaxiBiAppointment";
import MaintainSysConfig from "../system/systemConfiguration/MaintainSysConfig";
import ExceptionReport from "../report/ExceptionReport";
import InspectionInfoLandingPage from "../inspection/inspectionInfo/InspectionInfoLandingPage";
import Ve11 from "../report/Ve11";
import AvailableExamQuto from "../report/AvailableExamQuto";
import InputCertificateTodo from "../inspectionInputCertificate/inputCertificateTodoEditi/InputCertificateTodo";
import WorkloadListRedraw from "../newRedrawReason/WorkLoadListRedraw";
import  BatchAppointmentReschedule from "../createAppointment/BatchAppointmentReschedule";
import VehicleWatchReason from "../system/vehicleWatchReason/VehicleWatchReason";
import CreateAppointmentTable from "../createAppointment/CreateApopintmentTable";
//import AuthorizationPopup from '../examinationTimeSlot/AuthorizationPopup';
import MPVVehicleExamination from "../vehicle/vv/mpvEnquriy/MPVVehicleExamination";
import ExamCodeListPopUp from "../examCodeMaintenance/ExamCodeListPopUp";
import LaneReallocation from "../laneReallocation/LaneReallocation";
import LaneReallocationConfirm from "../laneReallocation/LaneReallocationConfirm";
import LaneReallocationConfirmed from "../laneReallocation/LaneReallocationConfirmed";
import BatchResult from "../inspection/workloadList/BatchResult";
import BatchJob from "../system/batchJob/BatchJob";
import LaneReallocationFilter from "../inspection/workloadList/LaneReallocationFilter";
import AddJob from "../system/batchJob/AddJob";
import Vvmvp from "../inspection/vv-mpv/Vvmvp";
import ManageCentre from "../centre/maintainCentres/ManageCentre";

function RoutesList() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route
          path="/createAppointPage"
          element={<CreateAppointmentLanding />}
        ></Route>
        <Route
          path="/enquireAppoint"
          element={<EnquiryAppointmentLandingPage />}
        ></Route>
        <Route path="/examination" element={<ExamMainPage />}></Route>
        <Route
          path="/vehicleParticular"
          element={<VehicleParticular />}
        ></Route>
        <Route
          path="/VehicleAttachment"
          element={<VehicleAttachment />}
        ></Route>
        <Route path="/examSlot" element={<ExamTimeSlot />}></Route>
        <Route
          path="/appointConfirm"
          element={<AppointmentConfirmLandingPage />}
        ></Route>
        <Route
          path="/appointmentDetail/:appointmentId"
          element={<EnquiryAppointmentDetail />}
        />
        <Route path="/appointHistory" element={<AppointHistoryDetails />} />
        <Route path="/amendAttachment" element={<AmendAttachment />} />
        <Route
          path="/rescheduleAppointment"
          element={<RescheduleAppointmentLandingPage />}
        />
        <Route
          path="/rescheduleConfirm"
          element={<RescheduleConfirmLandingPage />}
        />
        <Route path="/searchVehicle" element={<SearchVehicle />} />
        <Route path="/vehicleDetail/:vehicleId" element={<VehicleDetail />} />
        <Route path="/mpvVehicle" element={<MpvVehicle />} />
        <Route path="/amendMpvVehicle" element={<AmendMpvVehicle />} />
        <Route path="/newVillageVehicle" element={<NewVillageVehicle />} />
        <Route path="/vehicleWatchlist" element={<VehicleWatchlist />} />
        <Route path="/amendVillageVehicle" element={<AmendVillageVehicle />} />
        <Route path="/Vvmvp" element={<Vvmvp/>} />
        <Route
          path="/amendNonValidVehicle"
          element={<AmendNonValidVehicle />}
        />
        <Route path="/nonValidVehicle" element={<NonValidVehicle />} />
        <Route path="/addwatchlistdata" element={<AddVehicleWatchlistData />} />
        <Route
          path="/searchInspectionLanes"
          element={<SearchInspectionLanes />}
        />
        <Route path="/addwatchlistdata" element={<AddVehicleWatchlistData />} />
        <Route path="/addWatchList" element={<AddWatchList />} />
        <Route
          path="/inspectionLaneTableData"
          element={<InspectionLaneTableData />}
        />
        <Route
          path="/createRegularExaminationSchedule"
          element={<CreateRegularExaminationSchedule />}
        />
        <Route
          path="/createRegularExaminationScheduleTable"
          element={<CreateRegularExaminationScheduleTable />}
        />
        <Route
          path="/addVehicleClassAndExamCode"
          element={<AddVehicleClassAndExamCodePopup />}
        />
        <Route
          path="/searchexaminationSchedule"
          element={<ExaminationScheduleData />}
        />
        <Route
          path="/overrideexamschedule"
          element={<OverrideExamSchedule />}
        />
        <Route path="/taxibischedule" element={<TaxiBiSchedule />} />
        <Route
          path="/specialeventschedule"
          element={<SpecialEventSchedule />}
        />
        <Route path="/createSpecialEvent" element={<CreateSpecialEvent />} />
        <Route path="/searchSpecialEvent" element={<SearchSpecialEvent />} />
        <Route
          path="/searchSpecialEventTable"
          element={<SearchSpecialEventTable />}
        />
        <Route
          path="/SpecialEventAppointments"
          element={
            <SpecialEventAppointments check={undefined} checkFunc={undefined} />
          }
        />
        <Route path="/overridedetail" element={<OverrideDetail />} />
        <Route path="/biAnnualDetail" element={<TaxiBiAnnualDetail />} />
        <Route path="/editAnnualExam" element={<EditTaxiBiAnnual />} />
        <Route
          path="/RandomCheckConfigurationSearch"
          element={<RandomCheckConfigurationSearch />}
        />
        <Route
          path="/RandomCheckConfigurationTable"
          element={<RandomCheckConfigurationTable checkFunc={undefined} />}
        />
        <Route
          path="/inspectionSchedulingSystem"
          element={<InspectionSchedulingSystem />}
        />
        <Route
          path="/inspectionSchedulingSystemTable"
          element={
            <InspectionSchedulingSystemTable
              check={undefined}
              checkFunc={undefined}
            />
          }
        />
        <Route
          path="/selectPersoneLeavePopup"
          element={<SelectPersoneLeavePopup />}
        />
        <Route path="/laneConfiguration" element={<LaneConfiguration />} />
        <Route path="/ConfirmDrawPopup" element={<ConfirmDrawPopup />} />
        <Route
          path="/ResetAssignmentPopup"
          element={<ResetAssignmentPopup />}
        />
        <Route path="/searchstaffassignment" element={<SearchCentre />} />
        <Route path="/staffassignment" element={<StaffAssignment />} />
        <Route path="/examCodeMaintenance" element={<ExamCodeMaintenance />} />
        <Route
          path="/systemvehicleAttributeSearch"
          element={<SystemVehicleAttributeSearch />}
        />
        <Route
          path="/vehicleAttributeSearch"
          element={<VehicleAttributeSearch />}
        />
        <Route path="/staffSchedule" element={<StaffScheduleLandingPage />} />
        <Route path="/selectVtPerson" element={<SelectVtPersonPopUp />} />
        <Route
          path="/managePayment"
          element={<ManagePayment check={undefined} checkFunc={undefined} />}
        />
        <Route
          path="/maintainVehicleAttribute"
          element={<MaintainVehicleAttribute />}
        />
        {/* <Route path="/rolesPrivileges" element={<RolePriviliges/>}/> */}
        <Route
          path="/viewmastervechiclepopup"
          element={<ViewMasterVechiclepoup />}
        />
        <Route path="/SelectPopup" element={<SelectPopup />} />
        <Route
          path="/vehicleMergeLinkSearch"
          element={<VehicleMergeLinkSearch />}
        />
        <Route
          path="/assignRandomCheckInspections"
          element={<AssignRandomCheckInspections />}
        />
        <Route
          path="/assignRandomCheckInspectionsTable"
          element={
            <AssignRandomCheckInspectionsTable
              check={undefined}
              checkFunc={undefined}
            />
          }
        />
        <Route
          path="/workloadlist"
          element={<WorkLoadList check={undefined} checkFunc={undefined} />}
        />
        <Route path="/mpvworkload" element={<MpvWorkloadList />} />
        <Route
          path="/ManagePayTogetherPopup"
          element={<ManagePayTogetherPopup />}
        />
        <Route path="/searchUser" element={<SearchUserAccount />} />
        <Route path="/userDetail" element={<UserDetail />} />
        <Route
          path="/inspectionEnquiry"
          element={<InspectionEnquiryLandingPage />}
        />{" "}
        <Route
          path="/MergeVehicleInformationPopup"
          element={<MergeVehicleInformationPopup />}
        />
        <Route
          path="/Addmastervehicletable"
          element={<AddMasterVehicleTable />}
        />
        <Route
          path="/Currentmastervehicletabletype"
          element={<CurrentMasterVehicleTableType />}
        />
        <Route
          path="/Addmastervehicletabletype"
          element={<AddMasterVehicleTableType />}
        />
        <Route path="/Tabmastervehicle" element={<TabMasterVehicle />} />
        <Route
          path="/vehicleMergeNotesAndAlert"
          element={<VehicleMergeNotesAndAlert />}
        />
        <Route
          path="/ViewLinkedVehicleListPopup"
          element={<ViewLinkedVehicleListPopUp />}
        />
        <Route
          path="vehicleExamSearch"
          element={<VehicleExaminationInfoSearch />}
        />
        <Route
          path="mpvVehicleInspectionInfo"
          element={<MPVVehicleInpectionInformation />}
        />
        <Route
          path="/overallResult"
          element={<OverallResult check={undefined} />}
        />
        <Route
          path="/policeReport"
          element={<PoliceReport/>}
        />
        <Route path="PaymentReport" element={<PaymentReport />} />
        <Route
          path="/MPVVehicleInspectionInformation"
          element={<MPVVehicleInspectionInformation />}
        />
        <Route path="/inputCertificate" element={<InputCertificate />} />
        <Route
          path="/inputCertificateSearch"
          element={<InputCertificateSearch />}
        />
        <Route path="/AvailableExamQuto" element={<AvailableExamQuto />} />
        <Route path="/systemEnbMaintenance" element={<EnbMaintenance />} />
        <Route
          path="/inputCertificateTodo"
          element={<InputCertificateTodo />}
        />
        <Route path="/workLoadListRedraw" element={<WorkloadListRedraw />} />
        <Route path="/vehicleWatchReason" element={<VehicleWatchReason />} />
        <Route path="/maintainSysConfig" element={<MaintainSysConfig />} />
        <Route
          path="/createAppoinmentTable"
          element={<CreateAppointmentTable />}
        />
        <Route
          path="/mpvVehicleExamination"
          element={<MPVVehicleExamination />}
        />
        <Route path="/manageementReport" element={<ManagementReport />} />
        {/* <Route path="/availableVehcileClassPopup" element={<AvailableVehicleClassPopup/>}/>  */}
        <Route path="/examCodelistPopup" element={<ExamCodeListPopUp />} />
        <Route path="/roleandprivilages" element={<RolePriviliges />} />
        {/* //<Route path="/vvVehicleExamination" element={<VVVehicleExamination/>}/>  */}
        <Route path="/laneReallocation" element={<LaneReallocation />} />
        <Route
          path="/laneReallocation/confirm"
          element={<LaneReallocationConfirm />}
        />
        <Route
          path="/laneReallocation/confirmed"
          element={<LaneReallocationConfirmed />}
        />
         <Route path="/ve11" element={<Ve11/>}/>
          <Route path="/vehicleExaminationResult" element={<VehicleExaminationResult/>}/>
          <Route path="/exceptionReport" element={<ExceptionReport/>}/>
          <Route path="/appointmentTaxiBIPrePrint" element={<TaxiBiAppointmentLetterPreprint/>}/>
          <Route path="/batchReschedule" element={<BatchAppointmentReschedule/>}/>
          <Route path="/inspectionInfo" element={<InspectionInfoLandingPage/>}/>
          <Route path="/batchResult" element={<BatchResult />} />
          <Route path="/batchjob" element={<BatchJob />} />
          <Route path="/laneReallocationFilter" element={<LaneReallocationFilter />} />
          <Route path="/addjob" element={<AddJob />} />
          <Route path="/manageCentre" element={<ManageCentre />} />

      </Routes>
    </div>
  );
}
export default RoutesList;
