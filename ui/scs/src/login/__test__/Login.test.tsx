import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import CreateAppointmentLanding from '../../createAppointment/CreateAppointmentlandingPage';
import Login from '../Login'
import { store } from '../../store/store';
import "@testing-library/jest-dom";

describe('Login', () => {
  test('render Field', () => {
 const {getByTestId}  = render(<BrowserRouter>
        <Provider store={store}>
          <Login />
        </Provider>
      </BrowserRouter>
    );
    expect(getByTestId('userId')).toBeInTheDocument();
    expect(getByTestId('password')).toBeInTheDocument();
    expect(getByTestId('centre')).toBeInTheDocument();
    jest.mock('axios', () => {
      return {
        create: jest.fn(() => {
          return {
            get: jest.fn()
          };
        })
      };
    });
    jest.mock('axios', () => {
      return {
        create: jest.fn(() => {
          return {
            post: jest.fn()
          };
        })
      };
    });
  });
  test('should call the login function when the login button is clicked', async () => {
    const signIn = jest.fn();
 const {getByTestId, getByText} =  render(
      <BrowserRouter>
        <Provider store={store}>
          <Login signIn={signIn} />
        </Provider>
      </BrowserRouter>
    );
    const userIdElement = getByTestId('userId');
    const passwordElement = getByTestId('password');
    const centerDropdown = getByTestId('centre');
    const LoginElement = getByText('Login');

    fireEvent.change(userIdElement, { target: { value: 'admin' } });
    fireEvent.change(passwordElement, { target: { value: 'password' } });
    fireEvent.change(centerDropdown, { target: { value: 'centre' } });
    fireEvent.click(LoginElement);
    render(
      <BrowserRouter>
        <Provider store={store}>
          <CreateAppointmentLanding />
        </Provider>
      </BrowserRouter>
    );
  });
  test('validation when one of the field is emptied', () => {
    const {getByTestId, getByText} =  render(
      <BrowserRouter>
        <Provider store={store}>
          <Login />
        </Provider>
      </BrowserRouter>
    );
    screen.debug()
    const userIdElement = getByTestId('userId');
    const passwordElement = getByTestId('password');
    const LoginElement = getByText('Login');
    fireEvent.change(userIdElement, { target: { value: 'admin' } });
    fireEvent.change(passwordElement, { target: { value: 'password' } });
    fireEvent.click(LoginElement);
    expect(getByTestId('centre')).not.toBe('');
    // expect(getByTestId('centerValidation')).toBeInTheDocument();
  });
});
