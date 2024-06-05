import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import RemoteAuth from '../RemoteAuth';

describe('RemoteAuth', () => {
  test('renders without errors', () => {
    render(<RemoteAuth />);
   
  });

  test('displays the modal when showRemoteAuth is true', () => {
    render(<RemoteAuth showRemoteAuth={true} />);
   
  });

  test('hides the modal when showRemoteAuth is false', () => {
    render(<RemoteAuth showRemoteAuth={false} />);
  
  });

  test('calls handleRemoteAuth with false when the modal is closed', () => {
    const handleRemoteAuth = jest.fn();
    render(<RemoteAuth showRemoteAuth={true} handleRemoteAuth={handleRemoteAuth} />);
    // Simulate closing the modal
    fireEvent.click(screen.getByText('Cancel'));
    expect(handleRemoteAuth).toHaveBeenCalledWith(false);
  });

  test('calls setConfirm with true and setshowRemoteAuth with false when Submit button is clicked', () => {
    const setConfirm = jest.fn();
    const setshowRemoteAuth = jest.fn();
    render(<RemoteAuth showRemoteAuth={true} setConfirm={setConfirm} setshowRemoteAuth={setshowRemoteAuth} />);
    // Simulate clicking the Submit button
    fireEvent.click(screen.getByText('Submit'));
    expect(setConfirm).toHaveBeenCalledWith(true);
    expect(setshowRemoteAuth).toHaveBeenCalledWith(false);
  });



});