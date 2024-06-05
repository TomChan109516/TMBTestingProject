import { render, fireEvent } from '@testing-library/react';
import Report from '../Report';
import React from 'react';

describe('Report', () => {
  it('renders the Print Examination Report button', () => {
    const { getByText } = render(<Report showPrintReport={false} />);

    expect(getByText('Print Examination Report')).toBeInTheDocument();
  });

  it('renders the Void Examination Report button', () => {
    const { getByText } = render(<Report showPrintReport={false} />);

    expect(getByText('Void Examination Report')).toBeInTheDocument();
  });

  it('displays the PrintReport component when the Print Examination Report button is clicked', () => {
    const { getByText, queryByTestId } = render(<Report showPrintReport={false} />);

    expect(queryByTestId('print-report')).not.toBeInTheDocument();

    fireEvent.click(getByText('Print Examination Report'));

  });
});