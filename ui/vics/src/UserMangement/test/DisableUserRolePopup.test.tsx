import { render, fireEvent } from '@testing-library/react';
import DisableUserRolePopup from '../DisableUserRolePopup';

describe('DisableUserRolePopup', () => {
  it('should render the component', () => {
    const setIsDisableUserRole = jest.fn();
    render(<DisableUserRolePopup setIsDisableUserRole={setIsDisableUserRole} />);
    // Add your assertions here
  });

  it('should call setIsDisableUserRole with false when "No" button is clicked', () => {
    const setIsDisableUserRole = jest.fn();
    const { getByText } = render(<DisableUserRolePopup setIsDisableUserRole={setIsDisableUserRole} />);
    const noButton = getByText('No');

    fireEvent.click(noButton);

    expect(setIsDisableUserRole).toHaveBeenCalledWith(false);
  });

  // Add more tests as needed
});