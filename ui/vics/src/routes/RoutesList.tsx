import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import VehicleRegistration from "../vehicleRegistration/RegistrationMainPage";
import ArtuAdministration from "../artu/ArtuAdministration";
import Login from "../login/Login";
import ProtectedRoute from "./ProtectedRoute";
import DefectItemMaintenanceInterface from "../vehicleRegistration/maintainInspectionItem/DefectItemMaintenanceInterface";
import ExaminationTypeandTestItems from "../defineExamTypeAndAssociatedTestItems/ExaminationTypeAndTestItems";
import DefineEquipmentItemAndDetails from "../maintainEquipmentAndMaintenanceHistory/DefineEquipmentItemAndDetails";
import LocationAndDetails from "../vehicleRegistration/workStationLocation/LocationAndDetails";
import DefineTestPassingStandardsTabs from "../defineTestPassingStandards/DefineTestPassingStandardsTabs";
import DefineTestPassingStandards from "../defineTestPassingStandards/DefineTestPassingStandardGeneralTable";
import Report from "../dtcs/SCR_CSM_004/Report";
import GenerationReport from "../dtcs/SCR_CSM_004/GenerationReport";
import AxleWeighBridgeOnGroundLevel from "../axleWeighBridgeOnGroundLevel/AxleWeighBridgeOnGroundLevel";
import LimitConfig from "../LimitConfig";
import DefineTestPassingStanderdsHLTpopUp from "../defineTestPassingStandards/DefineTestPassingStanderdsHLTpopUp";
import TiltingStabilityTest from "../axleWeighBridgeOnGroundLevel/TiltingStabilityTest";
import PastSeparate from "../pastSeparateTest/PastSeparate";
import SweptCircleAndPortableBrakeRollerTester from "../separateTests/SweptCircleAndPortableBrakeRollerTester";
import SummaryReportGeneration from "../vehicleRegistration/summaryReportGeneration/SummaryReportGeneration.tsx";
import ExemptVehicle from "../dtcs/TestMaintenance/ExemptVehicle";
import DisableExemption from "../dtcs/TestMaintenance/DisableExemption";
import ReactiveExemption from "../dtcs/TestMaintenance/ReactiveExemption";
import TestExemptVehicle from "../dtcs/TestMaintenance/TestExemptVehicle";
// import SubmitPopUp from "../dtcs/SubmissionConfirm/SubmitPopUp.tsx";
import DynoListMainPageScreen from "../dtcs/DynoListItems/DynoListMainPageScreen";
import SubmitPopUp from "../dtcs/SubmissionConfirm/SubmitPopUp";
import BrakeTestLane from "../SeperateTestsCommon/BrakeTestLane";
import HandBrakeTestRamp from "../SeperateTestsCommon/HandBrakeTestRamp";
import MotorcycleBrakeTestRamp from "../SeperateTestsCommon/MotorcycleBrakeTestRamp.tsx";
import DynoListMainPageLastScreen from "../dtcs/DynoListItems/DynoListMainPageLastScreen";
import CloseStationPrintButton from "../dtcs/DynoListItems/CloseStationPrintButton";


function RoutesList() {
  const navigate = useNavigate();
  const isUserAuthenticated =
    localStorage.getItem("isAuthenticated") === "true";

  useEffect(() => {
    if (
      isUserAuthenticated &&
      (window.location.pathname === "/" ||
        window.location.pathname.startsWith("/?clientip="))
    ) {
      navigate("/vehicleRegistration");
    }
  }, [isUserAuthenticated, navigate]);
  return (
    <Routes>
      <Route
        path="/defineTestPassingStanderdsHLTpopUp"
        element={<DefineTestPassingStanderdsHLTpopUp />}
      />
      <Route path="/PastSeparate" element={<PastSeparate />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/vehicleRegistration" element={<VehicleRegistration />} />
        <Route path="/ArtuAdministration" element={<ArtuAdministration />} />

        <Route
          path="/station-management"
          element={<ExaminationTypeandTestItems />}
        />
        <Route
          path="/ExaminationTypeandTestItems"
          element={<ExaminationTypeandTestItems />}
        />
        <Route
          path="/device-management"
          element={<DefineEquipmentItemAndDetails />}
        />
        <Route path="/locationAndDetails" element={<LocationAndDetails />} />
        <Route
          path="/DefineTestPassingStandardsTabs"
          element={<DefineTestPassingStandardsTabs />}
        />
        <Route
          path="/DefineTestPassingStandards"
          element={<DefineTestPassingStandards />}
        />
        <Route path="/Report" element={<Report />} />
        <Route path="/GenerationReport" element={<GenerationReport />} />
        <Route path="/SubmiTPopUp" element={<SubmitPopUp />} />

        <Route
          path="/DynoListMainPageScreen"
          element={<DynoListMainPageScreen />}
        />
        <Route
          path="/DynoListMainPageLastScreen"
          element={<DynoListMainPageLastScreen />}
        />
        <Route
          path="/CloseStationPrintButton"
          element={<CloseStationPrintButton />}
        />
        <Route
          path="/station-management"
          element={<ExaminationTypeandTestItems />}
        />
        <Route path="/LimitConfig" element={<LimitConfig />} />
        <Route
          path="/ExaminationTypeandTestItems"
          element={<ExaminationTypeandTestItems />}
        />
        <Route
          path="/device-management"
          element={<DefineEquipmentItemAndDetails />}
        />
        <Route path="/locationAndDetails" element={<LocationAndDetails />} />
        <Route
          path="/DefectItemMaintenanceInterface"
          element={<DefectItemMaintenanceInterface />}
        />
        <Route
          path="/DefineTestPassingStandardsTabs"
          element={<DefineTestPassingStandardsTabs />}
        />
        <Route
          path="/DefineTestPassingStandards"
          element={<DefineTestPassingStandards />}
        />
        <Route
          path="/AxleWeighBridgeOnGroundLevel"
          element={<AxleWeighBridgeOnGroundLevel />}
        />
        <Route
          path="/TiltingStabilityTest"
          element={<TiltingStabilityTest />}
        />
        <Route path="/LimitConfig" element={<LimitConfig />} />
        <Route
          path="/SummaryReportGeneration"
          element={<SummaryReportGeneration />}
        />
        <Route path="/brakeTestLane" element={<BrakeTestLane />} />
        <Route path="/handBrakeTestRamp" element={<HandBrakeTestRamp />} />
        <Route
          path="/motorcycleBrakeTestRamp"
          element={<MotorcycleBrakeTestRamp />}
        />
      </Route>
      <Route
        path="/testarea"
        element={<SweptCircleAndPortableBrakeRollerTester />}
      />
      <Route path="/*" element={<Login />} />
      <Route path="/TestExemptVehicle" element={<TestExemptVehicle />} />
      <Route path="/ExemptVehicle" element={<ExemptVehicle />} />
      <Route
        path="/DisableExemption"
        element={<DisableExemption setIsDisableExemption={undefined} />}
      /> 
      <Route
        path="/ReactiveExemption"
        element={<ReactiveExemption setIsReactiveExemption={undefined} />}
      />
    </Routes>
  );
}
export default RoutesList;
