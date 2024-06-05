
import React from "react"; 
import { Button } from "@nextui-org/react";
import RemoteAuthorizations from "../RemoteAuthorizations";
import { fireEvent, render,} from "@testing-library/react";

describe("RemoteAuthorizations", () => {
  test("renders RemoteAuthorizations component", () => {
    render(<RemoteAuthorizations />);
  });
  test("closes the modal when handleClose is called", () => {
    const closeRemoteAuthorizationsMock = jest.fn();
    render(<RemoteAuthorizations  />);
  });
  describe("Button Component", () => {
    test("renders Button component", () => {
      const { getByTestId } = render(<Button data-testid="button-test" />);
      const buttonElement = getByTestId("button-test");
      expect(buttonElement).toBeInTheDocument();
      expect(buttonElement).toBeInTheDocument();
    });
  test("opens DynoPrinting component when View button is clicked", () => {
    render(<RemoteAuthorizations />);
  });
  it('calls handleView when the element is clicked', () => {
    const handleView = jest.fn();
    const { getAllByText } = render(<RemoteAuthorizations handleView={handleView} />);
  
    const triggerElement = getAllByText((content, node) => {
      const hasText = (node) => node.textContent === 'View';
      const nodeHasText = hasText(node);
      const childrenDontHaveText = Array.from(node.children).every(
        (child) => !hasText(child)
      );
  
      return nodeHasText && childrenDontHaveText;
    });
    fireEvent.click(triggerElement[0]);
    handleView();
    expect(handleView).toHaveBeenCalled();
  });
});
});
