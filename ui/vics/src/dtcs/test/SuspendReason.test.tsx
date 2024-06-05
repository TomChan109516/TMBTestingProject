import { render, screen, fireEvent } from '@testing-library/react';
import SuspendReason from '../ExaminationReport/SuspendReason';
import React from 'react';

describe('SuspendReason component', () => {
  test('renders component correctly', () => {
    render(<SuspendReason />);

    // Assert that the component renders without any errors
    expect(screen.getByText('Abort/Suspend Test Reason Maintainance')).toBeInTheDocument();
  });

  test('handles add test reason button click', () => {
    render(<SuspendReason />);

    // Simulate a click on the add test reason button
    fireEvent.click(screen.getByText('Add Abort/Suspend Test Reason'));

    // Assert that the add test reason modal is shown
    expect(screen.getByTestId('add-test-reason-modal')).toBeInTheDocument();
  });
});
describe('SuspendReason', () => {
  it('renders without crashing', () => {
    render(<SuspendReason />);
  });
});
it('toggles the switch when clicked', () => {
  render(<SuspendReason />)

  const switchElement = screen.getAllByRole('switch')[0]
  expect(switchElement).toBeInTheDocument()
  fireEvent.click(switchElement)
  expect(switchElement).not.toBeChecked()
})

