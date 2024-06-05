import React from "react";
import { render, fireEvent } from "@testing-library/react";
// import "@testing-library/jest-dom/extend-expect";
import DisableDefectPopup from "../DisableDefectPopup";
import { Modal, ModalContent, ModalBody } from "@nextui-org/react";

describe("DisableDefectPopup", () => {
  const setIsDisableDefect = jest.fn();

  const systemName = "MARKING & SIGN";

  test("renders the popup with correct content", () => {
    const { getByText, getByRole } = render(
      <DisableDefectPopup
        setIsDisableDefect={setIsDisableDefect}
        systemName={systemName}
      />
    );

    expect(
      getByText("Do you confirm to disbale this Defect - System Code?")
    ).toBeInTheDocument();
    expect(getByText("Disable Defect - System Code")).toBeInTheDocument();
    expect(getByText("System Code: 01")).toBeInTheDocument();
    expect(getByText("System Name(CH): CHINESE TEXT")).toBeInTheDocument();

    const yesButton = getByRole("button", { name: "Yes" });
    const noButton = getByRole("button", { name: "No" });

    expect(yesButton).toBeInTheDocument();
    expect(noButton).toBeInTheDocument();
  });

  it("displays the correct title", () => {
    const { getByText } = render(
      <DisableDefectPopup
        setIsDisableDefect={setIsDisableDefect}
        systemName={systemName}
      />
    );

    expect(getByText("Disable Defect - System Code")).toBeInTheDocument();
  });

  it("displays the correct system code and names", () => {
    const { getByText } = render(
      <DisableDefectPopup
        setIsDisableDefect={setIsDisableDefect}
        systemName={systemName}
      />
    );

    expect(getByText("System Code: 01")).toBeInTheDocument();
    expect(getByText(`System Name(EN): ${systemName}`)).toBeInTheDocument();
    expect(getByText("System Name(CH): CHINESE TEXT")).toBeInTheDocument();
  });

  it("calls onClose and setIsDisableDefect when the 'No' button is clicked", () => {
    const { getByText } = render(
      <DisableDefectPopup
        setIsDisableDefect={setIsDisableDefect}
        systemName={systemName}
      />
    );

    fireEvent.click(getByText("No"));

    expect(setIsDisableDefect).toHaveBeenCalledTimes(1);
    expect(setIsDisableDefect).toHaveBeenCalledWith(false);
  });
});
