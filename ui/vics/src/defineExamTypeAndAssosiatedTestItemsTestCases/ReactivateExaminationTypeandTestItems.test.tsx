import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ReactivateExaminationTypeandTestItems from '../defineExamTypeAndAssociatedTestItems/ReactivateExaminationTypeandTestItems';


describe('ReactivateExaminationTypeandTestItems', () => {
  it('renders without crashing', () => {
    render(<ReactivateExaminationTypeandTestItems setReactivateExamination={() => {}} />);
  });

  it('calls setReactivateExamination when "No" button is clicked', () => {
    const setReactivateExamination = jest.fn();
    const { getByText } = render(<ReactivateExaminationTypeandTestItems setReactivateExamination={setReactivateExamination} />);
    fireEvent.click(getByText('No'));
    expect(setReactivateExamination).toHaveBeenCalledWith(false);
  });
});