import React from "react";
import { createEvent, fireEvent, render, screen } from "@testing-library/react";
import ExamCodeInfo from "../ExamCodeInfo";
import { Select } from "@nextui-org/react";

jest.mock("react-router-dom", () => ({
  useNavigate: () => jest.fn(),
}));

describe("ExamCodeInfo component", () => {
  it("should render the modal with title and input fields", () => {
    render(<ExamCodeInfo showExamInfoPopup={true} />);
    expect(screen.getByText("New Exam Code Details")).toBeInTheDocument();
    expect(screen.getByText("Exam Code Information")).toBeInTheDocument();
    expect(screen.getByLabelText("Enter Exam Code")).toBeInTheDocument();
    expect(screen.getByLabelText("Enter Exam Name")).toBeInTheDocument();
    expect(screen.getByText("Description")).toBeInTheDocument();
  });

  it("should render cancel and save buttons", () => {
    render(<ExamCodeInfo showExamInfoPopup={true} />);
    expect(screen.getByRole("button", { name: "Cancel" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Save" })).toBeInTheDocument();
    const saveButton = screen.getByRole("button", { name: "Save" });
    const clickEvent = createEvent.click(saveButton);
    fireEvent(saveButton, clickEvent);
    expect(clickEvent.preventDefault).toBeTruthy();
  });

  describe("Select Component", () => {
    test("renders Select component", () => {
      const { getByTestId } = render(<Select data-testid="select-test" />);
      const selectElement = getByTestId("select-test");
      expect(selectElement).toBeInTheDocument();
    });
  });
});
