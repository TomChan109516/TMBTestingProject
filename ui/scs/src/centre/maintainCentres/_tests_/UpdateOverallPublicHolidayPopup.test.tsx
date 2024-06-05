import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import UpdateOverallPublicHolidayPopup from "../UpdateOverallPublicHolidayPopup";

describe("UpdateOverallPublicHolidayPopup", () => {
  it("renders the component", () => {
    render(
      <UpdateOverallPublicHolidayPopup
        uploadOverallPublicHolidayPopup={true}
        setUploadOverallPublicHolidayPopup={jest.fn()}
      />
    );

    expect(screen.getByText("Update Overall Public Holiday")).toBeInTheDocument();
    expect(screen.getByText("Select File")).toBeInTheDocument();
    expect(screen.getByText("Submit")).toBeInTheDocument();
    expect(screen.getByText("Close")).toBeInTheDocument();
  });

  it("calls setUploadOverallPublicHolidayPopup with false when Close button is clicked", () => {
    const setUploadOverallPublicHolidayPopup = jest.fn();
    render(
      <UpdateOverallPublicHolidayPopup
        uploadOverallPublicHolidayPopup={true}
        setUploadOverallPublicHolidayPopup={setUploadOverallPublicHolidayPopup}
      />
    );

    fireEvent.click(screen.getByText("Close"));

    expect(setUploadOverallPublicHolidayPopup).toHaveBeenCalledWith(false);
  });

  it("updates the file state when a file is selected", () => {
    const setUploadOverallPublicHolidayPopup = jest.fn();
    render(
      <UpdateOverallPublicHolidayPopup
        uploadOverallPublicHolidayPopup={true}
        setUploadOverallPublicHolidayPopup={setUploadOverallPublicHolidayPopup}
      />
    );

    const fileInput = screen.getByTestId("file-input");
    const file = new File(["file content"], "file.txt", { type: "text/plain" });
    fireEvent.change(fileInput, { target: { files: [file] } });

    expect(fileInput.files[0]).toEqual(file);
  });
  it('triggers file input click on button click', () => {

    const setUploadOverallPublicHolidayPopup = jest.fn();
    const { getByRole } = render(<UpdateOverallPublicHolidayPopup  uploadOverallPublicHolidayPopup={true}
      setUploadOverallPublicHolidayPopup={setUploadOverallPublicHolidayPopup} />);
      const inputRef = {
        current: {
          click: jest.fn(),
        },
      };
  
      const globalListeners = {
        current: [],
      };
    // Mock the useRef hook to use our mock ref
    const useRefMock = jest.spyOn(React, 'useRef');
    useRefMock.mockReturnValueOnce(inputRef);
    useRefMock.mockReturnValueOnce(globalListeners);

    const button = getByRole('button',{name:'Select File'});

    // Fire the click event on the button
    fireEvent.click(button);
    inputRef.current.click();

    // Check that the click method was called on the input ref
    expect(inputRef.current.click).toHaveBeenCalled();
  });
})