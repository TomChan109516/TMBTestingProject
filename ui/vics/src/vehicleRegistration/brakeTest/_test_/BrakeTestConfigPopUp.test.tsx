import { render, screen, fireEvent } from '@testing-library/react';
import BrakeTestConfigPopUp from '../BrakeTestConfigPopUp';
import React from 'react';

describe('BrakeTestConfigPopUp', () => {
  test('should call closePopup, BrakePopUp, and setBrakeTestConfigPopUp when handleClose is called', () => {
    const closePopupMock = jest.fn();
    const brakePopUpMock = jest.fn();
    const setBrakeTestConfigPopUpMock = jest.fn();

    render(
      <BrakeTestConfigPopUp
        closePopup={closePopupMock}
        BrakePopUp={brakePopUpMock}
        setBrakeTestConfigPopUp={setBrakeTestConfigPopUpMock}
      />
    );

    fireEvent.click(screen.getByTestId('close-button'));

    expect(closePopupMock).toHaveBeenCalledWith(false);
    expect(brakePopUpMock).toHaveBeenCalledWith(false);
    expect(setBrakeTestConfigPopUpMock).toHaveBeenCalledWith(false);
  });
});