import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CustomizeTestNameInformation from '../defineExamTypeAndAssociatedTestItems/CustomizeTestNameInformation';


describe('CustomizeTestNameInformation', () => {
  it('renders without crashing', () => {
    render(<CustomizeTestNameInformation showCustomizeTestNameInformation={true} setNameInformation={() => {}} />);
  });

  it('calls setNameInformation when modal is closed', () => {
    const setNameInformation = jest.fn();
    const { getByRole } = render(<CustomizeTestNameInformation showCustomizeTestNameInformation={true} setNameInformation={setNameInformation} />);
    fireEvent.click(getByRole('button', { name: /close/i }));
    expect(setNameInformation).toHaveBeenCalledWith(false);
  });
});