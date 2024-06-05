import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import TestExemptVehicle from '../TestExemptVehicle';

describe('TestExemptVehicle', () => {
  it('renders without crashing', () => {
    render(<TestExemptVehicle testExemptVehicle={true} setTestExemptVehicle={jest.fn()} />);
  });

  it('calls setTestExemptVehicle when "No" button is clicked', () => {
    const setTestExemptVehicle = jest.fn();
    render(<TestExemptVehicle testExemptVehicle={true} setTestExemptVehicle={setTestExemptVehicle} />);

    fireEvent.click(screen.getByText('No'));
    expect(setTestExemptVehicle).toHaveBeenCalledWith(false);
  });

  it('displays the correct header', () => {
    render(<TestExemptVehicle testExemptVehicle={true} setTestExemptVehicle={jest.fn()} />);
    expect(screen.getByText('Exempt Vehicle')).toBeInTheDocument();
  });

  // Add more tests as needed...
});