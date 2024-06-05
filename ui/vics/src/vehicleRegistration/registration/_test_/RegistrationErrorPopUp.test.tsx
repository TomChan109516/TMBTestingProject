// import "@testing-library/jest-dom";
// import RegistrationErrorPopUp from "../RegistrationErrorPopUp";
// import React from "react";
// import { render, fireEvent } from "@testing-library/react";

// describe("RegistrationErrorPopUp", () => {
//   const closePopupMock = jest.fn();
//   const showApiErrorMock = jest.fn();

//   it("renders without crashing", () => {
//     render(<RegistrationErrorPopUp closePopup={closePopupMock} showApiError={showApiErrorMock} />);
//   });

//   it("renders Registration Alert text", () => {
//     const { getByText } = render(<RegistrationErrorPopUp closePopup={closePopupMock} showApiError={showApiErrorMock} />);
//     expect(getByText('Registration Alert')).toBeInTheDocument();
//   });

//   it("calls handleClose when the modal is closed", () => {
//     const { getByText } = render(<RegistrationErrorPopUp closePopup={closePopupMock} showApiError={showApiErrorMock} />);
//     fireEvent.click(getByText('Back'));
//     expect(closePopupMock).toHaveBeenCalled();
//     expect(showApiErrorMock).toHaveBeenCalled();
//   });
// });

import React from "react";
import { render, fireEvent } from "@testing-library/react";
import RegistrationErrorPopUp from "../RegistrationErrorPopUp";

describe("RegistrationErrorPopUp", () => {
  it('renders error message and Back button when apiErrorData is "Request failed with status code 404" or "Not todays appointment"', () => {
    const { getByText } = render(
      <RegistrationErrorPopUp
        apiErrorData="Request failed with status code 404"
        closePopup={() => {}}
      />
    );

    expect(
      getByText(
        "Please note this is an invalid appointment number. Please enter a valid appointment number."
      )
    ).toBeInTheDocument();
    expect(getByText("Back")).toBeInTheDocument();
  });
  it("renders without crashing", () => {
    const closePopupMock = jest.fn();
    const showApiErrorMock = jest.fn();

    render(
      <RegistrationErrorPopUp
        closePopup={closePopupMock}
        showApiError={showApiErrorMock}
      />
    );
  });
  
  it('renders error message, username, password, Proceed and No buttons when apiErrorData is not "Request failed with status code 404" or "Not todays appointment"', () => {
    const { getByText, getByLabelText } = render(
      <RegistrationErrorPopUp
        apiErrorData="Some other error"
        closePopup={() => {}}
      />
    );

    expect(getByText("Username")).toBeInTheDocument();
    expect(getByText("Password")).toBeInTheDocument();
    expect(getByText("Proceed")).toBeInTheDocument();
    expect(getByText("No")).toBeInTheDocument();

  });

  it("calls closePopup when Back button is clicked", () => {
    const closePopup = jest.fn();
    const { getByText } = render(
      <RegistrationErrorPopUp
        apiErrorData="Request failed with status code 404"
        closePopup={closePopup}
      />
    );

    fireEvent.click(getByText("Back"));

    expect(closePopup).toHaveBeenCalled();
  });

  it("calls closePopup when No button is clicked", () => {
    const closePopup = jest.fn();
    const { getByText } = render(
      <RegistrationErrorPopUp
        apiErrorData="Some other error"
        closePopup={closePopup}
      />
    );

    fireEvent.click(getByText("No"));

    expect(closePopup).toHaveBeenCalled();
  });

  // Add more tests here
});
