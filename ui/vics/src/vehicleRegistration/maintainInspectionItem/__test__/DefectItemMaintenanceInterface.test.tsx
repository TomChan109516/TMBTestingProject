import React from "react";
import { render, fireEvent } from "@testing-library/react";
import DefectItemMaintenanceInterface from "../DefectItemMaintenanceInterface";
import AddModifyDefectPopup from "../AddModifyDefectPopup";

jest.mock("../AddModifyDefectPopup", () => {
  return function MockAddModifyDefectPopup({ onClose }) {
    return (
      <button type="button" onClick={onClose}>
        Close Add/Modify Defect Popup
      </button>
    );
  };
});

describe("DefectItemMaintenanceInterface", () => {
  test("renders the component with correct content", () => {
    const { getByText, getByRole } = render(<DefectItemMaintenanceInterface />);

    expect(getByText("Defect Code Maintenance")).toBeInTheDocument();
    expect(getByRole("button", { name: "Search" })).toBeInTheDocument();
    expect(getByRole("button", { name: "Add" })).toBeInTheDocument();
    expect(getByRole("button", { name: "Export" })).toBeInTheDocument();
    expect(getByRole("button", { name: "Import" })).toBeInTheDocument();
    expect(getByText("Display Language:")).toBeInTheDocument();

    const addButton = getByRole("button", { name: "Add" });
    fireEvent.click(addButton);

    expect(getByText("Close Add/Modify Defect Popup")).toBeInTheDocument();
  });

  test("calls onClose when Add button is clicked", () => {
    const onClose = jest.fn();
    const { getByRole, getByText } = render(
      <DefectItemMaintenanceInterface onClose={onClose} />
    );

    const addButton = getByRole("button", { name: "Add" });
    fireEvent.click(addButton);

    const closeButton = getByText("Close Add/Modify Defect Popup");
    fireEvent.click(closeButton);

    expect(onClose).toHaveBeenCalledTimes(0);
  });

  test("does not call onClose when Search button is clicked", () => {
    const onClose = jest.fn();
    const { getByRole } = render(
      <DefectItemMaintenanceInterface onClose={onClose} />
    );

    const searchButton = getByRole("button", { name: "Search" });
    fireEvent.click(searchButton);

    expect(onClose).toHaveBeenCalledTimes(0);
  });
});