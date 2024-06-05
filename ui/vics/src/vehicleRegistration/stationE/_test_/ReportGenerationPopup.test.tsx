import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ReportGenerationPopup from '../ReportGenerationPopup';

describe('ReportGenerationPopup', () => {
  it('should render the popup when showReportGenerationPopup is true', () => {
    const props = {
      showReportGenerationPopup: true,
      handleDefectlistConfigPopup: jest.fn(),
    };

    const { getByTestId } = render(<ReportGenerationPopup {...props} />);

    const popup = getByTestId('report-generation-popup');
    expect(popup).toBeInTheDocument();
  });

  it('should not render the popup when showReportGenerationPopup is false', () => {
    const props = {
      showReportGenerationPopup: false,
      handleDefectlistConfigPopup: jest.fn(),
    };

    const { queryByTestId } = render(<ReportGenerationPopup {...props} />);

    const popup = queryByTestId('report-generation-popup');
    expect(popup).not.toBeInTheDocument();
  });

  it('should call handleDefectlistConfigPopup when the popup is closed', () => {
    const props = {
      showReportGenerationPopup: true,
      handleDefectlistConfigPopup: jest.fn(),
    };

    const { getByTestId } = render(<ReportGenerationPopup {...props} />);

    const closeButton = getByTestId('cancel-button');
    fireEvent.click(closeButton);

    expect(props.handleDefectlistConfigPopup).toHaveBeenCalled();
  });
  it('should call handleDefectlistConfigPopup when the popup is open', () => {
    const props = {
      showReportGenerationPopup: true,
      handleDefectlistConfigPopup: jest.fn(),
    };

    const { getByTestId } = render(<ReportGenerationPopup {...props} />);

    const closeButton = getByTestId('next-button');
    fireEvent.click(closeButton);

    expect(props.handleDefectlistConfigPopup).toHaveBeenCalled();
  });
});