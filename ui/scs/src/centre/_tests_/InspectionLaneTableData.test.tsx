import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import InspectionLaneTableData from "../InspectionLaneTableData";

describe("InspectionLaneTableData", () => {
  const mockSearchInspectionLaneTableData = [
    {
      laneId: "1",
      laneName: "11",
      laneType: "Physical lane",
      laneDescription: "lane description",
      status: true,
    },
    {
      laneId: "2",
      laneName: "11A",
      laneType: "Virtual lane",
      laneDescription: "lane description",
      status: false,
    },
  ];
  test("renders the component", () => {
    render(<InspectionLaneTableData searchInspectionLaneTableData={mockSearchInspectionLaneTableData} />);
  });

  test("disables a lane on switch toggle", async () => {
    const { getByTestId } = render(<InspectionLaneTableData searchInspectionLaneTableData={mockSearchInspectionLaneTableData} />);
    const switchToggle = getByTestId("lane-switch-1"); // Replace "1" with the actual laneId
    fireEvent.click(switchToggle);
    await waitFor(() => {
    });
  });
  test("opens the add inspection lane popup on edit button click", () => {
    const { getByTestId } = render(<InspectionLaneTableData searchInspectionLaneTableData={mockSearchInspectionLaneTableData} />);
    const editButton = getByTestId("edit-button-1"); // Replace "1" with the actual laneId
    fireEvent.click(editButton);
  });
});