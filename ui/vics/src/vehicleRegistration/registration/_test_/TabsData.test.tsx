import "@testing-library/jest-dom";
import TabsData from "../TabsData";
import React from "react";
import { render, fireEvent } from "@testing-library/react";

describe("TabsData", () => {
  const AvailTabs = ['memo', 'upload', 'photo'];

  it("renders without crashing", () => {
    render(<TabsData AvailTabs={AvailTabs} selectedKey="memo" />);
  });

  it("renders only the available tabs", () => {
    const { getByTestId } = render(<TabsData AvailTabs={AvailTabs} selectedKey="memo" />);
    AvailTabs.forEach(tab => {
      expect(getByTestId(tab)).toBeInTheDocument();
    });
  });

  it("does not render unavailable tabs", () => {
    const { queryByTestId } = render(<TabsData AvailTabs={AvailTabs} selectedKey="memo" />);
    const unavailableTabs = ['Registration', 'ohm', 'vehicleInspec', 'sealManagement', 'EDRD', 'brake', 'HT', 'Exhaust', 'Speedometer', 'uci', 'Merge Result', 'overallResultVerification', 'Lane Status', 'Option'];
    unavailableTabs.forEach(tab => {
      expect(queryByTestId(tab)).toBeNull();
    });
  });

  it("renders the correct tab content when a tab is selected", () => {
    const { getByTestId, getByText } = render(<TabsData AvailTabs={AvailTabs} selectedKey="memo" />);
    fireEvent.click(getByTestId('memo'));
    expect(getByText('Memo')).toBeInTheDocument();
  });
});