import { render, fireEvent } from '@testing-library/react';
import ReactivateUserRolePopup from '../ReactivateUserRolePopup';

describe('ReactivateUserRolePopup', () => {
  it('should call setIsReactivateUserRole with false when "No" button is clicked', () => {
    const setIsReactivateUserRole = jest.fn();
    const { getByText } = render(<ReactivateUserRolePopup setIsReactivateUserRole={setIsReactivateUserRole} />);
    const noButton = getByText('No');

    fireEvent.click(noButton);

    expect(setIsReactivateUserRole).toHaveBeenCalledWith(false);
  });

  // Add more tests as needed
});