import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import FinalResultConfirmationPopup from '../FinalResultConfirmationPopup';
import React from 'react';
import { SAVE_ALL_TEST_RESULT_URL } from '../../../constants/urlConstants';
import { axiosPost } from '../../../utils/axiosInstance';

jest.mock('../../../utils/axiosInstance', () => ({
  axiosPost: jest.fn(),
}));

describe('FinalResultConfirmationPopup', () => {
  const mockProps = {
    showFinalResultConfirmationPopup: true,
    setshowFinalResultConfirmationPopup: jest.fn(),
    handleFinalResultConfirmationPopup: jest.fn(),
    setFinalResult: jest.fn(),
    confirm: false,
    setConfirm: jest.fn(),
    data: {},
    url: SAVE_ALL_TEST_RESULT_URL,
    tabledata: [],
  };

  test('renders confirm button', () => {
    render(<FinalResultConfirmationPopup {...mockProps} />);
    const confirmButton = screen.getByTestId('Confirm');
    expect(confirmButton).toBeInTheDocument();
  });

  test('makes a post request when confirm button is clicked', async () => {
    (axiosPost as jest.Mock).mockResolvedValue({ isSuccess: true });

    render(<FinalResultConfirmationPopup {...mockProps} />);
    const confirmButton = screen.getByTestId('Confirm');
    fireEvent.click(confirmButton);

    await waitFor(() => {
      expect(axiosPost).toHaveBeenCalledWith(mockProps.url, mockProps.data);
    });
  });

});