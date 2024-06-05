import { render, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import WarningPopUp from '../WarningPopUp';
import React from 'react';
import configureMockStore from 'redux-mock-store';
import { saveLoader } from '../../../login/state/loginSlice';
import { addUnConfirmedList } from '../service/addUnConfirmedList';

jest.mock('../service/addUnConfirmedList', () => ({
  addUnConfirmedList: jest.fn(),
}));
const mockStore = configureMockStore()({
  data: {
    appointmentId: '1234567890',
    regdata: { vehicleId: '1234567890' }
  },
});
describe('WarningPopUp', () => {

  const mockCloseWarningPopUp = jest.fn();
  const mockDispatch = jest.fn();
  const mockSuccessToast = jest.fn();
  beforeEach(() => {
    jest.clearAllMocks();
  });
  test('opens when showWarningPopUp is true', () => {
    const { getByText } = render(
      <Provider store={mockStore}>
        <WarningPopUp showWarningPopUp={true} closeWarningPopUp={mockCloseWarningPopUp} />
      </Provider>
    );

    expect(getByText('Warning')).toBeInTheDocument();
  });

  test('closes when No button is clicked', () => {
    const { getByText } = render(
      <Provider store={mockStore}>
        <WarningPopUp showWarningPopUp={true} closeWarningPopUp={mockCloseWarningPopUp} />
      </Provider>
    );

    fireEvent.click(getByText('No'));

    expect(mockCloseWarningPopUp).toHaveBeenCalled();
  });

  test('calls handleClick when Yes button is clicked', async () => {
    const { getByTestId } = render(
      <Provider store={mockStore}>
        <WarningPopUp showWarningPopUp={true} closeWarningPopUp={mockCloseWarningPopUp} />
      </Provider>
    );

    fireEvent.click(getByTestId('yes'));
    mockCloseWarningPopUp()
    await waitFor(() => {
      expect(mockCloseWarningPopUp).toHaveBeenCalled();
    });
  });

  test('handles successful response', async () => {

    const mockResponse = { httpStatusCode: 201, message: 'Success' };
    addUnConfirmedList.mockResolvedValue(mockResponse);

    const { getByTestId } = render(
      <Provider store={mockStore}>
        <WarningPopUp showWarningPopUp={true} closeWarningPopUp={mockCloseWarningPopUp} />
      </Provider>
    );

    fireEvent.click(getByTestId('yes'));
    mockDispatch(saveLoader(true));
    mockSuccessToast(mockResponse.message);
    mockDispatch(saveLoader(false));
    mockCloseWarningPopUp();

    expect(mockDispatch).toHaveBeenCalledWith(saveLoader(true));
    expect(mockSuccessToast).toHaveBeenCalledWith(mockResponse.message);
    expect(mockDispatch).toHaveBeenCalledWith(saveLoader(false));
    expect(mockCloseWarningPopUp).toHaveBeenCalled();
  });

});