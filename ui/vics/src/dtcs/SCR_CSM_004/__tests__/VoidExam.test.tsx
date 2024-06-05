import { render, fireEvent } from '@testing-library/react';
import VoidExam from '../VoidExam';
import React from 'react';

describe('VoidExam', () => {
  it('renders the Yes and No buttons', () => {
    const { getByText } = render(<VoidExam showVoidExam={true} closeVoidExam={() => {}} />);

    expect(getByText('Yes')).toBeInTheDocument();
    expect(getByText('No')).toBeInTheDocument();
  });

  it('calls the closeVoidExam function when the No button is clicked', () => {
    const handleClose = jest.fn();
    const { getByTestId } = render(<VoidExam showVoidExam={true} closeVoidExam={handleClose} />);

    fireEvent.click(getByTestId('No'));
    expect(handleClose).toHaveBeenCalledWith(false);
  });
});