import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import CloseStationNextPopup from '../CloseStationNextPopup';


describe('CloseStationNextPopup', () => {
  it('renders without crashing', () => {
    render(<CloseStationNextPopup />);
  });

  it('renders the correct header', () => {
    render(<CloseStationNextPopup />);
    expect(screen.getByText('Close Station')).toBeInTheDocument();
  });

  it('renders the "Next" and "Cancel" buttons', () => {
    render(<CloseStationNextPopup />);
    expect(screen.getByText('Next')).toBeInTheDocument();
    expect(screen.getByText('Cancel')).toBeInTheDocument();
  });

  // Add more tests as needed...
});