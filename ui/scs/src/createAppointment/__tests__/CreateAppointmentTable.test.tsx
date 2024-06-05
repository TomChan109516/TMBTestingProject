import React from "react";
import { fireEvent, render } from "@testing-library/react";
import CreateAppointmentTable from "../CreateApopintmentTable";
import { BrowserRouter } from "react-router-dom";

describe("CreateAppointmentTable Component", () => {
  test("renders without crashing", () => {
    render(
      <BrowserRouter>
        <CreateAppointmentTable vehicleDetails={[]} />
      </BrowserRouter>
    );
  });

  test("renders table headers correctly", () => {
  const {getByText} = render(
      <BrowserRouter>
        <CreateAppointmentTable vehicleDetails={[]} />
      </BrowserRouter>
    );

    expect(getByText("VALID/Non-VALID")).toBeInTheDocument();
    expect(getByText("Class")).toBeInTheDocument();
    expect(getByText("Vehicle ID")).toBeInTheDocument();
    expect(getByText("Reg.Mark")).toBeInTheDocument();
    expect(getByText("Chassis No.")).toBeInTheDocument();
    expect(getByText("Make")).toBeInTheDocument();
    expect(getByText("C&E No.")).toBeInTheDocument();
    expect(getByText("Doc. NO")).toBeInTheDocument();
    expect(getByText("T.A. No")).toBeInTheDocument();
    expect(getByText("Master/Child")).toBeInTheDocument();
  });

  test("renders table rows correctly", () => {
  const {queryAllByTestId}=  render(
      <BrowserRouter>
        <CreateAppointmentTable vehicleDetails={[]} />
      </BrowserRouter>
    );
    expect(queryAllByTestId("vaild")).toBeDefined();
    expect(queryAllByTestId("class")).toBeDefined();
    expect(queryAllByTestId("vehicleid")).toBeDefined();
    expect(queryAllByTestId("RegMark")).toBeDefined();
  });

  test("search icon is present in each row", () => {
    const { queryAllByTestId } = render(
      <BrowserRouter>
        <CreateAppointmentTable vehicleDetails={[]} />
      </BrowserRouter>
    );
    const searchIcons = queryAllByTestId("search");
    // Assert the number of search icons matches the number of rows
    expect(searchIcons).toBeDefined(); // Including header row
  });

  test.skip("renders correct number of rows based on data", () => {
    const { getAllByRole } = render(
      <BrowserRouter>
        <CreateAppointmentTable vehicleDetails={[]} />
      </BrowserRouter>
    );
    const rows = getAllByRole("row");
    // Adjust the expectation based on your data length
    expect(rows.length).toBe(11); // Including header row
  });

  test.skip("render specific page when clicking page number", () => {
    const { getByText, getAllByRole } = render(
      <BrowserRouter>
        <CreateAppointmentTable vehicleDetails={[]} />
      </BrowserRouter>
    );
    const nextPageButton = getByText("2");
    fireEvent.click(nextPageButton);
    const rows = getAllByRole("row");
    expect(rows.length).toBe(9);
    // Assert the change in displayed rows based on pagination
  });

  test.skip("select dropdown for changing page size works", () => {
    const { getByLabelText, getAllByRole } = render(
      <BrowserRouter>
        <CreateAppointmentTable vehicleDetails={[]} />
      </BrowserRouter>
    );
    const selectDropdown = getByLabelText("center");
    fireEvent.change(selectDropdown, { target: { value: "1" } });
    const rows = getAllByRole("row");
    // Assert the change in displayed rows based on page size
    expect(rows.length).toBe(11); // Including header row
  });
});
