import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import ExemptVehicle from '../ExemptVehicle';


describe('ExemptVehicle', () => {
  it('renders without crashing', () => {
    render(<ExemptVehicle />);
  });

  it('renders New button', () => {
    const { getByText } = render(<ExemptVehicle />);
    const newButton = getByText('New');
    expect(newButton).toBeInTheDocument();
  });

  it('renders Reset button', () => {
    const { getByText } = render(<ExemptVehicle />);
    const resetButton = getByText('Reset');
    expect(resetButton).toBeInTheDocument();
  });

  it('renders Search button', () => {
    const { getByText } = render(<ExemptVehicle />);
    const searchButton = getByText('Search');
    expect(searchButton).toBeInTheDocument();
  });
  it('toggles the switch when clicked', () => {
    const {getAllByRole}= render(<ExemptVehicle />)

    const switchElement = getAllByRole('switch')[0]
    expect(switchElement).toBeInTheDocument()
    fireEvent.click(switchElement)
    expect(switchElement).not.toBeChecked()
  })
//  
});