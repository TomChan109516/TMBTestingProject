import { fireEvent, render, screen } from "@testing-library/react";
import DisableReason from "../ExaminationReport/DisableReason";
import React from "react";

describe('SuspendReason component', () => {
  test('renders component correctly', () => {
    render(<DisableReason setIsDisableReason={undefined}/>);

    expect(screen.getByText('Do you confirm to disable this Abort/Suspend Test Reason?')).toBeInTheDocument();
  });})

test("renders description and reason type", () => {
  render(<DisableReason setIsDisableReason={() => {}} />);
  const descriptionElement = screen.getByText(/Equipment Error/i);
  expect(descriptionElement).toBeInTheDocument();
  const reasonTypeElement = screen.getByText(/Reason type:/i);
  expect(reasonTypeElement).toBeInTheDocument();
});

test("calls setIsDisableReason with false when 'Yes' button is clicked", () => {
  const setIsDisableReason = jest.fn();
  render(<DisableReason setIsDisableReason={setIsDisableReason} />);
  const yesButtonElement = screen.getByText(/Yes/i);
  fireEvent.click(yesButtonElement);
  expect(setIsDisableReason).toHaveBeenCalledWith(false);
});

test("calls setIsDisableReason with false when 'No' button is clicked", () => {
  const setIsDisableReason = jest.fn();
  render(<DisableReason setIsDisableReason={setIsDisableReason} />);
  const noButtonElement = screen.getByText(/No/i);
  fireEvent.click(noButtonElement);
  expect(setIsDisableReason).toHaveBeenCalledWith(false);
});
describe('DisableReason', () => {
  const mockSetIsDisableReason = jest.fn();

  it('renders without crashing', () => {
    render(<DisableReason setIsDisableReason={mockSetIsDisableReason} />);
  });

  it('closes the modal when the close button is clicked', () => {
    const mockSetIsDisableReason = jest.fn();
    const { getByText } = render(<DisableReason setIsDisableReason={mockSetIsDisableReason} />);
    const closeButton = getByText('No'); 
  
    fireEvent.click(closeButton); // Simulate a click event on the 'No' button
  
    expect(mockSetIsDisableReason).toHaveBeenCalledWith(false);
  });

  it('displays the correct description and reason type', () => {
    const { getByText } = render(<DisableReason setIsDisableReason={mockSetIsDisableReason} />);
    expect(getByText('Description:')).toBeInTheDocument();
    expect(getByText('Equipment Error')).toBeInTheDocument();
    expect(getByText('Reason type:')).toBeInTheDocument();
    expect(getByText('Abort')).toBeInTheDocument();
  });
});
describe('ModalHeader', () => {
  it('renders correctly', () => {
    render(<DisableReason setIsDisableReason={undefined} />);
    expect(screen.getByText('Disable User Role')).toBeInTheDocument();
  });
});

describe('ModalBody', () => {
  it('renders correctly', () => {
    render(<DisableReason setIsDisableReason={undefined} />);
    expect(screen.getByText('Do you confirm to disable this Abort/Suspend Test Reason?')).toBeInTheDocument();
  });
});

describe('ModalFooter', () => {
  it('renders correctly', () => {
    render(<DisableReason setIsDisableReason={undefined} />);
    expect(screen.getByText('Yes')).toBeInTheDocument();
  });
});

