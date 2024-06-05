import { render, screen} from '@testing-library/react';
import LimitConfig from '../LimitConfig';
import React from 'react';

describe('LimitConfig', () => {
  test('renders LimitConfig component', () => {
    render(<LimitConfig />);
  });

    it('renders a Select component', () => {
        const { getByTestId } = render(<LimitConfig />);
        const select = getByTestId('Select');
    
        expect(select).toBeInTheDocument();
    });
    it('renders the correct number of TableRows', () => {
        render(<LimitConfig />);
        const tableRows = screen.getAllByRole('row');
        expect(tableRows).toHaveLength(7); 
      });
});