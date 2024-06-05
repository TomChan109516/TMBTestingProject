import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import EditTestReason from '../ExaminationReport/EditTestReason';

describe('EditTestReason', () => {
  const mockCloseEditTestReason = jest.fn();
  
  const mockSetEditData = jest.fn();
  const mockEditData = {
    Id: 'ID202306506',
    Description: 'Equipment Error',
    status: 'Abort',
  };

  it('renders without crashing', () => {
    render(<EditTestReason showEditTestReason={true} closeEditTestReason={mockCloseEditTestReason} EditData={mockEditData} />);
  });

  it('closes the modal when the cancel button is clicked', () => {
    const { getByText } = render(<EditTestReason showEditTestReason={true} closeEditTestReason={mockCloseEditTestReason} EditData={mockEditData} />);
    const cancelButton = getByText('Cancel');
    fireEvent.click(cancelButton);
    expect(mockCloseEditTestReason).toHaveBeenCalledWith(false);
  });

  it('updates the Id when the input is changed', () => {
    const { getByTestId } = render(<EditTestReason showEditTestReason={true} closeEditTestReason={mockCloseEditTestReason} EditData={mockEditData} setEditData={mockSetEditData} />);
    const idInput = getByTestId('Code');
    fireEvent.change(idInput, { target: { value: 'NewId' } });
    expect(mockSetEditData).toHaveBeenCalledWith({ ...mockEditData, Id: 'NewId' });
  });
 
  
    it('renders without crashing', () => {
      render(<EditTestReason showEditTestReason={true} closeEditTestReason={mockCloseEditTestReason} EditData={mockEditData} />);
    });
  
    it('closes the modal when handleClose is called', () => {
      const { getByTestId } = render(<EditTestReason showEditTestReason={true} closeEditTestReason={mockCloseEditTestReason} EditData={mockEditData} />);
      const closeButton = getByTestId('close-button'); // assuming you have data-testid="close-button" on your close button
      fireEvent.click(closeButton);
      expect(mockCloseEditTestReason).toHaveBeenCalledWith(false);
    });

  describe('EditTestReason', () => {
    const mockCloseEditTestReason = jest.fn();
    const mockEditData = {
      Id: 'ID202306506',
      Description: 'Equipment Error',
      status: 'Abort',
    };
  
  it('renders without crashing', () => {
    render(<EditTestReason showEditTestReason={true} closeEditTestReason={mockCloseEditTestReason} EditData={mockEditData} />);
  });
  it('renders the input fields correctly', () => {
    render(<EditTestReason showEditTestReason={true} closeEditTestReason={mockCloseEditTestReason} EditData={mockEditData} />);
    expect(screen.getByTestId('Code')).toBeInTheDocument();
    expect(screen.getByTestId('Description')).toBeInTheDocument();
  });

  it('closes the modal when handleClose is called', () => {
    const { getByTestId } = render(<EditTestReason showEditTestReason={true} closeEditTestReason={mockCloseEditTestReason} EditData={mockEditData} />);
    const closeButton = getByTestId('close-button'); // assuming you have data-testid="close-button" on your close button
    fireEvent.click(closeButton);
    expect(mockCloseEditTestReason).toHaveBeenCalledWith(false);
  });
}); 

describe('EditTestReason', () => {
  it('renders correctly', () => {
    const props = {
      showEditTestReason: true,
      EditData: { id: 1, name: 'Test Reason' },
      closeEditTestReason: jest.fn(),
    };
    render(<EditTestReason {...props} />);
    expect(screen.getByText('Edit Abort/ Suspend Test Reason')).toBeInTheDocument();
  });

  it('calls handleClose when close button is clicked', () => {
    const props = {
      showEditTestReason: true,
      EditData: { id: 1, name: 'Test Reason' },
      closeEditTestReason: jest.fn(),
    };
    render(<EditTestReason {...props} />);
    const closeButton = screen.getByRole('button', { name: 'Cancel' });
    fireEvent.click(closeButton);
    expect(props.closeEditTestReason).toHaveBeenCalledTimes(1);
  });

  it('renders EditData correctly', () => {
    const props = {
      showEditTestReason: true,
      EditData: { id: 1, name: 'Test Reason' },
      closeEditTestReason: jest.fn(),
    };
    render(<EditTestReason {...props} />);
    expect(screen.getByText('Description')).toBeInTheDocument();
    expect(screen.getByText('Test Type')).toBeInTheDocument();
  });
  
});});

const mockEditData = {
  Id: 'ID202306506',
  Description: 'Equipment Error',
  status: 'Abort',
};

const mockCloseEditTestReason = jest.fn(); // Declare the mockCloseEditTestReason function
it('renders without crashing', () => {
  render(<EditTestReason showEditTestReason={true} closeEditTestReason={mockCloseEditTestReason} EditData={mockEditData} />);
});

it('closes the modal when handleClose is called', () => {
  const { getByTestId } = render(<EditTestReason showEditTestReason={true} closeEditTestReason={mockCloseEditTestReason} EditData={mockEditData} />);
  const closeButton = getByTestId('close-button'); // assuming you have data-testid="close-button" on your close button
  fireEvent.click(closeButton);
  expect(mockCloseEditTestReason).toHaveBeenCalledWith(false);
});

describe('EditTestReason', () => {
  const mockCloseEditTestReason = jest.fn();
  const mockEditData = {
    Id: 'ID202306506',
    Description: 'Equipment Error',
    status: 'Abort',
  };

  it('renders without crashing', () => {
    render(<EditTestReason showEditTestReason={true} closeEditTestReason={mockCloseEditTestReason} EditData={mockEditData} />);
  });

  it('calls closeEditTestReason with false when handleClose is called', () => {
    const { getByTestId } = render(<EditTestReason showEditTestReason={true} closeEditTestReason={mockCloseEditTestReason} EditData={mockEditData} />);
    const closeButton = getByTestId('close-button');
    fireEvent.click(closeButton);
    expect(mockCloseEditTestReason).toHaveBeenCalledWith(false);
  });

  it('renders the input fields correctly', () => {
    const { getByTestId, getByLabelText } = render(<EditTestReason showEditTestReason={true} closeEditTestReason={mockCloseEditTestReason} EditData={mockEditData} />);
    expect(getByTestId('Code')).toBeInTheDocument();
    expect(getByTestId('Description')).toBeInTheDocument();
  });

  it('updates the Id when the input is changed', () => {
    const mockSetEditData = jest.fn();
    const { getByTestId } = render(<EditTestReason showEditTestReason={true} closeEditTestReason={mockCloseEditTestReason} EditData={mockEditData} setEditData={mockSetEditData} />);
    const idInput = getByTestId('Code');
    fireEvent.change(idInput, { target: { value: 'NewId' } });
    expect(mockSetEditData).toHaveBeenCalledWith({ ...mockEditData, Id: 'NewId' });
  });
});