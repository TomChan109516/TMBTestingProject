import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ReActiveAndDisablePopup from '../ReActiveAndDisablePopup';

describe('ReActiveAndDisablePopup', () => {
  const defaultProps = {
    setShowReactive: jest.fn(),
    setIsSwitchOn: jest.fn(),
    isSwitchOn: true,
    header: 'Header',
    equipmentNumber: '12345',
    equipmentName: 'Test Equipment',
    description: 'Description',
    setShowDisable: jest.fn(),
  };

  it('renders the popup with the correct header, equipment number, equipment name, and description', () => {
    const { getByText } = render(<ReActiveAndDisablePopup {...defaultProps} />);
    expect(getByText('Header')).toBeInTheDocument();
    expect(getByText('Equipment Number:')).toBeInTheDocument();
    expect(getByText('Equipment Name:')).toBeInTheDocument();
    expect(getByText('Description')).toBeInTheDocument();
  });

  it('calls setShowReactive and setShowDisable with false when No button is clicked', () => {
    const { getByText } = render(<ReActiveAndDisablePopup {...defaultProps} />);
    fireEvent.click(getByText('No'));
    expect(defaultProps.setShowReactive).toHaveBeenCalledWith(false);
    expect(defaultProps.setShowDisable).toHaveBeenCalledWith(false);
  });

  it('calls setShowReactive and setShowDisable with false and does not change isSwitchOn when Yes button is clicked', () => {
    const { getByText } = render(<ReActiveAndDisablePopup {...defaultProps} />);
    defaultProps.setIsSwitchOn.mockReset();
    fireEvent.click(getByText('Yes'));
    expect(defaultProps.setShowReactive).toHaveBeenCalledWith(false);
    expect(defaultProps.setShowDisable).toHaveBeenCalledWith(false);
    expect(defaultProps.setIsSwitchOn).not.toHaveBeenCalled();
  });
});