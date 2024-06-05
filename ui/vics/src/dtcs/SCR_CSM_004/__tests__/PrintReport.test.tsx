import { render, fireEvent } from '@testing-library/react';
import PrintReport from '../PrintReport';
import React from 'react';

describe('PrintReport', () => {
  it('renders the Print and Cancel buttons', () => {
    const handleButton = jest.fn();
    const closePrintReport = jest.fn();

    const { getByText } = render(
      <PrintReport 
        showPrintReport={true} 
        handleButton={handleButton} 
        closePrintReport={closePrintReport} 
      />
    );

    expect(getByText('Print')).toBeInTheDocument();
    expect(getByText('Cancel')).toBeInTheDocument();
  });

  it('calls the correct functions when the buttons are clicked', () => {
    const handleButton = jest.fn();
    const closePrintReport = jest.fn();

    const { getByText } = render(
      <PrintReport 
        showPrintReport={true} 
        handleButton={handleButton} 
        closePrintReport={closePrintReport} 
      />
    );

    fireEvent.click(getByText('Print'));
    expect(handleButton).toHaveBeenCalled();
    expect(closePrintReport).toHaveBeenCalledWith(false);

    fireEvent.click(getByText('Cancel'));
    expect(closePrintReport).toHaveBeenCalledWith(false);
  });
});