import React from "react";
import { render, fireEvent } from "@testing-library/react";
import RSConfirm from "../RSConfirm";

describe("RSConfirm", () => {
  test("renders correctly", () => {
    const { getByText } = render(
      <RSConfirm showRSConfirm={true} handleRemoteAuth={() => {}} />
    );
    expect(getByText("Result Submission Confirmation")).toBeInTheDocument();
    expect(getByText("Confirm to submit inspection result ?")).toBeInTheDocument();
  });

  test("calls handleRemoteAuth with true when Submit button is clicked", () => {
    const handleRemoteAuth = jest.fn();
    const { getByText } = render(
      <RSConfirm showRSConfirm={true} handleRemoteAuth={handleRemoteAuth} />
    );
    const submitButton = getByText("Submit");
    fireEvent.click(submitButton);
    expect(handleRemoteAuth).toHaveBeenCalledWith(true);
  });

  test("calls handleRemoteAuth with false when Cancel button is clicked", () => {
    const handleRemoteAuth = jest.fn();
    const { getByText } = render(
      <RSConfirm showRSConfirm={true} handleRemoteAuth={handleRemoteAuth} />
    );
    const cancelButton = getByText("Cancel");
    fireEvent.click(cancelButton);
    expect(handleRemoteAuth).toHaveBeenCalledWith(false);
  });
});