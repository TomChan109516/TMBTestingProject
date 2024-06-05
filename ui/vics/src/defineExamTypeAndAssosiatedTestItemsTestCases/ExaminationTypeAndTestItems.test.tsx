import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ExaminationTypeandTestItems from "../defineExamTypeAndAssociatedTestItems/ExaminationTypeAndTestItems";

describe("ExaminationTypeandTestItems", () => {
  it("renders without crashing", () => {
    render(<ExaminationTypeandTestItems />);
  });
  it("opens CustomizeTestNameInformation when Add button is clicked", async () => {
    const { getByText, findByText } = render(<ExaminationTypeandTestItems />);
    const addButton = getByText("Add");
    fireEvent.click(addButton);

    const result = await findByText("Customize Test Name Information");
    expect(result).toBeInTheDocument();
  });
  it("toggles switch correctly", () => {
    const { getAllByRole } = render(<ExaminationTypeandTestItems />);
    const switchButtons = getAllByRole("switch");

    const switchButton = switchButtons[0];

    fireEvent.click(switchButton);
  });
});
