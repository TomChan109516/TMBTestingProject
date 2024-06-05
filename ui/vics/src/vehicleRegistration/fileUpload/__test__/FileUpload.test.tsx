import { render, screen, fireEvent } from "@testing-library/react";
import FileUpload from "../FileUpload";

describe("FileUpload", () => {
    test("renders select file button", () => {
        render(<FileUpload />);
        const selectFileButton = screen.getByText("Select File");
        expect(selectFileButton).toBeInTheDocument();
    });

    test("opens file upload popup on button click", () => {
        render(<FileUpload />);
        const selectFileButton = screen.getByText("Select File");
        fireEvent.click(selectFileButton);
        const fileUploadPopup = screen.getByText("ID");
        expect(fileUploadPopup).toBeInTheDocument();
    });

    test("closes file upload popup on close button click", () => {
        render(<FileUpload />);
        const fileUploadPopup = screen.getByText("File Name");
        expect(fileUploadPopup).toBeInTheDocument();
    });
});
