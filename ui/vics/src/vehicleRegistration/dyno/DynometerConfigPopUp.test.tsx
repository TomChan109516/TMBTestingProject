import { render, screen, fireEvent } from '@testing-library/react';
import DynometerConfigPopUp from './DynometerConfigPopUp';
import React from 'react';

describe('DynometerConfigPopUp', () => {
  it('should render the component', () => {
    render(<DynometerConfigPopUp />);
    expect(screen.getByText('Dynometer Config')).toBeInTheDocument();
  });

  it('should call the closePopup, SpeedPopUp, and setDynometerConfigPopUp functions when handleClose is called', () => {
    const closePopupMock = jest.fn();
    const speedPopUpMock = jest.fn();
    const setDynometerConfigPopUpMock = jest.fn();

    render(
      <DynometerConfigPopUp
        closePopup={closePopupMock}
        SpeedPopUp={speedPopUpMock}
        setDynometerConfigPopUp={setDynometerConfigPopUpMock}
      />
    );

    fireEvent.click(screen.getByText('Quit'));
    expect(closePopupMock).toHaveBeenCalledWith(false);
    expect(speedPopUpMock).toHaveBeenCalledWith(false);
    expect(setDynometerConfigPopUpMock).toHaveBeenCalledWith(false);
  });

  it('should render the Save and Quit buttons', () => {
    render(<DynometerConfigPopUp />);
    expect(screen.getByText('Save')).toBeInTheDocument();
    expect(screen.getByText('Quit')).toBeInTheDocument();
  });
});