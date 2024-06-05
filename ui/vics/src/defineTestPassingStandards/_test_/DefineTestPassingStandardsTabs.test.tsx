import React from "react";
import { render, fireEvent } from "@testing-library/react";
import DefineTestPassingStandardsTabs from "../DefineTestPassingStandardsTabs";

describe("DefineTestPassingStandardsTabs", () => {
  test("renders the component", () => {
    render(<DefineTestPassingStandardsTabs />);
  });
  test("changes the selected tab on tab click", () => {
    const { getByText } = render(<DefineTestPassingStandardsTabs />);
    const generalTab = getByText("General");
    const taSpecificTab = getByText("TA Specific");
    fireEvent.click(taSpecificTab);
    fireEvent.click(generalTab);
  });

  test("displays the General table when General tab is selected", () => {
    const { getByText } = render(<DefineTestPassingStandardsTabs />);
    const generalTab = getByText("General");
    fireEvent.click(generalTab);
  });

  test("displays the TA Specific table when TA Specific tab is selected", () => {
    const { getByText } = render(<DefineTestPassingStandardsTabs />);
    const taSpecificTab = getByText("TA Specific");
    fireEvent.click(taSpecificTab);
  });
});
