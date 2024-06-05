import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import DefectlistConfigPopup from '../DefectlistConfigPopup';

describe('DefectlistConfigPopup', () => {
  it('should render the component', () => {
    const props = {
      showDefectlistConfigPopup: true,
      handleDefectlistConfigPopup: jest.fn(),
      handleFinalResultConfirmationPopup: jest.fn()
    };

    const { getByText } = render(<DefectlistConfigPopup {...props} />);

    expect(getByText('Defectlist Config')).toBeInTheDocument();
  });

  it('should call handleDefectlistConfigPopup when closing the popup', () => {
    const handleDefectlistConfigPopup = jest.fn();
    const props = {
      showDefectlistConfigPopup: true,
      handleDefectlistConfigPopup,
      handleFinalResultConfirmationPopup: jest.fn()
    };

    const { getByTestId } = render(<DefectlistConfigPopup {...props} />);

    fireEvent.click(getByTestId('cancel-button'));

    expect(handleDefectlistConfigPopup).toHaveBeenCalled();
  });

  it('should call handleFinalResultConfirmationPopup when confirming the result', () => {
    const handleFinalResultConfirmationPopup = jest.fn();
    const props = {
      showDefectlistConfigPopup: true,
      handleDefectlistConfigPopup: jest.fn(),
      handleFinalResultConfirmationPopup
    };

    const { getByTestId } = render(<DefectlistConfigPopup {...props} />);

    fireEvent.click(getByTestId('next-button'));

    expect(handleFinalResultConfirmationPopup).toHaveBeenCalled();
  });
});