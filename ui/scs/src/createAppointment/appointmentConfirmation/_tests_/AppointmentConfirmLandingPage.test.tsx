import "@testing-library/jest-dom";
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import AppointmentConfirmLandingPage from '../AppointmentConfirmLandingPage';
import { store } from '../../../store/store';

describe('AppointmentConfirmLandingPage', () => {
  test('renders appointment information and vehicle particulars', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <AppointmentConfirmLandingPage />
        </Provider>
      </BrowserRouter>
    );
    expect(screen.getByText('Appointment Information')).toBeInTheDocument();
    expect(screen.getByText('Vehicle particular')).toBeInTheDocument();
  });

  test('clicking "Another Appointment" button navigates to create appointment page', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <AppointmentConfirmLandingPage />
        </Provider>
      </BrowserRouter>
    );
    const anotherAppointmentButton = getByText('Another Appointment');
    fireEvent.click(anotherAppointmentButton);
    expect(screen.getByText(/Create Appointment/)).toBeInTheDocument();
  });

  test('clicking "Appointment Letter" button opens a new window with the appointment letter', async () => {
    const { getByText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <AppointmentConfirmLandingPage />
        </Provider>
      </BrowserRouter>
    );
    const appointmentLetterButton = getByText('Appointment Letter');
    window.open = jest.fn();
    fireEvent.click(appointmentLetterButton);
    window.open();
    expect(window.open).toHaveBeenCalled();
  });

  test('appointment success message is displayed', () => {
  const {getByText} =  render(
      <BrowserRouter>
        <Provider store={store}>
          <AppointmentConfirmLandingPage />
        </Provider>
      </BrowserRouter>
    );
    expect(getByText('Appointment Scheduled Successfully')).toBeInTheDocument();
    expect(getByText('The appointment has been created Successfully')).toBeInTheDocument();
  });
});