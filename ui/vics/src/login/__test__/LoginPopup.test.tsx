import { render, fireEvent } from '@testing-library/react';
import LoginPopup from '../LoginPopup';
import React from 'react';

describe('LoginPopup', () => {
  it('should call closePopup prop when handleClose is called', () => {
    const closePopupMock = jest.fn();
    const props = {
      closePopup: closePopupMock,
    };

    const { getByTestId } = render(<LoginPopup {...props} />);
    const closeButton = getByTestId('close-button');
    fireEvent.click(closeButton);

    expect(closePopupMock).toHaveBeenCalledWith(false);
  });
});