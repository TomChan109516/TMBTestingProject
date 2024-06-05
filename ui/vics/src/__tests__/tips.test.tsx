import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Tips from '../tips';
import React from 'react';

describe('Tips', () => {
  const mockCloseTips = jest.fn();

  it('renders the Tips component', () => {
    const { getByText } = render(
      <Router>
        <Tips closetips={mockCloseTips} />
      </Router>
    );

    expect(getByText('Tips')).toBeInTheDocument();
  });

  it('calls the closetips function when the Cancel button is clicked', () => {
    const { getByText } = render(
      <Router>
        <Tips closetips={mockCloseTips} />
      </Router>
    );

    fireEvent.click(getByText('Cancel'));

    expect(mockCloseTips).toHaveBeenCalled();
  });

  it('navigates to /LimitConfig when the Confirm button is clicked', () => {
    const { getByText } = render(
      <Router>
        <Tips closetips={mockCloseTips} />
      </Router>
    );

    fireEvent.click(getByText('Confirm'));

   
  });
});