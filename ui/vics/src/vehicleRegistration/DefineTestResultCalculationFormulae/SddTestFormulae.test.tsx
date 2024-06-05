import { render, fireEvent } from '@testing-library/react';
import SddTestFormulae from './SddTestFormulae';
import React from 'react';
describe('TwoInOneTestFormulae', () => {
  it('renders without crashing', () => {
    const setPassword = jest.fn();
    render(<SddTestFormulae setPassword={setPassword} />);
  });
  it('contains Save and Cancel buttons', () => {
    const setPassword = jest.fn();
    const { getByText } = render(<SddTestFormulae setPassword={setPassword} />);
    expect(getByText('Save')).toBeInTheDocument();
    expect(getByText('Cancel')).toBeInTheDocument();
  });
  it('calls setPassword with false when Cancel button is clicked', () => {
    const setPassword = jest.fn();
    const { getByText } = render(<SddTestFormulae setPassword={setPassword} />);
    fireEvent.click(getByText('Cancel'));
    expect(setPassword).toHaveBeenCalledWith(false);
  });
});