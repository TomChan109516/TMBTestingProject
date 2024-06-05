import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import DisableExemption from '../DisableExemption';

describe('DisableExemption', () => {
  const setIsDisableExemption = jest.fn();
  const setPassword = jest.fn();

  it('calls setIsDisableExemption with false when No button is clicked', async () => {
    render(<DisableExemption setIsDisableExemption={setIsDisableExemption} setPassword={setPassword} />);

    fireEvent.click(screen.getByText('No'));

    await waitFor(() => expect(setIsDisableExemption).toHaveBeenCalledWith(false));
  });

  // it('calls setPassword with false when No button is clicked', async () => {
  //   render(<DisableExemption setIsDisableExemption={setIsDisableExemption} setPassword={setPassword} />);

  //   fireEvent.click(screen.getByText('No'));

  //   await waitFor(() => expect(setPassword).toHaveBeenCalledWith(false));
  // });

  it('does not call setIsDisableExemption when Yes button is clicked', () => {
    render(<DisableExemption setIsDisableExemption={setIsDisableExemption} setPassword={setPassword} />);
    fireEvent.click(screen.getByText('Yes'));
    expect(setIsDisableExemption).not.toHaveBeenCalled();
  });

  it("renders the component", () => {
    render(<DisableExemption setIsDisableExemption={setIsDisableExemption} setPassword={setPassword} />);
    expect(screen.getByText("Disable Vehicle Exemption")).toBeInTheDocument();
  });

  // it("closes the modal when 'No' button is clicked", async () => {
  //   render(<DisableExemption setIsDisableExemption={setIsDisableExemption} setPassword={setPassword} />);
  //   fireEvent.click(screen.getByText("No"));
  //   await waitFor(() => expect(screen.queryByText("Disable Vehicle Exemption")).not.toBeInTheDocument());
  // });
});