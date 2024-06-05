import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SldTestStandards from '../SldTestStandards';

describe('SldTestStandards', () => {
  it('renders without crashing', () => {
    const { getByText } = render(<SldTestStandards closePopup={() => {}} />);
    expect(getByText('Vehicle Perform this test at')).toBeInTheDocument();
  });

  it('calls closePopup when Save button is clicked', () => {
    const handleClose = jest.fn();
    const { getByText } = render(<SldTestStandards closePopup={handleClose} />);
    fireEvent.click(getByText('Save'));
    expect(handleClose).toHaveBeenCalled();
  });

  it('calls closePopup when Cancel button is clicked', () => {
    const handleClose = jest.fn();
    const { getByText } = render(<SldTestStandards closePopup={handleClose} />);
    fireEvent.click(getByText('Cancel'));
    expect(handleClose).toHaveBeenCalled();
  });
});