import React from "react";
import {
  render,
  screen,
  fireEvent,
  getAllByRole,
  getByTestId,
} from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import { BrowserRouter } from "react-router-dom";
import InspectionEnquiryLandingPage from "../inspectionEnquiry/InspectionEnquiryLandingPage";

describe("InspectionEnquiryLandingPage", () => {
  test("updates state on input change", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <InspectionEnquiryLandingPage />
        </Provider>
      </BrowserRouter>
    );

    fireEvent.change(screen.getByTestId("appointmentNo"), {
      target: { value: "12345" },
    });
    expect(screen.getByTestId("appointmentNo").value).toBe("12345");
    fireEvent.change(screen.getByTestId("chassisNumber"), {
      target: { value: "ABC123" },
    });
    expect(screen.getByTestId("chassisNumber").value).toBe("ABC123");
    fireEvent.change(screen.getByTestId("regMark"), {
      target: { value: "00002123" },
    });
    expect(screen.getByTestId("regMark").value).toBe("00002123");
    fireEvent.change(screen.getByTestId("Doc.No"), {
      target: { value: "1234456" },
    });
    expect(screen.getByTestId("Doc.No").value).toBe("1234456");
  });

  test("update state on select change", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <InspectionEnquiryLandingPage />
        </Provider>
      </BrowserRouter>
    );
    fireEvent.change(screen.getByTestId("center"), {
      target: { value: "TY1" },
    });
    expect(screen.getByTestId("center").value).toBe("TY1");
    fireEvent.change(screen.getByTestId("inspectionStatus"), {
      target: { value: "Yes" },
    });
    expect(screen.getByTestId("inspectionStatus").value).toBe("Yes");
    fireEvent.change(screen.getByTestId("vehicleClass"), {
      target: { value: "01" },
    });
    expect(screen.getByTestId("vehicleClass").value).toBe("01");
  });

  test("renders the date pickers", () => {
    const { getByText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <InspectionEnquiryLandingPage />
        </Provider>
      </BrowserRouter>
    );
    const fromDateInput = getByText("From");
    expect(fromDateInput).toBeInTheDocument();
    const toDateInput = getByText("To");
    expect(toDateInput).toBeInTheDocument();
  });

  test("search icon is present in each row", () => {
    const { queryAllByTestId } = render(
      <BrowserRouter>
        <Provider store={store}>
          <InspectionEnquiryLandingPage />
        </Provider>
      </BrowserRouter>
    );
    const searchIcons = queryAllByTestId("search");
    expect(searchIcons).toBeDefined();
  });

  test("render table header corretcly", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <InspectionEnquiryLandingPage />
        </Provider>
      </BrowserRouter>
    );
    expect(screen.getByText("Action")).toBeInTheDocument();
    expect(screen.getByText("Date")).toBeInTheDocument();
    expect(screen.getByText("Time")).toBeInTheDocument();
    expect(screen.getAllByText("Center")).toBeDefined();
    expect(screen.getAllByText("Inspection Status")).toBeDefined();
    expect(screen.getAllByText("Chassis Number")).toBeDefined();
    expect(screen.getAllByText("Reg Mark")).toBeDefined();
    expect(screen.getAllByText("Vehicle Class")).toBeDefined();
    expect(screen.getAllByText("Inspection Date")).toBeDefined();
  });

  test("renders table rows correctly", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <InspectionEnquiryLandingPage />
        </Provider>
      </BrowserRouter>
    );
    expect(screen.getByText("27/01/2023")).toBeInTheDocument();
    expect(screen.getByText("001")).toBeInTheDocument();
    expect(screen.getByText("15")).toBeInTheDocument();
    expect(screen.getByText("Closed")).toBeInTheDocument();
  });

  test("resets state on reset button click", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <InspectionEnquiryLandingPage />
        </Provider>
      </BrowserRouter>
    );
    fireEvent.change(screen.getByTestId("appointmentNo"), {
      target: { value: "12345" },
    });
    fireEvent.change(screen.getByTestId("chassisNumber"), {
      target: { value: "ABC123" },
    });
    fireEvent.change(screen.getByTestId("Doc.No"), {
      target: { value: "1234456" },
    });
    fireEvent.change(screen.getByTestId("regMark"), {
      target: { value: "00002123" },
    });
    fireEvent.change(screen.getByTestId("vehicleClass"), {
      target: { value: "01" },
    });
    fireEvent.change(screen.getByTestId("inspectionStatus"), {
      target: { value: "Yes" },
    });
    fireEvent.change(screen.getByTestId("center"), {
      target: { value: "TY1" },
    });
    fireEvent.click(screen.getByText("Reset"));

    expect(screen.getByTestId("appointmentNo")).toHaveValue("");
    expect(screen.getByTestId("chassisNumber")).toHaveValue("");
    expect(screen.getByTestId("Doc.No")).toHaveValue("");
    expect(screen.getByTestId("regMark")).toHaveValue("");
    expect(screen.getByTestId("center")).toHaveValue("TY1");
    expect(screen.getByTestId("inspectionStatus")).toHaveValue("Yes");
    expect(screen.getByTestId("vehicleClass")).toHaveValue("01");
  });

  test("renders search criteria correctly", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <InspectionEnquiryLandingPage />
        </Provider>
      </BrowserRouter>
    );

    fireEvent.change(screen.getByTestId("appointmentNo"), {
      target: { value: "12345" },
    });
    fireEvent.change(screen.getByTestId("chassisNumber"), {
      target: { value: "ABC123" },
    });
    fireEvent.change(screen.getByTestId("regMark"), {
      target: { value: "00002123" },
    });
    fireEvent.change(screen.getByTestId("Doc.No"), {
      target: { value: "1234456" },
    });
    fireEvent.change(screen.getByTestId("vehicleClass"), {
      target: { value: "01" },
    });
    fireEvent.change(screen.getByTestId("inspectionStatus"), {
      target: { value: "Yes" },
    });
    fireEvent.change(screen.getByTestId("center"), {
      target: { value: "TY1" },
    });
    fireEvent.click(screen.getByText("Search"));
  });
});
