import { fireEvent, render, screen } from "@testing-library/react";
import DisableReason from "../ExaminationReport/ReactivateReason";
import React from "react";
import ReactivateReason from "../ExaminationReport/ReactivateReason";

describe('ReactivateReason component', () => {
  const mockSetIsReactivateReason = jest.fn();

  test('renders component correctly', () => {
    render(<ReactivateReason setIsReactivateReason={mockSetIsReactivateReason}/>);

    // Assert that the component renders without any errors
    expect(screen.getByText('Do you confirm to Reactivate this Abort/Suspend Test Reason?')).toBeInTheDocument();
  });})

test("renders description and reason type", () => {
  render(<ReactivateReason setIsReactivateReason={() => {}} />);
  const descriptionElement = screen.getByText(/Equipment Error/i);
  expect(descriptionElement).toBeInTheDocument();
  const reasonTypeElement = screen.getByText(/Reason type:/i);
  expect(reasonTypeElement).toBeInTheDocument();
});

test("calls setIsReactivateReason with false when 'Yes' button is clicked", () => {
  const setIsReactivateReason = jest.fn();
  render(<ReactivateReason setIsReactivateReason={setIsReactivateReason} />);
  const yesButtonElement = screen.getByText(/Yes/i);
  fireEvent.click(yesButtonElement);
  expect(setIsReactivateReason).toHaveBeenCalledWith(false);
});

test("calls setIsReactivateReason with false when 'No' button is clicked", () => {
  const setIsReactivateReason = jest.fn();
  render(<DisableReason setIsReactivateReason={setIsReactivateReason} />);
  const noButtonElement = screen.getByText(/No/i);
  fireEvent.click(noButtonElement);
  expect(setIsReactivateReason).toHaveBeenCalledWith(false);
});
describe('DisableReason', () => {
  const mockSetIsReactivateReason = jest.fn();

  it('renders without crashing', () => {
    render(<ReactivateReason setIsReactivateReason={mockSetIsReactivateReason} />);
  });

  it('closes the modal when the close button is clicked', () => {
    const { getByText } = render(<ReactivateReason setIsReactivateReason={mockSetIsReactivateReason} />);
    const closeButton = getByText('No');
    fireEvent.click(closeButton);
    expect(mockSetIsReactivateReason).toHaveBeenCalledWith(false);
  });

  it('displays the correct description and reason type', () => {
    const { getByText } = render(<ReactivateReason setIsReactivateReason={mockSetIsReactivateReason} />);
    expect(getByText('Description:')).toBeInTheDocument();
    expect(getByText('Equipment Error')).toBeInTheDocument();
    expect(getByText('Reason type:')).toBeInTheDocument();
    expect(getByText('Abort')).toBeInTheDocument();
  });
});

describe('ModalHeader', () => {
  const mockSetIsReactivateReason = jest.fn();

  it('renders correctly', () => {
    render(<ReactivateReason setIsReactivateReason={mockSetIsReactivateReason} />);
    expect(screen.getByText('Reactivate User Role')).toBeInTheDocument();
  });
});

describe('ModalBody', () => {
  it('renders correctly', () => {
    render(<ReactivateReason setIsReactivateReason={undefined} />);
    expect(screen.getByText('Do you confirm to Reactivate this Abort/Suspend Test Reason?')).toBeInTheDocument();
  });
});

describe('ModalFooter', () => {
  it('renders correctly', () => {
    render(<ReactivateReason setIsReactivateReason={undefined} />);
    expect(screen.getByText('Yes')).toBeInTheDocument();
  });
});

test("calls setIsReactivateReason with false when handleClose is called", () => {
  const setIsReactivateReason = jest.fn();
  const { getByTestId } = render(<ReactivateReason setIsReactivateReason={setIsReactivateReason} />);
  const closeButton = getByTestId("close-button");
  setIsReactivateReason()
  fireEvent.click(closeButton);
  expect(setIsReactivateReason).toHaveBeenCalledWith(false);
});


