import { render, fireEvent } from '@testing-library/react';
import BrakeTestConfigPopUp from './BrakeTestConfigPopUp';
describe('BrakeTestConfigPopUp', () => {
  let mockClosePopup;
  let mockBrakePopUp;
  let mockSetBrakeTestConfigPopUp;
  beforeEach(() => {
    mockClosePopup = jest.fn();
    mockBrakePopUp = jest.fn();
    mockSetBrakeTestConfigPopUp = jest.fn();
  });
  it('renders without crashing', () => {
    render(<BrakeTestConfigPopUp closePopup={mockClosePopup} BrakePopUp={mockBrakePopUp} setBrakeTestConfigPopUp={mockSetBrakeTestConfigPopUp} />);
  });
  it('calls handleClose when the modal is closed', () => {
    const { getByRole } = render(<BrakeTestConfigPopUp closePopup={mockClosePopup} BrakePopUp={mockBrakePopUp} setBrakeTestConfigPopUp={mockSetBrakeTestConfigPopUp} />);
    fireEvent.click(getByRole('button', { name: /close/i }));
    expect(mockClosePopup).toHaveBeenCalled();
    expect(mockBrakePopUp).toHaveBeenCalled();
    expect(mockSetBrakeTestConfigPopUp).toHaveBeenCalled();
  });
  it('displays the correct title', () => {
    const { getByText } = render(<BrakeTestConfigPopUp closePopup={mockClosePopup} BrakePopUp={mockBrakePopUp} setBrakeTestConfigPopUp={mockSetBrakeTestConfigPopUp} />);
    expect(getByText('Brake Config')).toBeInTheDocument();
  });
});