import { render, screen, fireEvent } from '@testing-library/react';
import ReportGeneration from '../ReportGeneration';
import React from 'react';

describe('ReportGeneration', () => {
  test('handlePrintExaminationReport opens a new window with the examination report', async () => {
    const mockOpen = jest.fn();
    window.open = mockOpen;

    render(<ReportGeneration />);

    fireEvent.click(screen.getByText('Print Examination Report'));

    expect(mockOpen).toHaveBeenCalledWith('/Examiation_report.pdf', '_blank');
  });

  test('handlePrintExaminationReport logs an error message if an error occurs', async () => {
    const mockConsoleLog = jest.spyOn(console, 'log');
    const error = new Error('An error occurred');
    window.open = jest.fn(() => {
      throw error;
    });

    render(<ReportGeneration />);

    fireEvent.click(screen.getByText('Print Examination Report'));

    expect(mockConsoleLog).toHaveBeenCalledWith(error.message);
  });
});