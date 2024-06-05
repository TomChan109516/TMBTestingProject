import { render, screen, fireEvent } from "@testing-library/react";
import NewTestFormulae from "./NewTestFormulae";

describe("NewTestFormulae", () => {
  test("renders the component", () => {
    render(<NewTestFormulae showNewTestFormulae={true} closeNewTestFormulae={() => { }} />);

  });

  test("closes the modal when Cancel button is clicked", () => {
    const closeNewTestFormulae = jest.fn();
    render(<NewTestFormulae showNewTestFormulae={true} closeNewTestFormulae={closeNewTestFormulae} />);
    const cancelButton = screen.getByRole("button", { name: "Cancel" });
    fireEvent.click(cancelButton);
    expect(closeNewTestFormulae).toHaveBeenCalledWith(false);
  });


});