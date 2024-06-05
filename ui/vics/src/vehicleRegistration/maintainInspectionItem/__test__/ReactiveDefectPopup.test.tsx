import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ReactiveDefectPopup from "../ReactivateDefectPopup";
import { Modal, ModalContent, ModalBody } from "@nextui-org/react";

describe("ReactiveDefectPopup", () => {
  const setIsReactivateDefect = jest.fn();

  const systemName = "MARKING & SIGN";

  test("renders the popup with correct content", () => {
    const { getByText, getByRole } = render(<ReactiveDefectPopup setIsReactivateDefect={setIsReactivateDefect} systemName={systemName} />);

    expect(getByText("Reactive Defect - System Code")).toBeInTheDocument();
    expect(
      getByText("Do you confirm to reactivate this Defect - System Code?")
    ).toBeInTheDocument();
    expect(getByText("System Code: 01")).toBeInTheDocument();
    expect(getByText("System Name(EN): MARKING & SIGN")).toBeInTheDocument();
    expect(getByText("System Name(CH): CHINESE TEXT")).toBeInTheDocument();

    const yesButton = getByRole("button", { name: "Yes" });
    const noButton = getByRole("button", { name: "No" });

    expect(yesButton).toBeInTheDocument();
    expect(noButton).toBeInTheDocument();
  });


  it("displays the correct title", () => {
    const { getByText } = render(<ReactiveDefectPopup setIsReactivateDefect={setIsReactivateDefect} systemName={systemName} />);

    expect(getByText("Reactive Defect - System Code")).toBeInTheDocument();
  });

  it("displays the correct system code and names", () => {
    const { getByText } = render(<ReactiveDefectPopup setIsReactivateDefect={setIsReactivateDefect} systemName={systemName} />);

    expect(getByText("System Code: 01")).toBeInTheDocument();
    expect(getByText(`System Name(EN): ${systemName}`)).toBeInTheDocument();
    expect(getByText("System Name(CH): CHINESE TEXT")).toBeInTheDocument();
  });

  it("calls onClose and setIsReactivateDefect when the 'No' button is clicked", () => {
    const { getByText } = render(<ReactiveDefectPopup setIsReactivateDefect={setIsReactivateDefect} systemName={systemName} />);

    fireEvent.click(getByText("No"));

    expect(setIsReactivateDefect).toHaveBeenCalledTimes(1);
    expect(setIsReactivateDefect).toHaveBeenCalledWith(false);
  });
});