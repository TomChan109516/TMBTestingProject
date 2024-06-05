import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../store/store';
import AppointmentLayout from '../Appointment';
import * as loginService from '../../../login/service/login.service';
import { setData } from '../../state/RegistrationDataSlice';
import { saveLoader } from '../../../login/state/loginSlice';

jest.mock('../../../login/service/login.service');
jest.mock('../../../utils/axiosInstance');

describe('AppointmentLayout', () => {
  it('renders the appointment layout correctly', () => {
    render(
      <Provider store={store}>
        <AppointmentLayout />
      </Provider>
    );

    const appointmentIdInput = screen.getByTestId('appointmentId');
    expect(appointmentIdInput).toBeInTheDocument();
  });

  it('updates the appointmentId state when input is changed', () => {
    render(
      <Provider store={store}>
        <AppointmentLayout />
      </Provider>
    );

    const appointmentIdInput = screen.getByTestId('appointmentId');
    fireEvent.change(appointmentIdInput, { target: { value: '1234' } });
    expect(appointmentIdInput.value).toBe('1234');
  });

  it('updates the Reg. Mark state ', () => {
    render(
      <Provider store={store}>
        <AppointmentLayout />
      </Provider>
    );

    const RegMark = screen.getByText('Reg. Mark');
    expect(RegMark).toBeInTheDocument();
  });

  it('dispatches actions and makes API call', async () => {

    const appointmentId = '123';
    const response = { data: 'data' };
    const AppRegdata = jest.fn()
    render(<Provider store={store}>
      <AppointmentLayout AppRegdata={AppRegdata} />
    </Provider>
    );
    const appointmentSpy = jest.spyOn(loginService, 'getAppointmentDetails');
    appointmentSpy.mockResolvedValueOnce(response.data);
    const dispatch = jest.fn();

    await AppRegdata();
    dispatch(saveLoader(true))
    dispatch(saveLoader(false))
    dispatch(setData({ regdata: response, appointmentId: appointmentId }))
    expect(dispatch).toHaveBeenCalledWith(saveLoader(true));
    expect(AppRegdata).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledWith(setData({ regdata: response, appointmentId: appointmentId }));
    expect(dispatch).toHaveBeenCalledWith(saveLoader(false));
    appointmentSpy.mockRestore();
    AppRegdata.mockRestore();
    dispatch.mockRestore()
  });
});