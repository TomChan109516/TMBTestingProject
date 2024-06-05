import { render, fireEvent } from '@testing-library/react';
import TwoInOneTestFormulae from './TwoInOneTestFormulae';
import React from 'react';
describe('TwoInOneTestFormulae', () => {
  it('renders without crashing', () => {
    const setPassword = jest.fn();
    render(<TwoInOneTestFormulae setPassword={setPassword} />);
  });
  it('contains Save and Cancel buttons', () => {
    const setPassword = jest.fn();
    const { getByText } = render(<TwoInOneTestFormulae setPassword={setPassword} />);
    expect(getByText('Save')).toBeInTheDocument();
    expect(getByText('Cancel')).toBeInTheDocument();
  });
});