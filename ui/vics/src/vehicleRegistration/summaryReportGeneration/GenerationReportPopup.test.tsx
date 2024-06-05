import React from "react";
import { render, fireEvent } from "@testing-library/react";
import GenerationReportPopup from "./GenerationReportPopup";

describe("GenerationReportPopup", () => {
  test("renders correctly", () => {
    const { getByText } = render(
      <GenerationReportPopup
        showGenerationReportPopup={true}
        setGenerationReportPopup={GenerationReportPopup}
      />
    );
    const text = getByText(/Summary Report Generation Enquiry/i);
    expect(text).toBeInTheDocument();
  });

  test("closes the popup when Quit button is clicked", () => {
    const setGenerationReportPopup = jest.fn();
    const { getByText } = render(
      <GenerationReportPopup
        showGenerationReportPopup={true}
        setGenerationReportPopup={setGenerationReportPopup}
      />
    );
    const quitButton = getByText("Quit");
    fireEvent.click(quitButton);
    expect(setGenerationReportPopup).toHaveBeenCalledWith(false);
  });
});
