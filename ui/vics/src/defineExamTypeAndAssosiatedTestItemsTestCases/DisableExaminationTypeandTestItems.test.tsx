import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import DisableExaminationTypeandTestItems from '../defineExamTypeAndAssociatedTestItems/DisableExaminationTypeandTestItems';


describe('DisableExaminationTypeandTestItems', () => {
  it('renders without crashing', () => {
    render(<DisableExaminationTypeandTestItems setDisableExamination={() => {}} />);
  });

  it('calls setDisableExamination when "No" button is clicked', () => {
    const setDisableExamination = jest.fn();
    const { getByText } = render(<DisableExaminationTypeandTestItems setDisableExamination={setDisableExamination} />);
    fireEvent.click(getByText('No'));
    expect(setDisableExamination).toHaveBeenCalledWith(false);
  });
});