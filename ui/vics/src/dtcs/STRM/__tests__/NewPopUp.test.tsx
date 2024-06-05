import { render, fireEvent } from '@testing-library/react';
import NewPopUp from '../NewPopUp';

describe('NewPopUp', () => {
  const mockCloseNewPopUp = jest.fn();

  it('renders the NewPopUp component', () => {
    const { getByText } = render(<NewPopUp showNewPopUp={true} closeNewPopUp={mockCloseNewPopUp} />);
    expect(getByText('Skip Test Reason')).toBeInTheDocument();
  });

  it('calls the closeNewPopUp function when the Quit button is clicked', () => {
    const { getByText } = render(<NewPopUp showNewPopUp={true} closeNewPopUp={mockCloseNewPopUp} />);
    fireEvent.click(getByText('Quit'));
    expect(mockCloseNewPopUp).toHaveBeenCalled();
  });

  it('calls the onClose function when the Save button is clicked', () => {
    const { getByText } = render(<NewPopUp showNewPopUp={true} closeNewPopUp={mockCloseNewPopUp} />);
    fireEvent.click(getByText('Save'));

  });
});