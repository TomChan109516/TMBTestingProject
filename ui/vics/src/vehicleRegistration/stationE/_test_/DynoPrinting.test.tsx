import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import DynoPrinting from '../DynoPrinting';
describe('DynoPrinting', () => {
  it('renders without crashing', () => {
    const { getByText } = render(<DynoPrinting setView={() => {}} />);
    expect(getByText('Remote Authorization')).toBeInTheDocument();
  });

  it('calls setView when Quit button is clicked', () => {
    const mockSetView = jest.fn();
    const { getByText } = render(<DynoPrinting setView={mockSetView} />);
    fireEvent.click(getByText('Quit'));
    expect(mockSetView).toHaveBeenCalledWith(false);
  });
});
