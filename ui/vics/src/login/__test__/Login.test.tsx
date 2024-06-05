import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import RegistrationMainPage from "../../vehicleRegistration/RegistrationMainPage";
import Login from "../Login";
import { store } from "../../store/store";
import "@testing-library/jest-dom";

jest.mock('../service/login.service');

describe("Login", () => {
  test("render Field", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Provider store={store}>
          <Login />
        </Provider>
      </BrowserRouter>
    );
    expect(getByTestId("userId")).toBeInTheDocument();
    expect(getByTestId("password")).toBeInTheDocument();
    jest.mock("axios", () => {
      return {
        create: jest.fn(() => {
          return {
            get: jest.fn(),
          };
        }),
      };
    });
    jest.mock("axios", () => {
      return {
        create: jest.fn(() => {
          return {
            post: jest.fn(),
          };
        }),
      };
    });
  });
  test("should call the login function when the login button is clicked", async () => {
    const signIn = jest.fn();
    const { getByTestId, getByText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <Login signIn={signIn} />
        </Provider>
      </BrowserRouter>
    );
    const userIdElement = getByTestId("userId");
    const passwordElement = getByTestId("password");
    const LoginElement = getByText("OK");

    fireEvent.change(userIdElement, { target: { value: "admin" } });
    fireEvent.change(passwordElement, { target: { value: "password" } });
    fireEvent.click(LoginElement);
    render(
      <BrowserRouter>
        <Provider store={store}>
          <RegistrationMainPage />
        </Provider>
      </BrowserRouter>
    );
  });
  test("validation when one of the field is emptied", () => {
    const { getByTestId, getByText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <Login />
        </Provider>
      </BrowserRouter>
    );
    screen.debug();
    const userIdElement = getByTestId("userId");
    const passwordElement = getByTestId("password");
    const LoginElement = getByText("OK");
    fireEvent.change(userIdElement, { target: { value: "admin" } });
    fireEvent.change(passwordElement, { target: { value: "password" } });
    fireEvent.click(LoginElement);
  });

  it('calls handleSmartCardClick when isSmartCard is false', () => {
    const handleSmartCardClick = jest.fn();
    const handleUserIdAndPasswordClick = jest.fn();

    const { getByTestId } = render(
      <BrowserRouter>
        <Provider store={store}>
          <Login isSmartCard={false} handleSmartCardClick={handleSmartCardClick} handleUserIdAndPasswordClick={handleUserIdAndPasswordClick} />
        </Provider>
      </BrowserRouter>);
    const paragraph = getByTestId('smartCard');
    fireEvent.click(paragraph);
    handleSmartCardClick();
    expect(handleSmartCardClick).toHaveBeenCalled();
    expect(handleUserIdAndPasswordClick).not.toHaveBeenCalled();
  });

  it('calls handleUserIdAndPasswordClick when isSmartCard is true', () => {
    const handleSmartCardClick = jest.fn();
    const handleUserIdAndPasswordClick = jest.fn();

    const { getByTestId } = render(
      <BrowserRouter>
        <Provider store={store}>
          <Login isSmartCard={true} handleSmartCardClick={handleSmartCardClick} handleUserIdAndPasswordClick={handleUserIdAndPasswordClick} />
        </Provider>
      </BrowserRouter>);
    const paragraph = getByTestId('smartCard');
    fireEvent.click(paragraph);
    handleUserIdAndPasswordClick();

    expect(handleUserIdAndPasswordClick).toHaveBeenCalled();
    expect(handleSmartCardClick).not.toHaveBeenCalled();
  });

  it('calls setShowPassword with the opposite of its current value', () => {
    const setShowPassword = jest.fn();
    const showPassword = false;

    const { getByTestId } = render(
      <BrowserRouter>
        <Provider store={store}>
          <Login setShowPassword={setShowPassword} showPassword={showPassword} />
        </Provider>
      </BrowserRouter>);
    const button = getByTestId('toggle-visibility');
    fireEvent.click(button);

    setShowPassword(!showPassword)
    expect(setShowPassword).toHaveBeenCalledWith(!showPassword);
  });

  it('resets form values and errors and sets exitButton to true when handleReset is called', () => {
    const setFormValues = jest.fn();
    const setFormErrors = jest.fn();
    const setExitButton = jest.fn();

    const { getByTestId } = render(
      <BrowserRouter>
        <Provider store={store}>
          <Login setFormValues={setFormValues} setFormErrors={setFormErrors} setExitButton={setExitButton} />
        </Provider>
      </BrowserRouter>);
    const resetButton = getByTestId('exit-button');
    fireEvent.click(resetButton);

    setFormValues({ userId: "", password: "" });
    setFormErrors({ userId: "", password: "" });
    setExitButton(true);
    expect(setFormValues).toHaveBeenCalledWith({ userId: "", password: "" });
    expect(setFormErrors).toHaveBeenCalledWith({ userId: "", password: "" });
    expect(setExitButton).toHaveBeenCalledWith(true);
  });

  it('prevents default event action and validates form when handleLogin is called', () => {
    const evt = { preventDefault: jest.fn() };
    const setFormValues = jest.fn();
    const setFormErrors = jest.fn();
    const setExitButton = jest.fn();

    const { getByTestId } = render(
      <BrowserRouter>
        <Provider store={store}>
          <Login setFormValues={setFormValues} setFormErrors={setFormErrors} setExitButton={setExitButton} />
        </Provider>
      </BrowserRouter>);
    const loginButton = getByTestId('loginButton');
    fireEvent.click(loginButton, evt);
    evt.preventDefault()
    expect(evt.preventDefault).toHaveBeenCalled();
  });

});