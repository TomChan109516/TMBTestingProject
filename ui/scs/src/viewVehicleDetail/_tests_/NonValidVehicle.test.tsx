import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { fireEvent, render } from "@testing-library/react";
import NonValidVehicle from "../NonValidVehicle";
import { store } from "../../store/store";
import "@testing-library/jest-dom";

describe("NonValidVehicle", () => {
  test("render Field", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Provider store={store}>
          <NonValidVehicle />
        </Provider>
      </BrowserRouter>
    );
    expect(getByTestId("floatName")).toBeInTheDocument();
    expect(getByTestId("chassisNo")).toBeInTheDocument();
    expect(getByTestId("vehicleClass")).toBeInTheDocument();
    expect(getByTestId("subClass")).toBeInTheDocument();
    expect(getByTestId("CandENo")).toBeInTheDocument();
    expect(getByTestId("TANo")).toBeInTheDocument();
    expect(getByTestId("regMark")).toBeInTheDocument();
    expect(getByTestId("countryCode")).toBeInTheDocument();
    expect(getByTestId("make")).toBeInTheDocument();
    expect(getByTestId("model")).toBeInTheDocument();
    expect(getByTestId("bodyType")).toBeInTheDocument();
    expect(getByTestId("manuYear")).toBeInTheDocument();
    expect(getByTestId("lower")).toBeInTheDocument();
    expect(getByTestId("upper")).toBeInTheDocument();
    expect(getByTestId("stand")).toBeInTheDocument();
    expect(getByTestId("engineSize")).toBeInTheDocument();
    expect(getByTestId("engineNo")).toBeInTheDocument();
    expect(getByTestId("engineType")).toBeInTheDocument();
    expect(getByTestId("regDocNo")).toBeInTheDocument();
    expect(getByTestId("PSL")).toBeInTheDocument();
    expect(getByTestId("Permit")).toBeInTheDocument();
    expect(getByTestId("firstRegDate")).toBeInTheDocument();
    expect(getByTestId("licenseExpiry")).toBeInTheDocument();
    expect(getByTestId("VICO")).toBeInTheDocument();
    expect(getByTestId("adApprovalDate")).toBeInTheDocument();
    expect(getByTestId("lastUpdate")).toBeInTheDocument();
    expect(getByTestId("cancelReason")).toBeInTheDocument();
    expect(getByTestId("InspOrder")).toBeInTheDocument();
    expect(getByTestId("statusCode")).toBeInTheDocument();
    expect(getByTestId("ratedPower")).toBeInTheDocument();
    expect(getByTestId("weightCode")).toBeInTheDocument();
    expect(getByTestId("PGVWeight")).toBeInTheDocument();
    expect(getByTestId("PCVWeight")).toBeInTheDocument();
    expect(getByTestId("LUGWeight")).toBeInTheDocument();
    expect(getByTestId("Axle1")).toBeInTheDocument();
    expect(getByTestId("Axle2")).toBeInTheDocument();
    expect(getByTestId("Axle3")).toBeInTheDocument();
    expect(getByTestId("Axle4")).toBeInTheDocument();
    expect(getByTestId("Axle5")).toBeInTheDocument();
    expect(getByTestId("Axle6")).toBeInTheDocument();
    expect(getByTestId("Axle7")).toBeInTheDocument();
    expect(getByTestId("LantauVehicle")).toBeInTheDocument();
    expect(getByTestId("privateRoadVehicle")).toBeInTheDocument();
    expect(getByTestId("hybridVehicle")).toBeInTheDocument();
    expect(getByTestId("LHSteering")).toBeInTheDocument();
    expect(getByTestId("PVRM")).toBeInTheDocument();
    expect(getByTestId("PVRMDoubleLine")).toBeInTheDocument();
    expect(getByTestId("PVRM1Line")).toBeInTheDocument();
    expect(getByTestId("PVRM2Line")).toBeInTheDocument();
    expect(getByTestId("primaryColor")).toBeInTheDocument();
    expect(getByTestId("secondaryColor")).toBeInTheDocument();
    expect(getByTestId("tyreSize")).toBeInTheDocument();
    expect(getByTestId("tyreSizeRear")).toBeInTheDocument();
    expect(getByTestId("sizeL")).toBeInTheDocument();
    expect(getByTestId("sizeW")).toBeInTheDocument();
    expect(getByTestId("sizeH")).toBeInTheDocument();
    // jest.mock("axios", () => {
    //   return {
    //     create: jest.fn(() => {
    //       return {
    //         get: jest.fn(),
    //       };
    //     }),
    //   };
    // });
    // jest.mock("axios", () => {
    //   return {
    //     create: jest.fn(() => {
    //       return {
    //         post: jest.fn(),
    //       };
    //     }),
    //   };
    // });
  });
  test("should call the login function when the login button is clicked", async () => {
    const ResetbtnFunc = jest.fn();
    const { getByTestId, getByText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <NonValidVehicle ResetbtnFunc={ResetbtnFunc} />
        </Provider>
      </BrowserRouter>
    );

    const floatNameElement = getByTestId("floatName");
    const chassisNoElement = getByTestId("chassisNo");
    const vehicleClassElement = getByTestId("vehicleClass");
    const subClassElement = getByTestId("subClass");
    const CandENoElement = getByTestId("CandENo");
    const TANoElement = getByTestId("TANo");
    const regMarkElement = getByTestId("regMark");
    const countryCodeElement = getByTestId("countryCode");
    const makeElement = getByTestId("make");
    const modelElement = getByTestId("model");
    const bodyTypeElement = getByTestId("bodyType");
    const manuYearElement = getByTestId("manuYear");
    const lowerElement = getByTestId("lower");
    const upperElement = getByTestId("upper");
    const standElement = getByTestId("stand");
    const engineSizeElement = getByTestId("engineSize");
    const engineNoElement = getByTestId("engineNo");
    const engineTypeElement = getByTestId("engineType");
    const regDocNoElement = getByTestId("regDocNo");
    const cancelReasonElement = getByTestId("cancelReason");
    const PGVWeightElement = getByTestId("PGVWeight");
    const PCVWeightElement = getByTestId("PCVWeight");
    const LUGWeightElement = getByTestId("LUGWeight");
    const Axle1Element = getByTestId("Axle1");
    const Axle2Element = getByTestId("Axle2");
    const Axle3Element = getByTestId("Axle3");
    const Axle4Element = getByTestId("Axle4");
    const Axle5Element = getByTestId("Axle5");
    const Axle6Element = getByTestId("Axle6");
    const Axle7Element = getByTestId("Axle7");
    const LantauVehicleElement = getByTestId("LantauVehicle");
    const privateRoadVehicleElement = getByTestId("privateRoadVehicle");
    const hybridVehicleElement = getByTestId("hybridVehicle");
    const LHSteeringElement = getByTestId("LHSteering");
    const primaryColorElement = getByTestId("primaryColor");
    const secondaryColorElement = getByTestId("secondaryColor");
    const tyreSizeElement = getByTestId("tyreSize");
    const tyreSizeRearElement = getByTestId("tyreSizeRear");
    const sizeLElement = getByTestId("sizeL");
    const sizeWElement = getByTestId("sizeW");
    const sizeHElement = getByTestId("sizeH");
    const ResetElement = getByText("Reset");

    fireEvent.change(floatNameElement, { target: { value: "" } });
    fireEvent.change(chassisNoElement, { target: { value: "" } });
    fireEvent.change(vehicleClassElement, { target: { value: "" } });
    fireEvent.change(subClassElement, { target: { value: "" } });
    fireEvent.change(CandENoElement, { target: { value: "" } });
    fireEvent.change(TANoElement, { target: { value: "" } });
    fireEvent.change(regMarkElement, { target: { value: "" } });
    fireEvent.change(countryCodeElement, { target: { value: "" } });
    fireEvent.change(makeElement, { target: { value: "" } });
    fireEvent.change(modelElement, { target: { value: "" } });
    fireEvent.change(bodyTypeElement, { target: { value: "" } });
    fireEvent.change(manuYearElement, { target: { value: "" } });
    fireEvent.change(lowerElement, { target: { value: "" } });
    fireEvent.change(upperElement, { target: { value: "" } });
    fireEvent.change(standElement, { target: { value: "" } });
    fireEvent.change(engineSizeElement, { target: { value: "" } });
    fireEvent.change(engineNoElement, { target: { value: "" } });
    fireEvent.change(engineTypeElement, { target: { value: "" } });
    fireEvent.change(regDocNoElement, { target: { value: "" } });
    fireEvent.change(cancelReasonElement, { target: { value: "" } });
    fireEvent.change(PGVWeightElement, { target: { value: "" } });
    fireEvent.change(PCVWeightElement, { target: { value: "" } });
    fireEvent.change(LUGWeightElement, { target: { value: "" } });
    fireEvent.change(Axle1Element, { target: { value: "" } });
    fireEvent.change(Axle2Element, { target: { value: "" } });
    fireEvent.change(Axle3Element, { target: { value: "" } });
    fireEvent.change(Axle4Element, { target: { value: "" } });
    fireEvent.change(Axle5Element, { target: { value: "" } });
    fireEvent.change(Axle6Element, { target: { value: "" } });
    fireEvent.change(Axle7Element, { target: { value: "" } });
    fireEvent.change(LantauVehicleElement, { target: { value: "" } });
    fireEvent.change(privateRoadVehicleElement, { target: { value: "" } });
    fireEvent.change(hybridVehicleElement, { target: { value: "" } });
    fireEvent.change(LHSteeringElement, { target: { value: "" } });
    fireEvent.change(primaryColorElement, { target: { value: "" } });
    fireEvent.change(secondaryColorElement, { target: { value: "" } });
    fireEvent.change(tyreSizeElement, { target: { value: "" } });
    fireEvent.change(tyreSizeRearElement, { target: { value: "" } });
    fireEvent.change(sizeLElement, { target: { value: "" } });
    fireEvent.change(sizeWElement, { target: { value: "" } });
    fireEvent.change(sizeHElement, { target: { value: "" } });
    fireEvent.click(ResetElement);

    render(
      <BrowserRouter>
        <Provider store={store}>
          <NonValidVehicle />
        </Provider>
      </BrowserRouter>
    );
  });
});
