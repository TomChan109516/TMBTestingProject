import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import ConfirmPopup from '../ConfirmPopup';
import "@testing-library/jest-dom";

describe('ConfirmPopup', () => {
  test('renders with title', () => {
    const title = 'Are you sure?';
    const handleApi = jest.fn();
    const setShowConfirmPopup = jest.fn();
    const showConfirmPopup = true;
    render(
      <ConfirmPopup
        title={title}
        handleApi={handleApi}
        setShowConfirmPopup={setShowConfirmPopup}
        showConfirmPopup={showConfirmPopup}
      />
    );
    expect(screen.getByText(title)).toBeInTheDocument();
  });

  test('calls handleApi when confirm button is clicked', () => {
    const title = 'Are you sure?';
    const handleApi = jest.fn();
    const setShowConfirmPopup = jest.fn();
    const showConfirmPopup = true;
    render(
      <ConfirmPopup
        title={title}
        handleApi={handleApi}
        setShowConfirmPopup={setShowConfirmPopup}
        showConfirmPopup={showConfirmPopup}
      />
    );
    const confirmButton = screen.getByText('Yes');
    fireEvent.click(confirmButton);
    expect(handleApi).toHaveBeenCalledTimes(1);
  });

  test('calls setShowConfirmPopup when cancel button is clicked', () => {
    const title = 'Are you sure?';
    const handleApi = jest.fn();
    const setShowConfirmPopup = jest.fn();
    const showConfirmPopup = true;
    render(
      <ConfirmPopup
        title={title}
        handleApi={handleApi}
        setShowConfirmPopup={setShowConfirmPopup}
        showConfirmPopup={showConfirmPopup}
      />
    );
    const cancelButton = screen.getByText('No');
    fireEvent.click(cancelButton);
    expect(setShowConfirmPopup).toHaveBeenCalledTimes(1);
    expect(setShowConfirmPopup).toHaveBeenCalledWith(false);
  });
});