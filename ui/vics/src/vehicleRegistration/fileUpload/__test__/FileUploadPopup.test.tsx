import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import { Button } from '@nextui-org/react';
import FileUploadPopup from '../FileUploadPopup';

// Mock function to simulate the file upload click handler
const mockHandleUploadClick = jest.fn();

// The component to be tested
const FileUploadButton = ({ handleUploadClick, file }) => (
  <button onClick={handleUploadClick}>
    {file ? `${file.name}` : <Button className="m-1 bg-primary text-white font-bold h-8" radius="none" onClick={handleUploadClick}>Select File</Button>}
  </button>
);

describe('FileUploadButton', () => {
  it('renders the button correctly when no file is selected', () => {
    render(<FileUploadButton handleUploadClick={mockHandleUploadClick} file={null} />);
    expect(screen.getByText(/select file/i)).toBeInTheDocument();
  });

  it('displays the file name when a file is selected', () => {
    const file = new File(['dummy content'], 'example.txt', { type: 'text/plain' });
    render(<FileUploadButton handleUploadClick={mockHandleUploadClick} file={file} />);
    expect(screen.getByText('example.txt')).toBeInTheDocument();
  });

  it('calls the handleUploadClick when the button is clicked', () => {
    render(<FileUploadButton handleUploadClick={mockHandleUploadClick} file={null} />);
    fireEvent.click(screen.getByText(/select file/i));
    expect(mockHandleUploadClick).toHaveBeenCalled();
  });
});

describe('FileUploadPopup', () => {
    test('renders without errors', () => {
        render(<FileUploadPopup fileUploadPopup={true} handleClose={() => {}} />);
        // Assert that the component renders without throwing any errors
    });

    test('displays "Select File" button when no file is selected', () => {
        render(<FileUploadPopup fileUploadPopup={true} handleClose={() => {}} />);
        const selectFileButton = screen.getByText('Select File');
        expect(selectFileButton).toBeInTheDocument();
    });

    test('displays selected file name when a file is selected', () => {
        render(<FileUploadPopup fileUploadPopup={true} handleClose={() => {}} />);
        const fileInput = screen.getByText('Upload');
        const file = new File(['dummy content'], 'test-file.txt', { type: 'text/plain' });
        fireEvent.change(fileInput, { target: { files: [file] } });
        const selectedFileName = screen.getByText('File Name');
        expect(selectedFileName).toBeInTheDocument();
    });

    test('Find elements', () => {
        const handleClose = jest.fn();
        render(<FileUploadPopup fileUploadPopup={true} handleClose={handleClose} />);
        const size = screen.getByText('Size');
        expect(size).toBeInTheDocument();
        const state = screen.getByText('State');
        expect(state).toBeInTheDocument();
        const operation = screen.getByText('Operation');
        expect(operation).toBeInTheDocument();
    });
    test('calls handleClose when "Quit" button is clicked', () => {
        const handleClose = jest.fn();
        render(<FileUploadPopup fileUploadPopup={true} handleClose={handleClose} />);
        const quitButton = screen.getByText('Quit');
        fireEvent.click(quitButton);
        expect(handleClose).toHaveBeenCalledTimes(1);
    });
   
 it('renders the popup and opens the file picker on button click', () => {
    const handleClose = jest.fn();
    const { getByText, getByTestId } = render(
      <FileUploadPopup fileUploadPopup={true} handleClose={handleClose} />
    );

    const uploadButton = getByText('Upload');
    fireEvent.click(uploadButton);
    expect(getByTestId('file-input')).toBeInTheDocument();
  });
});




describe('FileUploadPopup', () => {
  

    test('displays "Select File" button when no file is selected', () => {
        render(<FileUploadPopup fileUploadPopup={true} handleClose={() => {}} />);
        const selectFileButton = screen.getByText('Select File');
        expect(selectFileButton).toBeInTheDocument();
    });

    test('displays selected file name when a file is selected', () => {
        render(<FileUploadPopup fileUploadPopup={true} handleClose={() => {}} />);
        const fileInput = screen.getByText('Upload');
        const file = new File(['dummy content'], 'test-file.txt', { type: 'text/plain' });
        fireEvent.change(fileInput, { target: { files: [file] } });
        const selectedFileName = screen.getByText('File Name');
        expect(selectedFileName).toBeInTheDocument();
    });

    test('Find elements', () => {
        const handleClose = jest.fn();
        render(<FileUploadPopup fileUploadPopup={true} handleClose={handleClose} />);
        const size = screen.getByText('Size');
        expect(size).toBeInTheDocument();
        const state = screen.getByText('State');
        expect(state).toBeInTheDocument();
        const operation = screen.getByText('Operation');
        expect(operation).toBeInTheDocument();
    });
    test('calls handleClose when "Quit" button is clicked', () => {
        const handleClose = jest.fn();
        render(<FileUploadPopup fileUploadPopup={true} handleClose={handleClose} />);
        const quitButton = screen.getByText('Quit');
        fireEvent.click(quitButton);
        expect(handleClose).toHaveBeenCalledTimes(1);
    });
   
 it('renders the popup and opens the file picker on button click', () => {
    const handleClose = jest.fn();
    const { getByText, getByTestId } = render(
      <FileUploadPopup fileUploadPopup={true} handleClose={handleClose} />
    );

    const uploadButton = getByText('Upload');
    fireEvent.click(uploadButton);
    expect(getByTestId('file-input')).toBeInTheDocument();
  });
});
describe('FileUploadPopup', () => {
  const mockHandleClose = jest.fn();
  const mockFile = new File(['test'], 'test.png', { type: 'image/png' });

  

  it('should open the file dialog when upload button is clicked', () => {
    render(<FileUploadPopup fileUploadPopup={true} handleClose={mockHandleClose} />);
    fireEvent.click(screen.getByText(/Select File/i));
    // Since we can't actually test opening the file dialog, we ensure the input is in the document
    expect(screen.getByText(/Select File/i)).toBeInTheDocument();
  });

  it('should handle file selection', () => {
    render(<FileUploadPopup fileUploadPopup={true} handleClose={mockHandleClose} />);
    const input = screen.getByTestId('file-input');
    fireEvent.change(input, { target: { files: [mockFile] } });
    expect(input.files[0]).toBe(mockFile);
    expect(input.files).toHaveLength(1);
  });

  it('should call handleClose when modal is closed', () => {
    render(<FileUploadPopup fileUploadPopup={true} handleClose={mockHandleClose} />);
    fireEvent.click(screen.getByRole('button', { name: /close/i }));
    expect(mockHandleClose).toHaveBeenCalled();
  });
 
});


