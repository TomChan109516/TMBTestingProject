import React from "react";
import { render, fireEvent, getByText } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import SubmissionConfirmationPopUp from "../SubmissionConfirmationPopUp";
import axios from "axios";
import reducer from "./SubmissionConfirmationSlice";

const store = configureStore({ reducer });

jest.mock("axios");

describe("SubmissionConfirmationPopUp", () => {
  const mockProps = {
    showSubmissionConfirmationPopUp: true,
    setSubmissionConfirmationPopUp: jest.fn(),
    setNeedInspection: jest.fn(),
    setSubmitted: jest.fn(),
    url: "testUrl",
    data: {},
    tabName: "testTab",
    setIsBtnDisable: jest.fn(),
  };

  it("renders without crashing", () => {
    render(
      <Provider store={store}>
        <SubmissionConfirmationPopUp {...mockProps} />
      </Provider>
    );
  });

  it("handles Yes button click", () => {
    const { getByText } = render(
      <Provider store={store}>
        <SubmissionConfirmationPopUp {...mockProps} />
      </Provider>
    );

    fireEvent.click(getByText("Yes"));
  });

  it("handles No button click", () => {
    const { getByText } = render(
      <Provider store={store}>
        <SubmissionConfirmationPopUp {...mockProps} />
      </Provider>
    );

    fireEvent.click(getByText("No"));
  });

  it("handles enableButtons function", () => {
    render(
      <Provider store={store}>
        <SubmissionConfirmationPopUp {...mockProps} />
      </Provider>
    );
  });

  it("handles closeTabs function", () => {
    render(
      <Provider store={store}>
        <SubmissionConfirmationPopUp {...mockProps} />
      </Provider>
    );
  });

  it("handles handleClose function", () => {
    const { getByText } = render(
      <Provider store={store}>
        <SubmissionConfirmationPopUp {...mockProps} />
      </Provider>
    );

    fireEvent.click(getByText("No"));

    expect(mockProps.setSubmissionConfirmationPopUp).toHaveBeenCalledWith(
      false
    );
  });
});
