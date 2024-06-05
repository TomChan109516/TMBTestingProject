import { render, fireEvent } from '@testing-library/react';
import DisableReason from '../DisableReason';
import React from 'react';

describe('DisableReason', () => {
  const mockSetIsDisableReason = jest.fn();

  it('renders the DisableReason component', () => {
    const { getByText } = render(<DisableReason setIsDisableReason={mockSetIsDisableReason} />);
    expect(getByText('Disable User Role')).toBeInTheDocument();
  });

  it('calls the setIsDisableReason function with false when the Yes button is clicked', () => {
    const { getByText } = render(<DisableReason setIsDisableReason={mockSetIsDisableReason} />);
    fireEvent.click(getByText('Yes'));
    expect(mockSetIsDisableReason).toHaveBeenCalledWith(false);
  });

  it('calls the setIsDisableReason function with false when the No button is clicked', () => {
    const { getByText } = render(<DisableReason setIsDisableReason={mockSetIsDisableReason} />);
    fireEvent.click(getByText('No'));
    expect(mockSetIsDisableReason).toHaveBeenCalledWith(false);
  });
});